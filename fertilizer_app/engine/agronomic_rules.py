"""
Agronomic Rule Engine & ICAR Nutrient Dosage / Split Timing Standards (Metric / Hectare)
=============================================================================
Computes nutrient status classification, crop nutrient deficits, exact fertilizer
formulations, split application schedules, pH amendments, and weather safeguards
per Hectare (and total field requirements).
"""

from typing import Dict, Any, List, Tuple


# ---------------------------------------------------------------------------
# ICAR Soil Nutrient Rating Scales (in kg/ha)
# ---------------------------------------------------------------------------

def classify_nutrient_level(val: float, nutrient: str) -> str:
    """
    Classifies nutrient values (kg/ha) into Low, Medium, or High according to ICAR benchmarks.
    """
    if nutrient == 'nitrogen':
        if val < 280:
            return 'Low'
        elif val <= 560:
            return 'Medium'
        return 'High'
    elif nutrient == 'phosphorus':
        if val < 10:
            return 'Low'
        elif val <= 25:
            return 'Medium'
        return 'High'
    elif nutrient == 'potassium':
        if val < 110:
            return 'Low'
        elif val <= 280:
            return 'Medium'
        return 'High'
    elif nutrient == 'organic_carbon':
        if val < 0.5:
            return 'Low'
        elif val <= 0.75:
            return 'Medium'
        return 'High'
    elif nutrient == 'soil_ph':
        if val < 6.0:
            return 'Acidic'
        elif val <= 7.8:
            return 'Neutral / Optimum'
        return 'Alkaline / Sodic'
    return 'Medium'


def get_deficiency_adjustment_factor(rating: str) -> float:
    """
    ICAR standard dose adjustment based on soil nutrient status:
      - Low status    : Increase recommendation by +25%
      - Medium status : Standard recommendation (100%)
      - High status   : Decrease recommendation by -25%
    """
    if rating == 'Low':
        return 1.25
    elif rating == 'High':
        return 0.75
    return 1.00


# ---------------------------------------------------------------------------
# Soil pH Amendment Engine (per Hectare)
# ---------------------------------------------------------------------------

def calculate_ph_amendment(soil_ph: float, area_ha: float) -> Tuple[str, List[str]]:
    """
    Recommends corrective amendments for acidic or alkaline soils per Hectare.
    """
    advice = ""
    warnings = []

    if soil_ph < 5.5:
        lime_qty = 750 * area_ha
        advice = f"Strongly Acidic Soil (pH {soil_ph:.1f}). Apply Agricultural Limestone (CaCO3) or Dolomite at {lime_qty:.0f} kg ({750} kg/ha) 2-3 weeks before sowing to improve phosphorus availability."
        warnings.append(f"Soil pH is very low ({soil_ph:.1f}). Phosphorus will be locked without liming.")
    elif soil_ph < 6.2:
        lime_qty = 375 * area_ha
        advice = f"Moderately Acidic Soil (pH {soil_ph:.1f}). Apply Agricultural Lime at {lime_qty:.0f} kg ({375} kg/ha) or incorporate well-decomposed FYM/compost."
    elif soil_ph > 8.5:
        gypsum_qty = 850 * area_ha
        advice = f"Alkaline / Sodic Soil (pH {soil_ph:.1f}). Apply Agricultural Gypsum (CaSO4·2H2O) at {gypsum_qty:.0f} kg ({850} kg/ha) with proper leaching to reduce sodium toxicity."
        warnings.append(f"High soil pH ({soil_ph:.1f}) reduces Micronutrient (Zn, Fe) and Phosphorus uptake.")
    elif soil_ph > 7.8:
        advice = f"Slightly Alkaline Soil (pH {soil_ph:.1f}). Use Ammonium Sulphate or SSP as nutrient sources to naturally neutralize root zone."
    else:
        advice = f"Optimal Soil pH ({soil_ph:.1f}). Nutrient uptake efficiency is excellent."

    return advice, warnings


# ---------------------------------------------------------------------------
# Micronutrient Deficiency Assessment (per Hectare)
# ---------------------------------------------------------------------------

