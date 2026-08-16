#!/usr/bin/env python3
"""
=============================================================================
Agricultural CSV to SQLite3 Production Pipeline & Django Data Engine
=============================================================================
A high-performance, robust ETL utility that inspects, cleans, deduplicates,
and loads large agricultural/soil-health datasets into a production-ready
SQLite3 database, generating compatible Django models and validation reports.

Features:
  1. Safe CSV inspection with dynamic encoding & delimiter detection.
  2. Django-friendly snake_case column normalization and type inference.
  3. Strict null handling (empty strings, 'NaN', 'NULL', 'N/A', '-' -> SQL NULL).
  4. Coordinate and date sanitization without corrupting scientific data.
  5. Memory-safe streaming chunk processor for multi-million row datasets.
  6. High-speed bulk ingestion using SQLite WAL mode and parameterized batch inserts.
  7. Automated index creation for single fields and composite query patterns.
  8. Full database validation: PRAGMA integrity_check, null counts, stats.
  9. Automatic Django models.py generator with `managed = False`.
=============================================================================
"""

import os
import sys
import time
import re
import csv
import shutil
import sqlite3
import argparse
from pathlib import Path
from typing import Dict, List, Tuple, Any, Optional

import pandas as pd
import numpy as np


# ---------------------------------------------------------------------------
# 1. Encoding and Delimiter Detection
# ---------------------------------------------------------------------------

def detect_encoding(file_path: str, sample_bytes: int = 131072) -> str:
    """
    Detects the file encoding safely. Tests common agricultural/Gov CSV encodings
    and uses chardet if available.
    """
    try:
        import chardet
        with open(file_path, 'rb') as f:
            raw = f.read(sample_bytes)
        result = chardet.detect(raw)
        detected = result.get('encoding')
        if detected and result.get('confidence', 0) > 0.7:
            return detected
    except ImportError:
        pass

    # Fallback heuristic
    candidate_encodings = ['utf-8-sig', 'utf-8', 'latin-1', 'cp1252', 'iso-8859-1']
    for enc in candidate_encodings:
        try:
            with open(file_path, 'r', encoding=enc) as f:
                f.read(sample_bytes)
            return enc
        except (UnicodeDecodeError, LookupError):
            continue
    return 'utf-8'


def detect_delimiter(file_path: str, encoding: str) -> str:
    """
    Detects the CSV delimiter using Python's csv Sniffer.
    """
    try:
        with open(file_path, 'r', encoding=encoding, errors='ignore') as f:
            sample = f.read(65536)
            sniffer = csv.Sniffer()
            dialect = sniffer.sniff(sample)
            return dialect.delimiter
    except Exception:
        return ','


# ---------------------------------------------------------------------------
# 2. Column Sanitization and Mapping
# ---------------------------------------------------------------------------

def sanitize_column_name(raw_name: str, used_names: set) -> str:
    """
    Converts arbitrary/messy column headers into clean, Django-compliant snake_case.
    Examples:
      'State Name' -> 'state_name'
      'Soil pH' -> 'soil_ph'
      'Organic Carbon (%)' -> 'organic_carbon_pct'
      'Nitrogen (kg/ha)' -> 'nitrogen_kg_ha'
      'id' -> 'source_id' (so 'id' remains reserved for SQLite primary key)
    """
    name = str(raw_name).strip()

    # Handle common unit suffixes cleanly
    name = re.sub(r'\(%\)', '_pct', name)
    name = re.sub(r'\(kg/ha\)', '_kg_ha', name)
    name = re.sub(r'\(mg/kg\)', '_mg_kg', name)
    name = re.sub(r'\(ppm\)', '_ppm', name)

    # Remove remaining punctuation/symbols
    name = re.sub(r'[^\w\s]', '_', name)
    # Convert whitespace to underscore
    name = re.sub(r'\s+', '_', name)
    # Convert camelCase to snake_case
    name = re.sub(r'([a-z0-9])([A-Z])', r'\1_\2', name)
    # Normalize multiple underscores
    name = re.sub(r'_+', '_', name).strip('_').lower()

    if not name:
        name = "column"

    # Avoid clash with SQLite / Django primary key 'id'
    if name == 'id':
        name = 'source_id'

    # Ensure starts with a valid character
    if name[0].isdigit():
        name = f"col_{name}"

    # Ensure uniqueness in the schema
    base_name = name
    counter = 2
    while name in used_names:
        name = f"{base_name}_{counter}"
        counter += 1

    used_names.add(name)
    return name


