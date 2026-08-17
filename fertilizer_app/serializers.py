"""
Django REST Framework Serializers for Precision Fertilizer Models
"""

from rest_framework import serializers
from fertilizer_app.models import (
    Farm, Field, Crop, Fertilizer, SoilTest, WeatherRecord, Recommendation, SoilRecord
)


class SoilRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = SoilRecord
        fields = '__all__'


class FarmSerializer(serializers.ModelSerializer):
    fields_count = serializers.IntegerField(source='fields.count', read_only=True)

    class Meta:
        model = Farm
        fields = '__all__'


class FieldSerializer(serializers.ModelSerializer):
    farm_name = serializers.CharField(source='farm.farmer_name', read_only=True)

    class Meta:
        model = Field
        fields = '__all__'


class CropSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crop
        fields = '__all__'


class FertilizerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fertilizer
        fields = '__all__'


class SoilTestSerializer(serializers.ModelSerializer):
    field_name = serializers.CharField(source='field.field_name', read_only=True)

    class Meta:
        model = SoilTest
        fields = '__all__'


class WeatherRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeatherRecord
        fields = '__all__'


class RecommendationSerializer(serializers.ModelSerializer):
    field_name = serializers.CharField(source='field.field_name', read_only=True)
    crop_name = serializers.CharField(source='crop.name', read_only=True)
    farm_name = serializers.CharField(source='field.farm.farmer_name', read_only=True)
    soil_profile = SoilTestSerializer(source='soil_test', read_only=True)
    weather_conditions = WeatherRecordSerializer(source='weather_record', read_only=True)

    class Meta:
        model = Recommendation
        fields = '__all__'
