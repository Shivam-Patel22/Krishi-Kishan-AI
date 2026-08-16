"""
Django ORM Query Examples for Soil Records & Fertilizer Recommendations
------------------------------------------------------------------------
These query patterns can be executed in `python manage.py shell` or embedded
directly into Django views, services, or API endpoints.
"""

from django.db.models import Avg, Count, Max, Min, Q
from django_integration.models import SoilRecord


# ---------------------------------------------------------------------------
# 1. Basic Health & Verification Queries
# ---------------------------------------------------------------------------
def verify_records():
    print(f"Total Records: {SoilRecord.objects.count():,}")

    first = SoilRecord.objects.first()
    if first:
        print(f"First Record: State={first.state_name}, District={first.district_name}, Nutrient={first.nutrient_name}")


# ---------------------------------------------------------------------------
# 2. Location-Based Queries
# ---------------------------------------------------------------------------
def query_by_location(district_name="Chittoor", block_name=None):
    """
    Fetch soil nutrient records for a specific district and optional block/taluka.
    Utilizes composite index: idx_soil_records_state_dist or idx_soil_records_district_name.
    """
    filters = Q(district_name__iexact=district_name)
    if block_name:
        filters &= Q(block_name__iexact=block_name)

    qs = SoilRecord.objects.filter(filters)
    print(f"Records found for {district_name}" + (f" ({block_name})" if block_name else "") + f": {qs.count():,}")
    return qs


# ---------------------------------------------------------------------------
# 3. Nutrient Status & Fertilizer Recommendation Pre-computation
# ---------------------------------------------------------------------------
def get_soil_health_profile(district_name="Chittoor", village_name=None):
    """
    Aggregates macro and micro nutrient levels to prepare data for
    the Fertilizer Recommendation & NASA POWER Weather pipeline.
    """
    qs = SoilRecord.objects.filter(district_name__iexact=district_name)
    if village_name:
        qs = qs.filter(village_name__iexact=village_name)

    # Breakdown by nutrient and level (Low / Medium / High / Deficient / Sufficient)
    nutrient_summary = (
        qs.values('nutrient_name', 'nutrient_level')
        .annotate(total_samples=Count('id'), avg_value=Avg('value'))
        .order_by('nutrient_name', 'nutrient_level')
    )

    print(f"\n--- Nutrient Distribution Profile: {district_name} ---")
    for item in nutrient_summary:
        print(f"  Nutrient: {item['nutrient_name']:<22} | Level: {item['nutrient_level']:<12} | Samples: {item['total_samples']:5d} | Avg: {item['avg_value']:.2f}")

    return nutrient_summary


# ---------------------------------------------------------------------------
# 4. Example Wide-format Query Pattern (if using wide CSV)
# ---------------------------------------------------------------------------
def example_wide_format_query(district="Ahmedabad", crop="Cotton"):
    """
    Example query if the CSV has wide format columns (e.g. crop, nitrogen, phosphorus, potassium).
    """
    # qs = SoilRecord.objects.filter(district=district, crop=crop)
    # for r in qs[:5]:
    #     print(f"District: {r.district}, Crop: {r.crop}, N: {r.nitrogen}, P: {r.phosphorus}, K: {r.potassium}")
    pass


if __name__ == "__main__":
    import django
    from django.conf import settings
    if not settings.configured:
        import sys
        from pathlib import Path
        sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
        from django_integration.standalone_django_test import DB_PATH
        settings.configure(
            DEBUG=True,
            DATABASES={"default": {"ENGINE": "django.db.backends.sqlite3", "NAME": str(DB_PATH)}},
            INSTALLED_APPS=["django.contrib.contenttypes", "django.contrib.auth", "django_integration"],
            DEFAULT_AUTO_FIELD="django.db.models.BigAutoField",
        )
        django.setup()

    verify_records()
    query_by_location("Chittoor")
    get_soil_health_profile("Chittoor")