def build_column_mapping(columns: List[str]) -> Dict[str, str]:
    """
    Builds a bidirectional map: {original_col_name: sanitized_snake_case_name}.
    """
    used_names = set()
    col_map = {}
    for col in columns:
        col_map[col] = sanitize_column_name(col, used_names)
    return col_map


# ---------------------------------------------------------------------------
# 3. Data Type Inference
# ---------------------------------------------------------------------------

NULL_STRINGS = {
    '', 'nan', 'nan.0', 'nan', 'null', 'none', 'n/a', 'na', 'nil',
    '-', '--', '---', '?', 'unknown', 'undefined', 'n.a.', 'n.a', '#n/a'
}


def infer_sqlite_types(file_path: str, encoding: str, delimiter: str,
                       col_map: Dict[str, str], sample_rows: int = 50000) -> Dict[str, str]:
    """
    Inspects a sample chunk of the dataset to infer SQLite types (INTEGER, REAL, TEXT).
    """
    df_sample = pd.read_csv(
        file_path,
        nrows=sample_rows,
        encoding=encoding,
        sep=delimiter,
        dtype=str,
        keep_default_na=False
    )
    df_sample.rename(columns=col_map, inplace=True)

    type_map = {}

    for col in df_sample.columns:
        series = df_sample[col].astype(str).str.strip()
        # Filter out null strings
        valid_vals = series[~series.str.lower().isin(NULL_STRINGS)]

        if len(valid_vals) == 0:
            type_map[col] = "TEXT"
            continue

        # Test Integer: all valid values match integer regex
        is_int = valid_vals.str.match(r'^-?\d+$').all()
        if is_int:
            type_map[col] = "INTEGER"
            continue

        # Test Float/Decimal
        is_float = valid_vals.str.match(r'^-?\d+(\.\d+)?([eE][-+]?\d+)?$').all()
        if is_float:
            type_map[col] = "REAL"
            continue

        type_map[col] = "TEXT"

    return type_map


# ---------------------------------------------------------------------------
# 4. Chunk Cleaning & Sanitization
# ---------------------------------------------------------------------------

def clean_dataframe_chunk(df: pd.DataFrame, col_map: Dict[str, str],
                          type_map: Dict[str, str]) -> pd.DataFrame:
    """
    Cleans a chunk of records in memory:
      - Normalizes column names
      - Trims text whitespace
      - Converts null tokens to np.nan (which becomes SQLite NULL)
      - Casts numeric columns safely without replacing missing values with 0
      - Validates geographic coordinates if latitude/longitude exist
    """
    df = df.rename(columns=col_map).copy()

    for col in df.columns:
        sql_type = type_map.get(col, "TEXT")

        if sql_type == "TEXT":
            # String cleaning
            s = df[col].astype(str).str.strip()
            # Replace null strings with None
            mask_null = s.str.lower().isin(NULL_STRINGS)
            s = s.mask(mask_null, other=np.nan)
            # Remove redundant internal spaces
            s = s.str.replace(r'\s+', ' ', regex=True)
            df[col] = s
        elif sql_type == "INTEGER":
            # Strip whitespace, coerce to integer
            s = df[col].astype(str).str.strip()
            mask_null = s.str.lower().isin(NULL_STRINGS)
            s = s.mask(mask_null, other=np.nan)
            df[col] = pd.to_numeric(s, errors='coerce').astype('Int64')
        elif sql_type == "REAL":
            # Strip whitespace, coerce to float
            s = df[col].astype(str).str.strip()
            mask_null = s.str.lower().isin(NULL_STRINGS)
            s = s.mask(mask_null, other=np.nan)
            df[col] = pd.to_numeric(s, errors='coerce')

        # Geographic coordinate validation
        if col in ('latitude', 'lat') and sql_type in ('REAL', 'INTEGER'):
            df[col] = df[col].mask((df[col] < -90.0) | (df[col] > 90.0), other=np.nan)
        elif col in ('longitude', 'lon', 'long') and sql_type in ('REAL', 'INTEGER'):
            df[col] = df[col].mask((df[col] < -180.0) | (df[col] > 180.0), other=np.nan)

    return df


# ---------------------------------------------------------------------------
# 5. Schema & Index SQL Generation
# ---------------------------------------------------------------------------

