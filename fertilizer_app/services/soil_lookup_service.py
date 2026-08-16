"""
National Soil Database (10.85M Records) Lookup Service
======================================================
Provides sub-millisecond indexed administrative queries and empirical soil
nutrient benchmark aggregations across Indian States, Districts, Blocks, and Villages.
"""

import sqlite3
from typing import List, Dict, Any
from pathlib import Path

DB_PATH = Path(__file__).resolve().parent.parent.parent / 'data' / 'agriculture.db'


def _get_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def get_available_states() -> List[str]:
    """Returns sorted list of distinct Indian states."""
    conn = _get_connection()
    try:
        cur = conn.cursor()
        cur.execute("SELECT DISTINCT state_name FROM soil_records WHERE state_name IS NOT NULL ORDER BY state_name ASC")
        return [row[0] for row in cur.fetchall() if row[0]]
    finally:
        conn.close()


def get_districts_by_state(state_name: str) -> List[str]:
    """Returns sorted list of districts in the specified state."""
    conn = _get_connection()
    try:
        cur = conn.cursor()
        cur.execute(
            "SELECT DISTINCT district_name FROM soil_records WHERE state_name = ? AND district_name IS NOT NULL ORDER BY district_name ASC",
            (state_name,)
        )
        return [row[0] for row in cur.fetchall() if row[0]]
    finally:
        conn.close()


def get_blocks_by_district(state_name: str, district_name: str) -> List[str]:
    """Returns sorted list of blocks/talukas in the specified district."""
    conn = _get_connection()
    try:
        cur = conn.cursor()
        cur.execute(
            "SELECT DISTINCT block_name FROM soil_records WHERE state_name = ? AND district_name = ? AND block_name IS NOT NULL ORDER BY block_name ASC",
            (state_name, district_name)
        )
        return [row[0] for row in cur.fetchall() if row[0]]
    finally:
        conn.close()


def get_villages_by_block(state_name: str, district_name: str, block_name: str) -> List[str]:
    """Returns sorted list of villages in the specified block."""
    conn = _get_connection()
    try:
        cur = conn.cursor()
        cur.execute(
            "SELECT DISTINCT village_name FROM soil_records WHERE state_name = ? AND district_name = ? AND block_name = ? AND village_name IS NOT NULL ORDER BY village_name ASC LIMIT 200",
            (state_name, district_name, block_name)
        )
        return [row[0] for row in cur.fetchall() if row[0]]
    finally:
        conn.close()


