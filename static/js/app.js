/**
 * KrishiKisan AI Precision Fertilizer Frontend Application
 */

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    loadInitialData();
    setupEventListeners();
});

// State Store
const appState = {
    farms: [],
    crops: [],
    selectedFarm: null,
    selectedField: null,
};

function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const target = btn.getAttribute('data-tab');
            const pane = document.getElementById(target);
            if (pane) pane.classList.add('active');

            if (target === 'farmsTab') loadFarmsTable();
            if (target === 'historyTab') loadHistoryTable();
        });
    });
}

async function loadInitialData() {
    try {
        const [farmsRes, cropsRes] = await Promise.all([
            fetch('/api/farms/'),
            fetch('/api/crops/')
        ]);

        if (farmsRes.ok) {
            const farmsData = await farmsRes.json();
            appState.farms = Array.isArray(farmsData) ? farmsData : (farmsData.results || []);
            populateFarmSelect(appState.farms);
        }

        if (cropsRes.ok) {
            const cropsData = await cropsRes.json();
            appState.crops = Array.isArray(cropsData) ? cropsData : (cropsData.results || []);
            populateCropSelect(appState.crops);
        }
    } catch (err) {
        console.error("Failed to load initial farm/crop catalogs:", err);
    }
}

function populateFarmSelect(farms) {
    const select = document.getElementById('farmSelect');
    if (!select) return;
    select.innerHTML = '<option value="">-- Choose Farm --</option>';

    farms.forEach(farm => {
        const opt = document.createElement('option');
        opt.value = farm.id;
        opt.textContent = `${farm.farmer_name} (${farm.district_name}, ${farm.state_name})`;
        select.appendChild(opt);
    });
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
    const btnToggleAuto = document.getElementById('btnToggleAutoFetch');
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

    if (btnToggleAuto) {
        btnToggleAuto.addEventListener('click', async () => {
            const box = document.getElementById('autoFetchControls');
            if (!box) return;
            const isHidden = box.style.display === 'none';
            box.style.display = isHidden ? 'grid' : 'none';

            if (isHidden && lookupState.options.length <= 1) {
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

    const fieldId = document.getElementById('fieldSelect').value;
    const cropId = document.getElementById('cropSelect').value;
    const areaHa = document.getElementById('fieldArea').value;
    const btn = document.getElementById('btnGenerateRec');

    if (!fieldId || !cropId) {
        alert("Please select both a Farm Field and a Target Crop.");
        return;
    }

    const payload = {
        field_id: parseInt(fieldId),
        crop_id: parseInt(cropId),
        area_hectares: parseFloat(areaHa),
        soil_data: {
            nitrogen: parseFloat(document.getElementById('soilN').value || 140.0),
            phosphorus: parseFloat(document.getElementById('soilP').value || 18.0),
            potassium: parseFloat(document.getElementById('soilK').value || 180.0),
            soil_ph: parseFloat(document.getElementById('soilPh').value || 6.8),
            organic_carbon_pct: parseFloat(document.getElementById('soilOc').value || 0.55),
            electrical_conductivity: parseFloat(document.getElementById('soilEc').value || 0.45),
            zinc: parseFloat(document.getElementById('soilZn').value || 0.8),
            boron: parseFloat(document.getElementById('soilB').value || 0.5),
            sulphur: parseFloat(document.getElementById('soilS').value || 12.0),
            iron: parseFloat(document.getElementById('soilFe').value || 6.0),
            source: "Field Diagnostic Input"
        }
    };

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
        renderRecommendationResults(data);

    } catch (err) {
        console.error("Failed to generate recommendation:", err);
        alert(`Recommendation Generation Error: ${err.message}`);
    } finally {
        btn.disabled = false;
        btn.innerHTML = `<span>✨</span> Generate AI Precision Recommendation`;
    }
}

function renderRecommendationResults(data) {
    const placeholder = document.getElementById('resultsPlaceholder');
    const content = document.getElementById('resultsContent');

    if (placeholder) placeholder.style.display = 'none';
    if (content) content.style.display = 'block';

    const agri = data.agronomic_recommendation || {};
    const ml = data.ml_prediction || {};

    if (document.getElementById('resPrimaryFertilizer')) document.getElementById('resPrimaryFertilizer').textContent = agri.primary_fertilizer || "-";
    if (document.getElementById('resTotalCost')) document.getElementById('resTotalCost').textContent = `₹${(agri.estimated_cost_inr || 0).toLocaleString('en-IN')}`;
    if (document.getElementById('resFieldArea')) document.getElementById('resFieldArea').textContent = `${data.area_hectares || 1.0} Hectares`;
    if (document.getElementById('resTotalQuantity')) document.getElementById('resTotalQuantity').textContent = `${agri.total_quantity_kg || 0} kg`;
    if (document.getElementById('resConfidence')) document.getElementById('resConfidence').textContent = `${ml.confidence_pct || 95}%`;

    // Render Alternatives
    const altContainer = document.getElementById('alternativesContainer');
    if (altContainer && ml.alternatives) {
        altContainer.innerHTML = '';
        ml.alternatives.forEach((alt, idx) => {
            const row = document.createElement('div');
            row.style.cssText = "display:flex; justify-content:space-between; align-items:center; background:#f8fafc; padding:6px 10px; border-radius:6px; border:1px solid #e2e8f0; font-size:0.82rem;";
            row.innerHTML = `
                <span style="font-weight:600; color:#1e293b;">${idx + 1}. ${alt.fertilizer}</span>
                <span style="font-weight:700; color:#15803d;">${alt.probability_pct}%</span>
            `;
            altContainer.appendChild(row);
        });
    }

    // Render Decision Drivers
    const driversList = document.getElementById('decisionDriversList');
    if (driversList && ml.decision_drivers) {
        driversList.innerHTML = '';
        ml.decision_drivers.forEach(driver => {
            const li = document.createElement('li');
            li.textContent = driver;
            driversList.appendChild(li);
        });
    }

    // Render Split Timeline
    const timelineContainer = document.getElementById('splitTimelineContainer');
    if (timelineContainer && agri.split_schedule) {
        timelineContainer.innerHTML = '';
        agri.split_schedule.forEach((split, idx) => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.innerHTML = `
                <div class="timeline-step">${idx + 1}</div>
                <div class="timeline-content">
                    <div class="timeline-title">
                        <span>${split.stage} (${split.timing_days})</span>
                        <span style="color:var(--primary); font-weight:800;">${split.total_dose_kg} kg</span>
                    </div>
                    <div class="timeline-desc">
                        <strong>Nutrient:</strong> ${split.dosage_split} &bull; <strong>Application:</strong> ${split.application_method}
                    </div>
                </div>
            `;
            timelineContainer.appendChild(item);
        });
    }

    // Soil Amendments
    if (document.getElementById('resPhAmendment')) document.getElementById('resPhAmendment').textContent = agri.ph_amendment || "pH is in optimal range (no amendments needed).";
    if (document.getElementById('resMicronutrients')) document.getElementById('resMicronutrients').textContent = agri.micronutrient_advice || "Micronutrients sufficient.";
    if (document.getElementById('resExplanation')) document.getElementById('resExplanation').textContent = agri.explanation || "";

    // Smooth Scroll to Results
    const resCard = document.getElementById('resultsCard');
    if (resCard) resCard.scrollIntoView({ behavior: 'smooth' });
}

async function loadFarmsTable() {
    const tbody = document.getElementById('farmsTableBody');
    if (!tbody) return;

    try {
        const res = await fetch('/api/farms/');
        if (res.ok) {
            const data = await res.json();
            const farms = Array.isArray(data) ? data : (data.results || []);
            tbody.innerHTML = '';
            if (farms.length === 0) {
                tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;">No farms registered yet.</td></tr>';
                return;
            }
            farms.forEach(f => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><strong>#${f.id}</strong></td>
                    <td>${f.farmer_name}</td>
                    <td>${f.state_name}</td>
                    <td>${f.district_name}</td>
                    <td>${f.block_name || '-'} / ${f.village_name || '-'}</td>
                    <td><span class="badge badge-accent">${f.fields_count || 1} Plots</span></td>
                    <td>${new Date(f.created_at).toLocaleDateString()}</td>
                `;
                tbody.appendChild(tr);
            });
        }
    } catch (err) {
        console.error("Error loading farms:", err);
    }
}

async function loadHistoryTable() {
    const tbody = document.getElementById('historyTableBody');
    if (!tbody) return;

    try {
        const res = await fetch('/api/recommendations/');
        if (res.ok) {
            const data = await res.json();
            const recs = Array.isArray(data) ? data : (data.results || []);
            tbody.innerHTML = '';
            if (recs.length === 0) {
                tbody.innerHTML = '<tr><td colspan="8" style="text-align:center;">No recommendations generated yet.</td></tr>';
                return;
            }
            recs.forEach(r => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><strong>#${r.id}</strong></td>
                    <td>${r.field_name} (${r.farm_name})</td>
                    <td>${r.crop_name}</td>
                    <td>${r.primary_fertilizer}</td>
                    <td>${r.total_quantity_kg} kg</td>
                    <td><strong>₹${parseFloat(r.estimated_cost_inr).toLocaleString('en-IN')}</strong></td>
                    <td><span class="badge badge-success">${parseFloat(r.ai_confidence).toFixed(1)}%</span></td>
                    <td>${new Date(r.created_at).toLocaleDateString()}</td>
                `;
                tbody.appendChild(tr);
            });
        }
    } catch (err) {
        console.error("Error loading history:", err);
    }
}