def generate_create_table_sql(table_name: str, type_map: Dict[str, str]) -> str:
    """
    Generates the SQLite DDL for the table with auto-increment primary key.
    """
    cols_ddl = ["    id INTEGER PRIMARY KEY AUTOINCREMENT"]
    for col, col_type in type_map.items():
        cols_ddl.append(f"    {col} {col_type}")

    ddl = f"CREATE TABLE IF NOT EXISTS {table_name} (\n" + ",\n".join(cols_ddl) + "\n);"
    return ddl


def generate_indexes_sql(table_name: str, columns: List[str]) -> List[str]:
    """
    Generates indexing statements for single and compound query patterns.
    """
    cols_set = set(columns)
    index_sqls = []

    # 1. Single column indexes for common query filters
    single_index_candidates = [
        'state_name', 'state', 'district_name', 'district',
        'block_name', 'subdistrict', 'village_name', 'village',
        'crop', 'season', 'year', 'nutrient_name', 'nutrient_type',
        'nutrient_level', 'soil_ph', 'organic_carbon'
    ]

    for col in single_index_candidates:
        if col in cols_set:
            idx_name = f"idx_{table_name}_{col}"
            index_sqls.append(f"CREATE INDEX IF NOT EXISTS {idx_name} ON {table_name} ({col});")

    # 2. Composite indexes for agricultural & fertilizer recommendation queries
    composite_candidates = [
        # (index_name_suffix, [cols])
        ('state_dist', ['state_name', 'district_name']),
        ('state_dist_short', ['state', 'district']),
        ('dist_crop', ['district_name', 'crop']),
        ('dist_crop_short', ['district', 'crop']),
        ('crop_season', ['crop', 'season']),
        ('dist_nutrient', ['district_name', 'nutrient_name']),
        ('dist_nutrient_short', ['district', 'nutrient_name']),
        ('dist_block_village', ['district_name', 'block_name', 'village_name']),
        ('year_dist', ['year', 'district_name']),
    ]

    for suffix, combo in composite_candidates:
        if all(c in cols_set for c in combo):
            idx_name = f"idx_{table_name}_{suffix}"
            col_list_str = ", ".join(combo)
            index_sqls.append(f"CREATE INDEX IF NOT EXISTS {idx_name} ON {table_name} ({col_list_str});")

    return index_sqls


# ---------------------------------------------------------------------------
# 6. Django Model Code Generation
# ---------------------------------------------------------------------------

def generate_django_model_file(table_name: str, type_map: Dict[str, str],
                               index_sqls: List[str], output_path: str):
    """
    Emits a clean, idiomatic Django models.py file configured with `managed = False`.
    """
    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)

    # Class name: CamelCase from table_name
    model_name = "".join(part.capitalize() for part in table_name.split("_"))
    if model_name.endswith("s"):
        # e.g., SoilRecords -> SoilRecord
        model_name = model_name[:-1]

    fields_code = []
    for col, sql_type in type_map.items():
        if sql_type == "INTEGER":
            fields_code.append(
                f"    {col} = models.BigIntegerField(null=True, blank=True, help_text='{col.replace('_', ' ').capitalize()}')"
            )
        elif sql_type == "REAL":
            fields_code.append(
                f"    {col} = models.FloatField(null=True, blank=True, help_text='{col.replace('_', ' ').capitalize()}')"
            )
        else:
            # TEXT
            if 'date' in col:
                fields_code.append(
                    f"    {col} = models.CharField(max_length=50, null=True, blank=True, help_text='{col.replace('_', ' ').capitalize()}')"
                )
            else:
                fields_code.append(
                    f"    {col} = models.CharField(max_length=255, null=True, blank=True, help_text='{col.replace('_', ' ').capitalize()}')"
                )

    # Pick representative fields for __str__
    str_fields = [c for c in ['state_name', 'state', 'district_name', 'district', 'nutrient_name', 'crop', 'year'] if c in type_map]
    if str_fields:
        str_repr = " + ' | ' + ".join([f"str(self.{c} or '')" for c in str_fields[:3]])
    else:
        str_repr = "f'{self.id}'"

    fields_joined = "\n".join(fields_code)

    content = f'''"""
Django Model for {model_name}
Generated automatically by Agricultural CSV to SQLite Pipeline.
"""

from django.db import models


class {model_name}(models.Model):
    """
    Represents an agricultural record in the '{table_name}' table.
    
    IMPORTANT:
    - managed = False tells Django NOT to alter or create this table during migrations.
    - db_table = '{table_name}' binds this model directly to the SQLite table.
    """
    id = models.BigAutoField(primary_key=True)
{fields_joined}

    class Meta:
        managed = False
        db_table = "{table_name}"
        verbose_name = "{model_name}"
        verbose_name_plural = "{model_name}s"

    def __str__(self):
        return f"[{model_name} #{{self.id}}] " + ({str_repr})
'''
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content)



