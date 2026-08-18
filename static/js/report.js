/**
 * KrishiKisan AI • Recommendation Report Script
 * Loads and renders precision fertilizer report on /report/ with full multilingual support
 */

let cachedReportData = null;

document.addEventListener('DOMContentLoaded', () => {
    loadReportData();

    if (window.i18n) {
        window.i18n.onLanguageChange(() => {
            if (cachedReportData) {
                renderReport(cachedReportData);
            }
        });
    }
});

async function loadReportData() {
    const emptyState = document.getElementById('reportEmptyState');
    const reportContent = document.getElementById('reportContent');

    // 1. Try to load from sessionStorage (saved during generation from dashboard)
    const sessionData = sessionStorage.getItem('currentRecommendation');
    if (sessionData) {
        try {
            const data = JSON.parse(sessionData);
            if (data && (data.agronomic_recommendation || data.primary_fertilizer)) {
                cachedReportData = data;
                renderReport(data);
                return;
            }
        } catch (e) {
            console.error("Error parsing session recommendation:", e);
        }
    }

    // 2. Try to load from URL parameter (?id=123)
    const urlParams = new URLSearchParams(window.location.search);
    const recId = urlParams.get('id');

    if (recId) {
        try {
            const res = await fetch(`/api/recommendations/${recId}/`);
            if (res.ok) {
                const data = await res.json();
                cachedReportData = data;
                renderReport(data);
                return;
            }
        } catch (err) {
            console.error("Error fetching recommendation by ID:", err);
        }
    }

    // 3. Fallback: No data available -> Show graceful empty state
    if (emptyState) emptyState.style.display = 'block';
    if (reportContent) reportContent.style.display = 'none';
}

