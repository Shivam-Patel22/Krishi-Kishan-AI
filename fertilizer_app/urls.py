"""
URL routing for fertilizer_app API endpoints.
"""

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from fertilizer_app.views import (
    FarmViewSet, FieldViewSet, CropViewSet, FertilizerViewSet,
    SoilTestViewSet, WeatherRecordViewSet, RecommendationViewSet,
    GenerateRecommendationAPIView, SoilLookupAPIView, WeatherAPIView
)

router = DefaultRouter()
router.register(r'farms', FarmViewSet)
router.register(r'fields', FieldViewSet)
router.register(r'crops', CropViewSet)
router.register(r'fertilizers', FertilizerViewSet)
router.register(r'soil-tests', SoilTestViewSet)
router.register(r'weather-records', WeatherRecordViewSet)
router.register(r'recommendations', RecommendationViewSet)

urlpatterns = [
    path('recommendations/generate/', GenerateRecommendationAPIView.as_view(), name='recommendation-generate'),
    path('soil-lookup/', SoilLookupAPIView.as_view(), name='soil-lookup'),
    path('weather/', WeatherAPIView.as_view(), name='weather-info'),
    path('', include(router.urls)),
]
