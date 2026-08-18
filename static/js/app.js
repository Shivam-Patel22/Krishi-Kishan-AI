/**
 * KrishiKisan AI Precision Fertilizer Frontend Application
 */

document.addEventListener('DOMContentLoaded', () => {
    loadInitialData();
    setupEventListeners();

    if (window.i18n) {
        window.i18n.onLanguageChange(() => {
            if (appState.crops && appState.crops.length > 0) {
                populateCropSelect(appState.crops);
            }
        });
    }
});

// State Store
const appState = {
    crops: [],
};

async function loadInitialData() {
    try {
        const cropsRes = await fetch('/api/crops/');
        if (cropsRes.ok) {
            const cropsData = await cropsRes.json();
            appState.crops = Array.isArray(cropsData) ? cropsData : (cropsData.results || []);
            populateCropSelect(appState.crops);
        }
    } catch (err) {
        console.error("Failed to load initial crop catalogs:", err);
    }
    loadLookupStates();
}

async function loadLookupStates() {
    const lookupState = document.getElementById('lookupState');
    if (!lookupState || lookupState.options.length > 1) return;
    try {
        const res = await fetch('/api/soil-lookup/?type=states');
        if (res.ok) {
            const data = await res.json();
            (data.states || []).forEach(st => {
                const opt = document.createElement('option');
                opt.value = st;
                opt.textContent = st;
                lookupState.appendChild(opt);
            });
        }
    } catch (err) {
        console.error("Error loading states:", err);
    }
}

function populateCropSelect(crops) {
    const select = document.getElementById('cropSelect');
    if (!select) return;
    const currentVal = select.value;
    const chooseText = window.i18n ? window.i18n.t('form.chooseCrop') : '-- Choose Target Crop --';
    select.innerHTML = `<option value="" data-i18n="form.chooseCrop">${chooseText}</option>`;

    crops.forEach(crop => {
        const opt = document.createElement('option');
        opt.value = crop.id;
        const cropName = window.i18n ? window.i18n.translateCrop(crop.name) : crop.name;
        const catName = window.i18n ? window.i18n.translateCategory(crop.category) : crop.category;
        opt.textContent = `${cropName} (${catName})`;
        select.appendChild(opt);
    });

    if (currentVal) {
        select.value = currentVal;
    }
}

