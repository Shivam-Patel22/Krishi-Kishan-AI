"""
Machine Learning Inference & Hybrid Engine Integrator
"""

import os
import joblib
import numpy as np
from pathlib import Path
from typing import Dict, Any


ENGINE_DIR = Path(__file__).resolve().parent

MODEL_FILE = ENGINE_DIR / "fertilizer_rf_model.joblib"
SCALER_FILE = ENGINE_DIR / "scaler.joblib"
CROP_ENC_FILE = ENGINE_DIR / "crop_encoder.joblib"
LABEL_ENC_FILE = ENGINE_DIR / "label_encoder.joblib"

_MODEL = None
_SCALER = None
_CROP_ENC = None
_LABEL_ENC = None


def load_artifacts():
    global _MODEL, _SCALER, _CROP_ENC, _LABEL_ENC
    if _MODEL is None:
        _MODEL = joblib.load(MODEL_FILE)
        _SCALER = joblib.load(SCALER_FILE)
        _CROP_ENC = joblib.load(CROP_ENC_FILE)
        _LABEL_ENC = joblib.load(LABEL_ENC_FILE)


def predict_fertilizer_ml(crop_name: str, soil_data: Dict[str, float], weather_data: Dict[str, float]) -> Dict[str, Any]:
    """
    Runs ML inference to classify the most suitable fertilizer product mix and confidence.
    """
    load_artifacts()

    # Match crop name or fallback
    crop_classes = list(_CROP_ENC.classes_)
    matched_crop = next((c for c in crop_classes if crop_name.lower() in c.lower() or c.lower() in crop_name.lower()), crop_classes[0])
    crop_code = _CROP_ENC.transform([matched_crop])[0]

    features = np.array([[
        crop_code,
        soil_data.get('nitrogen', 140.0),
        soil_data.get('phosphorus', 18.0),
        soil_data.get('potassium', 180.0),
        soil_data.get('soil_ph', 6.8),
        soil_data.get('organic_carbon_pct', 0.55),
        weather_data.get('temperature_c', 28.0),
        weather_data.get('humidity_pct', 65.0),
        weather_data.get('rainfall_forecast_mm', 0.0)
    ]])

    scaled_features = _SCALER.transform(features)
    probs = _MODEL.predict_proba(scaled_features)[0]
    best_idx = np.argmax(probs)
    predicted_label = _LABEL_ENC.inverse_transform([best_idx])[0]
    confidence = float(probs[best_idx])

    # Top 3 predictions for alternatives
    top_indices = np.argsort(probs)[::-1][:3]
    top_alternatives = [
        {"fertilizer": _LABEL_ENC.inverse_transform([idx])[0], "confidence": round(float(probs[idx]), 3)}
        for idx in top_indices if idx != best_idx
    ]

    return {
        "ml_predicted_product": predicted_label,
        "model_confidence": round(confidence, 3),
        "alternatives": top_alternatives,
        "model_version": "RandomForest-Agronomic-v1.0"
    }
