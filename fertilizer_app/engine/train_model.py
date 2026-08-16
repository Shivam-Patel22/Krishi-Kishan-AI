"""
Fertilizer ML Training Pipeline V2 (Weighted Soft-Voting Ensemble)
=================================================================
Trains a 4-Model Weighted Soft-Voting Ensemble on an 80,000-sample synthetic
corpus parameterized by the empirical distributions of the 10.85M National Soil Database.

Key Technical Highlights:
  - Strict No-Leakage Preprocessing: RobustScaler is fitted strictly on X_train ONLY.
  - Full 6-Micronutrient Liebig Law of the Minimum factor calculation.
  - 44-Feature Agronomic Stoichiometric & Climate Engineering Pipeline.
  - Multi-Model Weighted Soft-Voting: Random Forest (250) + Extra Trees (250) +
    HistGradientBoosting (250) + Deep MLP (256x128x64).
  - Explicit baseline model comparison (Random Forest 50 trees).
  - Note: Evaluated on synthetic rule-derived agronomic recommendation labels.
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
from sklearn.metrics import (
    accuracy_score, f1_score, fbeta_score, precision_score, recall_score,
    log_loss, confusion_matrix, classification_report
)


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


def build_enterprise_corpus(num_samples: int = 80000) -> pd.DataFrame:
    """
    Synthesizes an 80,000-sample training corpus parameterized by empirical distributions
    derived from the 10,853,209 records in the National Soil Database.
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

        # Full 6-micronutrient Liebig quotients
        liebig_zn_quotient = zn / 0.6
        liebig_b_quotient = b / 0.5
        liebig_s_quotient = s / 10.0
        liebig_fe_quotient = fe / 4.5
        liebig_mn_quotient = mn / 3.0
        liebig_cu_quotient = cu / 0.2

        # Liebig Factor covering all 6 essential trace elements
        min_micronutrient_factor = min(
            liebig_zn_quotient,
            liebig_b_quotient,
            liebig_s_quotient,
            liebig_fe_quotient,
            liebig_mn_quotient,
            liebig_cu_quotient
        )

        crop_n_demand = meta['n_req']
        crop_p_demand = meta['p_req']
        crop_k_demand = meta['k_req']

        net_n_deficit = max(0.0, crop_n_demand - (n * 0.30))
        net_p_deficit = max(0.0, crop_p_demand - (p * 0.88))
        net_k_deficit = max(0.0, crop_k_demand - (k * 0.22))

        weather_leach_risk = (rainfall * humidity) / 100.0
        temp_stress = max(0.0, temp - 35.0) + max(0.0, 16.0 - temp)
        spray_safety_score = 1.0 if (rainfall < 15.0 and temp < 36.0) else 0.0

        # Ground Truth Agronomic Recommendation Framework (Synthetic Rule Labels)
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


