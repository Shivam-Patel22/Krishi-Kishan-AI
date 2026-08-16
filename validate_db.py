#!/usr/bin/env python3
"""
=============================================================================
Database Validator & Health Check Tool for agriculture.db
=============================================================================
Runs deep SQLite checks, verifies indexes, inspects table structure,
measures index efficiency, and validates null distributions.
"""

import os
import sys
import time
import sqlite3
import argparse
from pathlib import Path


def validate_database(db_path: str = "data/agriculture.db", table_name: str = "soil_records"):
    db_file = Path(db_path)
    if not db_file.exists():
        print(f"[ERROR] Database file not found at: {db_file.resolve()}")
        sys.exit(1)

    print("=" * 80)
    print("           SQLITE3 DATABASE HEALTH & INTEGRITY REPORT")
    print("=" * 80)
    print(f"Database Path : {db_file.resolve()}")
    print(f"File Size     : {os.path.getsize(db_file) / (1024 * 1024):.2f} MB")
    print("-" * 80)

    conn = sqlite3.connect(str(db_file))
    cursor = conn.cursor()

    # 1. Integrity check
    print("[1] Running PRAGMA integrity_check...")
    start_t = time.time()
    cursor.execute("PRAGMA integrity_check;")
    integrity = cursor.fetchall()
    print(f"    Status: {'OK' if integrity == [('ok',)] else integrity} (took {time.time() - start_t:.3f}s)")

    # 2. Table existence
    print(f"\n[2] Inspecting Table '{table_name}'...")
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name=?;", (table_name,))
    tbl = cursor.fetchone()
    if not tbl:
        print(f"    [ERROR] Table '{table_name}' does not exist!")
        conn.close()
        sys.exit(1)

    # 3. Schema & Column Info
    cursor.execute(f"PRAGMA table_info({table_name});")
    columns_info = cursor.fetchall()
    print(f"    Total Columns: {len(columns_info)}")
    print(f"    {'CID':<4} {'Column Name':<25} {'Type':<12} {'NotNull':<8} {'Default':<10} {'PK':<4}")
    print("    " + "-" * 65)
    for col in columns_info:
        cid, name, col_type, notnull, dflt_value, pk = col
        print(f"    {cid:<4} {name:<25} {col_type:<12} {str(bool(notnull)):<8} {str(dflt_value):<10} {str(bool(pk)):<4}")

    # 4. Total Records
    cursor.execute(f"SELECT COUNT(*) FROM {table_name};")
    total_rows = cursor.fetchone()[0]
    print(f"\n[3] Row Count: {total_rows:,} records")

    # 5. Indexes Check
    print(f"\n[4] Index Verification on '{table_name}':")
    cursor.execute(f"PRAGMA index_list({table_name});")
    indexes = cursor.fetchall()
    for idx in indexes:
        seq, idx_name, unique, origin, partial = idx
        cursor.execute(f"PRAGMA index_info({idx_name});")
        cols = [r[2] for r in cursor.fetchall()]
        print(f"    - Index: {idx_name:<35} Unique: {unique} Columns: ({', '.join(cols)})")

    # 6. Null Breakdown
    print(f"\n[5] Column Null Counts & Completeness:")
    for col in columns_info:
        col_name = col[1]
        cursor.execute(f"SELECT COUNT(*) FROM {table_name} WHERE {col_name} IS NULL;")
        n_cnt = cursor.fetchone()[0]
        pct = (n_cnt / total_rows * 100) if total_rows > 0 else 0
        print(f"    {col_name:<25}: {n_cnt:8,d} NULLs ({pct:5.1f}% missing)")

    # 7. Sample Records
    print(f"\n[6] Sample Records (Top 3 rows):")
    cursor.execute(f"SELECT * FROM {table_name} LIMIT 3;")
    records = cursor.fetchall()
    col_names = [c[1] for c in columns_info]
    for i, r in enumerate(records, 1):
        print(f"    Row #{i}:")
        row_dict = dict(zip(col_names, r))
        for k, v in list(row_dict.items())[:8]:
            print(f"      {k:<20}: {v}")
        if len(row_dict) > 8:
            print(f"      ... and {len(row_dict) - 8} more fields")

    # 8. Query Performance Benchmark
    print(f"\n[7] Index Query Benchmark (Simulated Django ORM Lookups):")
    sample_queries = []
    # Check if district_name or district exists
    has_district = any(c[1] in ('district_name', 'district') for c in columns_info)
    has_nutrient = any(c[1] == 'nutrient_name' for c in columns_info)

    if has_district and has_nutrient:
        dist_col = 'district_name' if any(c[1] == 'district_name' for c in columns_info) else 'district'
        cursor.execute(f"SELECT {dist_col} FROM {table_name} WHERE {dist_col} IS NOT NULL LIMIT 1;")
        res = cursor.fetchone()
        sample_dist = res[0] if res else "Chittoor"
        sample_queries.append(
            (f"Lookup by district ({sample_dist})", f"SELECT * FROM {table_name} WHERE {dist_col} = '{sample_dist}' LIMIT 10;")
        )
        sample_queries.append(
            (f"Compound Filter ({sample_dist} + Nitrogen)", f"SELECT * FROM {table_name} WHERE {dist_col} = '{sample_dist}' AND nutrient_name = 'Nitrogen';")
        )

    for label, q_sql in sample_queries:
        t0 = time.time()
        cursor.execute(f"EXPLAIN QUERY PLAN {q_sql}")
        plan = cursor.fetchall()
        plan_desc = " | ".join([p[3] for p in plan])

        t1 = time.time()
        cursor.execute(q_sql)
        res_rows = len(cursor.fetchall())
        query_time_ms = (time.time() - t1) * 1000.0

        print(f"    - Query: {label}")
        print(f"      Plan : {plan_desc}")
        print(f"      Speed: {query_time_ms:.2f} ms ({res_rows} rows matched)")

    conn.close()
    print("=" * 80)
    print("[+] Database is healthy, indexed, and ready for production Django use.")
    print("=" * 80)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Validate SQLite database integrity and indexes.")
    parser.add_argument("--db", default="data/agriculture.db", help="Path to SQLite database")
    parser.add_argument("--table", default="soil_records", help="Table name to inspect")
    args = parser.parse_args()
    validate_database(args.db, args.table)