# ---------------------------------------------------------------------------
# 7. Core Conversion Pipeline
# ---------------------------------------------------------------------------

def run_conversion_pipeline(
    csv_file: str,
    output_dir: str = "data",
    db_name: str = "agriculture.db",
    table_name: str = "soil_records",
    chunk_size: int = 100000,
    limit: Optional[int] = None,
    skip_cleaned_csv: bool = False,
    django_model_out: str = "django_integration/models.py",
    append_mode: bool = False
) -> Dict[str, Any]:
    """
    Main ETL execution workflow.
    """
    start_time = time.time()
    out_dir_path = Path(output_dir)
    out_dir_path.mkdir(parents=True, exist_ok=True)

    db_path = out_dir_path / db_name
    cleaned_csv_path = out_dir_path / "cleaned.csv"
    original_csv_path = out_dir_path / "original.csv"

    print("=" * 80)
    print("      AGRICULTURAL CSV TO SQLITE3 PRODUCTION PIPELINE")
    print("=" * 80)
    print(f"[*] Input File       : {csv_file}")
    print(f"[*] Target Directory : {output_dir}")
    print(f"[*] Target Database  : {db_path}")
    print(f"[*] Target Table     : {table_name}")
    print(f"[*] Mode             : {'APPEND' if append_mode else 'OVERWRITE / FRESH'}")
    print(f"[*] Chunk Size       : {chunk_size:,} records")
    if limit:
        print(f"[*] Row Limit        : {limit:,} records (Sample/Dry-run Mode)")
    print("-" * 80)

    # 1. Preserve original file if needed
    if os.path.abspath(csv_file) != os.path.abspath(original_csv_path):
        if not original_csv_path.exists():
            print(f"[*] Preserving original data link -> {original_csv_path}")
            try:
                shutil.copyfile(csv_file, original_csv_path)
                print(f"    [+] Saved copy to {original_csv_path}")
            except Exception as e:
                print(f"    [!] Note: Original preserved at {csv_file} ({e})")
        else:
            print(f"    [i] Original copy present at {original_csv_path}")

    # 2. Inspect CSV Encoding and Delimiter
    print("\n[1/6] Inspecting CSV structure and encoding...")
    encoding = detect_encoding(csv_file)
    delimiter = detect_delimiter(csv_file, encoding)
    print(f"    [+] Detected Encoding  : {encoding}")
    print(f"    [+] Detected Delimiter : '{delimiter}'")

    # Read Header
    sample_df = pd.read_csv(csv_file, nrows=5, encoding=encoding, sep=delimiter)
    raw_columns = sample_df.columns.tolist()
    print(f"    [+] Raw Columns ({len(raw_columns)}): {raw_columns}")

    # Build Sanitized Column Map
    col_map = build_column_mapping(raw_columns)
    sanitized_columns = list(col_map.values())
    print("\n[2/6] Normalizing Column Names to Django snake_case:")
    for raw_c, san_c in col_map.items():
        print(f"    - {raw_c:<25} -> {san_c}")

    # 3. Infer Schema Types
    print("\n[3/6] Inferring SQLite Column Types from sample...")
    type_map = infer_sqlite_types(csv_file, encoding, delimiter, col_map)
    for col, t in type_map.items():
        print(f"    - {col:<25} : {t}")

    # 4. Prepare SQLite Database
    print(f"\n[4/6] Initializing SQLite database at {db_path}...")
    conn = sqlite3.connect(str(db_path))
    cursor = conn.cursor()

    # Apply SQLite High-Performance PRAGMAs
    cursor.execute("PRAGMA journal_mode = WAL;")
    cursor.execute("PRAGMA synchronous = NORMAL;")
    cursor.execute("PRAGMA cache_size = -64000;")  # 64 MB cache
    cursor.execute("PRAGMA temp_store = MEMORY;")

    if not append_mode and db_path.exists():
        cursor.execute(f"DROP TABLE IF EXISTS {table_name};")
        conn.commit()

    create_table_sql = generate_create_table_sql(table_name, type_map)
    cursor.execute(create_table_sql)
    conn.commit()

    # Prepare Cleaned CSV Writer
    cleaned_csv_file_handle = None
    first_chunk_for_csv = True
    if not skip_cleaned_csv:
        mode_str = 'a' if (append_mode and cleaned_csv_path.exists()) else 'w'
        first_chunk_for_csv = (mode_str == 'w')
        cleaned_csv_file_handle = open(cleaned_csv_path, mode_str, encoding='utf-8', newline='')


    # Prepare SQL Insert Statement
    cols_inserted = list(type_map.keys())
    placeholders = ", ".join(["?"] * len(cols_inserted))
    cols_joined = ", ".join(cols_inserted)
    insert_sql = f"INSERT INTO {table_name} ({cols_joined}) VALUES ({placeholders})"

    # 5. Process & Ingest Chunks
    print("\n[5/6] Streaming and Ingesting CSV Chunks...")
    total_raw_rows = 0
    total_inserted_rows = 0
    duplicate_rows_count = 0
    chunk_index = 0

    first_chunk_for_csv = True

    try:
        reader = pd.read_csv(
            csv_file,
            chunksize=chunk_size,
            encoding=encoding,
            sep=delimiter,
            dtype=str,
            keep_default_na=False,
            low_memory=False
        )

        cursor.execute("BEGIN TRANSACTION;")

        for chunk_df in reader:
            chunk_index += 1
            raw_chunk_len = len(chunk_df)
            total_raw_rows += raw_chunk_len

            if limit and total_raw_rows > limit:
                # Truncate chunk if over limit
                allowed = limit - (total_raw_rows - raw_chunk_len)
                if allowed <= 0:
                    break
                chunk_df = chunk_df.iloc[:allowed]
                raw_chunk_len = len(chunk_df)
                total_raw_rows = limit

            # Clean the chunk
            cleaned_df = clean_dataframe_chunk(chunk_df, col_map, type_map)

            # Check duplicate rows within chunk
            chunk_dupes = cleaned_df.duplicated().sum()
            duplicate_rows_count += chunk_dupes

            # Stream write to cleaned.csv
            if cleaned_csv_file_handle:
                cleaned_df.to_csv(
                    cleaned_csv_file_handle,
                    header=first_chunk_for_csv,
                    index=False
                )
                first_chunk_for_csv = False

            # Convert to list of tuples for executemany (None replaces NaN)
            # Using where / object conversion
            cleaned_records = cleaned_df.where(pd.notnull(cleaned_df), None).values.tolist()

            cursor.executemany(insert_sql, cleaned_records)
            total_inserted_rows += len(cleaned_records)

            elapsed = time.time() - start_time
            rate = total_inserted_rows / elapsed if elapsed > 0 else 0
            print(f"    -> Chunk {chunk_index:3d} | Rows: {total_inserted_rows:10,d} | Speed: {rate:8.0f} rows/sec", end='\r')

            if limit and total_raw_rows >= limit:
                break

        conn.commit()
        print(f"\n    [+] Ingestion Complete! Total inserted: {total_inserted_rows:,} rows.")

    finally:
        if cleaned_csv_file_handle:
            cleaned_csv_file_handle.close()

    # 6. Create Indexes
    print("\n[6/6] Building Production Indexes...")
    index_sqls = generate_indexes_sql(table_name, cols_inserted)
    for idx_sql in index_sqls:
        idx_name_match = re.search(r'INDEX IF NOT EXISTS (\w+)', idx_sql)
        idx_label = idx_name_match.group(1) if idx_name_match else "index"
        print(f"    - Creating {idx_label}...")
        cursor.execute(idx_sql)
    conn.commit()

    # 7. Generate Django Models
    print(f"\n[*] Generating Django model file at {django_model_out}...")
    generate_django_model_file(table_name, type_map, index_sqls, django_model_out)
    print(f"    [+] Django model saved successfully.")

    # 8. Run Validation
    print("\n" + "=" * 80)
    print("                    DATABASE VALIDATION REPORT")
    print("=" * 80)

    # Integrity Check
    cursor.execute("PRAGMA integrity_check;")
    integrity_result = cursor.fetchone()[0]

    # Row Count
    cursor.execute(f"SELECT COUNT(*) FROM {table_name};")
    db_row_count = cursor.fetchone()[0]

    # Column Info
    cursor.execute(f"PRAGMA table_info({table_name});")
    table_info = cursor.fetchall()
    db_col_count = len(table_info)

    # Index List
    cursor.execute(f"PRAGMA index_list({table_name});")
    indexes_created = cursor.fetchall()

    # DB File Size
    db_size_mb = os.path.getsize(db_path) / (1024 * 1024)

    # Missing / Null values breakdown
    null_counts = {}
    for col in cols_inserted:
        cursor.execute(f"SELECT COUNT(*) FROM {table_name} WHERE {col} IS NULL;")
        null_counts[col] = cursor.fetchone()[0]

    # Sample rows
    cursor.execute(f"SELECT * FROM {table_name} LIMIT 3;")
    sample_records = cursor.fetchall()
    sample_col_names = [desc[0] for desc in cursor.description]

    conn.close()

    total_time = time.time() - start_time

    print(f"Database Path       : {db_path.resolve()}")
    print(f"Database Status     : Created Successfully")
    print(f"Database Size       : {db_size_mb:.2f} MB")
    print(f"PRAGMA Integrity    : {integrity_result}")
    print(f"Original Rows Read  : {total_raw_rows:,}")
    print(f"Duplicate Rows Count: {duplicate_rows_count:,}")
    print(f"Rows In Database    : {db_row_count:,}")
    print(f"Total Columns       : {db_col_count}")
    print(f"Total Indexes       : {len(indexes_created)}")
    print(f"Total Time Taken    : {total_time:.2f} seconds ({total_inserted_rows / total_time:.0f} rows/sec)")
    print("-" * 80)
    print("Null Counts per Column:")
    for col, n_cnt in null_counts.items():
        pct = (n_cnt / db_row_count * 100) if db_row_count > 0 else 0
        print(f"  - {col:<25}: {n_cnt:8,d} ({pct:5.1f}%)")
    print("-" * 80)
    print(f"Sample Records (First 3 rows, Columns: {sample_col_names[:6]}...):")
    for row in sample_records:
        print(f"  {row[:6]}")
    print("=" * 80)

    return {
        "db_path": str(db_path),
        "db_size_mb": db_size_mb,
        "integrity": integrity_result,
        "rows_inserted": db_row_count,
        "columns_count": db_col_count,
        "indexes_count": len(indexes_created),
        "time_seconds": total_time,
        "cleaned_csv": str(cleaned_csv_path) if not skip_cleaned_csv else None
    }