def train_production_ensemble(output_dir: str = "fertilizer_app/engine") -> Dict[str, Any]:
    """
    Trains the Weighted Soft-Voting Ensemble (V2) with strict no-leakage preprocessing,
    full 6-micronutrient Liebig features, baseline comparison, and comprehensive evaluation.
    """
    start_time = time.time()
    os.makedirs(output_dir, exist_ok=True)
    print("=" * 75)
    print("      FERTILIZER ML TRAINING PIPELINE V2 (WEIGHTED SOFT-VOTING ENSEMBLE)")
    print("=" * 75)

    # 1. Dataset Generation
    print("[1/5] Synthesizing 80,000 records parameterized by 10.85M National Soil Database...")
    df = build_enterprise_corpus(num_samples=80000)
    print(f"      Synthetic Training Corpus: {df.shape[0]:,} rows x {len(FEATURE_COLUMNS)} features")

    # 2. Categorical Encoders
    print("[2/5] Fitting Multi-Class Label Encoders across 11 crop species and 8 targets...")
    crop_encoder = LabelEncoder()
    df['crop_encoded'] = crop_encoder.fit_transform(df['crop'])

    label_encoder = LabelEncoder()
    df['label_encoded'] = label_encoder.fit_transform(df['recommended_fertilizer'])

    X = df[FEATURE_COLUMNS]
    y = df['label_encoded']

    # -----------------------------------------------------------------------
    # Pre-split Safety Validations
    # -----------------------------------------------------------------------
    if X.isnull().any().any():
        raise ValueError("Training matrix contains NaN values.")
    if not np.isfinite(X.select_dtypes(include=[np.number])).all().all():
        raise ValueError("Training matrix contains infinite values.")
    if len(X.columns) != len(FEATURE_COLUMNS):
        raise ValueError(f"Feature count mismatch: Expected {len(FEATURE_COLUMNS)}, got {len(X.columns)}")
    if list(X.columns) != FEATURE_COLUMNS:
        raise ValueError("Feature ordering mismatch between training schema and FEATURE_COLUMNS.")
    if len(label_encoder.classes_) != 8:
        raise ValueError(f"Expected 8 fertilizer target classes, got {len(label_encoder.classes_)}")
    if len(crop_encoder.classes_) != 11:
        raise ValueError(f"Expected 11 crop species, got {len(crop_encoder.classes_)}")

    # -----------------------------------------------------------------------
    # Step 2: Strict No-Leakage Preprocessing
    # Split raw data BEFORE fitting the scaler
    # 80/20 Stratified Split: 64,000 Training / 16,000 Holdout Test
    # -----------------------------------------------------------------------
    X_train_raw, X_test_raw, y_train, y_test = train_test_split(
        X, y, test_size=0.20, random_state=42, stratify=y
    )

    print(f"      Training Samples  : {X_train_raw.shape[0]:,}")
    print(f"      Holdout Test Set  : {X_test_raw.shape[0]:,}")

    scaler = RobustScaler()
    X_train = scaler.fit_transform(X_train_raw)  # fit strictly on X_train only
    X_test = scaler.transform(X_test_raw)        # transform X_test without fitting

    # -----------------------------------------------------------------------
    # Step 3: Baseline Model Training (Random Forest 50 Trees)
    # -----------------------------------------------------------------------
    print("[3/5] Fitting Baseline Model (Random Forest 50 Trees, max_depth=10)...")
    baseline = RandomForestClassifier(
        n_estimators=50,
        max_depth=10,
        random_state=42,
        n_jobs=-1
    )
    baseline.fit(X_train, y_train)
    baseline_pred = baseline.predict(X_test)
    baseline_acc = accuracy_score(y_test, baseline_pred)

    # -----------------------------------------------------------------------
    # Step 4: High-Capacity Base Estimators & Weighted Soft-Voting Ensemble
    # -----------------------------------------------------------------------
    print("[4/5] Training Weighted Soft-Voting Ensemble (RF + ET + HGB + MLP)...")

    # Model 1: Random Forest (250 Trees)
    rf = RandomForestClassifier(
        n_estimators=250,
        max_depth=20,
        min_samples_split=2,
        max_features='sqrt',
        criterion='gini',
        random_state=42,
        n_jobs=-1
    )

    # Model 2: Extra Trees (250 Trees)
    et = ExtraTreesClassifier(
        n_estimators=250,
        max_depth=20,
        min_samples_split=2,
        random_state=42,
        n_jobs=-1
    )

    # Model 3: Histogram Gradient Boosting (250 Iterations)
    hgb = HistGradientBoostingClassifier(
        max_iter=250,
        learning_rate=0.07,
        max_leaf_nodes=63,
        l2_regularization=2.0,
        random_state=42
    )

    # Model 4: Deep Neural Network (256 -> 128 -> 64)
    mlp = MLPClassifier(
        hidden_layer_sizes=(256, 128, 64),
        activation='relu',
        alpha=0.001,
        max_iter=200,
        early_stopping=True,
        n_iter_no_change=12,
        random_state=42
    )

    # Weighted Soft-Voting Ensemble
    ensemble = VotingClassifier(
        estimators=[
            ('rf', rf),
            ('et', et),
            ('hgb', hgb),
            ('mlp', mlp)
        ],
        voting='soft',
        weights=[3.5, 3.5, 4.0, 1.5]
    )

    ensemble.fit(X_train, y_train)

    # -----------------------------------------------------------------------
    # Step 5: Comprehensive Holdout Evaluation (16,000 Unseen Test Samples)
    # -----------------------------------------------------------------------
    print("[5/5] Evaluating on 16,000 Holdout Test Samples...")
    y_pred = ensemble.predict(X_test)
    y_prob = ensemble.predict_proba(X_test)

    acc = accuracy_score(y_test, y_pred)
    f3_weighted = fbeta_score(y_test, y_pred, beta=3.0, average='weighted')
    f3_macro = fbeta_score(y_test, y_pred, beta=3.0, average='macro')
    f3_micro = fbeta_score(y_test, y_pred, beta=3.0, average='micro')

    f1_weighted = f1_score(y_test, y_pred, average='weighted')
    f1_macro = f1_score(y_test, y_pred, average='macro')
    test_log_loss = log_loss(y_test, y_prob)

    prec_weighted = precision_score(y_test, y_pred, average='weighted')
    rec_weighted = recall_score(y_test, y_pred, average='weighted')

    top2_correct = sum(1 for i, actual in enumerate(y_test) if actual in np.argsort(y_prob[i])[::-1][:2])
    top2_acc = top2_correct / len(y_test)

    top3_correct = sum(1 for i, actual in enumerate(y_test) if actual in np.argsort(y_prob[i])[::-1][:3])
    top3_acc = top3_correct / len(y_test)

    f3_per_class = fbeta_score(y_test, y_pred, beta=3.0, average=None)
    cm = confusion_matrix(y_test, y_pred)
    clf_report = classification_report(y_test, y_pred, target_names=label_encoder.classes_, digits=4)

    # Feature Importances from RF component
    rf_fitted = ensemble.named_estimators_['rf']
    feature_importances = dict(zip(FEATURE_COLUMNS, rf_fitted.feature_importances_))
    sorted_features = sorted(feature_importances.items(), key=lambda x: x[1], reverse=True)

    elapsed = time.time() - start_time

    # -----------------------------------------------------------------------
    # Detailed Terminal Output & Audit Report
    # -----------------------------------------------------------------------
    print("\n" + "=" * 57)
    print(" FERTILIZER ML TRAINING V2 — MODEL AUDIT")
    print("=" * 57)
    print("\nDataset")
    print("-" * 57)
    print(f"Source Database Records       : 10,853,209")
    print(f"Synthetic Training Corpus     : {df.shape[0]:,}")
    print(f"Training Samples              : {X_train.shape[0]:,}")
    print(f"Holdout Test Samples          : {X_test.shape[0]:,}")
    print(f"Number of Features            : {len(FEATURE_COLUMNS)}")
    print(f"Number of Fertilizer Classes  : {len(label_encoder.classes_)}")

    print("\nPreprocessing")
    print("-" * 57)
    print("Scaler                        : RobustScaler")
    print("Scaler Fit                    : Training Set ONLY")
    print("Categorical Encoder           : LabelEncoder")

    print("\nModels")
    print("-" * 57)
    print("Random Forest                 : 250 trees")
    print("Extra Trees                   : 250 trees")
    print("HistGradientBoosting          : 250 iterations")
    print("MLP                           : 256 -> 128 -> 64")
    print("Voting                        : Soft")
    print("Weights                       : 3.5 / 3.5 / 4.0 / 1.5")

    print("\nBaseline Comparison")
    print("-" * 57)
    print(f"Baseline Random Forest Acc    : {baseline_acc * 100:.3f}%")
    print(f"Weighted Soft-Voting Acc      : {acc * 100:.3f}%")
    print(f"Ensemble Improvement          : +{(acc - baseline_acc) * 100:.3f}%")

    print("\nEvaluation")
    print("-" * 57)
    print(f"Accuracy                      : {acc * 100:.3f}%")
    print(f"Weighted F1                   : {f1_weighted:.5f}")
    print(f"Macro F1                      : {f1_macro:.5f}")
    print(f"Weighted F3                   : {f3_weighted:.5f}")
    print(f"Macro F3                      : {f3_macro:.5f}")
    print(f"Top-2 Accuracy                : {top2_acc * 100:.3f}%")
    print(f"Top-3 Accuracy                : {top3_acc * 100:.3f}%")
    print(f"Log Loss                      : {test_log_loss:.5f}")

    print("\nTraining")
    print("-" * 57)
    print(f"Training Duration             : {elapsed:.2f} seconds")
    print("=" * 57)
    print(" IMPORTANT: Evaluation uses synthetic rule-derived labels.")
    print("=" * 57)

    print("\nDetailed Confusion Matrix:")
    print(cm)

    print("\nDetailed Classification Report:")
    print(clf_report)

    print("\nPer-Class F3-Score Breakdown (beta=3.0):")
    for cls_name, score in zip(label_encoder.classes_, f3_per_class):
        print(f"  * {cls_name:<55}: F3 = {score:.5f} ({score*100:.3f}%)")

    # -----------------------------------------------------------------------
    # Save Artifacts
    # -----------------------------------------------------------------------
    joblib.dump(ensemble, os.path.join(output_dir, "fertilizer_ensemble_model.joblib"))
    joblib.dump(scaler, os.path.join(output_dir, "scaler.joblib"))
    joblib.dump(crop_encoder, os.path.join(output_dir, "crop_encoder.joblib"))
    joblib.dump(label_encoder, os.path.join(output_dir, "label_encoder.joblib"))
    joblib.dump(sorted_features, os.path.join(output_dir, "feature_importances.joblib"))

    print(f"\n[+] All production artifacts successfully saved to {output_dir}/")

    return {
        "accuracy": acc,
        "baseline_accuracy": baseline_acc,
        "f3_weighted": f3_weighted,
        "f3_macro": f3_macro,
        "f1_weighted": f1_weighted,
        "f1_macro": f1_macro,
        "top2_accuracy": top2_acc,
        "top3_accuracy": top3_acc,
        "log_loss": test_log_loss,
        "elapsed_seconds": elapsed,
        "confusion_matrix": cm,
        "feature_importances": sorted_features
    }


if __name__ == "__main__":
    train_production_ensemble()
