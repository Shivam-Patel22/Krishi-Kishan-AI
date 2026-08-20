/**
 * KrishiKisan AI • Recommendation Report Script
 * Loads and renders precision fertilizer report on /report/ with full multilingual support,
 * clean typography, balanced spacing, structured alignment, and interactive 3-stage Split Schedule Carousel.
 */

let cachedReportData = null;

const splitCarouselState = {
    currentSlide: 0,
    totalSlides: 3,
    isDragging: false,
    startX: 0,
    currentX: 0,
    diffX: 0
};

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

    // 1. Try to load from URL parameter (?id=123) first if specified
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

    // 2. Try to load from sessionStorage (saved during generation from dashboard)
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
    const soil = data.soil_profile || data.soil_test || {};
    const weather = data.weather_conditions || data.weather_record || {};

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

    // 2. Primary Recommendation Banner (All 3 Fertilizers)
    let rawPrimaryFert = agri.primary_fertilizer || data.primary_fertilizer || '-';
    let totalQty = parseFloat(agri.total_quantity_kg || data.total_quantity_kg || 0);
    const splits = agri.split_schedule || data.split_schedule || [];

    // Ensure all 3 fertilizers are represented if full split details are available
    if (splits.length > 0 && splits[0].dap_kg_per_ha !== undefined) {
        const totalDapPerHa = splits[0].dap_kg_per_ha || 0;
        const totalUreaPerHa = splits.reduce((acc, s) => acc + (parseFloat(s.urea_kg_per_ha) || 0), 0);
        const totalMopPerHa = splits[0].mop_kg_per_ha || 0;
        const calcTotalKg = splits.reduce((acc, s) => acc + (parseFloat(s.total_stage_kg) || 0), 0);

        if (totalDapPerHa > 0 && totalUreaPerHa > 0 && totalMopPerHa > 0) {
            rawPrimaryFert = `DAP (${totalDapPerHa.toFixed(1)} kg/ha) + Urea (${totalUreaPerHa.toFixed(1)} kg/ha) + MOP (${totalMopPerHa.toFixed(1)} kg/ha)`;
        }
        if (calcTotalKg > totalQty) {
            totalQty = calcTotalKg;
        }
    }

    const primaryFert = window.i18n ? window.i18n.translateFertilizer(rawPrimaryFert) : rawPrimaryFert;
    const totalCost = parseFloat(agri.estimated_cost_inr || data.estimated_cost_inr || 0);
    const confidencePct = parseFloat(ml.confidence_pct || data.ai_confidence || 95.0);

    if (document.getElementById('repPrimaryFertilizer')) document.getElementById('repPrimaryFertilizer').textContent = primaryFert;
    if (document.getElementById('repTotalCost')) document.getElementById('repTotalCost').textContent = `₹${totalCost.toLocaleString('en-IN')}`;
    if (document.getElementById('repTotalQuantity')) document.getElementById('repTotalQuantity').textContent = `${totalQty.toFixed(1)} kg`;
    if (document.getElementById('repConfidence')) document.getElementById('repConfidence').textContent = `${confidencePct.toFixed(1)}%`;
    if (document.getElementById('repWeatherSafety')) {
        const safeText = window.i18n ? window.i18n.t('report.windowOptimal') : "Optimal / Safe";
        const cautionText = window.i18n ? window.i18n.t('report.windowCaution') : "Caution Advised";
        const isSafe = (weather.is_safe_to_apply !== undefined) ? weather.is_safe_to_apply : (weather.spray_safety !== 'AVOID');
        document.getElementById('repWeatherSafety').textContent = isSafe === false ? cautionText : safeText;
    }

    // 3. Warnings Container
    const rawWarnings = agri.warnings || [];
    const warningsContainer = document.getElementById('repWarningsContainer');
    if (warningsContainer) {
        warningsContainer.innerHTML = '';
        if (rawWarnings.length > 0) {
            const warnTitle = window.i18n ? window.i18n.t('report.warningsTitle') : 'Agronomic & Environmental Advisory Warnings';
            const warnBox = document.createElement('div');
            warnBox.className = 'report-warning-card';
            
            const translatedWarnings = rawWarnings.map(w => window.i18n ? window.i18n.translateWarning(w) : w);
            warnBox.innerHTML = `
                <div class="warning-card-title">
                    <span>⚠️</span> <span>${warnTitle}</span>
                </div>
                <ul class="warning-card-list">
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

    // 5. Agronomic Split Application Schedule (Horizontal Carousel Slider)
    renderSplitScheduleCarousel(splits);

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
            row.className = 'alt-card';
            const fertLocalized = window.i18n ? window.i18n.translateFertilizer(alt.fertilizer) : alt.fertilizer;
            const confLabel = window.i18n ? window.i18n.t('report.confidence') : 'Confidence';
            row.innerHTML = `
                <span class="alt-name">${idx + 1}. ${fertLocalized}</span>
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
            driversList.innerHTML = `<li class="decision-driver-item"><span class="decision-driver-bullet">✓</span> <span>${defDriver}</span></li>`;
        } else {
            rawDrivers.forEach(d => {
                const li = document.createElement('li');
                li.className = 'decision-driver-item';
                const driverText = window.i18n ? window.i18n.translateDecisionDriver(d) : d;
                li.innerHTML = `<span class="decision-driver-bullet">✓</span> <span>${driverText}</span>`;
                driversList.appendChild(li);
            });
        }
    }

    // 9. Explainable Rationale
    const rawExplanation = agri.explanation || data.explanation || (window.i18n ? window.i18n.t('report.defaultRationale') : "");
    const localizedExplanation = window.i18n ? window.i18n.translateExplanation(rawExplanation) : rawExplanation;
    if (document.getElementById('repExplanation')) document.getElementById('repExplanation').textContent = localizedExplanation;
}