function setupEventListeners() {
    const farmSelect = document.getElementById('farmSelect');
    const fieldSelect = document.getElementById('fieldSelect');
    const form = document.getElementById('recommendationForm');
    const lookupState = document.getElementById('lookupState');
    const lookupDistrict = document.getElementById('lookupDistrict');
    const lookupBlock = document.getElementById('lookupBlock');
    const btnApplyBenchmark = document.getElementById('btnFetchSoilBenchmark');

    if (farmSelect) {
        farmSelect.addEventListener('change', async (e) => {
            const farmId = e.target.value;
            fieldSelect.innerHTML = '<option value="">-- Choose Field --</option>';
            fieldSelect.disabled = true;

            if (!farmId) return;

            try {
                const res = await fetch(`/api/fields/?farm=${farmId}`);
                if (res.ok) {
                    const fieldsData = await res.json();
                    const fields = Array.isArray(fieldsData) ? fieldsData : (fieldsData.results || []);
                    fields.forEach(f => {
                        const opt = document.createElement('option');
                        opt.value = f.id;
                        opt.textContent = `${f.field_name} (${f.area_hectares} ha - ${f.irrigation_type})`;
                        opt.dataset.area = f.area_hectares;
                        fieldSelect.appendChild(opt);
                    });
                    fieldSelect.disabled = false;
                    if (fields.length > 0) {
                        fieldSelect.value = fields[0].id;
                        const areaInput = document.getElementById('fieldArea');
                        if (areaInput) areaInput.value = fields[0].area_hectares;
                    }
                }
            } catch (err) {
                console.error("Error loading fields:", err);
            }
        });
    }

    if (fieldSelect) {
        fieldSelect.addEventListener('change', (e) => {
            const opt = e.target.selectedOptions[0];
            if (opt && opt.dataset.area) {
                const areaInput = document.getElementById('fieldArea');
                if (areaInput) areaInput.value = opt.dataset.area;
            }
        });
    }

    if (lookupState) {
        lookupState.addEventListener('change', async (e) => {
            const st = e.target.value;
            const selectDistText = window.i18n ? window.i18n.t('form.selectDistrict') : '-- Select District --';
            const selectBlockText = window.i18n ? window.i18n.t('form.selectBlock') : '-- Select Block / Taluka --';
            lookupDistrict.innerHTML = `<option value="" data-i18n="form.selectDistrict">${selectDistText}</option>`;
            lookupDistrict.disabled = true;
            lookupBlock.innerHTML = `<option value="" data-i18n="form.selectBlock">${selectBlockText}</option>`;
            lookupBlock.disabled = true;
            if (btnApplyBenchmark) btnApplyBenchmark.disabled = true;

            if (!st) return;

            try {
                const res = await fetch(`/api/soil-lookup/?type=districts&state=${encodeURIComponent(st)}`);
                if (res.ok) {
                    const data = await res.json();
                    (data.districts || []).forEach(d => {
                        const opt = document.createElement('option');
                        opt.value = d;
                        opt.textContent = d;
                        lookupDistrict.appendChild(opt);
                    });
                    lookupDistrict.disabled = false;
                }
            } catch (err) {
                console.error("Error loading districts:", err);
            }
        });
    }

    if (lookupDistrict) {
        lookupDistrict.addEventListener('change', async (e) => {
            const st = lookupState.value;
            const dist = e.target.value;
            const selectBlockText = window.i18n ? window.i18n.t('form.selectBlock') : '-- Select Block / Taluka --';
            lookupBlock.innerHTML = `<option value="" data-i18n="form.selectBlock">${selectBlockText}</option>`;
            lookupBlock.disabled = true;
            if (btnApplyBenchmark) btnApplyBenchmark.disabled = !dist;

            if (!st || !dist) return;

            try {
                const res = await fetch(`/api/soil-lookup/?type=blocks&state=${encodeURIComponent(st)}&district=${encodeURIComponent(dist)}`);
                if (res.ok) {
                    const data = await res.json();
                    (data.blocks || []).forEach(b => {
                        const opt = document.createElement('option');
                        opt.value = b;
                        opt.textContent = b;
                        lookupBlock.appendChild(opt);
                    });
                    lookupBlock.disabled = false;
                }
            } catch (err) {
                console.error("Error loading blocks:", err);
            }
        });
    }

    if (btnApplyBenchmark) {
        btnApplyBenchmark.addEventListener('click', async () => {
            const st = lookupState.value;
            const dist = lookupDistrict.value;
            const block = lookupBlock.value;

            if (!st || !dist) return;

            btnApplyBenchmark.textContent = window.i18n ? window.i18n.t('form.loadingBenchmark') : "Loading Benchmark...";
            try {
                let url = `/api/soil-lookup/?type=benchmark&state=${encodeURIComponent(st)}&district=${encodeURIComponent(dist)}`;
                if (block) url += `&block=${encodeURIComponent(block)}`;

                const res = await fetch(url);
                if (res.ok) {
                    const profile = await res.json();
                    if (document.getElementById('soilN')) document.getElementById('soilN').value = profile.nitrogen;
                    if (document.getElementById('soilP')) document.getElementById('soilP').value = profile.phosphorus;
                    if (document.getElementById('soilK')) document.getElementById('soilK').value = profile.potassium;
                    if (document.getElementById('soilPh')) document.getElementById('soilPh').value = profile.soil_ph;
                    if (document.getElementById('soilOc')) document.getElementById('soilOc').value = profile.organic_carbon_pct;
                    if (document.getElementById('soilEc')) document.getElementById('soilEc').value = profile.electrical_conductivity;
                    if (document.getElementById('soilZn')) document.getElementById('soilZn').value = profile.zinc;
                    if (document.getElementById('soilB')) document.getElementById('soilB').value = profile.boron;
                    if (document.getElementById('soilS')) document.getElementById('soilS').value = profile.sulphur;
                    if (document.getElementById('soilFe')) document.getElementById('soilFe').value = profile.iron;

                    const msg = window.i18n ? window.i18n.t('alert.benchmarkApplied', { district: dist, state: st }) : `Applied 10.85M National Soil Database Benchmark for ${dist}, ${st}!`;
                    alert(msg);
                }
            } catch (err) {
                console.error("Error applying soil benchmark:", err);
            } finally {
                btnApplyBenchmark.textContent = window.i18n ? window.i18n.t('form.applyBenchmark') : "Apply Regional Benchmark";
            }
        });
    }

    if (form) {
        form.addEventListener('submit', handleGenerateRecommendation);
    }
}