def get_soil_benchmark_profile(state_name: str, district_name: str, block_name: str = None, village_name: str = None) -> Dict[str, Any]:
    """
    Computes weighted empirical soil nutrient ratings (N, P, K, pH, OC, EC, Zn, B, S, Fe)
    aggregated directly from the 10.85M national soil test database.
    """
    conn = _get_connection()
    try:
        cur = conn.cursor()
        query = """
            SELECT nutrient_name, nutrient_level, SUM(value) as total_samples
            FROM soil_records
            WHERE state_name = ? AND district_name = ?
        """
        params = [state_name, district_name]

        if block_name:
            query += " AND block_name = ?"
            params.append(block_name)
        if village_name:
            query += " AND village_name = ?"
            params.append(village_name)

        query += " GROUP BY nutrient_name, nutrient_level"
        cur.execute(query, params)
        rows = cur.fetchall()

        # Aggregate distributions by nutrient
        nutrients = {}
        for r in rows:
            nut = r['nutrient_name']
            lvl = r['nutrient_level']
            val = r['total_samples']
            if nut not in nutrients:
                nutrients[nut] = {}
            nutrients[nut][lvl] = nutrients[nut].get(lvl, 0) + val

        # Estimate quantitative midpoints
        # Nitrogen (kg/ha)
        n_dist = nutrients.get('Nitrogen', {})
        n_low = n_dist.get('Low', 0)
        n_med = n_dist.get('Medium', 0)
        n_high = n_dist.get('High', 0)
        n_total = n_low + n_med + n_high
        if n_total > 0:
            nitrogen = round((n_low * 180.0 + n_med * 380.0 + n_high * 620.0) / n_total, 1)
        else:
            nitrogen = 240.0

        # Phosphorus (kg/ha)
        p_dist = nutrients.get('Phosphorus', {})
        p_low = p_dist.get('Low', 0)
        p_med = p_dist.get('Medium', 0)
        p_high = p_dist.get('High', 0)
        p_total = p_low + p_med + p_high
        if p_total > 0:
            phosphorus = round((p_low * 8.0 + p_med * 18.0 + p_high * 35.0) / p_total, 1)
        else:
            phosphorus = 18.0

        # Potassium (kg/ha)
        k_dist = nutrients.get('Potassium', {})
        k_low = k_dist.get('Low', 0)
        k_med = k_dist.get('Medium', 0)
        k_high = k_dist.get('High', 0)
        k_total = k_low + k_med + k_high
        if k_total > 0:
            potassium = round((k_low * 95.0 + k_med * 210.0 + k_high * 380.0) / k_total, 1)
        else:
            potassium = 190.0

        # Soil pH
        ph_dist = nutrients.get('Soil Ph', {})
        ph_acid = ph_dist.get('Acidic', 0)
        ph_neut = ph_dist.get('Neutral', 0)
        ph_alk = ph_dist.get('Alkaline', 0)
        ph_total = ph_acid + ph_neut + ph_alk
        if ph_total > 0:
            soil_ph = round((ph_acid * 5.4 + ph_neut * 6.9 + ph_alk * 8.4) / ph_total, 2)
        else:
            soil_ph = 6.80

        # Organic Carbon (%)
        oc_dist = nutrients.get('Organic Carbon', {})
        oc_low = oc_dist.get('Low', 0)
        oc_med = oc_dist.get('Medium', 0)
        oc_high = oc_dist.get('High', 0)
        oc_total = oc_low + oc_med + oc_high
        if oc_total > 0:
            oc_pct = round((oc_low * 0.35 + oc_med * 0.60 + oc_high * 0.95) / oc_total, 2)
        else:
            oc_pct = 0.55

        # Electrical Conductivity (dS/m)
        ec_dist = nutrients.get('Electrical Conductivity', {})
        ec_sal = ec_dist.get('Saline', 0)
        ec_nonsal = ec_dist.get('Non Saline', 0)
        ec_total = ec_sal + ec_nonsal
        if ec_total > 0:
            ec_val = round((ec_nonsal * 0.35 + ec_sal * 2.2) / ec_total, 2)
        else:
            ec_val = 0.40

        # Zinc (ppm)
        zn_dist = nutrients.get('Zinc', {})
        zn_def = zn_dist.get('Deficient', 0)
        zn_suf = zn_dist.get('Sufficient', 0)
        zn_total = zn_def + zn_suf
        zinc = round((zn_def * 0.4 + zn_suf * 1.2) / zn_total, 2) if zn_total > 0 else 0.85

        # Boron (ppm)
        b_dist = nutrients.get('Boron', {})
        b_def = b_dist.get('Deficient', 0)
        b_suf = b_dist.get('Sufficient', 0)
        b_total = b_def + b_suf
        boron = round((b_def * 0.3 + b_suf * 0.8) / b_total, 2) if b_total > 0 else 0.50

        # Sulphur (ppm)
        s_dist = nutrients.get('Sulphur', {})
        s_def = s_dist.get('Deficient', 0)
        s_suf = s_dist.get('Sufficient', 0)
        s_total = s_def + s_suf
        sulphur = round((s_def * 6.5 + s_suf * 18.0) / s_total, 1) if s_total > 0 else 14.0

        # Iron (ppm)
        fe_dist = nutrients.get('Iron', {})
        fe_def = fe_dist.get('Deficient', 0)
        fe_suf = fe_dist.get('Sufficient', 0)
        fe_total = fe_def + fe_suf
        iron = round((fe_def * 2.8 + fe_suf * 8.5) / fe_total, 1) if fe_total > 0 else 6.5

        return {
            "state_name": state_name,
            "district_name": district_name,
            "block_name": block_name,
            "village_name": village_name,
            "nitrogen": nitrogen,
            "phosphorus": phosphorus,
            "potassium": potassium,
            "soil_ph": soil_ph,
            "organic_carbon_pct": oc_pct,
            "electrical_conductivity": ec_val,
            "zinc": zinc,
            "boron": boron,
            "sulphur": sulphur,
            "iron": iron,
            "source": f"National Soil Health Card Database (10.85M Samples)"
        }
    finally:
        conn.close()