def evaluate_micronutrients(soil_data: Dict[str, float], area_ha: float) -> Tuple[str, List[str]]:
    """
    Checks Zinc, Boron, Sulphur, Iron and provides corrective dosages per Hectare.
    """
    advice_list = []
    warnings = []

    zn = soil_data.get('zinc')
    if zn is not None and zn < 0.6:
        zn_qty = 25 * area_ha
        advice_list.append(f"Zinc Deficient ({zn:.2f} ppm < 0.6 ppm): Apply Zinc Sulphate (ZnSO4 21%) @ {zn_qty:.0f} kg ({25} kg/ha) at basal stage.")
        warnings.append("Low Zinc detected: Risk of Khaira disease in Rice and stunted growth.")

    b = soil_data.get('boron')
    if b is not None and b < 0.5:
        b_qty = 5 * area_ha
        advice_list.append(f"Boron Deficient ({b:.2f} ppm < 0.5 ppm): Apply Borax (10.5% B) @ {b_qty:.1f} kg ({5} kg/ha) to prevent fruit cracking and flower drop.")

    s = soil_data.get('sulphur')
    if s is not None and s < 10.0:
        s_qty = 35 * area_ha
        advice_list.append(f"Sulphur Deficient ({s:.1f} ppm < 10 ppm): Apply Elemental Sulphur or Gypsum @ {s_qty:.0f} kg ({35} kg/ha), critical for oilseed and pulse protein synthesis.")

    fe = soil_data.get('iron')
    if fe is not None and fe < 4.5:
        advice_list.append(f"Iron Deficient ({fe:.1f} ppm < 4.5 ppm): Foliar spray of Ferrous Sulphate (FeSO4 0.5%) + 0.1% citric acid at vegetative stage.")

    if not advice_list:
        return "Micronutrient levels (Zn, B, S, Fe) are within adequate agricultural ranges.", warnings

    return " | ".join(advice_list), warnings


# ---------------------------------------------------------------------------
# Weather Safety Evaluator
# ---------------------------------------------------------------------------

def evaluate_weather_suitability(weather_data: Dict[str, float]) -> Tuple[bool, str, List[str]]:
    """
    Evaluates weather suitability for fertilizer application.
    """
    temp = weather_data.get('temperature_c', 28.0)
    rain = weather_data.get('rainfall_forecast_mm', 0.0)
    wind = weather_data.get('wind_speed_kmh', 10.0)

    is_safe = True
    advisory = []
    warnings = []

    if rain >= 25.0:
        is_safe = False
        warnings.append(f"HEAVY RAINFALL ALERT: {rain:.1f} mm forecasted in next 24-48 hours. DO NOT apply nitrogen or water-soluble fertilizers now as surface runoff and leaching will waste nutrients.")
        advisory.append(f"Postpone fertilizer application until rainfall subsides and standing water drains.")
    elif rain >= 8.0:
        advisory.append(f"Moderate rainfall ({rain:.1f} mm) forecasted: Basal fertilizer incorporation is acceptable, but avoid foliar sprays.")
    else:
        advisory.append(f"Weather is favorable ({temp:.1f}°C, {rain:.1f} mm rain). Ideal for fertilizer top-dressing followed by light irrigation.")

    if wind >= 20.0:
        warnings.append(f"High wind speed ({wind:.1f} km/h). Avoid foliar sprays and granular broadcasting to prevent uneven dispersion.")

    if temp >= 38.0:
        warnings.append(f"High temperature ({temp:.1f}°C): Apply Urea during early morning (6-8 AM) or late evening (5-7 PM) to minimize ammonia volatilization loss.")

    return is_safe, " ".join(advisory), warnings


# ---------------------------------------------------------------------------
# Core Agronomic Fertilizer Dosage & Split Calculation (per Hectare)
# ---------------------------------------------------------------------------

