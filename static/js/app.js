/**
 * KrishiKisan AI Precision Fertilizer Frontend Application
 * Live State- & District-Based Agro-Meteorology Client
 */

document.addEventListener('DOMContentLoaded', () => {
    loadInitialData();
    setupEventListeners();
    initWeatherModule();

    if (window.i18n) {
        window.i18n.onLanguageChange(() => {
            if (appState.crops && appState.crops.length > 0) {
                populateCropSelect(appState.crops);
            }
            if (weatherState.lastData) {
                renderWeatherData(weatherState.lastData);
            }
        });
    }
});

// ---------------------------------------------------------------------------
// 1. Application State Store
// ---------------------------------------------------------------------------
const appState = {
    crops: [],
};

const weatherState = {
    currentLocation: { state: 'Gujarat', district: 'Ahmedabad', name: 'Ahmedabad, Gujarat', lat: null, lon: null },
    lastData: null,
    isFetching: false,
    autoRefreshInterval: null,
    cache: {} // Key: `${lat}_${lon}_${state}_${district}` -> { timestamp, data }
};

// ---------------------------------------------------------------------------
// 2. Initial Data Loaders
// ---------------------------------------------------------------------------
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
    await loadLookupStates();

    // Default initial live weather for Gujarat / Ahmedabad
    fetchLiveWeather({ state: 'Gujarat', district: 'Ahmedabad' });
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

// ---------------------------------------------------------------------------
// 3. Live Agro-Meteorology Module
// ---------------------------------------------------------------------------
function initWeatherModule() {
    // Setup periodic automatic weather refresh (every 15 minutes)
    if (weatherState.autoRefreshInterval) {
        clearInterval(weatherState.autoRefreshInterval);
    }
    weatherState.autoRefreshInterval = setInterval(() => {
        fetchLiveWeather({ forceRefresh: false });
    }, 15 * 60 * 1000);
}

function renderWeatherLoading() {
    const tLoading = window.i18n ? window.i18n.t('weather.loading') : 'Loading...';
    const tAnalyzing = window.i18n ? window.i18n.t('weather.analyzing') : 'Analyzing...';

    const dispTemp = document.getElementById('dispTemp');
    const dispHumidity = document.getElementById('dispHumidity');
    const dispRain = document.getElementById('dispRain');
    const dispSpraySafety = document.getElementById('dispSpraySafety');
    const errBox = document.getElementById('weatherErrorContainer');
    const spinner = document.getElementById('refreshWeatherSpinner');

    if (dispTemp) dispTemp.textContent = tLoading;
    if (dispHumidity) dispHumidity.textContent = tLoading;
    if (dispRain) dispRain.textContent = tLoading;
    if (dispSpraySafety) {
        dispSpraySafety.textContent = tAnalyzing;
        dispSpraySafety.className = 'badge badge-accent';
    }
    if (errBox) errBox.style.display = 'none';
    if (spinner) spinner.classList.add('spin-icon');
}

