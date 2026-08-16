"""
Data Models for Precision Fertilizer Recommendation Platform (PS-SW-002)
"""

from django.db import models


class SoilRecord(models.Model):
    """
    Direct ORM mapping to the 10,853,209 national soil database records.
    Unmanaged table for read-only aggregation and regional benchmarks.
    """
    id = models.AutoField(primary_key=True)
    source_id = models.IntegerField(null=True, blank=True)
    year = models.CharField(max_length=20, null=True, blank=True)
    state_name = models.CharField(max_length=100, db_index=True)
    state_code = models.IntegerField(null=True, blank=True)
    district_name = models.CharField(max_length=100, db_index=True)
    district_code = models.IntegerField(null=True, blank=True)
    block_name = models.CharField(max_length=100, db_index=True)
    block_code = models.IntegerField(null=True, blank=True)
    village_name = models.CharField(max_length=150, null=True, blank=True, db_index=True)
    village_code = models.IntegerField(null=True, blank=True)
    nutrient_type = models.CharField(max_length=50, null=True, blank=True)
    nutrient_name = models.CharField(max_length=100, db_index=True)
    nutrient_level = models.CharField(max_length=50)
    value = models.IntegerField(default=0)

    class Meta:
        managed = False
        db_table = 'soil_records'
        verbose_name = 'Soil Database Record'
        verbose_name_plural = 'Soil Database Records'

    def __str__(self):
        return f"{self.state_name} - {self.district_name} ({self.nutrient_name}: {self.nutrient_level})"


class Farm(models.Model):
    """
    Farmer agricultural holding entity.
    """
    farmer_name = models.CharField(max_length=150)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    state_name = models.CharField(max_length=100)
    district_name = models.CharField(max_length=100)
    block_name = models.CharField(max_length=100, blank=True, null=True)
    village_name = models.CharField(max_length=150, blank=True, null=True)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.farmer_name} ({self.district_name}, {self.state_name})"


class Field(models.Model):
    """
    Individual plot or field on a farm.
    """
    farm = models.ForeignKey(Farm, related_name='fields', on_delete=models.CASCADE)
    field_name = models.CharField(max_length=100)
    area_hectares = models.DecimalField(max_digits=7, decimal_places=2, help_text="Field area in hectares")
    soil_type = models.CharField(max_length=80, blank=True, null=True)
    irrigation_type = models.CharField(max_length=50, default='Canal / Borewell', choices=[
        ('Rainfed', 'Rainfed'),
        ('Drip', 'Drip Irrigation'),
        ('Sprinkler', 'Sprinkler Irrigation'),
        ('Canal / Borewell', 'Flood / Surface Irrigation')
    ])
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.field_name} - {self.area_hectares} ha ({self.farm.farmer_name})"


class Crop(models.Model):
    """
    Crop specifications and base nutrient requirement standards (kg/ha).
    """
    name = models.CharField(max_length=100, unique=True)
    category = models.CharField(max_length=50, choices=[
        ('Cereal', 'Cereal'),
        ('Pulse', 'Pulse'),
        ('Oilseed', 'Oilseed'),
        ('Cash Crop', 'Cash Crop'),
        ('Vegetable', 'Vegetable'),
        ('Fruit', 'Fruit'),
    ])
    target_yield_tonnes_per_ha = models.DecimalField(max_digits=5, decimal_places=2, default=4.5)
    nitrogen_demand_kg_per_ha = models.DecimalField(max_digits=6, decimal_places=2)
    phosphorus_demand_kg_per_ha = models.DecimalField(max_digits=6, decimal_places=2)
    potassium_demand_kg_per_ha = models.DecimalField(max_digits=6, decimal_places=2)
    ideal_ph_min = models.DecimalField(max_digits=4, decimal_places=2, default=6.0)
    ideal_ph_max = models.DecimalField(max_digits=4, decimal_places=2, default=7.5)
    growth_duration_days = models.IntegerField(default=120)

    def __str__(self):
        return f"{self.name} ({self.category})"


