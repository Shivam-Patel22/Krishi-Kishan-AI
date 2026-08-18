"""
Views and API Endpoints for Precision Fertilizer Recommendation Platform (PS-SW-002)
"""

from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django.template.loader import render_to_string
import os, tempfile, subprocess
from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny

from fertilizer_app.models import Farm, Field, Crop, Fertilizer, SoilTest, WeatherRecord, Recommendation, SoilRecord
from fertilizer_app.serializers import (
    FarmSerializer, FieldSerializer, CropSerializer, FertilizerSerializer,
    SoilTestSerializer, WeatherRecordSerializer, RecommendationSerializer
)
from fertilizer_app.engine.agronomic_rules import calculate_agronomic_recommendation
from fertilizer_app.engine.ml_recommender import predict_fertilizer_ml
from fertilizer_app.services.soil_lookup_service import (
    get_available_states, get_districts_by_state, get_blocks_by_district,
    get_villages_by_block, get_soil_benchmark_profile
)
from fertilizer_app.services.weather_service import fetch_weather_data


def index_view(request):
    """
    Renders the Farmer Dashboard and Interactive Recommendation UI.
    """
    return render(request, 'index.html')


def report_view(request):
    """
    Renders the Dedicated AI Precision Recommendation Report page.
    """
    return render(request, 'report.html')


def download_recommendation_pdf_view(request, pk):
    """
    Generates and returns an instant downloadable A4 PDF prescription.
    """
    rec = get_object_or_404(
        Recommendation.objects.select_related('crop', 'field', 'soil_test', 'weather_record'),
        pk=pk
    )

    area_ha = float(rec.field.area_hectares or 1.0)
    area_acres = round(area_ha * 2.471, 1)

    html_string = render_to_string('report_pdf.html', {
        'rec': rec,
        'area_acres': area_acres
    })

    edge_path = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
    
    with tempfile.NamedTemporaryFile('w', suffix='.html', delete=False, encoding='utf-8') as f:
        f.write(html_string)
        temp_html = f.name

    temp_pdf = temp_html.replace('.html', '.pdf')
    html_url = 'file:///' + temp_html.replace('\\', '/')

    try:
        if os.path.exists(edge_path):
            cmd = [
                edge_path,
                '--headless',
                '--disable-gpu',
                '--no-pdf-header-footer',
                f'--print-to-pdf={temp_pdf}',
                html_url
            ]
            subprocess.run(cmd, capture_output=True, timeout=10)

            if os.path.exists(temp_pdf):
                with open(temp_pdf, 'rb') as pdf_file:
                    pdf_bytes = pdf_file.read()

                crop_slug = rec.crop.name.replace(' ', '_').replace('/', '_')
                response = HttpResponse(pdf_bytes, content_type='application/pdf')
                response['Content-Disposition'] = f'attachment; filename="KrishiKisan_Fertilizer_Report_{crop_slug}_#{rec.id}.pdf"'
                return response
    finally:
        if os.path.exists(temp_html):
            try: os.remove(temp_html)
            except: pass
        if os.path.exists(temp_pdf):
            try: os.remove(temp_pdf)
            except: pass

    # Fallback to direct HTML print response if PDF binary is unavailable
    return HttpResponse(html_string, content_type='text/html')




class FarmViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    authentication_classes = []
    queryset = Farm.objects.all().order_by('-created_at')
    serializer_class = FarmSerializer


class FieldViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    authentication_classes = []
    queryset = Field.objects.all().order_by('-created_at')
    serializer_class = FieldSerializer

    @action(detail=True, methods=['get'])
    def soil_tests(self, request, pk=None):
        field = self.get_object()
        tests = field.soil_tests.all().order_by('-test_date')
        return Response(SoilTestSerializer(tests, many=True).data)


class CropViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    authentication_classes = []
    queryset = Crop.objects.all().order_by('name')
    serializer_class = CropSerializer


class FertilizerViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    authentication_classes = []
    queryset = Fertilizer.objects.all().order_by('name')
    serializer_class = FertilizerSerializer


class SoilTestViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    authentication_classes = []
    queryset = SoilTest.objects.all().order_by('-test_date')
    serializer_class = SoilTestSerializer


class WeatherRecordViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    authentication_classes = []
    queryset = WeatherRecord.objects.all().order_by('-recorded_at')
    serializer_class = WeatherRecordSerializer


class RecommendationViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    authentication_classes = []
    queryset = Recommendation.objects.all().order_by('-created_at')
    serializer_class = RecommendationSerializer


class GenerateRecommendationAPIView(APIView):
    """
    Generates precision fertilizer recommendation combining:
    1. AI Multi-Model Ensemble Classification (RF + ET + HGB + MLP)
    2. Agronomic Stoichiometric Nutrient Deficit Calculation (Hectare-based)
    3. Weather Leaching & Application Window Safety Analysis
    """
    permission_classes = [AllowAny]
    authentication_classes = []

    def post(self, request):
        try:
            field_id = request.data.get('field_id')
            crop_id = request.data.get('crop_id')
            area_ha = request.data.get('area_hectares')
            custom_soil = request.data.get('soil_data')

            if not crop_id:
                return Response(
                    {"error": "'crop_id' is required."},
                    status=status.HTTP_400_BAD_REQUEST
                )

            if field_id:
                field = get_object_or_404(Field, pk=field_id)
            else:
                field = Field.objects.first()
                if not field:
                    farm, _ = Farm.objects.get_or_create(
                        name="Default Farm",
                        defaults={"farmer_name": "Farmer", "state_name": "Maharashtra", "district_name": "Pune"}
                    )
                    field, _ = Field.objects.get_or_create(
                        farm=farm,
                        field_name="Main Plot",
                        defaults={"area_hectares": 1.0, "soil_type": "Loamy"}
                    )

            crop = get_object_or_404(Crop, pk=crop_id)
            field_area = float(area_ha) if area_ha else float(field.area_hectares)


            # Resolve soil data
            if custom_soil:
                if custom_soil.get('soil_type') and field:
                    field.soil_type = custom_soil.get('soil_type')
                    field.save(update_fields=['soil_type'])

                def _safe_soil_val(key, default_val=0.0):
                    val = custom_soil.get(key)
                    if val is None or val == '':
                        return default_val
                    try:
                        return float(val)
                    except (ValueError, TypeError):
                        return default_val

                soil_data = {
                    'nitrogen': _safe_soil_val('nitrogen', 0.0),
                    'phosphorus': _safe_soil_val('phosphorus', 0.0),
                    'potassium': _safe_soil_val('potassium', 0.0),
                    'soil_ph': _safe_soil_val('soil_ph', 0.0),
                    'organic_carbon_pct': _safe_soil_val('organic_carbon_pct', 0.0),
                    'electrical_conductivity': _safe_soil_val('electrical_conductivity', 0.0),
                    'zinc': _safe_soil_val('zinc', 0.0),
                    'boron': _safe_soil_val('boron', 0.0),
                    'sulphur': _safe_soil_val('sulphur', 0.0),
                    'iron': _safe_soil_val('iron', 0.0),
                    'source': custom_soil.get('source', 'Field Test / User Input')
                }
            else:

                latest_test = field.soil_tests.order_by('-test_date').first()
                if latest_test:
                    soil_data = {
                        'nitrogen': float(latest_test.nitrogen),
                        'phosphorus': float(latest_test.phosphorus),
                        'potassium': float(latest_test.potassium),
                        'soil_ph': float(latest_test.soil_ph),
                        'organic_carbon_pct': float(latest_test.organic_carbon_pct),
                        'electrical_conductivity': float(latest_test.electrical_conductivity),
                        'zinc': float(latest_test.zinc),
                        'boron': float(latest_test.boron),
                        'sulphur': float(latest_test.sulphur),
                        'iron': float(latest_test.iron),
                        'source': latest_test.source
                    }
                else:
                    soil_data = get_soil_benchmark_profile(
                        field.farm.state_name, field.farm.district_name,
                        field.farm.block_name, field.farm.village_name
                    )

            # Resolve weather
            weather_data = fetch_weather_data(
                latitude=float(field.farm.latitude) if field.farm.latitude else None,
                longitude=float(field.farm.longitude) if field.farm.longitude else None,
                state_name=field.farm.state_name,
                district_name=field.farm.district_name
            )

            # 1. AI ML Ensemble Prediction
            ml_result = predict_fertilizer_ml(crop.name, soil_data, weather_data)

            # 2. Agronomic Stoichiometric Calculation
            crop_info = {
                'name': crop.name,
                'category': crop.category,
                'n_req_kg_per_ha': float(crop.nitrogen_demand_kg_per_ha),
                'p_req_kg_per_ha': float(crop.phosphorus_demand_kg_per_ha),
                'k_req_kg_per_ha': float(crop.potassium_demand_kg_per_ha),
                'target_yield': float(crop.target_yield_tonnes_per_ha)
            }

            agri_result = calculate_agronomic_recommendation(
                crop_info=crop_info,
                soil_data=soil_data,
                area_hectares=field_area,
                weather_data=weather_data
            )


            # 3. Save Soil Test & Weather Record
            soil_obj = SoilTest.objects.create(
                field=field,
                nitrogen=soil_data['nitrogen'],
                phosphorus=soil_data['phosphorus'],
                potassium=soil_data['potassium'],
                soil_ph=soil_data['soil_ph'],
                organic_carbon_pct=soil_data['organic_carbon_pct'],
                electrical_conductivity=soil_data['electrical_conductivity'],
                zinc=soil_data['zinc'],
                boron=soil_data['boron'],
                sulphur=soil_data['sulphur'],
                iron=soil_data['iron'],
                source=soil_data.get('source', 'Field Test')
            )

            weather_obj = WeatherRecord.objects.create(
                field=field,
                temperature_c=weather_data['temperature_c'],
                humidity_pct=weather_data['humidity_pct'],
                rainfall_forecast_mm=weather_data['rainfall_forecast_mm'],
                wind_speed_kmh=weather_data['wind_speed_kmh']
            )

            # 4. Save Recommendation
            rec_obj = Recommendation.objects.create(
                field=field,
                crop=crop,
                soil_test=soil_obj,
                weather_record=weather_obj,
                primary_fertilizer=agri_result['primary_fertilizer'],
                total_quantity_kg=agri_result['total_quantity_kg'],
                estimated_cost_inr=agri_result['estimated_cost_inr'],
                split_schedule=agri_result['split_schedule'],
                ai_confidence=ml_result['model_confidence'] * 100,
                ai_alternatives=ml_result['alternatives'],
                ph_amendment=agri_result['ph_amendment'],
                micronutrient_advice=agri_result['micronutrient_advice'],
                explanation=agri_result['explanation']
            )

            response_data = {
                "recommendation_id": rec_obj.id,
                "field_id": field.id,
                "field_name": field.field_name,
                "farmer_name": field.farm.farmer_name,
                "crop_name": crop.name,
                "area_hectares": field_area,
                "soil_profile": soil_data,
                "weather_conditions": weather_data,
                "ml_prediction": ml_result,
                "agronomic_recommendation": agri_result,
                "created_at": rec_obj.created_at
            }

            return Response(response_data, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response(
                {"error": f"Failed to generate recommendation: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class SoilLookupAPIView(APIView):
    """
    Sub-millisecond API for national soil database geographic hierarchies and benchmarks.
    """
    permission_classes = [AllowAny]
    authentication_classes = []

    def get(self, request):
        query_type = request.GET.get('type', 'states')
        state = request.GET.get('state')
        district = request.GET.get('district')
        block = request.GET.get('block')
        village = request.GET.get('village')

        if query_type == 'states':
            return Response({"states": get_available_states()})
        elif query_type == 'districts' and state:
            return Response({"districts": get_districts_by_state(state)})
        elif query_type == 'blocks' and state and district:
            return Response({"blocks": get_blocks_by_district(state, district)})
        elif query_type == 'villages' and state and district and block:
            return Response({"villages": get_villages_by_block(state, district, block)})
        elif query_type == 'benchmark' and state and district:
            profile = get_soil_benchmark_profile(state, district, block, village)
            return Response(profile)
        else:
            return Response(
                {"error": "Invalid lookup parameters."},
                status=status.HTTP_400_BAD_REQUEST
            )


class WeatherAPIView(APIView):
    """
    API for real-time weather and spray safety window advice.
    """
    permission_classes = [AllowAny]
    authentication_classes = []

    def get(self, request):
        lat = request.GET.get('lat')
        lon = request.GET.get('lon')
        state = request.GET.get('state')
        district = request.GET.get('district')

        weather = fetch_weather_data(
            latitude=float(lat) if lat else None,
            longitude=float(lon) if lon else None,
            state_name=state,
            district_name=district
        )
        return Response(weather)
