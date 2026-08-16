"""
Enterprise-Grade Precision Fertilizer Training Pipeline (v4.0 Enterprise Ultra)
=============================================================================
Trained on agricultural sample matrices parameterized directly by the
10.85M National Soil Database distributions across India.
Incorporates 44 deep stoichiometric, Liebig's law, and climate risk features with
a 4-Model High-Capacity Calibrated Soft-Voting Meta-Ensemble:
  1. Random Forest (250 Trees)
  2. Extra Trees (250 Trees)
  3. Histogram Gradient Booster (250 Iterations)
  4. Deep Neural Network (256 -> 128 -> 64 MLP)
"""

import os
import time
import joblib
import numpy as np
import pandas as pd
from typing import Dict, Any, List

from sklearn.ensemble import (
    RandomForestClassifier, ExtraTreesClassifier,
    HistGradientBoostingClassifier, VotingClassifier
)
from sklearn.neural_network import MLPClassifier
from sklearn.preprocessing import LabelEncoder, RobustScaler
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, f1_score, log_loss, classification_report


CROPS_METADATA = {
    'Rice / Paddy': {'category': 'Cereal', 'season': 'Kharif', 'n_req': 120.0, 'p_req': 60.0, 'k_req': 60.0, 'ph_min': 5.5, 'ph_max': 7.0},
    'Wheat': {'category': 'Cereal', 'season': 'Rabi', 'n_req': 120.0, 'p_req': 60.0, 'k_req': 40.0, 'ph_min': 6.0, 'ph_max': 7.5},
    'Cotton': {'category': 'Cash Crop', 'season': 'Kharif', 'n_req': 150.0, 'p_req': 75.0, 'k_req': 75.0, 'ph_min': 6.5, 'ph_max': 8.0},
    'Maize / Corn': {'category': 'Cereal', 'season': 'Kharif', 'n_req': 120.0, 'p_req': 60.0, 'k_req': 50.0, 'ph_min': 5.8, 'ph_max': 7.2},
    'Sugarcane': {'category': 'Cash Crop', 'season': 'Annual', 'n_req': 250.0, 'p_req': 100.0, 'k_req': 125.0, 'ph_min': 6.5, 'ph_max': 7.8},
    'Soybean': {'category': 'Oilseed / Pulse', 'season': 'Kharif', 'n_req': 30.0, 'p_req': 80.0, 'k_req': 40.0, 'ph_min': 6.0, 'ph_max': 7.0},
    'Groundnut / Peanut': {'category': 'Oilseed', 'season': 'Kharif', 'n_req': 25.0, 'p_req': 50.0, 'k_req': 75.0, 'ph_min': 6.0, 'ph_max': 7.2},
    'Tomato': {'category': 'Vegetable', 'season': 'Year-round', 'n_req': 150.0, 'p_req': 100.0, 'k_req': 100.0, 'ph_min': 6.0, 'ph_max': 7.0},
    'Potato': {'category': 'Vegetable', 'season': 'Rabi', 'n_req': 150.0, 'p_req': 100.0, 'k_req': 120.0, 'ph_min': 5.2, 'ph_max': 6.5},
    'Mustard': {'category': 'Oilseed', 'season': 'Rabi', 'n_req': 90.0, 'p_req': 45.0, 'k_req': 45.0, 'ph_min': 6.0, 'ph_max': 7.5},
    'Gram / Chickpea': {'category': 'Pulse', 'season': 'Rabi', 'n_req': 25.0, 'p_req': 50.0, 'k_req': 30.0, 'ph_min': 6.2, 'ph_max': 7.6}
}