class Fertilizer(models.Model):
    """
    Fertilizer catalog with nutrient grade fractions and pricing.
    """
    name = models.CharField(max_length=120, unique=True)
    form_factor = models.CharField(max_length=30, default='Granular', choices=[
        ('Granular', 'Granular'),
        ('Liquid', 'Liquid / Foliar'),
        ('Water Soluble', '100% Water Soluble'),
    ])
    n_content_pct = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)
    p_content_pct = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)
    k_content_pct = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)
    sulphur_pct = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)
    zinc_pct = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)
    price_per_bag_inr = models.DecimalField(max_digits=8, decimal_places=2, default=300.0)
    bag_weight_kg = models.DecimalField(max_digits=5, decimal_places=2, default=50.0)

    def __str__(self):
        return f"{self.name} (N:{self.n_content_pct}% P:{self.p_content_pct}% K:{self.k_content_pct}%)"


class SoilTest(models.Model):
    """
    Lab test or national benchmark soil reading for a field.
    """
    field = models.ForeignKey(Field, related_name='soil_tests', on_delete=models.CASCADE)
    test_date = models.DateField(auto_now_add=True)
    nitrogen = models.DecimalField(max_digits=7, decimal_places=2, help_text="Available N in kg/ha")
    phosphorus = models.DecimalField(max_digits=7, decimal_places=2, help_text="Available P in kg/ha")
    potassium = models.DecimalField(max_digits=7, decimal_places=2, help_text="Available K in kg/ha")
    soil_ph = models.DecimalField(max_digits=4, decimal_places=2, help_text="Soil pH (1-14)")
    organic_carbon_pct = models.DecimalField(max_digits=5, decimal_places=2, help_text="Organic Carbon %")
    electrical_conductivity = models.DecimalField(max_digits=5, decimal_places=2, default=0.45, help_text="EC (dS/m)")
    zinc = models.DecimalField(max_digits=5, decimal_places=2, default=0.8, help_text="Zinc ppm")
    boron = models.DecimalField(max_digits=5, decimal_places=2, default=0.5, help_text="Boron ppm")
    sulphur = models.DecimalField(max_digits=5, decimal_places=2, default=12.0, help_text="Sulphur ppm")
    iron = models.DecimalField(max_digits=5, decimal_places=2, default=6.0, help_text="Iron ppm")
    source = models.CharField(max_length=80, default="Lab Test")

    def __str__(self):
        return f"Soil Test #{self.id} for {self.field.field_name} (pH: {self.soil_ph}, N:{self.nitrogen})"


class WeatherRecord(models.Model):
    """
    Agro-meteorological forecast for application planning.
    """
    field = models.ForeignKey(Field, related_name='weather_records', on_delete=models.CASCADE)
    recorded_at = models.DateTimeField(auto_now_add=True)
    temperature_c = models.DecimalField(max_digits=5, decimal_places=2)
    humidity_pct = models.DecimalField(max_digits=5, decimal_places=2)
    rainfall_forecast_mm = models.DecimalField(max_digits=6, decimal_places=2, default=0.0)
    wind_speed_kmh = models.DecimalField(max_digits=5, decimal_places=2, default=10.0)

    def __str__(self):
        return f"Weather #{self.id} ({self.temperature_c}°C, Rain: {self.rainfall_forecast_mm}mm)"


class Recommendation(models.Model):
    """
    Generated precision fertilizer recommendation prescription.
    """
    field = models.ForeignKey(Field, on_delete=models.CASCADE)
    crop = models.ForeignKey(Crop, on_delete=models.CASCADE)
    soil_test = models.ForeignKey(SoilTest, on_delete=models.SET_NULL, null=True, blank=True)
    weather_record = models.ForeignKey(WeatherRecord, on_delete=models.SET_NULL, null=True, blank=True)
    primary_fertilizer = models.CharField(max_length=200)
    total_quantity_kg = models.DecimalField(max_digits=8, decimal_places=2)
    estimated_cost_inr = models.DecimalField(max_digits=10, decimal_places=2)
    split_schedule = models.JSONField(default=list)
    ai_confidence = models.DecimalField(max_digits=5, decimal_places=2, default=95.0)
    ai_alternatives = models.JSONField(default=list)
    ph_amendment = models.CharField(max_length=250, blank=True, null=True)
    micronutrient_advice = models.TextField(blank=True, null=True)
    explanation = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Rec #{self.id} for {self.field.field_name} - {self.crop.name} ({self.primary_fertilizer})"
