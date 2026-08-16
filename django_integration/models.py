"""
Django Model for SoilRecord
Generated automatically by Agricultural CSV to SQLite Pipeline.
"""

from django.db import models


class SoilRecord(models.Model):
    """
    Represents an agricultural record in the 'soil_records' table.
    
    IMPORTANT:
    - managed = False tells Django NOT to alter or create this table during migrations.
    - db_table = 'soil_records' binds this model directly to the SQLite table.
    """
    id = models.BigAutoField(primary_key=True)
    source_id = models.BigIntegerField(null=True, blank=True, help_text='Source id')
    year = models.CharField(max_length=255, null=True, blank=True, help_text='Year')
    state_name = models.CharField(max_length=255, null=True, blank=True, help_text='State name')
    state_code = models.BigIntegerField(null=True, blank=True, help_text='State code')
    district_name = models.CharField(max_length=255, null=True, blank=True, help_text='District name')
    district_code = models.BigIntegerField(null=True, blank=True, help_text='District code')
    block_name = models.CharField(max_length=255, null=True, blank=True, help_text='Block name')
    block_code = models.BigIntegerField(null=True, blank=True, help_text='Block code')
    village_name = models.CharField(max_length=255, null=True, blank=True, help_text='Village name')
    village_code = models.BigIntegerField(null=True, blank=True, help_text='Village code')
    nutrient_type = models.CharField(max_length=255, null=True, blank=True, help_text='Nutrient type')
    nutrient_name = models.CharField(max_length=255, null=True, blank=True, help_text='Nutrient name')
    nutrient_level = models.CharField(max_length=255, null=True, blank=True, help_text='Nutrient level')
    value = models.BigIntegerField(null=True, blank=True, help_text='Value')

    class Meta:
        managed = False
        db_table = "soil_records"
        verbose_name = "SoilRecord"
        verbose_name_plural = "SoilRecords"

    def __str__(self):
        return f"[SoilRecord #{self.id}] " + (str(self.state_name or '') + ' | ' + str(self.district_name or '') + ' | ' + str(self.nutrient_name or ''))
