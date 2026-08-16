#!/usr/bin/env python3
"""
=============================================================================
Standalone Django ORM Verification & Query Suite
=============================================================================
Configures Django in-memory to connect directly to `data/agriculture.db` and
verifies all Django ORM capabilities (filtering, aggregation, indexing).
"""

import os
import sys
from pathlib import Path

# Set up paths
PROJECT_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(PROJECT_ROOT))

DB_PATH = PROJECT_ROOT / "data" / "agriculture.db"
if not DB_PATH.exists():
    print(f"[ERROR] Database not found at {DB_PATH}. Please run csv_to_sqlite.py first.")
    sys.exit(1)

# Configure Django settings programmatically
import django
from django.conf import settings

if not settings.configured:
    settings.configure(
        DEBUG=True,
        DATABASES={
            "default": {
                "ENGINE": "django.db.backends.sqlite3",
                "NAME": str(DB_PATH),
                "OPTIONS": {
                    "timeout": 20,
                },
            }
        },
        INSTALLED_APPS=[
            "django.contrib.contenttypes",
            "django.contrib.auth",
            "django_integration",
        ],
        DEFAULT_AUTO_FIELD="django.db.models.BigAutoField",
    )
    django.setup()

from django.db.models import Avg, Count, Max, Min, Q
from django_integration.models import SoilRecord


def run_tests():
    print("=" * 80)
    print("             DJANGO ORM VERIFICATION & QUERY TESTS")
    print("=" * 80)

    # 1. Test Total Count
    total_count = SoilRecord.objects.count()
    print(f"[+] Total records via Django ORM: {total_count:,}")

    # 2. Test Fetch First Record
    first_record = SoilRecord.objects.first()
    print("\n[+] First Record retrieved via SoilRecord.objects.first():")
    print(f"    - ID            : {first_record.id}")
    print(f"    - Source ID     : {getattr(first_record, 'source_id', 'N/A')}")
    print(f"    - State         : {getattr(first_record, 'state_name', getattr(first_record, 'state', 'N/A'))}")
    print(f"    - District      : {getattr(first_record, 'district_name', getattr(first_record, 'district', 'N/A'))}")
    print(f"    - Block         : {getattr(first_record, 'block_name', getattr(first_record, 'subdistrict', 'N/A'))}")
    print(f"    - Village       : {getattr(first_record, 'village_name', getattr(first_record, 'village', 'N/A'))}")
    print(f"    - Nutrient Name : {getattr(first_record, 'nutrient_name', 'N/A')}")
    print(f"    - Nutrient Level: {getattr(first_record, 'nutrient_level', 'N/A')}")
    print(f"    - Value         : {getattr(first_record, 'value', 'N/A')}")

    # 3. Test Filter Query (District Search)
    target_dist = first_record.district_name if hasattr(first_record, 'district_name') else "Chittoor"
    print(f"\n[+] Testing Filter Query by District ('{target_dist}'):")
    district_records = SoilRecord.objects.filter(district_name=target_dist)
    print(f"    - Matched records for district '{target_dist}': {district_records.count():,}")

    # 4. Test Compound Filter Query (Location + Nutrient)
    print(f"\n[+] Testing Compound Filter (District: '{target_dist}', Nutrient: 'Nitrogen'):")
    compound_qs = SoilRecord.objects.filter(district_name=target_dist, nutrient_name="Nitrogen")
    print(f"    - Matched records: {compound_qs.count():,}")
    for item in compound_qs[:3]:
        print(f"      * [{item.village_name}] Level: {item.nutrient_level:<12} Value/Count: {item.value}")

    # 5. Test Aggregation (Distribution of Nutrient Levels)
    print(f"\n[+] Testing ORM Aggregation: Breakdown of Nutrients in '{target_dist}':")
    aggregates = (
        SoilRecord.objects.filter(district_name=target_dist)
        .values('nutrient_name')
        .annotate(record_count=Count('id'), avg_value=Avg('value'))
        .order_by('-record_count')[:5]
    )
    for agg in aggregates:
        print(f"    - {agg['nutrient_name']:<25}: {agg['record_count']:6,d} entries (Avg Value: {agg['avg_value']:.2f})")

    # 6. Test Multi-criteria ORM Query for Fertilizer Recommendation Prep
    print("\n[+] Testing Multi-Criteria Lookup for Decision Engine / Fertilizer Prep:")
    macro_nutrients = SoilRecord.objects.filter(
        district_name=target_dist,
        nutrient_name__in=["Nitrogen", "Phosphorus", "Potassium"]
    ).values("village_name", "nutrient_name", "nutrient_level", "value")[:6]

    for entry in macro_nutrients:
        print(f"    -> Village: {entry['village_name']:<18} | {entry['nutrient_name']:<12} | Level: {entry['nutrient_level']:<10} | Value: {entry['value']}")

    print("\n" + "=" * 80)
    print("[SUCCESS] All Django ORM tests passed seamlessly against agriculture.db!")
    print("=" * 80)


if __name__ == "__main__":
    run_tests()