function renderWeatherData(data) {
    const dispTemp = document.getElementById('dispTemp');
    const dispHumidity = document.getElementById('dispHumidity');
    const dispRain = document.getElementById('dispRain');
    const dispSpraySafety = document.getElementById('dispSpraySafety');
    const dispLoc = document.getElementById('dispWeatherLocation');
    const dispLastUpdated = document.getElementById('weatherLastUpdated');
    const errBox = document.getElementById('weatherErrorContainer');
    const spinner = document.getElementById('refreshWeatherSpinner');

    if (spinner) spinner.classList.remove('spin-icon');
    if (errBox) errBox.style.display = 'none';

    // 1. Temperature: XX.X °C
    const temp = (data.current && data.current.temperature !== undefined) ? data.current.temperature : data.temperature_c;
    if (dispTemp) {
        dispTemp.textContent = (temp !== undefined && temp !== null) ? `${Number(temp).toFixed(1)} °C` : '-- °C';
    }

    // 2. Relative Humidity: XX %
    const humidity = (data.current && data.current.humidity !== undefined) ? data.current.humidity : data.humidity_pct;
    if (dispHumidity) {
        dispHumidity.textContent = (humidity !== undefined && humidity !== null) ? `${Math.round(Number(humidity))} %` : '-- %';
    }

    // 3. 48-Hour Rain Forecast: sum of hourly precipitation (XX.X mm)
    const rain = (data.forecast_48h && data.forecast_48h.rain_mm !== undefined) ? data.forecast_48h.rain_mm : data.rainfall_forecast_mm;
    if (dispRain) {
        dispRain.textContent = (rain !== undefined && rain !== null) ? `${Number(rain).toFixed(1)} mm` : '0.0 mm';
    }

    // 4. Dynamic Spray Safety: OPTIMAL, CAUTION, or AVOID
    const safety = (data.agro && data.agro.spray_safety) ? data.agro.spray_safety : (data.spray_safety || 'OPTIMAL');
    if (dispSpraySafety) {
        let badgeClass = 'badge badge-success';
        let safetyTextKey = 'weather.optimal';

        if (safety === 'AVOID') {
            badgeClass = 'badge badge-danger';
            safetyTextKey = 'weather.avoid';
        } else if (safety === 'CAUTION') {
            badgeClass = 'badge badge-warning';
            safetyTextKey = 'weather.caution';
        }

        const localizedSafety = window.i18n ? window.i18n.t(safetyTextKey) : safety;
        dispSpraySafety.textContent = localizedSafety;
        dispSpraySafety.className = badgeClass;
    }

    // 5. Location Display Badge: 📍 District, State
    const locName = data.location?.display_name ||
                    (data.location ? `${data.location.district || ''}, ${data.location.state || ''}`.replace(/^,\s*|,\s*$/g, '') : 'Selected Location');
    if (dispLoc) dispLoc.textContent = locName;

    // 6. Last Updated Time
    const timeStr = data.formatted_time || (new Date()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (dispLastUpdated) dispLastUpdated.textContent = timeStr;
}

function renderWeatherError(errorMsg, state, district) {
    const dispTemp = document.getElementById('dispTemp');
    const dispHumidity = document.getElementById('dispHumidity');
    const dispRain = document.getElementById('dispRain');
    const dispSpraySafety = document.getElementById('dispSpraySafety');
    const errBox = document.getElementById('weatherErrorContainer');
    const errMsgEl = document.getElementById('weatherErrorMessage');
    const dispLoc = document.getElementById('dispWeatherLocation');
    const spinner = document.getElementById('refreshWeatherSpinner');

    if (spinner) spinner.classList.remove('spin-icon');

    const defaultUnavailable = window.i18n ? window.i18n.t('weather.unavailable') : 'Weather data temporarily unavailable';
    const locLabel = (district && state) ? `${district}, ${state}` : (state || district || '');
    const displayErr = locLabel ? `${defaultUnavailable} (${locLabel})` : defaultUnavailable;

    if (errMsgEl) errMsgEl.textContent = displayErr;
    if (errBox) errBox.style.display = 'flex';

    if (dispTemp) dispTemp.textContent = '-- °C';
    if (dispHumidity) dispHumidity.textContent = '-- %';
    if (dispRain) dispRain.textContent = '-- mm';
    if (dispSpraySafety) {
        dispSpraySafety.textContent = '--';
        dispSpraySafety.className = 'badge';
    }
    if (dispLoc && locLabel) dispLoc.textContent = locLabel;
}

async function fetchLiveWeather({ state = null, district = null, lat = null, lon = null, forceRefresh = false } = {}) {
    // Resolve active state & district parameters
    const activeState = state !== null ? state : (document.getElementById('lookupState')?.value?.trim() || weatherState.currentLocation.state);
    const activeDistrict = district !== null ? district : (document.getElementById('lookupDistrict')?.value?.trim() || null);

    weatherState.currentLocation = {
        state: activeState,
        district: activeDistrict,
        lat: lat,
        lon: lon
    };

    const cacheKey = `${lat || ''}_${lon || ''}_${activeState || ''}_${activeDistrict || ''}`;
    const now = Date.now();

    // Check client-side cache (10 min TTL) unless forced refresh
    if (!forceRefresh && weatherState.cache[cacheKey] && (now - weatherState.cache[cacheKey].timestamp < 600000)) {
        weatherState.lastData = weatherState.cache[cacheKey].data;
        renderWeatherData(weatherState.cache[cacheKey].data);
        return;
    }

    renderWeatherLoading();
    weatherState.isFetching = true;

    try {
        let url = '/api/weather/?';
        const params = new URLSearchParams();
        if (lat !== null && lon !== null) {
            params.append('lat', lat);
            params.append('lon', lon);
        } else {
            if (activeState) params.append('state', activeState);
            if (activeDistrict) params.append('district', activeDistrict);
        }
        if (forceRefresh) params.append('refresh', '1');

        const res = await fetch(url + params.toString());
        if (!res.ok) {
            const errData = await res.json().catch(() => ({}));
            throw new Error(errData.error || `Weather API error status: ${res.status}`);
        }

        const data = await res.json();
        weatherState.cache[cacheKey] = {
            timestamp: now,
            data: data
        };
        weatherState.lastData = data;
        renderWeatherData(data);

    } catch (err) {
        console.error("Live weather fetch error:", err);
        renderWeatherError(err.message, activeState, activeDistrict);
    } finally {
        weatherState.isFetching = false;
    }
}

function fetchWeatherByGPS() {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        return;
    }
    const btnGps = document.getElementById('btnGpsWeather');
    if (btnGps) btnGps.disabled = true;

    renderWeatherLoading();
    navigator.geolocation.getCurrentPosition(
        (pos) => {
            if (btnGps) btnGps.disabled = false;
            fetchLiveWeather({
                lat: pos.coords.latitude,
                lon: pos.coords.longitude,
                forceRefresh: true
            });
        },
        (err) => {
            if (btnGps) btnGps.disabled = false;
            console.warn("GPS Geolocation error:", err);
            alert("Could not access GPS location. Using selected State/District instead.");
            fetchLiveWeather({ forceRefresh: true });
        },
        { timeout: 8000, enableHighAccuracy: true }
    );
}

