"""
Seed script to initialize ICAR standard crops, fertilizers, and demo farm holding.
"""

from django.core.management.base import BaseCommand
from fertilizer_app.models import Crop, Fertilizer, Farm, Field, SoilTest, WeatherRecord


class Command(BaseCommand):
    help = 'Seeds standard ICAR crops, fertilizer catalog, and initial demo farm'

    def handle(self, *args, **kwargs):
        self.stdout.write("[-] Seeding Crops...")
        crops_data = [
            {'name': 'Rice / Paddy', 'category': 'Cereal', 'target_yield': 4.5, 'n': 120.0, 'p': 60.0, 'k': 60.0, 'ph_min': 5.5, 'ph_max': 7.0, 'days': 125},
            {'name': 'Wheat', 'category': 'Cereal', 'target_yield': 4.2, 'n': 120.0, 'p': 60.0, 'k': 40.0, 'ph_min': 6.0, 'ph_max': 7.5, 'days': 120},
            {'name': 'Cotton', 'category': 'Cash Crop', 'target_yield': 2.5, 'n': 150.0, 'p': 75.0, 'k': 75.0, 'ph_min': 6.5, 'ph_max': 8.0, 'days': 160},
            {'name': 'Maize / Corn', 'category': 'Cereal', 'target_yield': 6.0, 'n': 120.0, 'p': 60.0, 'k': 50.0, 'ph_min': 5.8, 'ph_max': 7.2, 'days': 110},
            {'name': 'Sugarcane', 'category': 'Cash Crop', 'target_yield': 80.0, 'n': 250.0, 'p': 100.0, 'k': 125.0, 'ph_min': 6.5, 'ph_max': 7.8, 'days': 365},
            {'name': 'Soybean', 'category': 'Oilseed', 'target_yield': 2.2, 'n': 30.0, 'p': 80.0, 'k': 40.0, 'ph_min': 6.0, 'ph_max': 7.0, 'days': 95},
            {'name': 'Groundnut / Peanut', 'category': 'Oilseed', 'target_yield': 2.0, 'n': 25.0, 'p': 50.0, 'k': 75.0, 'ph_min': 6.0, 'ph_max': 7.2, 'days': 115},
            {'name': 'Tomato', 'category': 'Vegetable', 'target_yield': 35.0, 'n': 150.0, 'p': 100.0, 'k': 100.0, 'ph_min': 6.0, 'ph_max': 7.0, 'days': 90},
            {'name': 'Potato', 'category': 'Vegetable', 'target_yield': 25.0, 'n': 150.0, 'p': 100.0, 'k': 120.0, 'ph_min': 5.2, 'ph_max': 6.5, 'days': 100},
            {'name': 'Mustard', 'category': 'Oilseed', 'target_yield': 1.8, 'n': 90.0, 'p': 45.0, 'k': 45.0, 'ph_min': 6.0, 'ph_max': 7.5, 'days': 105},
            {'name': 'Gram / Chickpea', 'category': 'Pulse', 'target_yield': 1.6, 'n': 25.0, 'p': 50.0, 'k': 30.0, 'ph_min': 6.2, 'ph_max': 7.6, 'days': 100},
        ]

        for c in crops_data:
            Crop.objects.update_or_create(
                name=c['name'],
                defaults={
                    'category': c['category'],
                    'target_yield_tonnes_per_ha': c['target_yield'],
                    'nitrogen_demand_kg_per_ha': c['n'],
                    'phosphorus_demand_kg_per_ha': c['p'],
                    'potassium_demand_kg_per_ha': c['k'],
                    'ideal_ph_min': c['ph_min'],
                    'ideal_ph_max': c['ph_max'],
                    'growth_duration_days': c['days']
                }
            )

        self.stdout.write("[-] Seeding Fertilizers...")
        ferts_data = [
            {'name': 'Urea (46% N)', 'n': 46.0, 'p': 0.0, 'k': 0.0, 's': 0.0, 'price': 268.0},
            {'name': 'DAP (Diammonium Phosphate 18:46:0)', 'n': 18.0, 'p': 46.0, 'k': 0.0, 's': 0.0, 'price': 1350.0},
            {'name': 'MOP (Muriate of Potash 0:0:60)', 'n': 0.0, 'p': 0.0, 'k': 60.0, 's': 0.0, 'price': 1700.0},
            {'name': 'SSP (Single Super Phosphate 0:16:0 + 11% S)', 'n': 0.0, 'p': 16.0, 'k': 0.0, 's': 11.0, 'price': 450.0},
            {'name': 'NPK 19:19:19 Complex', 'n': 19.0, 'p': 19.0, 'k': 19.0, 's': 0.0, 'price': 1450.0},
            {'name': 'NPK 10:26:26 Complex', 'n': 10.0, 'p': 26.0, 'k': 26.0, 's': 0.0, 'price': 1480.0},
            {'name': 'NPK 12:32:16 Complex', 'n': 12.0, 'p': 32.0, 'k': 16.0, 's': 0.0, 'price': 1460.0},
            {'name': 'Ammonium Sulphate (20.5% N + 24% S)', 'n': 20.5, 'p': 0.0, 'k': 0.0, 's': 24.0, 'price': 850.0},
        ]

        for f in ferts_data:
            Fertilizer.objects.update_or_create(
                name=f['name'],
                defaults={
                    'n_content_pct': f['n'],
                    'p_content_pct': f['p'],
                    'k_content_pct': f['k'],
                    'sulphur_pct': f['s'],
                    'price_per_bag_inr': f['price'],
                    'bag_weight_kg': 50.0
                }
            )

        self.stdout.write("[-] Seeding Demo Farm & Plots...")
        farm, _ = Farm.objects.update_or_create(
            farmer_name="Ramesh Patel",
            defaults={
                'phone_number': "+91 98765 43210",
                'state_name': "Gujarat",
                'district_name': "Anand",
                'block_name': "Anand",
                'village_name': "Chikhodra",
                'latitude': 22.564500,
                'longitude': 72.928900
            }
        )

        field1, _ = Field.objects.update_or_create(
            farm=farm,
            field_name="North Canal Plot",
            defaults={
                'area_hectares': 1.20,
                'soil_type': "Alluvial Sandy Loam",
                'irrigation_type': "Canal / Borewell"
            }
        )

        field2, _ = Field.objects.update_or_create(
            farm=farm,
            field_name="South Tubewell Plot",
            defaults={
                'area_hectares': 0.80,
                'soil_type': "Medium Black Loam",
                'irrigation_type': "Drip"
            }
        )

        self.stdout.write(self.style.SUCCESS("[+] Seeding Complete!"))