def calculate_agronomic_recommendation(
    crop_info: Dict[str, Any],
    soil_data: Dict[str, float],
    area_hectares: float,
    weather_data: Dict[str, float]
) -> Dict[str, Any]:
    """
    Calculates precise fertilizer types, dosage per hectare (kg/ha), total field quantity (kg),
    split-schedule, cost, and human-readable explanation.
    """
    area_ha = float(area_hectares)

    # 1. Base Crop Requirements (Standardized in kg/ha)
    # If crop_info has n_req_kg_per_ha, use directly; otherwise scale standard crop requirements
    crop_n = crop_info.get('n_req_kg_per_ha')
    if crop_n is None:
        crop_n_acre = crop_info.get('n_req_kg_per_acre', 48.0)
        crop_n = crop_n_acre * 2.471 if crop_n_acre < 70 else crop_n_acre

    crop_p = crop_info.get('p_req_kg_per_ha')
    if crop_p is None:
        crop_p_acre = crop_info.get('p_req_kg_per_acre', 24.0)
        crop_p = crop_p_acre * 2.471 if crop_p_acre < 40 else crop_p_acre

    crop_k = crop_info.get('k_req_kg_per_ha')
    if crop_k is None:
        crop_k_acre = crop_info.get('k_req_kg_per_acre', 24.0)
        crop_k = crop_k_acre * 2.471 if crop_k_acre < 40 else crop_k_acre

    crop_name = crop_info.get('name', 'Crop')

    # 2. Soil Nutrient Levels (in kg/ha)
    soil_n_val = soil_data.get('nitrogen', 140.0)
    soil_p_val = soil_data.get('phosphorus', 18.0)
    soil_k_val = soil_data.get('potassium', 180.0)
    soil_ph_val = soil_data.get('soil_ph', 6.8)

    # Classifications
    n_rating = classify_nutrient_level(soil_n_val, 'nitrogen')
    p_rating = classify_nutrient_level(soil_p_val, 'phosphorus')
    k_rating = classify_nutrient_level(soil_k_val, 'potassium')

    # Adjusted Net Nutrient Demands (kg/ha)
    target_n_per_ha = crop_n * get_deficiency_adjustment_factor(n_rating)
    target_p_per_ha = crop_p * get_deficiency_adjustment_factor(p_rating)
    target_k_per_ha = crop_k * get_deficiency_adjustment_factor(k_rating)

    # 3. Fertilizer Selection & Nutrient Balance (per Hectare)
    # Standard Formulation: DAP (18% N, 46% P2O5) + Urea (46% N) + MOP (60% K2O)
    all_warnings = []

    # Step A: Phosphorus fulfilled via DAP
    # DAP contains 46% P2O5 and 18% N
    dap_kg_per_ha = (target_p_per_ha / 0.46) if target_p_per_ha > 0 else 0.0
    n_from_dap = dap_kg_per_ha * 0.18
    p_from_dap = dap_kg_per_ha * 0.46

    # Step B: Remaining Nitrogen fulfilled via Urea (46% N)
    remaining_n_per_ha = max(0.0, target_n_per_ha - n_from_dap)
    urea_kg_per_ha = (remaining_n_per_ha / 0.46) if remaining_n_per_ha > 0 else 0.0
    n_from_urea = urea_kg_per_ha * 0.46

    # Step C: Potassium fulfilled via MOP (60% K2O)
    mop_kg_per_ha = (target_k_per_ha / 0.60) if target_k_per_ha > 0 else 0.0
    k_from_mop = mop_kg_per_ha * 0.60

    # Total quantities for the entire field area (in hectares)
    total_dap = dap_kg_per_ha * area_ha
    total_urea = urea_kg_per_ha * area_ha
    total_mop = mop_kg_per_ha * area_ha

    # Estimated Market Costs (INR) - Approx ₹1,350/50kg DAP, ₹266/45kg Urea, ₹1,700/50kg MOP
    cost_dap = (total_dap / 50.0) * 1350.0
    cost_urea = (total_urea / 45.0) * 266.0
    cost_mop = (total_mop / 50.0) * 1700.0
    total_cost = cost_dap + cost_urea + cost_mop

    # Step D: Split Application Schedule (per Hectare & Field Total)
    urea_split_1 = urea_kg_per_ha * 0.33
    urea_split_2 = urea_kg_per_ha * 0.33
    urea_split_3 = urea_kg_per_ha * 0.34

    split_schedule = [
        {
            "stage": "Basal Application (At Sowing / Transplanting)",
            "timing_days": "Day 0",
            "dap_kg_per_ha": round(dap_kg_per_ha, 1),
            "urea_kg_per_ha": round(urea_split_1, 1),
            "mop_kg_per_ha": round(mop_kg_per_ha, 1),
            "dap_kg_per_acre": round(dap_kg_per_ha / 2.471, 1),
            "urea_kg_per_acre": round(urea_split_1 / 2.471, 1),
            "mop_kg_per_acre": round(mop_kg_per_ha / 2.471, 1),
            "total_stage_kg": round((dap_kg_per_ha + urea_split_1 + mop_kg_per_ha) * area_ha, 1),
            "instructions": "Place fertilizer 5cm below and 5cm beside seed furrow. Incorporate into moist soil."
        },
        {
            "stage": "First Top Dressing (Vegetative / Active Tillering Stage)",
            "timing_days": "25 - 35 Days After Sowing",
            "dap_kg_per_ha": 0.0,
            "urea_kg_per_ha": round(urea_split_2, 1),
            "mop_kg_per_ha": 0.0,
            "dap_kg_per_acre": 0.0,
            "urea_kg_per_acre": round(urea_split_2 / 2.471, 1),
            "mop_kg_per_acre": 0.0,
            "total_stage_kg": round((urea_split_2) * area_ha, 1),
            "instructions": "Broadcast Urea evenly after weeding when soil is moist. Avoid applying if heavy rain is imminent."
        },
        {
            "stage": "Second Top Dressing (Panicle Initiation / Flowering Stage)",
            "timing_days": "50 - 65 Days After Sowing",
            "dap_kg_per_ha": 0.0,
            "urea_kg_per_ha": round(urea_split_3, 1),
            "mop_kg_per_ha": 0.0,
            "dap_kg_per_acre": 0.0,
            "urea_kg_per_acre": round(urea_split_3 / 2.471, 1),
            "mop_kg_per_acre": 0.0,
            "total_stage_kg": round((urea_split_3) * area_ha, 1),
            "instructions": "Apply final nitrogen split to boost grain filling and harvest yield. Follow with light irrigation."
        }
    ]

    # Step E: Secondary & Environmental Checks
    ph_advice, ph_warnings = calculate_ph_amendment(soil_ph_val, area_ha)
    micro_advice, micro_warnings = evaluate_micronutrients(soil_data, area_ha)
    weather_safe, weather_advisory, weather_warnings = evaluate_weather_suitability(weather_data)

    all_warnings.extend(ph_warnings)
    all_warnings.extend(micro_warnings)
    all_warnings.extend(weather_warnings)

    # Step F: Scientifically Honest Rationale & Explainability
    # Extract numerical inputs or record availability
    n_input_str = f"{soil_n_val:.1f} kg/ha" if 'nitrogen' in soil_data else "Unavailable in provided data"
    p_input_str = f"{soil_p_val:.1f} kg/ha" if 'phosphorus' in soil_data else "Unavailable in provided data"
    k_input_str = f"{soil_k_val:.1f} kg/ha" if 'potassium' in soil_data else "Unavailable in provided data"

    oc_val = soil_data.get('organic_carbon_pct')
    if oc_val is not None:
        oc_rating = classify_nutrient_level(float(oc_val), 'organic_carbon')
        oc_str = f"{float(oc_val):.2f}% -> {oc_rating.upper()} (Reference scale: <0.50% Low, 0.50-0.75% Medium, >0.75% High)"
        if oc_rating == 'Low':
            oc_note = "  [Note on Organic Matter: Soil organic carbon is LOW. Regular application of organic manure, compost, or crop residue retention is beneficial for soil biological health and moisture retention. Chemical fertilizers do not directly supply organic carbon.]"
        else:
            oc_note = "  [Note on Organic Matter: Soil organic carbon is in an adequate/high range, supporting microbial nutrient mineralization.]"
    else:
        oc_str = "Unavailable in provided soil data"
        oc_note = ""

    # pH classification
    if soil_ph_val < 6.0:
        ph_cat = "ACIDIC"
        ph_detail = "May restrict phosphorus availability and base cation saturation; liming or alkaline amendments recommended."
    elif soil_ph_val <= 7.5:
        ph_cat = "NEUTRAL / OPTIMAL"
        ph_detail = "Ideal range for standard crop nutrient uptake and microbial activity."
    elif soil_ph_val <= 8.5:
        ph_cat = "MODERATELY ALKALINE"
        ph_detail = "Nutrients remain generally accessible; avoid excessive alkaline-forming materials."
    else:
        ph_cat = "STRONGLY ALKALINE / SODIC"
        ph_detail = "High alkalinity may reduce micronutrient bioavailability (Zn, Fe); gypsum application recommended."

    # EC classification
    ec_val = soil_data.get('electrical_conductivity')
    if ec_val is not None:
        ec_f = float(ec_val)
        if ec_f <= 1.0:
            ec_cat = "SALT-FREE / NORMAL"
            ec_detail = "No osmotic salinity stress on root nutrient absorption."
        elif ec_f <= 2.0:
            ec_cat = "SLIGHTLY SALINE"
            ec_detail = "Slight salinity present; ensure adequate drainage."
        else:
            ec_cat = "SALINE"
            ec_detail = "Elevated salinity may restrict root water and nutrient uptake."
        ec_str = f"{ec_f:.2f} dS/m -> {ec_cat} (Reference scale: <1.0 dS/m Salt-free). {ec_detail}"
    else:
        ec_str = "Unavailable in provided soil data"

    # Specific Fertilizer Justifications based on actual values
    # Phosphorus / DAP logic
    if p_rating == 'High':
        p_justification = (
            f"Available soil phosphorus is already HIGH ({soil_p_val:.1f} kg/ha). There is no soil phosphorus deficiency. "
            f"The model recommends {dap_kg_per_ha:.1f} kg/ha DAP primarily to supply starter basal nitrogen ({n_from_dap:.1f} kg N) "
            f"and minimal starter phosphate ({p_from_dap:.1f} kg P2O5) for early root establishment, while relying largely on the existing high soil phosphorus pool."
        )
    elif p_rating == 'Low':
        p_justification = (
            f"Available soil phosphorus is LOW ({soil_p_val:.1f} kg/ha). "
            f"The model recommends {dap_kg_per_ha:.1f} kg/ha DAP to supply {p_from_dap:.1f} kg P2O5 to correct the soil deficit and support root development."
        )
    else:
        p_justification = (
            f"Available soil phosphorus is in the MEDIUM range ({soil_p_val:.1f} kg/ha). "
            f"The model recommends {dap_kg_per_ha:.1f} kg/ha DAP to meet standard crop demand ({p_from_dap:.1f} kg P2O5) and maintain soil fertility reserves."
        )

    # Nitrogen / Urea logic
    n_justification = (
        f"Available soil nitrogen is {n_rating.upper()} ({soil_n_val:.1f} kg/ha), leading to an adjusted crop target of {target_n_per_ha:.1f} kg/ha N. "
        f"Accounting for {n_from_dap:.1f} kg N provided via DAP, the remaining {remaining_n_per_ha:.1f} kg/ha N is supplied through {urea_kg_per_ha:.1f} kg/ha Urea, "
        f"applied in split doses across growth stages to improve Nitrogen Use Efficiency (NUE) and reduce losses."
    )

    # Potassium / MOP logic
    if k_rating == 'High':
        k_justification = (
            f"Available soil potassium is already HIGH ({soil_k_val:.1f} kg/ha). There is no soil potassium deficiency. "
            f"The model recommends a maintenance dosage of {mop_kg_per_ha:.1f} kg/ha MOP based on crop removal rates to support pod/grain filling, "
            f"rather than to correct a soil deficiency."
        )
    elif k_rating == 'Low':
        k_justification = (
            f"Available soil potassium is LOW ({soil_k_val:.1f} kg/ha). "
            f"The model recommends {mop_kg_per_ha:.1f} kg/ha MOP to supply {k_from_mop:.1f} kg K2O to correct the soil deficit and enhance plant vigor."
        )
    else:
        k_justification = (
            f"Available soil potassium is in the MEDIUM range ({soil_k_val:.1f} kg/ha). "
            f"The model recommends {mop_kg_per_ha:.1f} kg/ha MOP to supply {k_from_mop:.1f} kg K2O to meet standard crop uptake requirements."
        )

    explanation_sections = [
        f"1. SOIL NUTRIENT STATUS (Input Data vs Reference Scale for {crop_name}):",
        f"  • Available Nitrogen (N)   : {n_input_str} -> {n_rating.upper()} (Reference: <280 Low, 280-560 Medium, >560 High)",
        f"  • Available Phosphorus (P) : {p_input_str} -> {p_rating.upper()} (Reference: <10 Low, 10-25 Medium, >25 High)",
        f"  • Available Potassium (K)  : {k_input_str} -> {k_rating.upper()} (Reference: <110 Low, 110-280 Medium, >280 High)",
        f"  • Soil Organic Carbon (OC) : {oc_str}",
    ]
    if oc_note:
        explanation_sections.append(oc_note)

    explanation_sections.extend([
        f"  • Soil pH                  : {soil_ph_val:.1f} -> {ph_cat} (Reference: 6.0-7.5 Neutral, 7.5-8.5 Moderately Alkaline, >8.5 Alkaline). {ph_detail}",
        f"  • Electrical Cond. (EC)    : {ec_str}",
        "",
        f"2. MODEL PREDICTION & FERTILIZER RECOMMENDATION JUSTIFICATION ({area_ha:.1f} Hectare Plot):",
        f"  • Phosphorus Management: {p_justification}",
        f"  • Nitrogen Management  : {n_justification}",
        f"  • Potassium Management : {k_justification}",
        "",
        "3. SUMMARY:",
        "  The recommended fertilizer quantities are generated by the AI model based on crop requirements and soil status. Soil test values reflect baseline fertility, while the fertilizer schedule provides targeted supplemental nutrients for the target crop."
    ])

    explanation = "\n".join(explanation_sections)


    supplemental = [
        {
            "name": "Urea (46% N)",
            "dosage_kg_per_ha": round(urea_kg_per_ha, 1),
            "dosage_kg_per_acre": round(urea_kg_per_ha / 2.471, 1),
            "total_kg": round(total_urea, 1),
            "role": "Top-dressing nitrogen source"
        },
        {
            "name": "Muriate of Potash - MOP (60% K2O)",
            "dosage_kg_per_ha": round(mop_kg_per_ha, 1),
            "dosage_kg_per_acre": round(mop_kg_per_ha / 2.471, 1),
            "total_kg": round(total_mop, 1),
            "role": "Basal potassium source for stress resistance"
        }
    ]

    total_all_fertilizers = total_dap + total_urea + total_mop
    total_dosage_per_ha = dap_kg_per_ha + urea_kg_per_ha + mop_kg_per_ha

    return {
        "primary_fertilizer": f"DAP ({dap_kg_per_ha:.1f} kg/ha) + Urea ({urea_kg_per_ha:.1f} kg/ha) + MOP ({mop_kg_per_ha:.1f} kg/ha)",
        "dosage_kg_per_ha": round(total_dosage_per_ha, 1),
        "dosage_kg_per_acre": round(total_dosage_per_ha / 2.471, 1),
        "total_quantity_kg": round(total_all_fertilizers, 1),
        "dap_kg_per_ha": round(dap_kg_per_ha, 1),
        "urea_kg_per_ha": round(urea_kg_per_ha, 1),
        "mop_kg_per_ha": round(mop_kg_per_ha, 1),
        "total_dap_kg": round(total_dap, 1),
        "total_urea_kg": round(total_urea, 1),
        "total_mop_kg": round(total_mop, 1),
        "n_contribution_kg": round((n_from_dap + n_from_urea) * area_ha, 1),
        "p_contribution_kg": round(p_from_dap * area_ha, 1),
        "k_contribution_kg": round(k_from_mop * area_ha, 1),
        "supplemental_fertilizers": supplemental,
        "split_schedule": split_schedule,
        "ph_amendment": ph_advice,
        "micronutrient_advice": micro_advice,
        "weather_advisory": weather_advisory,
        "is_weather_safe": weather_safe,
        "warnings": all_warnings,
        "explanation": explanation,
        "estimated_cost_inr": round(total_cost, 2),
        "nutrient_ratings": {
            "nitrogen": n_rating,
            "phosphorus": p_rating,
            "potassium": k_rating,
            "organic_carbon": classify_nutrient_level(soil_data.get('organic_carbon_pct', 0.55), 'organic_carbon'),
            "soil_ph": classify_nutrient_level(soil_ph_val, 'soil_ph')
        },
        "target_demands_kg_per_ha": {
            "n": round(target_n_per_ha, 1),
            "p": round(target_p_per_ha, 1),
            "k": round(target_k_per_ha, 1)
        },
        "target_demands_kg_per_acre": {
            "n": round(target_n_per_ha / 2.471, 1),
            "p": round(target_p_per_ha / 2.471, 1),
            "k": round(target_k_per_ha / 2.471, 1)
        }
    }