function renderReport(data) {
    const emptyState = document.getElementById('reportEmptyState');
    const reportContent = document.getElementById('reportContent');

    if (emptyState) emptyState.style.display = 'none';
    if (reportContent) reportContent.style.display = 'block';

    const agri = data.agronomic_recommendation || {};
    const ml = data.ml_prediction || {};
    const soil = data.soil_profile || {};
    const weather = data.weather_conditions || {};

    const recId = data.recommendation_id || data.id || '-';
    const rawCropName = data.crop_name || data.crop?.name || 'Crop';
    const cropName = window.i18n ? window.i18n.translateCrop(rawCropName) : rawCropName;
    const areaHa = parseFloat(data.area_hectares || data.field?.area_hectares || 1.0);
    const areaAcres = (areaHa * 2.471).toFixed(1);
    
    const rawSoilType = soil.soil_type || data.field?.soil_type || 'Loamy Soil';
    let soilType = rawSoilType;
    if (window.i18n) {
        if (rawSoilType.toLowerCase().includes('loam') && !rawSoilType.toLowerCase().includes('sandy')) soilType = window.i18n.t('soil.loamy');
        else if (rawSoilType.toLowerCase().includes('black')) soilType = window.i18n.t('soil.black');
        else if (rawSoilType.toLowerCase().includes('red')) soilType = window.i18n.t('soil.red');
        else if (rawSoilType.toLowerCase().includes('sandy')) soilType = window.i18n.t('soil.sandyLoam');
        else if (rawSoilType.toLowerCase().includes('clay')) soilType = window.i18n.t('soil.clayey');
        else if (rawSoilType.toLowerCase().includes('laterite')) soilType = window.i18n.t('soil.laterite');
    }

    const rawSource = soil.source || data.field?.source || (window.i18n ? window.i18n.t('report.fieldTest') : 'Field Test / Diagnostic Input');
    const source = window.i18n ? window.i18n.translateSource(rawSource) : rawSource;
    const createdDate = data.created_at ? new Date(data.created_at).toLocaleDateString('en-IN', {
        year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    }) : new Date().toLocaleDateString('en-IN', {
        year: 'numeric', month: 'short', day: 'numeric'
    });

    // 1. Meta Headers
    if (document.getElementById('repId')) document.getElementById('repId').textContent = `#${recId}`;
    if (document.getElementById('repDate')) document.getElementById('repDate').textContent = createdDate;
    if (document.getElementById('repCrop')) document.getElementById('repCrop').textContent = cropName;
    if (document.getElementById('repArea')) document.getElementById('repArea').textContent = `${areaHa.toFixed(1)} ha (~${areaAcres} acres)`;
    if (document.getElementById('repSoilType')) document.getElementById('repSoilType').textContent = soilType;
    if (document.getElementById('repSource')) document.getElementById('repSource').textContent = source;

    // 2. Primary Recommendation Banner
    const rawPrimaryFert = agri.primary_fertilizer || data.primary_fertilizer || '-';
    const primaryFert = window.i18n ? window.i18n.translateFertilizer(rawPrimaryFert) : rawPrimaryFert;
    const totalCost = parseFloat(agri.estimated_cost_inr || data.estimated_cost_inr || 0);
    const totalQty = parseFloat(agri.total_quantity_kg || data.total_quantity_kg || 0);
    const confidencePct = parseFloat(ml.confidence_pct || data.ai_confidence || 95.0);

    if (document.getElementById('repPrimaryFertilizer')) document.getElementById('repPrimaryFertilizer').textContent = primaryFert;
    if (document.getElementById('repTotalCost')) document.getElementById('repTotalCost').textContent = `₹${totalCost.toLocaleString('en-IN')}`;
    if (document.getElementById('repTotalQuantity')) document.getElementById('repTotalQuantity').textContent = `${totalQty} kg`;
    if (document.getElementById('repConfidence')) document.getElementById('repConfidence').textContent = `${confidencePct.toFixed(1)}%`;
    if (document.getElementById('repWeatherSafety')) {
        const safeText = window.i18n ? window.i18n.t('report.windowOptimal') : "Optimal / Safe";
        const cautionText = window.i18n ? window.i18n.t('report.windowCaution') : "Caution Advised";
        document.getElementById('repWeatherSafety').textContent = weather.is_safe_to_apply === false ? cautionText : safeText;
    }

    // 3. Warnings
    const rawWarnings = agri.warnings || [];
    const warningsContainer = document.getElementById('repWarningsContainer');
    if (warningsContainer) {
        warningsContainer.innerHTML = '';
        if (rawWarnings.length > 0) {
            const warnTitle = window.i18n ? window.i18n.t('report.warningsTitle') : 'Agronomic & Environmental Advisory Warnings';
            const warnBox = document.createElement('div');
            warnBox.style.cssText = "background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 1rem; margin-bottom: 1.25rem;";
            
            const translatedWarnings = rawWarnings.map(w => window.i18n ? window.i18n.translateWarning(w) : w);
            warnBox.innerHTML = `
                <div style="font-weight: 700; color: #92400e; margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.4rem;">
                    <span>⚠️</span> ${warnTitle}
                </div>
                <ul style="padding-left: 1.2rem; font-size: 0.85rem; color: #78350f; line-height: 1.5;">
                    ${translatedWarnings.map(w => `<li>${w}</li>`).join('')}
                </ul>
            `;
            warningsContainer.appendChild(warnBox);
        }
    }

    // 4. Soil Nutrient Status
    const nVal = parseFloat(soil.nitrogen || 140.0);
    const pVal = parseFloat(soil.phosphorus || 18.0);
    const kVal = parseFloat(soil.potassium || 180.0);
    const phVal = parseFloat(soil.soil_ph || 6.8);
    const ocVal = parseFloat(soil.organic_carbon_pct || 0.55);
    const ecVal = parseFloat(soil.electrical_conductivity || 0.45);

    const ratings = agri.nutrient_ratings || {};
    const rawNRating = (ratings.nitrogen || (nVal < 280 ? 'Low' : (nVal <= 560 ? 'Medium' : 'High'))).toUpperCase();
    const rawPRating = (ratings.phosphorus || (pVal < 10 ? 'Low' : (pVal <= 25 ? 'Medium' : 'High'))).toUpperCase();
    const rawKRating = (ratings.potassium || (kVal < 110 ? 'Low' : (kVal <= 280 ? 'Medium' : 'High'))).toUpperCase();

    if (document.getElementById('repNVal')) document.getElementById('repNVal').textContent = `(${nVal.toFixed(1)} kg/ha)`;
    if (document.getElementById('repPVal')) document.getElementById('repPVal').textContent = `(${pVal.toFixed(1)} kg/ha)`;
    if (document.getElementById('repKVal')) document.getElementById('repKVal').textContent = `(${kVal.toFixed(1)} kg/ha)`;

    const setBadge = (elId, status) => {
        const el = document.getElementById(elId);
        if (!el) return;
        el.textContent = window.i18n ? window.i18n.translateRating(status) : status;
        if (status === 'LOW' || status === 'DEFICIENT') el.className = 'badge badge-danger';
        else if (status === 'HIGH' || status === 'ALKALINE') el.className = 'badge badge-accent';
        else el.className = 'badge badge-success';
    };

    setBadge('repNStatus', rawNRating);
    setBadge('repPStatus', rawPRating);
    setBadge('repKStatus', rawKRating);

    // Progress Bar Fills
    if (document.getElementById('repNBar')) document.getElementById('repNBar').style.width = `${Math.min(100, Math.max(15, (nVal / 560) * 100))}%`;
    if (document.getElementById('repPBar')) document.getElementById('repPBar').style.width = `${Math.min(100, Math.max(15, (pVal / 35) * 100))}%`;
    if (document.getElementById('repKBar')) document.getElementById('repKBar').style.width = `${Math.min(100, Math.max(15, (kVal / 280) * 100))}%`;

    // Secondary nutrients
    const phRating = phVal < 6.0 ? (window.i18n ? window.i18n.t('report.statusAcidic') : 'Acidic') : (phVal > 7.8 ? (window.i18n ? window.i18n.t('report.statusAlkaline') : 'Alkaline') : (window.i18n ? window.i18n.t('report.statusNeutral') : 'Neutral/Optimum'));
    const ocRating = ocVal < 0.5 ? (window.i18n ? window.i18n.t('report.statusLow') : 'Low') : (window.i18n ? window.i18n.t('report.statusAdequate') : 'Adequate');
    const ecRating = ecVal <= 1.0 ? (window.i18n ? window.i18n.t('report.statusSaltFree') : 'Salt-Free') : (window.i18n ? window.i18n.t('report.statusSaline') : 'Saline');

    if (document.getElementById('repPhVal')) document.getElementById('repPhVal').textContent = `${phVal.toFixed(1)} (${phRating})`;
    if (document.getElementById('repOcVal')) document.getElementById('repOcVal').textContent = `${ocVal.toFixed(2)}% (${ocRating})`;
    if (document.getElementById('repEcVal')) document.getElementById('repEcVal').textContent = `${ecVal.toFixed(2)} dS/m (${ecRating})`;
    if (document.getElementById('repZnVal')) document.getElementById('repZnVal').textContent = `${parseFloat(soil.zinc || 0.80).toFixed(2)} ppm`;
    if (document.getElementById('repBVal')) document.getElementById('repBVal').textContent = `${parseFloat(soil.boron || 0.50).toFixed(2)} ppm`;
    if (document.getElementById('repSVal')) document.getElementById('repSVal').textContent = `${parseFloat(soil.sulphur || 12.0).toFixed(1)} ppm`;
    if (document.getElementById('repFeVal')) document.getElementById('repFeVal').textContent = `${parseFloat(soil.iron || 6.0).toFixed(1)} ppm`;

    // 5. Split Application Schedule
    const splits = agri.split_schedule || data.split_schedule || [];
    const timelineContainer = document.getElementById('repSplitTimeline');
    if (timelineContainer) {
        timelineContainer.innerHTML = '';
        if (splits.length === 0) {
            const defSplit = window.i18n ? window.i18n.t('report.defaultSplitText') : 'Standard basal and top-dressing application recommended.';
            timelineContainer.innerHTML = `<p style="color:var(--text-muted); font-size:0.85rem;">${defSplit}</p>`;
        } else {
            splits.forEach((split, idx) => {
                const item = document.createElement('div');
                item.className = 'timeline-item';
                const totalStageKg = split.total_stage_kg !== undefined ? `${split.total_stage_kg} kg` : (split.total_dose_kg !== undefined ? `${split.total_dose_kg} kg` : '');
                
                // Localize stage name
                let stageName = split.stage;
                let timingText = split.timing_days;
                let instrText = split.instructions || split.application_method || '';

                if (window.i18n) {
                    if (idx === 0 || stageName.toLowerCase().includes('basal')) {
                        stageName = window.i18n.t('stage.basal');
                        timingText = window.i18n.t('timing.basal');
                        instrText = window.i18n.t('instr.basal');
                    } else if (idx === 1 || stageName.toLowerCase().includes('first')) {
                        stageName = window.i18n.t('stage.top1');
                        timingText = window.i18n.t('timing.top1');
                        instrText = window.i18n.t('instr.top1');
                    } else if (idx === 2 || stageName.toLowerCase().includes('second')) {
                        stageName = window.i18n.t('stage.top2');
                        timingText = window.i18n.t('timing.top2');
                        instrText = window.i18n.t('instr.top2');
                    }
                }

                const timingLabel = window.i18n ? window.i18n.t('report.timing') : 'Timing:';
                const instrLabel = window.i18n ? window.i18n.t('report.instructions') : 'Instructions:';

                item.innerHTML = `
                    <div class="timeline-step">${idx + 1}</div>
                    <div class="timeline-content">
                        <div class="timeline-title" style="display:flex; justify-content:space-between; align-items:center;">
                            <span>${stageName}</span>
                            <span style="color:var(--primary); font-weight:800; font-size:0.95rem;">${totalStageKg}</span>
                        </div>
                        <div style="font-size:0.8rem; color:var(--text-muted); margin: 0.2rem 0;">
                            <strong>${timingLabel}</strong> ${timingText}
                        </div>
                        ${split.dap_kg_per_ha !== undefined ? `
                            <div style="font-size:0.8rem; color:var(--text-main); margin: 0.25rem 0; background: #f8fafc; padding: 6px 10px; border-radius: 6px; border: 1px solid var(--border-color);">
                                ${split.dap_kg_per_ha > 0 ? `<span>• DAP: <strong>${split.dap_kg_per_ha} kg/ha</strong> (${split.dap_kg_per_acre} kg/acre)</span> ` : ''}
                                ${split.urea_kg_per_ha > 0 ? `<span>• Urea: <strong>${split.urea_kg_per_ha} kg/ha</strong> (${split.urea_kg_per_acre} kg/acre)</span> ` : ''}
                                ${split.mop_kg_per_ha > 0 ? `<span>• MOP: <strong>${split.mop_kg_per_ha} kg/ha</strong> (${split.mop_kg_per_acre} kg/acre)</span>` : ''}
                            </div>
                        ` : ''}
                        <div class="timeline-desc" style="font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem;">
                            <strong>${instrLabel}</strong> ${instrText}
                        </div>
                    </div>
                `;
                timelineContainer.appendChild(item);
            });
        }
    }

    // 6. Amendments (Fully localized)
    const rawPhAdvice = agri.ph_amendment || data.ph_amendment || "Optimal soil pH (6.0-7.5). No liming or gypsum amendments required.";
    const rawMicroAdvice = agri.micronutrient_advice || data.micronutrient_advice || "Micronutrients (Zn, B, S, Fe) are within adequate agricultural ranges.";
    
    const localizedPh = window.i18n ? window.i18n.translatePhAmendment(rawPhAdvice) : rawPhAdvice;
    const localizedMicro = window.i18n ? window.i18n.translateMicronutrientAdvice(rawMicroAdvice) : rawMicroAdvice;

    if (document.getElementById('repPhAmendment')) document.getElementById('repPhAmendment').textContent = localizedPh;
    if (document.getElementById('repMicronutrients')) document.getElementById('repMicronutrients').textContent = localizedMicro;

    // 7. Weather (Fully localized)
    if (document.getElementById('repWeatherTemp')) document.getElementById('repWeatherTemp').textContent = `${weather.temperature_c || 28.5} °C`;
    if (document.getElementById('repWeatherHumidity')) document.getElementById('repWeatherHumidity').textContent = `${weather.humidity_pct || 62} %`;
    if (document.getElementById('repWeatherRain')) document.getElementById('repWeatherRain').textContent = `${weather.rainfall_forecast_mm || 0.0} mm`;
    if (document.getElementById('repWeatherWind')) document.getElementById('repWeatherWind').textContent = `${weather.wind_speed_kmh || 8.5} km/h`;
    
    const rawAdvisory = weather.advice || agri.weather_advisory || "Weather window is optimal for fertilizer broadcasting and foliage spray.";
    const localizedAdvisory = window.i18n ? window.i18n.translateWeatherAdvisory(rawAdvisory) : rawAdvisory;
    if (document.getElementById('repWeatherAdvisory')) document.getElementById('repWeatherAdvisory').textContent = localizedAdvisory;

    // 8. Alternatives & Decision Drivers
    const alternatives = ml.alternatives || data.ai_alternatives || [];
    const altContainer = document.getElementById('repAlternativesContainer');
    if (altContainer) {
        altContainer.innerHTML = '';
        alternatives.forEach((alt, idx) => {
            const row = document.createElement('div');
            row.style.cssText = "display:flex; justify-content:space-between; align-items:center; background:#f8fafc; padding:8px 12px; border-radius:6px; border:1px solid var(--border-color); font-size:0.84rem;";
            const fertLocalized = window.i18n ? window.i18n.translateFertilizer(alt.fertilizer) : alt.fertilizer;
            const confLabel = window.i18n ? window.i18n.t('report.confidence') : 'Confidence';
            row.innerHTML = `
                <span style="font-weight:600; color:#1e293b;">${idx + 1}. ${fertLocalized}</span>
                <span class="badge badge-success" style="font-weight:700;">${alt.probability_pct}% ${confLabel}</span>
            `;
            altContainer.appendChild(row);
        });
    }

    const rawDrivers = ml.decision_drivers || [];
    const driversList = document.getElementById('repDecisionDriversList');
    if (driversList) {
        driversList.innerHTML = '';
        if (rawDrivers.length === 0) {
            const defDriver = window.i18n ? window.i18n.t('report.defaultRationale') : 'Balanced nutrient requirements based on ICAR crop standards and soil test values.';
            driversList.innerHTML = `<li>${defDriver}</li>`;
        } else {
            rawDrivers.forEach(d => {
                const li = document.createElement('li');
                li.textContent = window.i18n ? window.i18n.translateDecisionDriver(d) : d;
                driversList.appendChild(li);
            });
        }
    }

    // 9. Explainable Rationale
    const rawExplanation = agri.explanation || data.explanation || (window.i18n ? window.i18n.t('report.defaultRationale') : "");
    const localizedExplanation = window.i18n ? window.i18n.translateExplanation(rawExplanation) : rawExplanation;
    if (document.getElementById('repExplanation')) document.getElementById('repExplanation').textContent = localizedExplanation;
}

function downloadReportPDF() {
    const recId = (document.getElementById('repId')?.textContent || '').replace('#', '').trim();
    const currentLang = window.i18n ? window.i18n.getCurrentLanguage() : 'en';
    if (recId && recId !== '-' && recId !== '') {
        window.location.href = `/api/recommendations/${recId}/pdf/?lang=${currentLang}`;
    } else {
        window.print();
    }
}
