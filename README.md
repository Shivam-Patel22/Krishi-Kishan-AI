# Agricultural Soil Data Pipeline & Django Integration Engine

A high-performance, modular Python ETL utility designed to inspect, clean, deduplicate, and load large agricultural and soil-health CSV datasets (including multi-million row datasets) into an optimized, production-ready SQLite3 database (`agriculture.db`), pre-configured for direct use with the Django ORM.

---

## 📁 Repository & Directory Layout

```text
d:/PROJECTS/HACKATHON/
├── data/
│   ├── original.csv         # Untouched backup copy of the original dataset
│   ├── cleaned.csv          # Stream-cleaned dataset with normalized NULLs & values
│   └── agriculture.db       # Production-ready SQLite3 database with WAL mode & indexes
├── django_integration/
│   ├── __init__.py          # Django app package initializer
│   ├── models.py            # Generated Django model with managed = False
│   ├── settings_snippet.py  # DATABASES configuration snippet for settings.py
│   ├── standalone_django_test.py # Self-contained test suite executing Django ORM queries
│   └── test_queries.py      # Production query patterns & fertilizer prep helpers
├── csv_to_sqlite.py         # Main chunk-streaming conversion & ETL script
├── validate_db.py           # Standalone database health check & benchmark tool
├── requirements.txt         # Python package dependencies
└── README.md                # Full documentation & usage guide
```

---

## 🚀 Quickstart

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Start the Web Application
```bash
python manage.py runserver
```
Then open `http://127.0.0.1:8000` in your browser.

### 3. Run the Conversion Pipeline (Optional - Database is already built)
To re-process the raw dataset into `data/agriculture.db` with automated cleaning, indexing, and validation:
```bash
python csv_to_sqlite.py --input soil-nutrient-analysis.csv
```

### 3. Run a Dry Run / Sample (Optional)
To test on a subset (e.g., 50,000 rows):
```bash
python csv_to_sqlite.py --input soil-nutrient-analysis.csv --limit 50000
```

### 4. Validate the SQLite Database
```bash
python validate_db.py --db data/agriculture.db --table soil_records
```

### 5. Run Django ORM Verification Tests
```bash
python django_integration/standalone_django_test.py
```

---

## ⚙️ CLI Options & Capabilities

`csv_to_sqlite.py` offers a flexible command-line interface:

| Argument | Short | Default | Description |
|---|---|---|---|
| `--input` | `-i` | `soil-nutrient-analysis.csv` | Path to source CSV file |
| `--output-dir` | `-o` | `data` | Directory where database and cleaned CSV are saved |
| `--db-name` | | `agriculture.db` | Target SQLite database filename |
| `--table-name` | | `soil_records` | Target table name inside SQLite |
| `--chunk-size` | | `100000` | Chunk batch size for streaming multi-GB files |
| `--limit` | | `None` | Row limit for quick sampling and dry-runs |
| `--append` | `-a` | `False` | Append new batch records without recreating table |
| `--skip-cleaned-csv` | | `False` | Omit writing `cleaned.csv` to maximize insertion speed |
| `--django-out` | | `django_integration/models.py` | Destination path for generated Django model |

---

## 🗄️ Database Schema & Production Indexes

### Table: `soil_records`
| Column | SQLite Type | Django Model Field | Description |
|---|---|---|---|
| `id` | `INTEGER` | `BigAutoField(primary_key=True)` | Auto-incrementing primary key |
| `source_id` | `INTEGER` | `BigIntegerField(null=True)` | Original source ID from CSV |
| `year` | `TEXT` | `CharField(max_length=255)` | Agricultural cycle/year (e.g., `2024-25`) |
| `state_name` | `TEXT` | `CharField(max_length=255)` | State name |
| `state_code` | `INTEGER` | `BigIntegerField(null=True)` | Administrative state code |
| `district_name` | `TEXT` | `CharField(max_length=255)` | District name |
| `district_code` | `INTEGER` | `BigIntegerField(null=True)` | Administrative district code |
| `block_name` | `TEXT` | `CharField(max_length=255)` | Subdistrict / Taluka / Block name |
| `block_code` | `INTEGER` | `BigIntegerField(null=True)` | Block code |
| `village_name` | `TEXT` | `CharField(max_length=255)` | Village name |
| `village_code` | `INTEGER` | `BigIntegerField(null=True)` | Village code |
| `nutrient_type` | `TEXT` | `CharField(max_length=255)` | Nutrient category (`Macro`, `Micro`) |
| `nutrient_name` | `TEXT` | `CharField(max_length=255)` | Nutrient name (`Nitrogen`, `Phosphorus`, `Potassium`, `Soil Ph`, `Organic Carbon`, `Sulphur`, `Zinc`, etc.) |
| `nutrient_level`| `TEXT` | `CharField(max_length=255)` | Rating (`High`, `Medium`, `Low`, `Deficient`, `Sufficient`, `Acidic`, `Alkaline`, `Neutral`) |
| `value` | `INTEGER` | `BigIntegerField(null=True)` | Observation count / nutrient value |

### Production Indexes
The script automatically builds optimized single and compound B-tree indexes:
- **Single-Column**: `idx_soil_records_state_name`, `idx_soil_records_district_name`, `idx_soil_records_block_name`, `idx_soil_records_village_name`, `idx_soil_records_year`, `idx_soil_records_nutrient_name`, `idx_soil_records_nutrient_type`, `idx_soil_records_nutrient_level`.
- **Composite Indexes**:
  - `idx_soil_records_dist_nutrient` $\rightarrow$ `(district_name, nutrient_name)`
  - `idx_soil_records_state_dist` $\rightarrow$ `(state_name, district_name)`
  - `idx_soil_records_dist_block_village` $\rightarrow$ `(district_name, block_name, village_name)`
  - `idx_soil_records_year_dist` $\rightarrow$ `(year, district_name)`