/**
 * Renders the 3 application stages into a horizontal carousel slider with
 * Previous/Next navigation, 3 pagination dots, and touch/mouse swipe support.
 */
function renderSplitScheduleCarousel(splits) {
    const timelineContainer = document.getElementById('repSplitTimeline');
    if (!timelineContainer) return;

    timelineContainer.innerHTML = '';
    splitCarouselState.totalSlides = splits.length || 3;

    if (splits.length === 0) {
        const defSplit = window.i18n ? window.i18n.t('report.defaultSplitText') : 'Standard basal and top-dressing application recommended.';
        timelineContainer.innerHTML = `<p class="section-lead-desc" style="padding:1rem;">${defSplit}</p>`;
        return;
    }

    splits.forEach((split, idx) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.setAttribute('role', 'group');
        item.setAttribute('aria-roledescription', 'slide');
        item.setAttribute('aria-label', `Stage ${idx + 1} of ${splits.length}`);

        const totalStageKg = split.total_stage_kg !== undefined ? `${split.total_stage_kg} kg` : (split.total_dose_kg !== undefined ? `${split.total_dose_kg} kg` : '');
        
        // Localize stage name, timing, instructions
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

        let doseChipsHtml = '';
        if (split.dap_kg_per_ha !== undefined) {
            const chips = [];
            if (split.dap_kg_per_ha > 0) chips.push(`<span class="dosage-chip">🌿 DAP: <strong>${split.dap_kg_per_ha} kg/ha</strong> (${split.dap_kg_per_acre} kg/acre)</span>`);
            if (split.urea_kg_per_ha > 0) chips.push(`<span class="dosage-chip">⚡ Urea: <strong>${split.urea_kg_per_ha} kg/ha</strong> (${split.urea_kg_per_acre} kg/acre)</span>`);
            if (split.mop_kg_per_ha > 0) chips.push(`<span class="dosage-chip">🛡️ MOP: <strong>${split.mop_kg_per_ha} kg/ha</strong> (${split.mop_kg_per_acre} kg/acre)</span>`);
            if (chips.length > 0) {
                doseChipsHtml = `<div class="dosage-chips-wrap">${chips.join('')}</div>`;
            }
        }

        item.innerHTML = `
            <div class="timeline-step">${idx + 1}</div>
            <div class="timeline-content">
                <div class="timeline-title">
                    <span>${stageName}</span>
                    <span style="color:var(--primary); font-weight:800; font-size:1.05rem;">${totalStageKg}</span>
                </div>
                <div class="timeline-timing">
                    <strong>${timingLabel}</strong> ${timingText}
                </div>
                ${doseChipsHtml}
                <div class="timeline-desc">
                    <strong>${instrLabel}</strong> ${instrText}
                </div>
            </div>
        `;
        timelineContainer.appendChild(item);
    });

    initSplitCarouselControls();
    updateSplitCarouselSlide(splitCarouselState.currentSlide);
}