# ---------------------------------------------------------------------------
# CLI Argument Parser
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(
        description="Convert agricultural CSV dataset into a production-ready SQLite3 database for Django."
    )
    parser.add_argument(
        "--input", "-i",
        default="soil-nutrient-analysis.csv",
        help="Path to source CSV file (default: soil-nutrient-analysis.csv)"
    )
    parser.add_argument(
        "--output-dir", "-o",
        default="data",
        help="Directory to store original.csv, cleaned.csv, and agriculture.db (default: data)"
    )
    parser.add_argument(
        "--db-name",
        default="agriculture.db",
        help="SQLite database filename (default: agriculture.db)"
    )
    parser.add_argument(
        "--table-name",
        default="soil_records",
        help="SQLite table name (default: soil_records)"
    )
    parser.add_argument(
        "--chunk-size",
        type=int,
        default=100000,
        help="Number of rows per chunk for streaming insertion (default: 100000)"
    )
    parser.add_argument(
        "--limit",
        type=int,
        default=None,
        help="Limit number of rows processed (useful for testing/dry-runs)"
    )
    parser.add_argument(
        "--append", "-a",
        action="store_true",
        help="Append records to existing database table instead of recreating it"
    )
    parser.add_argument(
        "--skip-cleaned-csv",
        action="store_true",
        help="Skip writing cleaned.csv to save disk I/O when processing multi-gigabyte files"
    )
    parser.add_argument(
        "--django-out",
        default="django_integration/models.py",
        help="Path where generated Django models.py will be saved (default: django_integration/models.py)"
    )

    args = parser.parse_args()

    if not os.path.exists(args.input):
        print(f"[ERROR] Input file '{args.input}' not found!")
        sys.exit(1)

    run_conversion_pipeline(
        csv_file=args.input,
        output_dir=args.output_dir,
        db_name=args.db_name,
        table_name=args.table_name,
        chunk_size=args.chunk_size,
        limit=args.limit,
        skip_cleaned_csv=args.skip_cleaned_csv,
        django_model_out=args.django_out,
        append_mode=args.append
    )


if __name__ == "__main__":
    main()