async function handleGenerateRecommendation(e) {
    e.preventDefault();

    const lookupState = document.getElementById('lookupState')?.value?.trim();
    const lookupDistrict = document.getElementById('lookupDistrict')?.value?.trim();
    const lookupBlock = document.getElementById('lookupBlock')?.value?.trim();

    if (!lookupState) {
        const msg = window.i18n ? window.i18n.t('alert.selectState') : "Please select a State.";
        alert(msg);
        document.getElementById('lookupState')?.focus();
        return;
    }

    if (!lookupDistrict) {
        const msg = window.i18n ? window.i18n.t('alert.selectDistrict') : "Please select a District.";
        alert(msg);
        document.getElementById('lookupDistrict')?.focus();
        return;
    }

    if (!lookupBlock) {
        const msg = window.i18n ? window.i18n.t('alert.selectBlock') : "Please select a Block / Taluka.";
        alert(msg);
        document.getElementById('lookupBlock')?.focus();
        return;
    }

    const fieldSelectElem = document.getElementById('fieldSelect');
    const fieldId = fieldSelectElem ? fieldSelectElem.value : null;
    const cropId = document.getElementById('cropSelect').value;
    const areaHa = document.getElementById('fieldArea').value;
    const soilTypeElem = document.getElementById('soilType');
    const soilTypeVal = soilTypeElem ? soilTypeElem.value : "Loamy Soil";
    const btn = document.getElementById('btnGenerateRec');

    if (!cropId) {
        const msg = window.i18n ? window.i18n.t('alert.selectCrop') : "Please select a Target Crop.";
        alert(msg);
        return;
    }

    const parseNum = (id, fallback = 0.0) => {
        const el = document.getElementById(id);
        if (!el || el.value === '' || el.value === null || isNaN(parseFloat(el.value))) {
            return fallback;
        }
        return parseFloat(el.value);
    };

    const payload = {
        crop_id: parseInt(cropId),
        area_hectares: parseFloat(areaHa) || 1.0,
        soil_data: {
            soil_type: soilTypeVal,
            state: lookupState,
            district: lookupDistrict,
            block: lookupBlock,
            nitrogen: parseNum('soilN', 0.0),
            phosphorus: parseNum('soilP', 0.0),
            potassium: parseNum('soilK', 0.0),
            soil_ph: parseNum('soilPh', 0.0),
            organic_carbon_pct: parseNum('soilOc', 0.0),
            electrical_conductivity: parseNum('soilEc', 0.0),
            zinc: parseNum('soilZn', 0.0),
            boron: parseNum('soilB', 0.0),
            sulphur: parseNum('soilS', 0.0),
            iron: parseNum('soilFe', 0.0),
            source: "Field Diagnostic Input"
        }
    };

    if (fieldId) {
        payload.field_id = parseInt(fieldId);
    }

    btn.disabled = true;
    const calcText = window.i18n ? window.i18n.t('form.btnCalculating') : "Calculating Agronomic & AI Dosage...";
    btn.innerHTML = `<span>⏳</span> ${calcText}`;

    try {
        const res = await fetch('/api/recommendations/generate/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!res.ok) {
            const errData = await res.json().catch(() => ({}));
            throw new Error(errData.error || `Server responded with status ${res.status}`);
        }

        const data = await res.json();
        
        // Save recommendation payload to sessionStorage for seamless report rendering
        sessionStorage.setItem('currentRecommendation', JSON.stringify(data));

        // Navigate to dedicated report route
        const recId = data.recommendation_id || '';
        window.location.href = `/report/${recId ? `?id=${recId}` : ''}`;

    } catch (err) {
        console.error("Failed to generate recommendation:", err);
        const errMsg = window.i18n ? window.i18n.t('alert.recError', { error: err.message }) : `Recommendation Generation Error: ${err.message}`;
        alert(errMsg);
        btn.disabled = false;
        const genText = window.i18n ? window.i18n.t('form.btnGenerate') : "Generate AI Precision Recommendation";
        btn.innerHTML = `<span>✨</span> ${genText}`;
    }
}