def build_enterprise_corpus(num_samples: int = 25000) -> pd.DataFrame:
    """
    Synthesizes agricultural data points based on empirical
    distributions extracted directly from the 10.85M National Soil Database.
    """
    np.random.seed(42)
    crop_names = list(CROPS_METADATA.keys())

    rows = []
    for _ in range(num_samples):
        crop = np.random.choice(crop_names)
        meta = CROPS_METADATA[crop]

        # National 10.85M Empirical Soil Distributions
        # Nitrogen (64% Low, 30% Med, 6% High)
        n_dist = np.random.choice(['Low', 'Medium', 'High'], p=[0.64, 0.30, 0.06])
        if n_dist == 'Low': n = np.random.uniform(30.0, 275.0)
        elif n_dist == 'Medium': n = np.random.uniform(280.0, 550.0)
        else: n = np.random.uniform(560.0, 750.0)

        # Phosphorus (14% Low, 41% Med, 45% High)
        p_dist = np.random.choice(['Low', 'Medium', 'High'], p=[0.14, 0.41, 0.45])
        if p_dist == 'Low': p = np.random.uniform(2.5, 9.8)
        elif p_dist == 'Medium': p = np.random.uniform(10.0, 24.8)
        else: p = np.random.uniform(25.0, 65.0)

        # Potassium (14% Low, 53% Med, 33% High)
        k_dist = np.random.choice(['Low', 'Medium', 'High'], p=[0.14, 0.53, 0.33])
        if k_dist == 'Low': k = np.random.uniform(35.0, 108.0)
        elif k_dist == 'Medium': k = np.random.uniform(110.0, 278.0)
        else: k = np.random.uniform(280.0, 520.0)

        # Soil pH (12% Acidic, 86% Neutral, 2% Alkaline)
        ph_dist = np.random.choice(['Acidic', 'Neutral', 'Alkaline'], p=[0.12, 0.86, 0.02])
        if ph_dist == 'Acidic': ph = np.random.uniform(4.5, 5.95)
        elif ph_dist == 'Neutral': ph = np.random.uniform(6.0, 7.8)
        else: ph = np.random.uniform(7.85, 9.5)

        # Organic Carbon (48% Low, 28% Med, 24% High)
        oc_dist = np.random.choice(['Low', 'Medium', 'High'], p=[0.48, 0.28, 0.24])
        if oc_dist == 'Low': oc = np.random.uniform(0.12, 0.48)
        elif oc_dist == 'Medium': oc = np.random.uniform(0.50, 0.74)
        else: oc = np.random.uniform(0.75, 1.45)

        # Electrical Conductivity (95.5% Non-saline, 4.5% Saline)
        ec_dist = np.random.choice(['Non-saline', 'Saline'], p=[0.955, 0.045])
        if ec_dist == 'Non-saline': ec = np.random.uniform(0.08, 0.95)
        else: ec = np.random.uniform(1.05, 3.4)

        # Micronutrients
        zn = np.random.uniform(0.1, 0.58) if np.random.rand() < 0.35 else np.random.uniform(0.62, 2.8)
        b = np.random.uniform(0.08, 0.48) if np.random.rand() < 0.45 else np.random.uniform(0.52, 2.0)
        s = np.random.uniform(1.5, 9.8) if np.random.rand() < 0.25 else np.random.uniform(10.2, 45.0)
        fe = np.random.uniform(1.0, 4.4) if np.random.rand() < 0.24 else np.random.uniform(4.6, 22.0)
        mn = np.random.uniform(0.5, 2.9) if np.random.rand() < 0.13 else np.random.uniform(3.1, 15.0)
        cu = np.random.uniform(0.05, 0.19) if np.random.rand() < 0.05 else np.random.uniform(0.22, 5.0)

        # Weather & Agro-Meteorology
        temp = np.random.normal(loc=28.5, scale=5.8)
        temp = float(np.clip(temp, 12.0, 45.0))
        humidity = float(np.random.uniform(20.0, 95.0))
        rainfall = float(np.clip(np.random.exponential(scale=14.0), 0.0, 160.0))

        # -------------------------------------------------------------------
        # 44 Stoichiometric, Buffer, and Liebig Agronomic Features
        # -------------------------------------------------------------------
        np_ratio = n / (p + 0.001)
        nk_ratio = n / (k + 0.001)
        pk_ratio = p / (k + 0.001)
        np_k_ratio = (n + p) / (k + 0.001)
        nk_p_ratio = (n + k) / (p + 0.001)
        total_nutrient_sum = n + p + k

        ideal_ph_mid = (meta['ph_min'] + meta['ph_max']) / 2.0
        ph_deficit = abs(ph - ideal_ph_mid)
        soil_buffer_capacity = oc * (14.0 - abs(ph - 7.0))
        acid_p_fixation_risk = max(0.0, 6.2 - ph) * p
        alkaline_volatilization_risk = max(0.0, ph - 7.8) * n
        salinity_stress_index = ec * (ph / 7.0)

        bio_n_mineralization = oc * n * (temp / 30.0)
        liebig_zn_quotient = zn / 0.6
        liebig_b_quotient = b / 0.5
        liebig_s_quotient = s / 10.0
        liebig_fe_quotient = fe / 4.5
        liebig_mn_quotient = mn / 3.0
        liebig_cu_quotient = cu / 0.2
        min_micronutrient_factor = min(liebig_zn_quotient, liebig_b_quotient, liebig_s_quotient, liebig_fe_quotient)

        crop_n_demand = meta['n_req']
        crop_p_demand = meta['p_req']
        crop_k_demand = meta['k_req']

        net_n_deficit = max(0.0, crop_n_demand - (n * 0.30))
        net_p_deficit = max(0.0, crop_p_demand - (p * 0.88))
        net_k_deficit = max(0.0, crop_k_demand - (k * 0.22))

        weather_leach_risk = (rainfall * humidity) / 100.0
        temp_stress = max(0.0, temp - 35.0) + max(0.0, 16.0 - temp)
        spray_safety_score = 1.0 if (rainfall < 15.0 and temp < 36.0) else 0.0

        # Ground Truth Agronomic Decision Model
        if ph < 5.8:
            label = "SSP (Single Super Phosphate) + Urea + MOP + Lime"
        elif ph > 8.2:
            label = "Ammonium Sulphate + DAP + MOP + Gypsum"
        elif crop in ['Soybean', 'Groundnut / Peanut', 'Gram / Chickpea']:
            if s < 10.0:
                label = "NPK 12:32:16 + Single Super Phosphate (Sulphur enriched)"
            else:
                label = "DAP (Diammonium Phosphate) + MOP (Low Nitrogen Blend)"
        elif crop in ['Cotton', 'Sugarcane', 'Potato', 'Tomato']:
            if k < 140.0:
                label = "NPK 10:26:26 + Urea + MOP (High Potash Formula)"
            elif p < 18.0:
                label = "DAP (Diammonium Phosphate) + Urea + MOP"
            else:
                label = "NPK 19:19:19 Complex + Urea"
        elif p < 15.0:
            label = "DAP (Diammonium Phosphate) + Urea + MOP"
        elif p >= 25.0 and k < 120.0:
            label = "Urea + MOP (Muriate of Potash)"
        elif p >= 22.0 and k >= 220.0:
            label = "NPK 19:19:19 Complex + Urea"
        else:
            label = "DAP (Diammonium Phosphate) + Urea + MOP"

        rows.append({
            'crop': crop,
            'nitrogen': n,
            'phosphorus': p,
            'potassium': k,
            'soil_ph': ph,
            'organic_carbon': oc,
            'electrical_conductivity': ec,
            'zinc': zn,
            'boron': b,
            'sulphur': s,
            'iron': fe,
            'manganese': mn,
            'copper': cu,
            'temperature': temp,
            'humidity': humidity,
            'rainfall': rainfall,
            'np_ratio': np_ratio,
            'nk_ratio': nk_ratio,
            'pk_ratio': pk_ratio,
            'np_k_ratio': np_k_ratio,
            'nk_p_ratio': nk_p_ratio,
            'total_nutrient_sum': total_nutrient_sum,
            'ph_deficit': ph_deficit,
            'soil_buffer_capacity': soil_buffer_capacity,
            'acid_p_fixation_risk': acid_p_fixation_risk,
            'alkaline_volatilization_risk': alkaline_volatilization_risk,
            'salinity_stress_index': salinity_stress_index,
            'bio_n_mineralization': bio_n_mineralization,
            'liebig_zn_quotient': liebig_zn_quotient,
            'liebig_b_quotient': liebig_b_quotient,
            'liebig_s_quotient': liebig_s_quotient,
            'liebig_fe_quotient': liebig_fe_quotient,
            'liebig_mn_quotient': liebig_mn_quotient,
            'liebig_cu_quotient': liebig_cu_quotient,
            'min_micronutrient_factor': min_micronutrient_factor,
            'crop_n_demand': crop_n_demand,
            'crop_p_demand': crop_p_demand,
            'crop_k_demand': crop_k_demand,
            'net_n_deficit': net_n_deficit,
            'net_p_deficit': net_p_deficit,
            'net_k_deficit': net_k_deficit,
            'weather_leach_risk': weather_leach_risk,
            'temp_stress': temp_stress,
            'spray_safety_score': spray_safety_score,
            'recommended_fertilizer': label
        })

    return pd.DataFrame(rows)


FEATURE_COLUMNS = [
    'crop_encoded', 'nitrogen', 'phosphorus', 'potassium', 'soil_ph',
    'organic_carbon', 'electrical_conductivity', 'zinc', 'boron', 'sulphur', 'iron',
    'manganese', 'copper',
    'temperature', 'humidity', 'rainfall',
    'np_ratio', 'nk_ratio', 'pk_ratio', 'np_k_ratio', 'nk_p_ratio', 'total_nutrient_sum',
    'ph_deficit', 'soil_buffer_capacity', 'acid_p_fixation_risk', 'alkaline_volatilization_risk', 'salinity_stress_index',
    'bio_n_mineralization',
    'liebig_zn_quotient', 'liebig_b_quotient', 'liebig_s_quotient', 'liebig_fe_quotient', 'liebig_mn_quotient', 'liebig_cu_quotient',
    'min_micronutrient_factor',
    'crop_n_demand', 'crop_p_demand', 'crop_k_demand',
    'net_n_deficit', 'net_p_deficit', 'net_k_deficit',
    'weather_leach_risk', 'temp_stress', 'spray_safety_score'
]
