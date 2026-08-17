/**
 * KrishiKisan AI Precision Fertilizer Frontend Application
 */

document.addEventListener('DOMContentLoaded', () => {
    loadInitialData();
    setupEventListeners();
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
    select.innerHTML = '<option value="">-- Choose Target Crop --</option>';

    crops.forEach(crop => {
        const opt = document.createElement('option');
        opt.value = crop.id;
        opt.textContent = `${crop.name} (${crop.category})`;
        select.appendChild(opt);
    });
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
            lookupDistrict.innerHTML = '<option value="">-- Select District --</option>';
            lookupDistrict.disabled = true;
            lookupBlock.innerHTML = '<option value="">-- Optional Block --</option>';
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
            lookupBlock.innerHTML = '<option value="">-- Optional Block --</option>';
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

            btnApplyBenchmark.textContent = "Loading Benchmark...";
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

                    alert(`Applied 10.85M National Soil Database Benchmark for ${dist}, ${st}!`);
                }
            } catch (err) {
                console.error("Error applying soil benchmark:", err);
            } finally {
                btnApplyBenchmark.textContent = "Apply Regional Benchmark";
            }
        });
    }

    if (form) {
        form.addEventListener('submit', handleGenerateRecommendation);
    }
}

async function handleGenerateRecommendation(e) {
    e.preventDefault();

    const fieldSelectElem = document.getElementById('fieldSelect');
    const fieldId = fieldSelectElem ? fieldSelectElem.value : null;
    const cropId = document.getElementById('cropSelect').value;
    const areaHa = document.getElementById('fieldArea').value;
    const soilTypeElem = document.getElementById('soilType');
    const soilTypeVal = soilTypeElem ? soilTypeElem.value : "Loamy Soil";
    const btn = document.getElementById('btnGenerateRec');

    if (!cropId) {
        alert("Please select a Target Crop.");
        return;
    }

    const payload = {
        crop_id: parseInt(cropId),
        area_hectares: parseFloat(areaHa) || 1.0,
        soil_data: {
            soil_type: soilTypeVal,
            nitrogen: parseFloat(document.getElementById('soilN').value || 140.0),
            phosphorus: parseFloat(document.getElementById('soilP').value || 18.0),
            potassium: parseFloat(document.getElementById('soilK').value || 180.0),
            soil_ph: parseFloat(document.getElementById('soilPh').value || 6.8),
            organic_carbon_pct: parseFloat(document.getElementById('soilOc').value || 0.55),
            electrical_conductivity: parseFloat(document.getElementById('soilEc').value || 0.45),
            zinc: parseFloat(document.getElementById('soilZn')?.value || 0.8),
            boron: parseFloat(document.getElementById('soilB')?.value || 0.5),
            sulphur: parseFloat(document.getElementById('soilS')?.value || 12.0),
            iron: parseFloat(document.getElementById('soilFe')?.value || 6.0),
            source: "Field Diagnostic Input"
        }
    };


    if (fieldId) {
        payload.field_id = parseInt(fieldId);
    }

    btn.disabled = true;
    btn.innerHTML = `<span>⏳</span> Calculating Agronomic & AI Dosage...`;


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
        alert(`Recommendation Generation Error: ${err.message}`);
        btn.disabled = false;
        btn.innerHTML = `<span>✨</span> Generate AI Precision Recommendation`;
    }
}