// ---------------------------------------------------------------------------
// 4. Form Event Listeners & Interactive Handlers
// ---------------------------------------------------------------------------
function setupEventListeners() {
    const farmSelect = document.getElementById('farmSelect');
    const fieldSelect = document.getElementById('fieldSelect');
    const form = document.getElementById('recommendationForm');
    const lookupState = document.getElementById('lookupState');
    const lookupDistrict = document.getElementById('lookupDistrict');
    const lookupBlock = document.getElementById('lookupBlock');
    const btnApplyBenchmark = document.getElementById('btnFetchSoilBenchmark');
    const btnRefreshWeather = document.getElementById('btnRefreshWeather');
    const btnRetryWeather = document.getElementById('btnRetryWeather');
    const btnGpsWeather = document.getElementById('btnGpsWeather');

    // Live Weather Actions
    if (btnRefreshWeather) {
        btnRefreshWeather.addEventListener('click', () => {
            fetchLiveWeather({ forceRefresh: true });
        });
    }

    if (btnRetryWeather) {
        btnRetryWeather.addEventListener('click', () => {
            fetchLiveWeather({ forceRefresh: true });
        });
    }

    if (btnGpsWeather) {
        btnGpsWeather.addEventListener('click', () => {
            fetchWeatherByGPS();
        });
    }

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

    // State Selection -> Fetch Live Weather + Load Districts
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

            // Trigger live weather fetch immediately for selected state
            fetchLiveWeather({ state: st, district: null, forceRefresh: true });

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

    // District Selection -> Fetch Live Weather for District + Load Blocks
    if (lookupDistrict) {
        lookupDistrict.addEventListener('change', async (e) => {
            const st = lookupState.value;
            const dist = e.target.value;
            const selectBlockText = window.i18n ? window.i18n.t('form.selectBlock') : '-- Select Block / Taluka --';
            lookupBlock.innerHTML = `<option value="" data-i18n="form.selectBlock">${selectBlockText}</option>`;
            lookupBlock.disabled = true;
            if (btnApplyBenchmark) btnApplyBenchmark.disabled = !dist;

            if (!st) return;

            // Trigger live weather fetch for state + district
            if (dist) {
                fetchLiveWeather({ state: st, district: dist, forceRefresh: true });
            } else {
                fetchLiveWeather({ state: st, district: null, forceRefresh: true });
            }

            if (!dist) return;

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

// ---------------------------------------------------------------------------
// 5. Generate AI Precision Recommendation
// ---------------------------------------------------------------------------
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