---

## 🐍 Django Integration Guide

### 1. Database Configuration (`settings.py`)
Point Django to the generated SQLite database:
```python
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "data" / "agriculture.db",
        "OPTIONS": {
            "timeout": 20,  # 20 seconds busy timeout for WAL concurrency
        },
    }
}
```

### 2. Django Model (`models.py`)
```python
from django.db import models

class SoilRecord(models.Model):
    id = models.BigAutoField(primary_key=True)
    source_id = models.BigIntegerField(null=True, blank=True)
    year = models.CharField(max_length=255, null=True, blank=True)
    state_name = models.CharField(max_length=255, null=True, blank=True)
    state_code = models.BigIntegerField(null=True, blank=True)
    district_name = models.CharField(max_length=255, null=True, blank=True)
    district_code = models.BigIntegerField(null=True, blank=True)
    block_name = models.CharField(max_length=255, null=True, blank=True)
    block_code = models.BigIntegerField(null=True, blank=True)
    village_name = models.CharField(max_length=255, null=True, blank=True)
    village_code = models.BigIntegerField(null=True, blank=True)
    nutrient_type = models.CharField(max_length=255, null=True, blank=True)
    nutrient_name = models.CharField(max_length=255, null=True, blank=True)
    nutrient_level = models.CharField(max_length=255, null=True, blank=True)
    value = models.BigIntegerField(null=True, blank=True)

    class Meta:
        managed = False
        db_table = "soil_records"
        verbose_name = "SoilRecord"
        verbose_name_plural = "SoilRecords"

    def __str__(self):
        return f"[SoilRecord #{self.id}] {self.state_name} | {self.district_name} | {self.nutrient_name}"
```

### 3. Understanding `managed = False` vs `managed = True`

| Feature | `managed = False` (Required for Existing DBs) | `managed = True` (Default Django behavior) |
|---|---|---|
| **Table Creation** | Django will **NOT** create the table during `migrate` | Django executes `CREATE TABLE` during `migrate` |
| **Table Deletion** | Django will **NEVER** drop the table | Django may drop/recreate table |
| **Schema Changes** | Migrations are ignored; database schema is managed externally | Migrations automatically alter SQLite columns |
| **Data Safety** | Guarantees existing millions of records are **never** accidentally destroyed | Risk of data loss if migration fails or resets |
| **ORM Capability**| **Full support** for `.filter()`, `.annotate()`, `.aggregate()`, joins, and indexing | Full support |

> [!IMPORTANT]
> Because `agriculture.db` is populated and indexed by the Python ETL script, `managed = False` guarantees that running `python manage.py migrate` in Django will not attempt to rewrite or drop the `soil_records` table.

---

## 🔍 Example Django ORM Queries

### Query 1: Total Records & First Sample
```python
from django_integration.models import SoilRecord

print(f"Total records: {SoilRecord.objects.count():,}")

record = SoilRecord.objects.first()
print(record.state_name, record.district_name, record.nutrient_name, record.nutrient_level)
```

### Query 2: Location Filter (District & Village)
```python
chittoor_records = SoilRecord.objects.filter(
    district_name="Chittoor",
    village_name="Agaram"
)
print(f"Village samples: {chittoor_records.count()}")
```

### Query 3: Multi-Criteria Nutrient Profile for Fertilizer Engine
```python
from django.db.models import Avg, Count

profile = (
    SoilRecord.objects.filter(district_name="Chittoor")
    .values("nutrient_name", "nutrient_level")
    .annotate(samples=Count("id"), avg_value=Avg("value"))
    .order_by("nutrient_name")
)

for item in profile:
    print(f"{item['nutrient_name']:<20} | {item['nutrient_level']:<10} | Samples: {item['samples']}")
```

---

## ⚡ Handling Very Large CSV Files (10M+ Rows)

1. **Chunked Memory-Safe Streaming**:
   `pd.read_csv(..., chunksize=100000)` reads records in bounded batches, keeping RAM consumption under 250 MB even on 10+ GB files.
2. **SQLite Performance Optimizations**:
   - `PRAGMA journal_mode = WAL;` (Write-Ahead Logging allows high-speed writes and concurrent reads).
   - `PRAGMA synchronous = NORMAL;` (Reduces disk sync stalls).
   - `PRAGMA cache_size = -64000;` (Allocates 64 MB memory page cache).
   - `PRAGMA temp_store = MEMORY;`
3. **Transaction Batching**:
   Inserts are batched inside explicit `BEGIN TRANSACTION / COMMIT` blocks using `executemany()`.
4. **Post-Load Indexing**:
   Indexes are generated *after* bulk data ingestion, avoiding per-row B-tree re-indexing overhead.

---

## 🔄 Appending Future Batches / Incremental Updates

When new seasonal or regional CSV data arrives:
```bash
python csv_to_sqlite.py --input new_season_2025_data.csv --append
```
This will:
1. Validate column names against the existing schema.
2. Stream-clean the new dataset.
3. Batch insert new records into `soil_records` without dropping existing data.
4. Update `data/cleaned.csv` and report the new total row count and integrity status.