/**
 * Configures event bindings for Prev/Next buttons, pagination dots, mouse drag, and touch swipe.
 */
function initSplitCarouselControls() {
    const btnPrev = document.getElementById('btnPrevSplit');
    const btnNext = document.getElementById('btnNextSplit');
    const paginationContainer = document.getElementById('splitCarouselPagination');
    const viewport = document.getElementById('splitCarouselViewport');
    const track = document.getElementById('repSplitTimeline');

    if (btnPrev && !btnPrev.dataset.bound) {
        btnPrev.dataset.bound = 'true';
        btnPrev.addEventListener('click', () => {
            if (splitCarouselState.currentSlide > 0) {
                updateSplitCarouselSlide(splitCarouselState.currentSlide - 1);
            }
        });
    }

    if (btnNext && !btnNext.dataset.bound) {
        btnNext.dataset.bound = 'true';
        btnNext.addEventListener('click', () => {
            if (splitCarouselState.currentSlide < splitCarouselState.totalSlides - 1) {
                updateSplitCarouselSlide(splitCarouselState.currentSlide + 1);
            }
        });
    }

    if (paginationContainer && !paginationContainer.dataset.bound) {
        paginationContainer.dataset.bound = 'true';
        paginationContainer.addEventListener('click', (e) => {
            const dot = e.target.closest('.pagination-dot');
            if (dot && dot.dataset.index !== undefined) {
                const targetIdx = parseInt(dot.dataset.index, 10);
                updateSplitCarouselSlide(targetIdx);
            }
        });
    }

    if (viewport && !viewport.dataset.bound) {
        viewport.dataset.bound = 'true';

        // Keyboard navigation
        viewport.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                if (splitCarouselState.currentSlide > 0) {
                    updateSplitCarouselSlide(splitCarouselState.currentSlide - 1);
                }
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                if (splitCarouselState.currentSlide < splitCarouselState.totalSlides - 1) {
                    updateSplitCarouselSlide(splitCarouselState.currentSlide + 1);
                }
            } else if (e.key === 'Home') {
                e.preventDefault();
                updateSplitCarouselSlide(0);
            } else if (e.key === 'End') {
                e.preventDefault();
                updateSplitCarouselSlide(splitCarouselState.totalSlides - 1);
            }
        });

        // Touch Swipe Handling
        viewport.addEventListener('touchstart', (e) => {
            if (!e.touches || e.touches.length === 0) return;
            splitCarouselState.isDragging = true;
            splitCarouselState.startX = e.touches[0].clientX;
            splitCarouselState.diffX = 0;
            if (track) track.classList.add('no-transition');
        }, { passive: true });

        viewport.addEventListener('touchmove', (e) => {
            if (!splitCarouselState.isDragging || !e.touches || e.touches.length === 0) return;
            splitCarouselState.currentX = e.touches[0].clientX;
            splitCarouselState.diffX = splitCarouselState.currentX - splitCarouselState.startX;

            if (track && viewport.offsetWidth > 0) {
                const baseOffset = -(splitCarouselState.currentSlide * 100);
                const dragPct = (splitCarouselState.diffX / viewport.offsetWidth) * 100;
                track.style.transform = `translateX(${baseOffset + dragPct}%)`;
            }
        }, { passive: true });

        const endTouch = () => {
            if (!splitCarouselState.isDragging) return;
            splitCarouselState.isDragging = false;
            if (track) track.classList.remove('no-transition');

            const threshold = 40; // px
            if (splitCarouselState.diffX < -threshold && splitCarouselState.currentSlide < splitCarouselState.totalSlides - 1) {
                updateSplitCarouselSlide(splitCarouselState.currentSlide + 1);
            } else if (splitCarouselState.diffX > threshold && splitCarouselState.currentSlide > 0) {
                updateSplitCarouselSlide(splitCarouselState.currentSlide - 1);
            } else {
                updateSplitCarouselSlide(splitCarouselState.currentSlide);
            }
            splitCarouselState.diffX = 0;
        };

        viewport.addEventListener('touchend', endTouch);
        viewport.addEventListener('touchcancel', endTouch);

        // Desktop Mouse Drag Handling
        viewport.addEventListener('mousedown', (e) => {
            splitCarouselState.isDragging = true;
            splitCarouselState.startX = e.pageX;
            splitCarouselState.diffX = 0;
            viewport.classList.add('is-dragging');
            if (track) track.classList.add('no-transition');
        });

        window.addEventListener('mousemove', (e) => {
            if (!splitCarouselState.isDragging) return;
            splitCarouselState.currentX = e.pageX;
            splitCarouselState.diffX = splitCarouselState.currentX - splitCarouselState.startX;

            if (track && viewport.offsetWidth > 0) {
                const baseOffset = -(splitCarouselState.currentSlide * 100);
                const dragPct = (splitCarouselState.diffX / viewport.offsetWidth) * 100;
                track.style.transform = `translateX(${baseOffset + dragPct}%)`;
            }
        });

        window.addEventListener('mouseup', () => {
            if (!splitCarouselState.isDragging) return;
            splitCarouselState.isDragging = false;
            viewport.classList.remove('is-dragging');
            if (track) track.classList.remove('no-transition');

            const threshold = 50; // px
            if (splitCarouselState.diffX < -threshold && splitCarouselState.currentSlide < splitCarouselState.totalSlides - 1) {
                updateSplitCarouselSlide(splitCarouselState.currentSlide + 1);
            } else if (splitCarouselState.diffX > threshold && splitCarouselState.currentSlide > 0) {
                updateSplitCarouselSlide(splitCarouselState.currentSlide - 1);
            } else {
                updateSplitCarouselSlide(splitCarouselState.currentSlide);
            }
            splitCarouselState.diffX = 0;
        });
    }
}

