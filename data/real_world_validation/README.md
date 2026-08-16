# Real-World Agricultural Validation Framework

This directory outlines the protocol, data schema, and scientific methodology for conducting **independent real-world validation** of the Precision Fertilizer Recommendation Engine.

---

## 1. Scientific Validation Levels

The platform maintains a strict separation between four validation dimensions:

| Level | Validation Scope | Objective | Ground Truth Source | Current Status |
| :--- | :--- | :--- | :--- | :--- |
| **Level A** | **Synthetic Rule Reproduction** | Verifies that the ML meta-ensemble accurately learns and reproduces the multi-variable ICAR agronomic formulation rules across 44 features. | 80,000 synthetic corpus parameterized by 10.85M national soil statistics | **PASSED** (99.89% Accuracy, 5-Fold CV Stable) |
| **Level B** | **Real Soil Distribution Validation** | Evaluates whether the soil chemical features used in training match empirical laboratory distributions and geographic coverage across Indian states. | 10,853,209 National Soil Health Database records (`data/agriculture.db`) | **EVALUATED** (Distributions & Regional coverage verified) |
| **Level C** | **Expert Agronomist Validation** | Compares AI recommendations against blind prescriptions from certified ICAR / State Agricultural University (SAU) agronomists. | Certified expert case studies (`data/expert_validation/*.csv`) | **INFRASTRUCTURE READY** (Pending expert submissions) |
| **Level D** | **Field Trial Yield Outcome Validation** | Measures actual crop harvest yield changes ($\Delta\text{ tonnes/ha}$) and nutrient recovery efficiency from randomized field trials. | Longitudinal multi-season farm field trial datasets | **NOT YET VALIDATED** (Field trials required) |

---

## 2. Real Soil Database Schema Audit (`data/agriculture.db`)

The national soil dataset contains **10,853,209** government laboratory test records with the following attributes:

* **Geographic Hierarchy**: `state_name`, `state_code`, `district_name`, `district_code`, `block_name`, `village_name`
* **Temporal Tracking**: `year` (2023-24, 2024-25)
* **Analyzed Nutrients**:
  * **Primary Macronutrients**: Nitrogen ($N$), Phosphorus ($P$), Potassium ($K$)
  * **Soil Properties**: Soil pH ($1-14$), Organic Carbon ($\% \text{ OC}$), Electrical Conductivity ($\text{EC in dS/m}$)
  * **Secondary & Micronutrients**: Zinc ($\text{Zn}$), Boron ($\text{B}$), Sulphur ($\text{S}$), Iron ($\text{Fe}$), Manganese ($\text{Mn}$), Copper ($\text{Cu}$)
* **Categorical Frequency**: `nutrient_level` (Low, Medium, High, Acidic, Neutral, Alkaline, Non-Saline, Saline, Deficient, Sufficient) and sample `value` counts.

### Critical Note on Ground Truth:
The national soil database provides baseline soil chemistry distributions. It **does not contain individual farmer historical harvest yield logs, specific purchase receipts, or farmer historical fertilizer quantities**. Therefore, calculating "real-world prediction accuracy" against this database without ground-truth outcome labels is scientifically invalid and prohibited.

---

## 3. How to Supply Expert Agronomist Validation Datasets

To evaluate the model against real certified agricultural experts:
1. Open the template at [`data/expert_validation/expert_validation_template.csv`](file:///d:/PROJECTS/HACKATHON/data/expert_validation/expert_validation_template.csv).
2. Populate real agronomist case studies with soil test inputs, crop, weather context, and expert-recommended fertilizer formulations.
3. Save the file in `data/expert_validation/expert_cases_YYYYMMDD.csv`.
4. Run:
   ```bash
   python fertilizer_app/engine/validate_real_world.py
   ```
5. The validation suite will automatically compute Top-1, Top-2, Top-3 expert agreement, confusion matrices, and macro $F_1$ scores.