/**
 * Updates active slide position, stage counter, button states, and pagination dots.
 */
function updateSplitCarouselSlide(slideIndex) {
    const total = splitCarouselState.totalSlides || 3;
    const clampedIndex = Math.max(0, Math.min(slideIndex, total - 1));
    splitCarouselState.currentSlide = clampedIndex;

    const track = document.getElementById('repSplitTimeline');
    const counter = document.getElementById('splitStageCounter');
    const btnPrev = document.getElementById('btnPrevSplit');
    const btnNext = document.getElementById('btnNextSplit');
    const dots = document.querySelectorAll('#splitCarouselPagination .pagination-dot');

    // 1. Move Track
    if (track) {
        track.style.transform = `translateX(-${clampedIndex * 100}%)`;
    }

    // 2. Update Counter
    if (counter) {
        counter.textContent = `${clampedIndex + 1} / ${total}`;
    }

    // 3. Update Prev / Next Buttons
    if (btnPrev) {
        btnPrev.disabled = (clampedIndex === 0);
    }
    if (btnNext) {
        btnNext.disabled = (clampedIndex === total - 1);
    }

    // 4. Update Pagination Dots
    dots.forEach((dot, idx) => {
        if (idx === clampedIndex) {
            dot.classList.add('active');
            dot.setAttribute('aria-selected', 'true');
            dot.setAttribute('tabindex', '0');
        } else {
            dot.classList.remove('active');
            dot.setAttribute('aria-selected', 'false');
            dot.setAttribute('tabindex', '-1');
        }
    });
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
