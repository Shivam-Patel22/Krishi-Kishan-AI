/**
 * KrishiKisan AI - Multilingual Internationalization (i18n) System
 * Supports English (en), Hindi (hi), and Gujarati (gu)
 */

const translations = {
    en: {
        // Navigation & Branding
        "brand.title": "KrishiKisan AI",
        "nav.dbCount": "10.85M Records",
        "nav.dbLabel": "National Soil DB:",
        "nav.accuracyLabel": "Model Accuracy:",
        "nav.accuracyVal": "99.95% (F3: 0.9995)",
        "nav.backDashboard": "← Back to Dashboard",
        "nav.selectLang": "Language",

        // Dashboard Form
        "form.plotTitle": "Farm Plot & Soil Diagnostics",
        "form.plotSubtitle": "Enter your farm parameters or auto-fetch regional benchmarks to generate your AI precision prescription.",
        "form.badgeInteractive": "Interactive Engine",
        
        // Section 1: Plot & Crop
        "form.sec1Heading": "1. Select Plot & Target Crop",
        "form.targetCrop": "Target Crop",
        "form.chooseCrop": "-- Choose Target Crop --",
        "form.soilType": "Soil Type",
        "form.fieldArea": "Field Area (Hectares)",
        "form.hectareHelp": "1 Hectare ≈ 2.471 Acres",

        // Soil Types
        "soil.loamy": "Loamy Soil (Alluvial / Medium)",
        "soil.black": "Black Cotton Soil (Regur)",
        "soil.red": "Red & Yellow Soil",
        "soil.sandyLoam": "Sandy Loam / Light Texture",
        "soil.clayey": "Clayey Soil / Heavy Texture",
        "soil.laterite": "Laterite Soil",

        // Section 2: Regional Benchmark
        "form.autoFetchTitle": "📍 Auto-Fetch from 10.85M National Soil Database",
        "form.state": "State",
        "form.selectState": "-- Select State --",
        "form.district": "District",
        "form.selectDistrict": "-- Select District --",
        "form.block": "Block / Taluka",
        "form.selectBlock": "-- Select Block / Taluka --",
        "form.applyBenchmark": "Apply Regional Benchmark",
        "form.loadingBenchmark": "Loading Benchmark...",

        // Section 3: Soil Chemistry
        "form.sec2Heading": "2. Soil Chemistry & Nutrient Test (kg/ha & ppm)",
        "form.nitrogen": "Nitrogen (N)",
        "form.phosphorus": "Phosphorus (P)",
        "form.potassium": "Potassium (K)",
        "form.ph": "Soil pH (1-14)",
        "form.oc": "Organic Carbon",
        "form.ec": "Electrical Cond.",

        // Section 4: Weather
        "form.sec3Heading": "3. Local Agro-Meteorology (48-hr Window)",
        "weather.temp": "Temperature",
        "weather.humidity": "Humidity",
        "weather.rain": "Rain Forecast",
        "weather.wind": "Wind Speed",
        "weather.spraySafety": "Spray Safety",
        "weather.optimal": "OPTIMAL",
        "weather.caution": "CAUTION",
        "weather.avoid": "AVOID",
        "weather.loading": "Loading...",
        "weather.analyzing": "Analyzing...",
        "weather.unavailable": "Weather data temporarily unavailable",
        "weather.retry": "Retry",
        "weather.refresh": "Refresh",
        "weather.lastUpdated": "Last updated",
        "weather.next48h": "(Next 48h)",
        "weather.gps": "GPS",
        "weather.usingGps": "GPS Location",
        "weather.selectPrompt": "Select State / District",

        // Button & Actions
        "form.btnGenerate": "Generate AI Precision Recommendation",
        "form.btnCalculating": "Calculating Agronomic & AI Dosage...",

        // Validation & Alerts
        "alert.selectState": "Please select a State.",
        "alert.selectDistrict": "Please select a District.",
        "alert.selectBlock": "Please select a Block / Taluka.",
        "alert.selectCrop": "Please select a Target Crop.",
        "alert.benchmarkApplied": "Applied 10.85M National Soil Database Benchmark for {district}, {state}!",
        "alert.recError": "Recommendation Generation Error: {error}",

        // Report Page
        "report.emptyTitle": "No Recommendation Report Available",
        "report.emptyText": "No prescription has been generated yet for this session. Please enter your farm plot details and soil chemistry test values on the dashboard first.",
        "report.goDashboard": "Go to Dashboard",
        "report.badgeOfficial": "Official Agronomic Prescription",
        "report.title": "Precision Fertilizer Recommendation Report",
        "report.subtitle": "AI Multi-Model Ensemble & ICAR Stoichiometric Nutrient Prescription",
        "report.idLabel": "Report ID:",
        "report.generatedLabel": "Generated:",
        "report.targetCrop": "Target Crop",
        "report.fieldArea": "Field Area",
        "report.soilTexture": "Soil Texture",
        "report.sourceBenchmark": "Source Benchmark",
        "report.fieldTest": "Field Test / Diagnostic Input",

        // Primary Banner
        "report.primaryTag": "Recommended Primary Formulation",
        "report.estCost": "Est. Total Fertilizer Cost",
        "report.totalQty": "Total Fertilizer Quantity",
        "report.aiConfidence": "AI Model Confidence",
        "report.appWindow": "Weather Application Window",
        "report.windowOptimal": "Optimal / Safe",
        "report.windowCaution": "Caution Advised",

        // Warnings
        "report.warningsTitle": "Agronomic & Environmental Advisory Warnings",

        // Nutrient Diagnostics
        "report.diagTitle": "Soil Nutrient Status & Balance",
        "report.diagMatrix": "Diagnostic Matrix",
        "report.nutrientN": "Nitrogen (N)",
        "report.nutrientP": "Phosphorus (P₂O₅)",
        "report.nutrientK": "Potassium (K₂O)",
        "report.statusLow": "LOW",
        "report.statusMedium": "MEDIUM",
        "report.statusHigh": "HIGH",
        "report.statusDeficient": "Deficient",
        "report.statusAdequate": "Adequate",
        "report.statusAcidic": "Acidic",
        "report.statusNeutral": "Neutral",
        "report.statusAlkaline": "Alkaline",
        "report.statusSaline": "Saline",
        "report.statusSaltFree": "Salt-Free",

        // Soil Chemistry Grid
        "report.soilPh": "Soil pH",
        "report.soilOc": "Organic Carbon (OC)",
        "report.soilEc": "Electrical Cond. (EC)",
        "report.soilZn": "Zinc (Zn)",
        "report.soilB": "Boron (B)",
        "report.soilS": "Sulphur (S)",
        "report.soilFe": "Iron (Fe)",

        // Split Schedule
        "report.splitTitle": "Agronomic Split Application Schedule",
        "report.splitBadge": "3-Stage Plan",
        "report.splitDesc": "Multi-stage split dosing enhances Nitrogen Use Efficiency (NUE) by up to 35% and minimizes environmental leaching.",
        "report.timing": "Timing:",
        "report.instructions": "Instructions:",
        "report.defaultSplitText": "Standard basal and top-dressing application recommended.",

        // Split Stages
        "stage.basal": "Basal Dose (Sowing/Transplanting)",
        "stage.top1": "First Top Dressing (Vegetative Stage)",
        "stage.top2": "Second Top Dressing (Flowering/Panicle Initiation)",
        "timing.basal": "At the time of sowing / transplanting",
        "timing.top1": "20 - 30 days after sowing / transplanting (tillering / vegetative)",
        "timing.top2": "45 - 60 days after sowing / transplanting (panicle initiation / pre-flowering)",
        "instr.basal": "Broadcast full Phosphorus and Potassium, along with basal Nitrogen, and incorporate thoroughly into moist soil before final harrowing.",
        "instr.top1": "Broadcast remaining Urea evenly across rows when soil has sufficient moisture. Avoid applying during strong sun.",
        "instr.top2": "Top-dress final Nitrogen dose along root zone followed by light irrigation for maximum uptake efficiency.",

        // Amendments & Weather
        "report.amendTitle": "Soil Amendments & Micronutrient Prescriptions",
        "report.phAmendHeading": "🌾 Soil pH Amendment (Lime / Gypsum):",
        "report.microAmendHeading": "🔬 Micronutrient Corrections (Zn, B, S, Fe):",
        "report.optimumPhText": "Optimal soil pH (6.0-7.5). No liming or gypsum amendments required.",
        "report.adequateMicroText": "Micronutrients (Zn, B, S, Fe) are within adequate agricultural ranges.",
        "report.radarTitle": "Agro-Meteorology & Spray Safety Radar",
        "report.defaultWeatherAdvisory": "Weather window is optimal for fertilizer broadcasting and foliage spray.",

        // AI Ensemble & Rationale
        "report.aiTitle": "AI Multi-Model Ensemble Confidence & Alternative Formulations",
        "report.metaEnsemble": "Weighted Soft-Voting Meta-Ensemble (250 RF + 250 ET + 250 HGB + Deep MLP)",
        "report.aiSubtitle": "Top-3 Alternative Formulations ranked by probability distribution:",
        "report.decisionFactors": "Key Decision Factors:",
        "report.rationaleTitle": "Explainable AI Scientific Rationale",
        "report.icarBadge": "ICAR Stoichiometry",
        "report.confidence": "Confidence",
        "report.defaultRationale": "Balanced nutrient requirements based on ICAR crop standards and soil test values.",

        // Download & Footer
        "report.btnDownloadPDF": "Download PDF Report",
        "footer.text": "Smart India Hackathon (SIH 2026) • Problem Statement PS-SW-002 • AI-Powered Precision Fertilizer Platform",

        // Fertilizer Names
        "fert.Urea": "Urea",
        "fert.DAP": "DAP",
        "fert.MOP": "MOP",
        "fert.NPK 10-26-26": "NPK (10-26-26)",
        "fert.NPK 12-32-16": "NPK (12-32-16)",
        "fert.NPK 20-20-0-13": "NPK (20-20-0-13)",
        "fert.SSP": "Single Super Phosphate (SSP)",
        "fert.Zinc Sulphate": "Zinc Sulphate (21% Zn)",
        "fert.Borax": "Borax (10.5% B)",
        "fert.Agricultural Lime": "Agricultural Lime (CaCO3)",
        "fert.Gypsum": "Agricultural Gypsum (CaSO4)",

        // Crops
        "crop.Rice / Paddy": "Rice / Paddy",
        "crop.Rice (Paddy)": "Rice (Paddy)",
        "crop.Wheat": "Wheat",
        "crop.Cotton": "Cotton",
        "crop.Sugarcane": "Sugarcane",
        "crop.Maize / Corn": "Maize / Corn",
        "crop.Maize": "Maize",
        "crop.Soybean": "Soybean",
        "crop.Groundnut / Peanut": "Groundnut / Peanut",
        "crop.Groundnut": "Groundnut",
        "crop.Mustard": "Mustard",
        "crop.Tomato": "Tomato",
        "crop.Potato": "Potato",
        "crop.Onion": "Onion",
        "crop.Gram / Chickpea": "Gram / Chickpea",
        "crop.Chickpea (Gram)": "Chickpea (Gram)",
        "crop.Barley": "Barley",
        "crop.Bajra (Pearl Millet)": "Bajra (Pearl Millet)",
        "crop.Jowar (Sorghum)": "Jowar (Sorghum)",
        "crop.Pigeon Pea (Tur/Arhar)": "Pigeon Pea (Tur/Arhar)",

        // Crop Categories
        "cat.Cereal": "Cereal",
        "cat.Cereals": "Cereals",
        "cat.Pulse": "Pulse",
        "cat.Pulses": "Pulses",
        "cat.Cash Crop": "Cash Crop",
        "cat.Commercial": "Commercial",
        "cat.Oilseed": "Oilseed",
        "cat.Oilseeds": "Oilseeds",
        "cat.Vegetable": "Vegetable",
        "cat.Vegetables": "Vegetables",
        "cat.Fruits": "Fruits"
    },

    hi: {
        // Navigation & Branding
        "brand.title": "कृषिकिसान AI",
        "nav.dbCount": "10.85M रिकॉर्ड",
        "nav.dbLabel": "राष्ट्रीय मृदा डेटाबेस:",
        "nav.accuracyLabel": "मॉडल सटीकता:",
        "nav.accuracyVal": "99.95% (F3: 0.9995)",
        "nav.backDashboard": "← डैशबोर्ड पर वापस जाएं",
        "nav.selectLang": "भाषा",

        // Dashboard Form
        "form.plotTitle": "खेत का प्लॉट और मृदा परीक्षण",
        "form.plotSubtitle": "अपनी सटीक AI उर्वरक सिफारिश प्राप्त करने के लिए अपने खेत के पैरामीटर दर्ज करें या राष्ट्रीय डेटाबेस से मानक चुनें।",
        "form.badgeInteractive": "इंटरएक्टिव इंजन",

        // Section 1: Plot & Crop
        "form.sec1Heading": "1. प्लॉट और लक्षित फसल चुनें",
        "form.targetCrop": "लक्षित फसल",
        "form.chooseCrop": "-- लक्षित फसल चुनें --",
        "form.soilType": "मिट्टी का प्रकार",
        "form.fieldArea": "खेत का क्षेत्रफल (हेक्टेयर)",
        "form.hectareHelp": "1 हेक्टेयर ≈ 2.471 एकड़",

        // Soil Types
        "soil.loamy": "दोमट मिट्टी (जलोढ़ / मध्यम)",
        "soil.black": "काली कपास मिट्टी (रेगुर)",
        "soil.red": "लाल और पीली मिट्टी",
        "soil.sandyLoam": "बलुई दोमट / हल्की बनावट",
        "soil.clayey": "चिकनी मिट्टी / भारी बनावट",
        "soil.laterite": "लैटेराइट मिट्टी",

        // Section 2: Regional Benchmark
        "form.autoFetchTitle": "📍 10.85M राष्ट्रीय मृदा डेटाबेस से स्वचालित प्राप्त करें",
        "form.state": "राज्य",
        "form.selectState": "-- राज्य चुनें --",
        "form.district": "ज़िला",
        "form.selectDistrict": "-- ज़िला चुनें --",
        "form.block": "ब्लॉक / तालुका",
        "form.selectBlock": "-- ब्लॉक / तालुका चुनें --",
        "form.applyBenchmark": "क्षेत्रीय मानक लागू करें",
        "form.loadingBenchmark": "मानक लोड हो रहा है...",

        // Section 3: Soil Chemistry
        "form.sec2Heading": "2. मृदा रसायन व पोषक तत्व परीक्षण (kg/ha & ppm)",
        "form.nitrogen": "नाइट्रोजन (N)",
        "form.phosphorus": "फॉस्फोरस (P)",
        "form.potassium": "पोटैशियम (K)",
        "form.ph": "मृदा pH (1-14)",
        "form.oc": "जैविक कार्बन (OC)",
        "form.ec": "विद्युत चालकता (EC)",

        // Section 4: Weather
        "form.sec3Heading": "3. स्थानीय कृषि-मौसम पूर्वानुमान (48 घंटे)",
        "weather.temp": "तापमान",
        "weather.humidity": "नमी (आर्द्रता)",
        "weather.rain": "वर्षा पूर्वानुमान",
        "weather.wind": "हवा की गति",
        "weather.spraySafety": "छिड़काव सुरक्षा",
        "weather.optimal": "अनुकूल",
        "weather.caution": "सावधानी",
        "weather.avoid": "बचें (असुरक्षित)",
        "weather.loading": "लोड हो रहा है...",
        "weather.analyzing": "विश्लेषण हो रहा है...",
        "weather.unavailable": "मौसम डेटा अस्थायी रूप से अनुपलब्ध है",
        "weather.retry": "पुनः प्रयास करें",
        "weather.refresh": "ताज़ा करें",
        "weather.lastUpdated": "अंतिम अपडेट",
        "weather.next48h": "(अगले 48 घंटे)",
        "weather.gps": "जीपीएस",
        "weather.usingGps": "जीपीएस स्थान",
        "weather.selectPrompt": "राज्य / ज़िला चुनें",

        // Button & Actions
        "form.btnGenerate": "सटीक AI उर्वरक सिफारिश उत्पन्न करें",
        "form.btnCalculating": "कृषि व AI मात्रा की गणना की जा रही है...",

        // Validation & Alerts
        "alert.selectState": "कृपया एक राज्य चुनें।",
        "alert.selectDistrict": "कृपया एक ज़िला चुनें।",
        "alert.selectBlock": "कृपया एक ब्लॉक / तालुका चुनें।",
        "alert.selectCrop": "कृपया एक लक्षित फसल चुनें।",
        "alert.benchmarkApplied": "{district}, {state} के लिए 10.85M राष्ट्रीय मृदा डेटाबेस मानक सफलतापूर्वक लागू किया गया!",
        "alert.recError": "सिफारिश निर्माण त्रुटि: {error}",

        // Report Page
        "report.emptyTitle": "कोई सिफारिश रिपोर्ट उपलब्ध नहीं है",
        "report.emptyText": "इस सत्र के लिए अभी तक कोई नुस्खा तैयार नहीं किया गया है। कृपया पहले डैशबोर्ड पर अपने खेत का विवरण और मिट्टी परीक्षण मान दर्ज करें।",
        "report.goDashboard": "डैशबोर्ड पर जाएं",
        "report.badgeOfficial": "आधिकारिक कृषि परामर्श रिपोर्ट",
        "report.title": "सटीक उर्वरक सिफारिश रिपोर्ट",
        "report.subtitle": "AI मल्टी-मॉडल एन्सेम्बल और ICAR पोषक तत्व निर्धारण",
        "report.idLabel": "रिपोर्ट संख्या:",
        "report.generatedLabel": "तैयार दिनांक:",
        "report.targetCrop": "लक्षित फसल",
        "report.fieldArea": "खेत का क्षेत्रफल",
        "report.soilTexture": "मिट्टी की बनावट",
        "report.sourceBenchmark": "स्रोत मानक",
        "report.fieldTest": "खेत परीक्षण / नैदानिक इनपुट",

        // Primary Banner
        "report.primaryTag": "अनुशंसित प्राथमिक उर्वरक मिश्रण",
        "report.estCost": "अनुमानित कुल उर्वरक लागत",
        "report.totalQty": "कुल उर्वरक मात्रा",
        "report.aiConfidence": "AI मॉडल विश्वसनीयता",
        "report.appWindow": "मौसम अनुप्रयोग समय",
        "report.windowOptimal": "अनुकूल / सुरक्षित",
        "report.windowCaution": "सावधानी बरतें",

        // Warnings
        "report.warningsTitle": "कृषि और पर्यावरणीय परामर्श चेतावनियां",

        // Nutrient Diagnostics
        "report.diagTitle": "मृदा पोषक तत्व स्थिति और संतुलन",
        "report.diagMatrix": "परीक्षण मैट्रिक्स",
        "report.nutrientN": "नाइट्रोजन (N)",
        "report.nutrientP": "फॉस्फोरस (P₂O₅)",
        "report.nutrientK": "पोटैशियम (K₂O)",
        "report.statusLow": "कम (LOW)",
        "report.statusMedium": "मध्यम (MEDIUM)",
        "report.statusHigh": "अधिक (HIGH)",
        "report.statusDeficient": "अभाव",
        "report.statusAdequate": "पर्याप्त",
        "report.statusAcidic": "अम्लीय",
        "report.statusNeutral": "उदासीन / अनुकूल",
        "report.statusAlkaline": "क्षारीय",
        "report.statusSaline": "लवणीय",
        "report.statusSaltFree": "लवण-मुक्त",

        // Soil Chemistry Grid
        "report.soilPh": "मिट्टी का pH",
        "report.soilOc": "जैविक कार्बन (OC)",
        "report.soilEc": "विद्युत चालकता (EC)",
        "report.soilZn": "जिंक (Zn)",
        "report.soilB": "बोरॉन (B)",
        "report.soilS": "सल्फर (S)",
        "report.soilFe": "आयरन (Fe)",

        // Split Schedule
        "report.splitTitle": "उर्वरक विभाजन अनुप्रयोग समय-सारणी",
        "report.splitBadge": "3-चरणीय योजना",
        "report.splitDesc": "विभाजित खुराक (Split Dosing) नाइट्रोजन दक्षता (NUE) को 35% तक बढ़ाती है और पर्यावरणीय रिसाव को कम करती है।",
        "report.timing": "समय:",
        "report.instructions": "दिशा-निर्देश:",
        "report.defaultSplitText": "बुआई और टॉप-ड्रेसिंग अनुप्रयोग अनुशंसित है।",

        // Split Stages
        "stage.basal": "आधारभूत खुराक / बेसल (बुआई/रोपाई के समय)",
        "stage.top1": "प्रथम टॉप ड्रेसिंग (वानस्पतिक विकास चरण)",
        "stage.top2": "द्वितीय टॉप ड्रेसिंग (फूल/बाली आने का चरण)",
        "timing.basal": "बुआई / रोपाई के समय",
        "timing.top1": "बुआई / रोपाई के 20 - 30 दिन बाद (कल्ले फूटने के समय)",
        "timing.top2": "बुआई / रोपाई के 45 - 60 दिन बाद (बाली निकलने से पूर्व)",
        "instr.basal": "पूरा फॉस्फोरस और पोटाश, बेसल नाइट्रोजन के साथ खेत की अंतिम जुताई से पहले नम मिट्टी में अच्छी तरह मिलाएँ।",
        "instr.top1": "शेष यूरिया की खुराक पौधों की कतारों में समान रूप से बिखेरें जब मिट्टी में पर्याप्त नमी हो। तेज धूप में छिड़काव न करें।",
        "instr.top2": "अंतिम नाइट्रोजन खुराक जड़ क्षेत्र में दें और अधिकतम पोषक तत्व अवशोषण के लिए हल्की सिंचाई करें।",

        // Amendments & Weather
        "report.amendTitle": "मृदा सुधारक और सूक्ष्म पोषक तत्व सिफारिश",
        "report.phAmendHeading": "🌾 मृदा pH सुधार (चूना / जिप्सम):",
        "report.microAmendHeading": "🔬 सूक्ष्म पोषक तत्व संशोधन (Zn, B, S, Fe):",
        "report.optimumPhText": "अनुकूल मृदा pH (6.0-7.5)। किसी चूना या जिप्सम सुधारक की आवश्यकता नहीं है।",
        "report.adequateMicroText": "सूक्ष्म पोषक तत्व (Zn, B, S, Fe) कृषि मानकों के अनुसार पर्याप्त मात्रा में हैं।",
        "report.radarTitle": "कृषि-मौसम व छिड़काव सुरक्षा रडार",
        "report.defaultWeatherAdvisory": "उर्वरक छिड़काव और अनुप्रयोग के लिए मौसम परिस्थितियां पूरी तरह अनुकूल हैं।",

        // AI Ensemble & Rationale
        "report.aiTitle": "AI मल्टी-मॉडल एन्सेम्बल विश्वसनीयता और वैकल्पिक उर्वरक",
        "report.metaEnsemble": "वेटेड सॉफ्ट-वोटिंग मेटा-एन्सेम्बल (250 RF + 250 ET + 250 HGB + Deep MLP)",
        "report.aiSubtitle": "संभाव्यता वितरण के अनुसार शीर्ष 3 वैकल्पिक उर्वरक:",
        "report.decisionFactors": "प्रमुख निर्णय कारक:",
        "report.rationaleTitle": "व्याख्यात्मक AI वैज्ञानिक आधार",
        "report.icarBadge": "ICAR मानक",
        "report.confidence": "विश्वसनीयता",
        "report.defaultRationale": "ICAR फसल मानकों और मृदा परीक्षण मानों के आधार पर संतुलित पोषक तत्व आवश्यकताएं।",

        // Download & Footer
        "report.btnDownloadPDF": "PDF रिपोर्ट डाउनलोड करें",
        "footer.text": "स्मार्ट इंडिया हैकाथॉन (SIH 2026) • समस्या विवरण PS-SW-002 • AI-संचालित सटीक उर्वरक मंच",

        // Fertilizer Names
        "fert.Urea": "यूरिया / Urea",
        "fert.DAP": "डीएपी / DAP",
        "fert.MOP": "एमओपी / MOP",
        "fert.NPK 10-26-26": "एनपीके (10-26-26)",
        "fert.NPK 12-32-16": "एनपीके (12-32-16)",
        "fert.NPK 20-20-0-13": "एनपीके (20-20-0-13)",
        "fert.SSP": "सिंगल सुपर फॉस्फेट (SSP)",
        "fert.Zinc Sulphate": "जिंक सल्फेट (21% Zn)",
        "fert.Borax": "बोरेक्स (10.5% B)",
        "fert.Agricultural Lime": "कृषि चूना (CaCO3)",
        "fert.Gypsum": "कृषि जिप्सम (CaSO4)",

        // Crops
        "crop.Rice / Paddy": "धान (चावल)",
        "crop.Rice (Paddy)": "धान (चावल)",
        "crop.Wheat": "गेहूं",
        "crop.Cotton": "कपास",
        "crop.Sugarcane": "गन्ना",
        "crop.Maize / Corn": "मक्का",
        "crop.Maize": "मक्का",
        "crop.Soybean": "सोयाबीन",
        "crop.Groundnut / Peanut": "मूंगफली",
        "crop.Groundnut": "मूंगफली",
        "crop.Mustard": "सरसों",
        "crop.Tomato": "टमाटर",
        "crop.Potato": "आलू",
        "crop.Onion": "प्याज",
        "crop.Gram / Chickpea": "चना (छोला)",
        "crop.Chickpea (Gram)": "चना (छोला)",
        "crop.Barley": "जौ",
        "crop.Bajra (Pearl Millet)": "बाजरा",
        "crop.Jowar (Sorghum)": "ज्वार",
        "crop.Pigeon Pea (Tur/Arhar)": "अरहर (तुअर)",

        // Crop Categories
        "cat.Cereal": "अनाज",
        "cat.Cereals": "अनाज",
        "cat.Pulse": "दलहन",
        "cat.Pulses": "दलहन",
        "cat.Cash Crop": "नकदी फसल",
        "cat.Commercial": "व्यावसायिक फसलें",
        "cat.Oilseed": "तिलहन",
        "cat.Oilseeds": "तिलहन",
        "cat.Vegetable": "सब्जी",
        "cat.Vegetables": "सब्जियां",
        "cat.Fruits": "फल"
    },

    gu: {
        // Navigation & Branding
        "brand.title": "કૃષિકિસાન AI",
        "nav.dbCount": "10.85M રેકોર્ડ્સ",
        "nav.dbLabel": "રાષ્ટ્રીય જમીન ડેટાબેઝ:",
        "nav.accuracyLabel": "મોડેલ ચોકસાઈ:",
        "nav.accuracyVal": "99.95% (F3: 0.9995)",
        "nav.backDashboard": "← ડેશબોર્ડ પર પાછા જાઓ",
        "nav.selectLang": "ભાષા",

        // Dashboard Form
        "form.plotTitle": "ખેતર પ્લોટ અને જમીન ચકાસણી",
        "form.plotSubtitle": "તમારી ચોક્કસ AI ખાતર ભલામણ મેળવવા માટે તમારા ખેતરની વિગતો દાખલ કરો અથવા રાષ્ટ્રીય ડેટાબેઝમાંથી પસંદ કરો.",
        "form.badgeInteractive": "ઇન્ટરેક્ટિવ એન્જિન",

        // Section 1: Plot & Crop
        "form.sec1Heading": "1. પ્લોટ અને લક્ષિત પાક પસંદ કરો",
        "form.targetCrop": "લક્ષિત પાક",
        "form.chooseCrop": "-- લક્ષિત પાક પસંદ કરો --",
        "form.soilType": "જમીનનો પ્રકાર",
        "form.fieldArea": "ખેતરનું ક્ષેત્રફળ (હેક્ટર)",
        "form.hectareHelp": "1 હેક્ટર ≈ 2.471 એકર",

        // Soil Types
        "soil.loamy": "ગોરાડુ / કાંપવાળી જમીન (મધ્યમ)",
        "soil.black": "કાળી કપાસની જમીન (રેગુર)",
        "soil.red": "લાલ અને પીળી જમીન",
        "soil.sandyLoam": "રેતાળ ગોરાડુ / હલકી જમીન",
        "soil.clayey": "ચીકણી / ભારે જમીન",
        "soil.laterite": "લેટેરાઈટ (રાતી) જમીન",

        // Section 2: Regional Benchmark
        "form.autoFetchTitle": "📍 10.85M રાષ્ટ્રીય જમીન ડેટાબેઝમાંથી સીધું મેળવો",
        "form.state": "રાજ્ય",
        "form.selectState": "-- રાજ્ય પસંદ કરો --",
        "form.district": "જિલ્લો",
        "form.selectDistrict": "-- જિલ્લો પસંદ કરો --",
        "form.block": "તાલુકો",
        "form.selectBlock": "-- તાલુકો પસંદ કરો --",
        "form.applyBenchmark": "વિસ્તાર આધારિત માપદંડ લાગુ કરો",
        "form.loadingBenchmark": "માપદંડ લોડ થઈ રહ્યો છે...",

        // Section 3: Soil Chemistry
        "form.sec2Heading": "2. જમીન રસાયણ અને પોષક તત્વ ચકાસણી (kg/ha & ppm)",
        "form.nitrogen": "નાઇટ્રોજન (N)",
        "form.phosphorus": "ફોસ્ફરસ (P)",
        "form.potassium": "પોટેશિયમ (K)",
        "form.ph": "જમીનનું pH (1-14)",
        "form.oc": "ઓર્ગેનિક કાર્બન (OC)",
        "form.ec": "વિદ્યુત વાહકતા (EC)",

        // Section 4: Weather
        "form.sec3Heading": "3. સ્થાનિક કૃષિ-હવામાન આગાહી (48 કલાક)",
        "weather.temp": "તાપમાન",
        "weather.humidity": "ભેજ (હવામાન)",
        "weather.rain": "વરસાદની આગાહી",
        "weather.wind": "પવનની ગતિ",
        "weather.spraySafety": "છંટકાવ અનુકૂળતા",
        "weather.optimal": "ઉત્તમ / અનુકૂળ",
        "weather.caution": "સાવચેતી",
        "weather.avoid": "ટાળો (અસુરક્ષિત)",
        "weather.loading": "લોડ થઈ રહ્યું છે...",
        "weather.analyzing": "વિશ્લેષણ ચાલુ...",
        "weather.unavailable": "હવામાન માહિતી હાલ ઉપલબ્ધ નથી",
        "weather.retry": "ફરી પ્રયાસ કરો",
        "weather.refresh": "રિફ્રેશ",
        "weather.lastUpdated": "છેલ્લું અપડેટ",
        "weather.next48h": "(આગામી 48 કલાક)",
        "weather.gps": "જીપીએસ",
        "weather.usingGps": "જીપીએસ સ્થાન",
        "weather.selectPrompt": "રાજ્ય / જિલ્લો પસંદ કરો",

        // Button & Actions
        "form.btnGenerate": "ચોક્કસ AI ખાતર ભલામણ મેળવો",
        "form.btnCalculating": "કૃષિ અને AI માત્રાની ગણતરી ચાલુ છે...",

        // Validation & Alerts
        "alert.selectState": "કૃપા કરીને રાજ્ય પસંદ કરો.",
        "alert.selectDistrict": "કૃપા કરીને જિલ્લો પસંદ કરો.",
        "alert.selectBlock": "કૃપા કરીને તાલુકો પસંદ કરો.",
        "alert.selectCrop": "કૃપા કરીને લક્ષિત પાક પસંદ કરો.",
        "alert.benchmarkApplied": "{district}, {state} માટે 10.85M રાષ્ટ્રીય જમીન ડેટાબેઝ માપદંડ સફળતાપૂર્વક લાગુ થયો!",
        "alert.recError": "ભલામણ નિર્માણમાં ક્ષતિ: {error}",

        // Report Page
        "report.emptyTitle": "કોઈ ભલામણ અહેવાલ ઉપલબ્ધ નથી",
        "report.emptyText": "આ સત્ર માટે હજી સુધી કોઈ અહેવાલ તૈયાર થયો નથી. કૃપા કરીને પહેલા ડેશબોર્ડ પર તમારા ખેતર અને જમીન પરીક્ષણની વિગતો દાખલ કરો.",
        "report.goDashboard": "ડેશબોર્ડ પર જાઓ",
        "report.badgeOfficial": "સત્તાવાર કૃષિ ભલામણ પત્ર",
        "report.title": "ચોક્કસ ખાતર ભલામણ અહેવાલ",
        "report.subtitle": "AI મલ્ટી-મોડેલ અને ICAR વૈજ્ઞાનિક પોષક તત્વ નિર્ધારણ",
        "report.idLabel": "અહેવાલ નંબર:",
        "report.generatedLabel": "તારીખ:",
        "report.targetCrop": "લક્ષિત પાક",
        "report.fieldArea": "ખેતરનું ક્ષેત્રફળ",
        "report.soilTexture": "જમીનનો પ્રકાર",
        "report.sourceBenchmark": "માહિતી સ્રોત",
        "report.fieldTest": "ખેતર ચકાસણી / ખેડૂત ઇનપુટ",

        // Primary Banner
        "report.primaryTag": "ભલામણ કરેલ મુખ્ય ખાતર",
        "report.estCost": "અંદાજિત કુલ ખાતર ખર્ચ",
        "report.totalQty": "કુલ ખાતરનો જથ્થો",
        "report.aiConfidence": "AI મોડેલ ચોકસાઈ",
        "report.appWindow": "હવામાન અનુકૂળ સમય",
        "report.windowOptimal": "ઉત્તમ / સલામત",
        "report.windowCaution": "સાવચેતી જરૂરી",

        // Warnings
        "report.warningsTitle": "કૃષિ અને પર્યાવરણીય સલાહ સૂચનો",

        // Nutrient Diagnostics
        "report.diagTitle": "જમીન પોષક તત્વ સ્થિતિ અને સંતુલન",
        "report.diagMatrix": "પરીક્ષણ મેટ્રિક્સ",
        "report.nutrientN": "નાઇટ્રોજન (N)",
        "report.nutrientP": "ફોસ્ફરસ (P₂O₅)",
        "report.nutrientK": "પોટેશિયમ (K₂O)",
        "report.statusLow": "ઓછું (LOW)",
        "report.statusMedium": "મધ્યમ (MEDIUM)",
        "report.statusHigh": "વધારે (HIGH)",
        "report.statusDeficient": "ખામીયુક્ત",
        "report.statusAdequate": "પૂરતું",
        "report.statusAcidic": "એસિડિક",
        "report.statusNeutral": "તટસ્થ / ઉત્તમ",
        "report.statusAlkaline": "ક્ષારીય (આલ્કલાઇન)",
        "report.statusSaline": "ખારવાળી",
        "report.statusSaltFree": "ક્ષાર-મુક્ત",

        // Soil Chemistry Grid
        "report.soilPh": "જમીનનું pH",
        "report.soilOc": "ઓર્ગેનિક કાર્બન (OC)",
        "report.soilEc": "વિદ્યુત વાહકતા (EC)",
        "report.soilZn": "ઝિંક (Zn)",
        "report.soilB": "બોરોન (B)",
        "report.soilS": "સલ્ફર (S)",
        "report.soilFe": "આયર્ન (Fe)",

        // Split Schedule
        "report.splitTitle": "તબક્કાવાર ખાતર આપવાની સમય-સારણી",
        "report.splitBadge": "3-તબક્કાનું આયોજન",
        "report.splitDesc": "તબક્કાવાર ખાતર આપવાથી નાઇટ્રોજન ઉપયોગ ક્ષમતા (NUE) 35% વધે છે અને ખાતરનો બગાડ અટકે છે.",
        "report.timing": "સમય:",
        "report.instructions": "માર્ગદર્શન:",
        "report.defaultSplitText": "વાવણી અને પૂર્તિ ખાતર પદ્ધતિ ભલામણ કરેલ છે.",

        // Split Stages
        "stage.basal": "પાયાનું ખાતર (વાવણી / ફેરરોપણી સમયે)",
        "stage.top1": "પ્રથમ પૂર્તિ ખાતર (વાનસ્પતિક વિકાસ તબક્કે)",
        "stage.top2": "બીજું પૂર્તિ ખાતર (ફૂલ / કંકી બેસવાના સમયે)",
        "timing.basal": "વાવણી અથવા ફેરરોપણી સમયે",
        "timing.top1": "વાવણી પછી 20 થી 30 દિવસે (ફૂટ આવવાના સમયે)",
        "timing.top2": "વાવણી પછી 45 થી 60 દિવસે (કંકી / ફૂલ બેસતા પહેલાં)",
        "instr.basal": "સંપૂર્ણ ફોસ્ફરસ અને પોટાશ તથા પાયાનો નાઇટ્રોજન, છેલ્લી ખેડ વખતે જમીનમાં ભેજ હોય ત્યારે બરાબર ભેળવી દો.",
        "instr.top1": "બાકી રહેલ યુરિયા જમીનમાં પૂરતો ભેજ હોય ત્યારે હારમાં સરખી રીતે આપો. તીવ્ર તડકામાં છંટકાવ ટાળો.",
        "instr.top2": "છેલ્લો નાઇટ્રોજન ડોઝ મૂળ વિસ્તાર નજીક આપી હળવું પિયત આપો જેથી પાક વધુ પોષક તત્વો ગ્રહણ કરી શકે.",

        // Amendments & Weather
        "report.amendTitle": "જમીન સુધારક અને સૂક્ષ્મ પોષક તત્વ ભલામણ",
        "report.phAmendHeading": "🌾 જમીન pH સુધારણા (ચૂનો / જીપ્સમ):",
        "report.microAmendHeading": "🔬 સૂક્ષ્મ પોષક તત્વો સુધારણા (Zn, B, S, Fe):",
        "report.optimumPhText": "જમીનનું pH ઉત્તમ (6.0-7.5) છે. કોઈ ચૂનો કે જીપ્સમ સુધારકની જરૂર નથી.",
        "report.adequateMicroText": "સૂક્ષ્મ પોષક તત્વો (Zn, B, S, Fe) ખેતી માટે પૂરતા પ્રમાણમાં છે.",
        "report.radarTitle": "કૃષિ-હવામાન અને છંટકાવ સલામતી રડાર",
        "report.defaultWeatherAdvisory": "ખાતર છંટકાવ અને પાક સંભાળ માટે હવામાન ખૂબ અનુકૂળ છે.",

        // AI Ensemble & Rationale
        "report.aiTitle": "AI મલ્ટી-મોડેલ ચોકસાઈ અને વૈકલ્પિક ખાતરો",
        "report.metaEnsemble": "વેઇટેડ સોફ્ટ-વોટિંગ મેટા-એન્સેમ્બલ (250 RF + 250 ET + 250 HGB + Deep MLP)",
        "report.aiSubtitle": "સંભાવના વિતરણ અનુસાર ટોચના 3 વૈકલ્પિક ખાતરો:",
        "report.decisionFactors": "મુખ્ય નિર્ણય પરિબળો:",
        "report.rationaleTitle": "વૈજ્ઞાનિક AI સમજૂતી અને આધાર",
        "report.icarBadge": "ICAR માપદંડ",
        "report.confidence": "વિશ્વાસપાત્રતા",
        "report.defaultRationale": "ICAR પાક ધોરણો અને જમીન ચકાસણી આધારે સંતુલિત પોષક તત્વ જરૂરિયાત.",

        // Download & Footer
        "report.btnDownloadPDF": "PDF અહેવાલ ડાઉનલોડ કરો",
        "footer.text": "સ્માર્ટ ઇન્ડિયા હેકાથોન (SIH 2026) • પ્રોબ્લેમ સ્ટેટમેન્ટ PS-SW-002 • AI-આધારિત ચોક્કસ ખાતર પ્લેટફોર્મ",

        // Fertilizer Names
        "fert.Urea": "યુરિયા / Urea",
        "fert.DAP": "ડીએપી / DAP",
        "fert.MOP": "એમઓપી / MOP",
        "fert.NPK 10-26-26": "એનપીકે (10-26-26)",
        "fert.NPK 12-32-16": "એનપીકે (12-32-16)",
        "fert.NPK 20-20-0-13": "એનપીકે (20-20-0-13)",
        "fert.SSP": "સિંગલ સુપર ફોસ્ફેટ (SSP)",
        "fert.Zinc Sulphate": "ઝિંક સલ્ફેટ (21% Zn)",
        "fert.Borax": "બોરેક્સ (10.5% B)",
        "fert.Agricultural Lime": "કૃષિ ચૂનો (CaCO3)",
        "fert.Gypsum": "કૃષિ જીપ્સમ (CaSO4)",

        // Crops
        "crop.Rice / Paddy": "ડાંગર (ચોખા)",
        "crop.Rice (Paddy)": "ડાંગર (ચોખા)",
        "crop.Wheat": "ઘઉં",
        "crop.Cotton": "કપાસ",
        "crop.Sugarcane": "શેરડી",
        "crop.Maize / Corn": "મકાઈ",
        "crop.Maize": "મકાઈ",
        "crop.Soybean": "સોયાબીન",
        "crop.Groundnut / Peanut": "મગફળી",
        "crop.Groundnut": "મગફળી",
        "crop.Mustard": "રાયડો / સરસવ",
        "crop.Tomato": "ટામેટા",
        "crop.Potato": "બટાકા",
        "crop.Onion": "ડુંગળી",
        "crop.Gram / Chickpea": "ચણા",
        "crop.Chickpea (Gram)": "ચણા",
        "crop.Barley": "જવ",
        "crop.Bajra (Pearl Millet)": "બાજરી",
        "crop.Jowar (Sorghum)": "જુવાર",
        "crop.Pigeon Pea (Tur/Arhar)": "તુવેર",

        // Crop Categories
        "cat.Cereal": "ધાન્ય પાક",
        "cat.Cereals": "ધાન્ય પાકો",
        "cat.Pulse": "કઠોળ પાક",
        "cat.Pulses": "કઠોળ પાકો",
        "cat.Cash Crop": "રોકડિયો પાક",
        "cat.Commercial": "રોકડિયા પાકો",
        "cat.Oilseed": "તેલીબિયાં પાક",
        "cat.Oilseeds": "તેલીબિયાં પાકો",
        "cat.Vegetable": "શાકભાજી",
        "cat.Vegetables": "શાકભાજી",
        "cat.Fruits": "ફળો"
    }
};

/**
 * i18n Translation Engine with Intelligent Dynamic Agronomic Text Localization
 */

const STATE_TRANSLATIONS = {
    "Andaman And Nicobar Islands": {
        "hi": "अंडमान और निकोबार द्वीप समूह",
        "gu": "અંદમાન અને નિકોબાર દ્વીપસમૂહ"
    },
    "Andhra Pradesh": {
        "hi": "आंध्र प्रदेश",
        "gu": "આંધ્ર પ્રદેશ"
    },
    "Arunachal Pradesh": {
        "hi": "अरुणाचल प्रदेश",
        "gu": "અરુણાચલ પ્રદેશ"
    },
    "Assam": {
        "hi": "असम",
        "gu": "અસમ"
    },
    "Bihar": {
        "hi": "बिहार",
        "gu": "બિહાર"
    },
    "Chhattisgarh": {
        "hi": "छत्तीसगढ़",
        "gu": "છત્તીસગઢ"
    },
    "Goa": {
        "hi": "गोवा",
        "gu": "ગોવા"
    },
    "Gujarat": {
        "hi": "गुजरात",
        "gu": "ગુજરાત"
    },
    "Haryana": {
        "hi": "हरियाणा",
        "gu": "હરિયાણા"
    },
    "Himachal Pradesh": {
        "hi": "हिमाचल प्रदेश",
        "gu": "હિમાચલ પ્રદેશ"
    },
    "Jammu And Kashmir": {
        "hi": "जम्मू और कश्मीर",
        "gu": "જમ્મુ અને કાશ્મીર"
    },
    "Jharkhand": {
        "hi": "झारखंड",
        "gu": "ઝારખંડ"
    },
    "Karnataka": {
        "hi": "कर्नाटक",
        "gu": "કર્ણાટક"
    },
    "Kerala": {
        "hi": "केरल",
        "gu": "કેરળ"
    },
    "Ladakh": {
        "hi": "लद्दाख",
        "gu": "લદ્દાખ"
    },
    "Madhya Pradesh": {
        "hi": "मध्य प्रदेश",
        "gu": "મધ્ય પ્રદેશ"
    },
    "Maharashtra": {
        "hi": "महाराष्ट्र",
        "gu": "મહારાષ્ટ્ર"
    },
    "Manipur": {
        "hi": "मणिपुर",
        "gu": "મણિપુર"
    },
    "Meghalaya": {
        "hi": "मेघालय",
        "gu": "મેઘાલય"
    },
    "Mizoram": {
        "hi": "मिजोरम",
        "gu": "મિઝોરમ"
    },
    "Nagaland": {
        "hi": "नागालैंड",
        "gu": "નાગાલેન્ડ"
    },
    "Odisha": {
        "hi": "ओडिशा",
        "gu": "ઓડિશા"
    },
    "Puducherry": {
        "hi": "पुदुचेरी",
        "gu": "પુડુચેરી"
    },
    "Punjab": {
        "hi": "पंजाब",
        "gu": "પંજાબ"
    },
    "Rajasthan": {
        "hi": "राजस्थान",
        "gu": "રાજસ્થાન"
    },
    "Sikkim": {
        "hi": "सिक्किम",
        "gu": "સિક્કિમ"
    },
    "Tamil Nadu": {
        "hi": "तमिलनाडु",
        "gu": "તમિલનાડુ"
    },
    "Telangana": {
        "hi": "तेलंगाना",
        "gu": "તેલંગાણા"
    },
    "Tripura": {
        "hi": "त्रिपुरा",
        "gu": "ત્રિપુરા"
    },
    "Uttar Pradesh": {
        "hi": "उत्तर प्रदेश",
        "gu": "ઉત્તર પ્રદેશ"
    },
    "Uttarakhand": {
        "hi": "उत्तराखंड",
        "gu": "ઉત્તરાખંડ"
    },
    "West Bengal": {
        "hi": "पश्चिम बंगाल",
        "gu": "પશ્ચિમ બંગાળ"
    }
};

const DISTRICT_TRANSLATIONS = {
    "Adilabad": {
        "hi": "अदिलबद",
        "gu": "અદિલબદ"
    },
    "Agar-Malwa": {
        "hi": "अगर-मल्वा",
        "gu": "અગર-મલ્વા"
    },
    "Agra": {
        "hi": "आगरा",
        "gu": "આગ્રા"
    },
    "Ahilyanagar": {
        "hi": "अहिल्यनगर",
        "gu": "અહિલ્યનગર"
    },
    "Ahmedabad": {
        "hi": "अहमदाबाद",
        "gu": "અમદાવાદ"
    },
    "Aizawl": {
        "hi": "ऐज़व्ल",
        "gu": "ઐઝવ્લ"
    },
    "Ajmer": {
        "hi": "अजमेर",
        "gu": "અજમેર"
    },
    "Akola": {
        "hi": "अकोला",
        "gu": "અકોલા"
    },
    "Alappuzha": {
        "hi": "अलप्पुझा",
        "gu": "અલપ્પુઝા"
    },
    "Aligarh": {
        "hi": "अलीगढ़",
        "gu": "અલીગઢ"
    },
    "Alipurduar": {
        "hi": "अलिपुर्दुअर",
        "gu": "અલિપુર્દુઅર"
    },
    "Alirajpur": {
        "hi": "अलिरज्पुर",
        "gu": "અલિરજ્પુર"
    },
    "Alluri Sitharama Raju": {
        "hi": "अल्लुरि सिथरमा रजु",
        "gu": "અલ્લુરિ સિથરમા રજુ"
    },
    "Almora": {
        "hi": "अल्मोरा",
        "gu": "અલ્મોરા"
    },
    "Alwar": {
        "hi": "अलवर",
        "gu": "અલવર"
    },
    "Ambala": {
        "hi": "अंबाला",
        "gu": "અંબાલા"
    },
    "Ambedkar Nagar": {
        "hi": "अम्बेद्कर नगर",
        "gu": "અમ્બેદ્કર નગર"
    },
    "Amethi": {
        "hi": "अमेथि",
        "gu": "અમેથિ"
    },
    "Amravati": {
        "hi": "अमरावती",
        "gu": "અમરાવતી"
    },
    "Amreli": {
        "hi": "अमरेली",
        "gu": "અમરેલી"
    },
    "Amritsar": {
        "hi": "अमृतसर",
        "gu": "અમૃતસર"
    },
    "Amroha": {
        "hi": "अम्रोहा",
        "gu": "અમ્રોહા"
    },
    "Anakapalli": {
        "hi": "अनकपल्लि",
        "gu": "અનકપલ્લિ"
    },
    "Anand": {
        "hi": "आणंद",
        "gu": "આણંદ"
    },
    "Ananthapuramu": {
        "hi": "अनन्त्हपुरमु",
        "gu": "અનન્ત્હપુરમુ"
    },
    "Anantnag": {
        "hi": "अनन्त्नग",
        "gu": "અનન્ત્નગ"
    },
    "Angul": {
        "hi": "अंगुल",
        "gu": "અંગુલ"
    },
    "Anjaw": {
        "hi": "अंजॉ",
        "gu": "અંજૉ"
    },
    "Annamayya": {
        "hi": "अन्नमय्या",
        "gu": "અન્નમય્યા"
    },
    "Anuppur": {
        "hi": "अनुप्पुर",
        "gu": "અનુપ્પુર"
    },
    "Araria": {
        "hi": "अररिअ",
        "gu": "અરરિઅ"
    },
    "Ariyalur": {
        "hi": "अरियलुर",
        "gu": "અરિયલુર"
    },
    "Arvalli": {
        "hi": "अरवल्ली",
        "gu": "અરવલ્લી"
    },
    "Arwal": {
        "hi": "अर्वल",
        "gu": "અર્વલ"
    },
    "Ashoknagar": {
        "hi": "अशोक्नगर",
        "gu": "અશોક્નગર"
    },
    "Auraiya": {
        "hi": "औरैया",
        "gu": "ઔરૈયા"
    },
    "Aurangabad": {
        "hi": "औरंगाबाद",
        "gu": "ઔરંગાબાદ"
    },
    "Ayodhya": {
        "hi": "अयोध्या",
        "gu": "અયોધ્યા"
    },
    "Azamgarh": {
        "hi": "अज़म्गर्ह",
        "gu": "અઝમ્ગર્હ"
    },
    "Bagalkote": {
        "hi": "बगल्कोते",
        "gu": "બગલ્કોતે"
    },
    "Bageshwar": {
        "hi": "बगेश्वर",
        "gu": "બગેશ્વર"
    },
    "Baghpat": {
        "hi": "बघ्पत",
        "gu": "બઘ્પત"
    },
    "Bahraich": {
        "hi": "बह्रैच",
        "gu": "બહ્રૈચ"
    },
    "Bajali": {
        "hi": "बजलि",
        "gu": "બજલિ"
    },
    "Baksa": {
        "hi": "बक्सा",
        "gu": "બક્સા"
    },
    "Balaghat": {
        "hi": "बलघत",
        "gu": "બલઘત"
    },
    "Balangir": {
        "hi": "बलंगिर",
        "gu": "બલંગિર"
    },
    "Baleshwar": {
        "hi": "बलेश्वर",
        "gu": "બલેશ્વર"
    },
    "Ballari": {
        "hi": "बल्लरि",
        "gu": "બલ્લરિ"
    },
    "Ballia": {
        "hi": "बल्लिअ",
        "gu": "બલ્લિઅ"
    },
    "Balod": {
        "hi": "बलोद",
        "gu": "બલોદ"
    },
    "Balodabazar-Bhatapara": {
        "hi": "बलोदबज़र-भतपरा",
        "gu": "બલોદબઝર-ભતપરા"
    },
    "Balotra": {
        "hi": "बलोत्रा",
        "gu": "બલોત્રા"
    },
    "Balrampur": {
        "hi": "बल्रम्पुर",
        "gu": "બલ્રમ્પુર"
    },
    "Balrampur-Ramanujganj": {
        "hi": "बल्रम्पुर-रमनुज्गन्ज",
        "gu": "બલ્રમ્પુર-રમનુજ્ગન્જ"
    },
    "Banas Kantha": {
        "hi": "बनासकांठा",
        "gu": "બનાસકાંઠા"
    },
    "Banda": {
        "hi": "बन्दा",
        "gu": "બન્દા"
    },
    "Bandipora": {
        "hi": "बन्दिपोरा",
        "gu": "બન્દિપોરા"
    },
    "Banka": {
        "hi": "बन्का",
        "gu": "બન્કા"
    },
    "Bankura": {
        "hi": "बन्कुरा",
        "gu": "બન્કુરા"
    },
    "Banswara": {
        "hi": "बन्स्वरा",
        "gu": "બન્સ્વરા"
    },
    "Bapatla": {
        "hi": "बपत्ला",
        "gu": "બપત્લા"
    },
    "Bara Banki": {
        "hi": "बरा बन्कि",
        "gu": "બરા બન્કિ"
    },
    "Baramulla": {
        "hi": "बरमुल्ला",
        "gu": "બરમુલ્લા"
    },
    "Baran": {
        "hi": "बरन",
        "gu": "બરન"
    },
    "Bareilly": {
        "hi": "बरेली",
        "gu": "બરેલી"
    },
    "Bargarh": {
        "hi": "बर्गर्ह",
        "gu": "બર્ગર્હ"
    },
    "Barmer": {
        "hi": "बाड़मेर",
        "gu": "બાડમેર"
    },
    "Barnala": {
        "hi": "बर्नला",
        "gu": "બર્નલા"
    },
    "Barpeta": {
        "hi": "बर्पेता",
        "gu": "બર્પેતા"
    },
    "Barwani": {
        "hi": "बर्वनि",
        "gu": "બર્વનિ"
    },
    "Bastar": {
        "hi": "बस्तर",
        "gu": "બસ્તર"
    },
    "Basti": {
        "hi": "बस्ति",
        "gu": "બસ્તિ"
    },
    "Bathinda": {
        "hi": "बठिंडा",
        "gu": "બઠિંડા"
    },
    "Beawar": {
        "hi": "बेअवर",
        "gu": "બેઅવર"
    },
    "Beed": {
        "hi": "बीद",
        "gu": "બીદ"
    },
    "Begusarai": {
        "hi": "बेगुसरै",
        "gu": "બેગુસરૈ"
    },
    "Belagavi": {
        "hi": "बेलगावी",
        "gu": "બેલગાવી"
    },
    "Bemetara": {
        "hi": "बेमेतरा",
        "gu": "બેમેતરા"
    },
    "Bengaluru Rural": {
        "hi": "बेंगलुरु ग्रामीण",
        "gu": "બેંગલુરુ ગ્રામ્ય"
    },
    "Bengaluru South": {
        "hi": "बेंगलुरु दक्षिणी",
        "gu": "બેંગલુરુ દક્ષિણ"
    },
    "Bengaluru Urban": {
        "hi": "बेंगलुरु उर्बन",
        "gu": "બેંગલુરુ ઉર્બન"
    },
    "Betul": {
        "hi": "बेतुल",
        "gu": "બેતુલ"
    },
    "Bhadohi": {
        "hi": "भदोहि",
        "gu": "ભદોહિ"
    },
    "Bhadradri Kothagudem": {
        "hi": "भद्रद्रि कोथगुदेम",
        "gu": "ભદ્રદ્રિ કોથગુદેમ"
    },
    "Bhadrak": {
        "hi": "भद्रक",
        "gu": "ભદ્રક"
    },
    "Bhagalpur": {
        "hi": "भागलपुर",
        "gu": "ભાગલપુર"
    },
    "Bhandara": {
        "hi": "भन्दरा",
        "gu": "ભન્દરા"
    },
    "Bharatpur": {
        "hi": "भरतपुर",
        "gu": "ભરતપુર"
    },
    "Bharuch": {
        "hi": "भरूच",
        "gu": "ભરૂચ"
    },
    "Bhavnagar": {
        "hi": "भावनगर",
        "gu": "ભાવનગર"
    },
    "Bhilwara": {
        "hi": "भीलवाड़ा",
        "gu": "ભીલવાડા"
    },
    "Bhind": {
        "hi": "भिन्द",
        "gu": "ભિન્દ"
    },
    "Bhiwani": {
        "hi": "भिवनि",
        "gu": "ભિવનિ"
    },
    "Bhojpur": {
        "hi": "भोज्पुर",
        "gu": "ભોજ્પુર"
    },
    "Bhopal": {
        "hi": "भोपाल",
        "gu": "ભોપાલ"
    },
    "Bidar": {
        "hi": "बिदर",
        "gu": "બિદર"
    },
    "Bijapur": {
        "hi": "बिजपुर",
        "gu": "બિજપુર"
    },
    "Bijnor": {
        "hi": "बिज्नोर",
        "gu": "બિજ્નોર"
    },
    "Bikaner": {
        "hi": "बीकानेर",
        "gu": "બીકાનેર"
    },
    "Bilaspur": {
        "hi": "बिलस्पुर",
        "gu": "બિલસ્પુર"
    },
    "Birbhum": {
        "hi": "बिर्भुम",
        "gu": "બિર્ભુમ"
    },
    "Biswanath": {
        "hi": "बिस्वनथ",
        "gu": "બિસ્વનથ"
    },
    "Bokaro": {
        "hi": "बोकरो",
        "gu": "બોકરો"
    },
    "Bongaigaon": {
        "hi": "बोंगैगओन",
        "gu": "બોંગૈગઓન"
    },
    "Botad": {
        "hi": "बोटाद",
        "gu": "બોટાદ"
    },
    "Boudh": {
        "hi": "बौध",
        "gu": "બૌધ"
    },
    "Budaun": {
        "hi": "बुदौन",
        "gu": "બુદૌન"
    },
    "Budgam": {
        "hi": "बुद्गम",
        "gu": "બુદ્ગમ"
    },
    "Bulandshahr": {
        "hi": "बुलन्द्शह्र",
        "gu": "બુલન્દ્શહ્ર"
    },
    "Buldhana": {
        "hi": "बुल्धना",
        "gu": "બુલ્ધના"
    },
    "Bundi": {
        "hi": "बुन्दि",
        "gu": "બુન્દિ"
    },
    "Burhanpur": {
        "hi": "बुर्हन्पुर",
        "gu": "બુર્હન્પુર"
    },
    "Buxar": {
        "hi": "बुक्सर",
        "gu": "બુક્સર"
    },
    "Cachar": {
        "hi": "कचर",
        "gu": "કચર"
    },
    "Chamarajanagar": {
        "hi": "चमरजनगर",
        "gu": "ચમરજનગર"
    },
    "Chamba": {
        "hi": "चम्बा",
        "gu": "ચમ્બા"
    },
    "Chamoli": {
        "hi": "चमोलि",
        "gu": "ચમોલિ"
    },
    "Champawat": {
        "hi": "चम्पवत",
        "gu": "ચમ્પવત"
    },
    "Champhai": {
        "hi": "चम्प्है",
        "gu": "ચમ્પ્હૈ"
    },
    "Chandauli": {
        "hi": "चन्दौलि",
        "gu": "ચન્દૌલિ"
    },
    "Chandrapur": {
        "hi": "चन्द्रपुर",
        "gu": "ચન્દ્રપુર"
    },
    "Changlang": {
        "hi": "चांगलांग",
        "gu": "ચાંગલાંગ"
    },
    "Charaideo": {
        "hi": "चरैदेओ",
        "gu": "ચરૈદેઓ"
    },
    "Charkhi Dadri": {
        "hi": "चर्खि दद्रि",
        "gu": "ચર્ખિ દદ્રિ"
    },
    "Chatra": {
        "hi": "चत्रा",
        "gu": "ચત્રા"
    },
    "Chengalpattu": {
        "hi": "चेंगल्पत्तु",
        "gu": "ચેંગલ્પત્તુ"
    },
    "Chhatarpur": {
        "hi": "छतर्पुर",
        "gu": "છતર્પુર"
    },
    "Chhatrapati Sambhajinagar": {
        "hi": "छत्रपति संभाजीनगर",
        "gu": "છત્રપતિ સંભાજીનગર"
    },
    "Chhindwara": {
        "hi": "छिन्द्वरा",
        "gu": "છિન્દ્વરા"
    },
    "Chhotaudepur": {
        "hi": "छोटा उदेपुर",
        "gu": "છોટાઉદેપુર"
    },
    "Chikkaballapura": {
        "hi": "चिक्कबल्लपुरा",
        "gu": "ચિક્કબલ્લપુરા"
    },
    "Chikkamagaluru": {
        "hi": "चिक्कमगलुरु",
        "gu": "ચિક્કમગલુરુ"
    },
    "Chirang": {
        "hi": "चिरंग",
        "gu": "ચિરંગ"
    },
    "Chitradurga": {
        "hi": "चित्रदुर्गा",
        "gu": "ચિત્રદુર્ગા"
    },
    "Chitrakoot": {
        "hi": "चित्रकूत",
        "gu": "ચિત્રકૂત"
    },
    "Chittoor": {
        "hi": "चित्तूर",
        "gu": "ચિત્તૂર"
    },
    "Chittorgarh": {
        "hi": "चित्तौड़गढ़",
        "gu": "ચિત્તોડગઢ"
    },
    "Chumoukedima": {
        "hi": "चुमौकेदिमा",
        "gu": "ચુમૌકેદિમા"
    },
    "Churachandpur": {
        "hi": "चुरचन्द्पुर",
        "gu": "ચુરચન્દ્પુર"
    },
    "Churu": {
        "hi": "चुरु",
        "gu": "ચુરુ"
    },
    "Coimbatore": {
        "hi": "कोयंबटूर",
        "gu": "કોયમ્બતૂર"
    },
    "Cooch Behar": {
        "hi": "कूच बेहर",
        "gu": "કૂચ બેહર"
    },
    "Cuddalore": {
        "hi": "कुद्दलोरे",
        "gu": "કુદ્દલોરે"
    },
    "Cuttack": {
        "hi": "कुत्तक्क",
        "gu": "કુત્તક્ક"
    },
    "Dahod": {
        "hi": "दाहोद",
        "gu": "દાહોદ"
    },
    "Dakshin Bastar Dantewada": {
        "hi": "दक्षिन बस्तर दन्तेवदा",
        "gu": "દક્ષિન બસ્તર દન્તેવદા"
    },
    "Dakshin Dinajpur": {
        "hi": "दक्षिन दिनज्पुर",
        "gu": "દક્ષિન દિનજ્પુર"
    },
    "Dakshina Kannada": {
        "hi": "दक्षिना कन्नदा",
        "gu": "દક્ષિના કન્નદા"
    },
    "Damoh": {
        "hi": "दमोह",
        "gu": "દમોહ"
    },
    "Dangs": {
        "hi": "डांग",
        "gu": "ડાંગ"
    },
    "Darbhanga": {
        "hi": "दर्भंगा",
        "gu": "દર્ભંગા"
    },
    "Darjeeling": {
        "hi": "दर्जीलिंग",
        "gu": "દર્જીલિંગ"
    },
    "Darrang": {
        "hi": "दर्रंग",
        "gu": "દર્રંગ"
    },
    "Datia": {
        "hi": "दतिअ",
        "gu": "દતિઅ"
    },
    "Dausa": {
        "hi": "दौसा",
        "gu": "દૌસા"
    },
    "Davanagere": {
        "hi": "दवनगेरे",
        "gu": "દવનગેરે"
    },
    "Deeg": {
        "hi": "दीग",
        "gu": "દીગ"
    },
    "Dehradun": {
        "hi": "देह्रदुन",
        "gu": "દેહ્રદુન"
    },
    "Deogarh": {
        "hi": "देओगर्ह",
        "gu": "દેઓગર્હ"
    },
    "Deoghar": {
        "hi": "देओघर",
        "gu": "દેઓઘર"
    },
    "Deoria": {
        "hi": "देओरिअ",
        "gu": "દેઓરિઅ"
    },
    "Devbhumi Dwarka": {
        "hi": "देवभूमि द्वारका",
        "gu": "દેવભૂમિ દ્વારકા"
    },
    "Dewas": {
        "hi": "देवस",
        "gu": "દેવસ"
    },
    "Dhalai": {
        "hi": "धलै",
        "gu": "ધલૈ"
    },
    "Dhamtari": {
        "hi": "धम्तरि",
        "gu": "ધમ્તરિ"
    },
    "Dhanbad": {
        "hi": "धन्बद",
        "gu": "ધન્બદ"
    },
    "Dhar": {
        "hi": "धर",
        "gu": "ધર"
    },
    "Dharashiv": {
        "hi": "धरशिव",
        "gu": "ધરશિવ"
    },
    "Dharmapuri": {
        "hi": "धर्मपुरि",
        "gu": "ધર્મપુરિ"
    },
    "Dharwad": {
        "hi": "धर्वद",
        "gu": "ધર્વદ"
    },
    "Dhemaji": {
        "hi": "धेमजि",
        "gu": "ધેમજિ"
    },
    "Dhenkanal": {
        "hi": "धेन्कनल",
        "gu": "ધેન્કનલ"
    },
    "Dholpur": {
        "hi": "धोल्पुर",
        "gu": "ધોલ્પુર"
    },
    "Dhubri": {
        "hi": "धुब्रि",
        "gu": "ધુબ્રિ"
    },
    "Dhule": {
        "hi": "धुले",
        "gu": "ધુલિયા / ધુળે"
    },
    "Dibang Valley": {
        "hi": "दिबांग घाटी",
        "gu": "દિબાંગ ખીણ"
    },
    "Dibrugarh": {
        "hi": "दिब्रुगर्ह",
        "gu": "દિબ્રુગર્હ"
    },
    "Didwana-Kuchaman": {
        "hi": "दिद्वना-कुचमन",
        "gu": "દિદ્વના-કુચમન"
    },
    "Dima Hasao": {
        "hi": "दिमा हसओ",
        "gu": "દિમા હસઓ"
    },
    "Dimapur": {
        "hi": "दिमपुर",
        "gu": "દિમપુર"
    },
    "Dindigul": {
        "hi": "दिन्दिगुल",
        "gu": "દિન્દિગુલ"
    },
    "Dindori": {
        "hi": "दिन्दोरि",
        "gu": "દિન્દોરિ"
    },
    "Doda": {
        "hi": "दोदा",
        "gu": "દોદા"
    },
    "Dr. B.R. Ambedkar Konaseema": {
        "hi": "द्र. ब.र. अम्बेद्कर कोनसीमा",
        "gu": "દ્ર. બ.ર. અમ્બેદ્કર કોનસીમા"
    },
    "Dumka": {
        "hi": "दुम्का",
        "gu": "દુમ્કા"
    },
    "Dungarpur": {
        "hi": "दुंगर्पुर",
        "gu": "દુંગર્પુર"
    },
    "Durg": {
        "hi": "दुर्ग",
        "gu": "દુર્ગ"
    },
    "East Garo Hills": {
        "hi": "पूर्वी गरो हिल्स",
        "gu": "પૂર્વ ગરો ટેકરીઓ"
    },
    "East Godavari": {
        "hi": "पूर्वी गोदवरि",
        "gu": "પૂર્વ ગોદવરિ"
    },
    "East Jaintia Hills": {
        "hi": "पूर्वी जैन्तिअ हिल्स",
        "gu": "પૂર્વ જૈન્તિઅ ટેકરીઓ"
    },
    "East Kameng": {
        "hi": "पूर्वी कमेंग",
        "gu": "પૂર્વ કમેંગ"
    },
    "East Khasi Hills": {
        "hi": "पूर्वी खसि हिल्स",
        "gu": "પૂર્વ ખસિ ટેકરીઓ"
    },
    "East Siang": {
        "hi": "पूर्वी सियांग",
        "gu": "પૂર્વ સિયાંગ"
    },
    "East Singhbum": {
        "hi": "पूर्वी सिंग्ह्बुम",
        "gu": "પૂર્વ સિંગ્હ્બુમ"
    },
    "Eastern West Khasi Hills": {
        "hi": "एअस्तेर्न पश्चिम खसि हिल्स",
        "gu": "એઅસ્તેર્ન પશ્ચિમ ખસિ ટેકરીઓ"
    },
    "Eluru": {
        "hi": "एलुरु",
        "gu": "એલુરુ"
    },
    "Ernakulam": {
        "hi": "एर्नकुलम",
        "gu": "એર્નકુલમ"
    },
    "Erode": {
        "hi": "एरोदे",
        "gu": "એરોદે"
    },
    "Etah": {
        "hi": "एतह",
        "gu": "એતહ"
    },
    "Etawah": {
        "hi": "एतवह",
        "gu": "એતવહ"
    },
    "Faridabad": {
        "hi": "फरिदबद",
        "gu": "ફરિદબદ"
    },
    "Faridkot": {
        "hi": "फरिद्कोत",
        "gu": "ફરિદ્કોત"
    },
    "Farrukhabad": {
        "hi": "फर्रुखबद",
        "gu": "ફર્રુખબદ"
    },
    "Fatehabad": {
        "hi": "फतेहबद",
        "gu": "ફતેહબદ"
    },
    "Fatehgarh Sahib": {
        "hi": "फतेह्गर्ह सहिब",
        "gu": "ફતેહ્ગર્હ સહિબ"
    },
    "Fatehpur": {
        "hi": "फतेह्पुर",
        "gu": "ફતેહ્પુર"
    },
    "Fazilka": {
        "hi": "फज़िल्का",
        "gu": "ફઝિલ્કા"
    },
    "Ferozepur": {
        "hi": "फेरोज़ेपुर",
        "gu": "ફેરોઝેપુર"
    },
    "Firozabad": {
        "hi": "फिरोज़बद",
        "gu": "ફિરોઝબદ"
    },
    "Gadag": {
        "hi": "गदग",
        "gu": "ગદગ"
    },
    "Gadchiroli": {
        "hi": "गद्चिरोलि",
        "gu": "ગદ્ચિરોલિ"
    },
    "Gajapati": {
        "hi": "गजपति",
        "gu": "ગજપતિ"
    },
    "Ganderbal": {
        "hi": "गन्देर्बल",
        "gu": "ગન્દેર્બલ"
    },
    "Gandhinagar": {
        "hi": "गांधीनगर",
        "gu": "ગાંધીનગર"
    },
    "Ganganagar": {
        "hi": "श्रीगंगानगर",
        "gu": "શ્રીગંગાનગર"
    },
    "Gangtok": {
        "hi": "गंग्तोक",
        "gu": "ગંગ્તોક"
    },
    "Ganjam": {
        "hi": "गन्जम",
        "gu": "ગન્જમ"
    },
    "Garhwa": {
        "hi": "गर्ह्वा",
        "gu": "ગર્હ્વા"
    },
    "Gariyaband": {
        "hi": "गरियबन्द",
        "gu": "ગરિયબન્દ"
    },
    "Gaurela-Pendra-Marwahi": {
        "hi": "गौरेला-पेन्द्रा-मर्वहि",
        "gu": "ગૌરેલા-પેન્દ્રા-મર્વહિ"
    },
    "Gautam Buddha Nagar": {
        "hi": "गौतम बुद्धा नगर",
        "gu": "ગૌતમ બુદ્ધા નગર"
    },
    "Gaya": {
        "hi": "गया",
        "gu": "ગયા"
    },
    "Ghaziabad": {
        "hi": "घज़िअबद",
        "gu": "ઘઝિઅબદ"
    },
    "Ghazipur": {
        "hi": "घज़िपुर",
        "gu": "ઘઝિપુર"
    },
    "Gir Somnath": {
        "hi": "गिर सोमनाथ",
        "gu": "ગીર સોમનાથ"
    },
    "Giridih": {
        "hi": "गिरिदिह",
        "gu": "ગિરિદિહ"
    },
    "Goalpara": {
        "hi": "गोअल्परा",
        "gu": "ગોઅલ્પરા"
    },
    "Godda": {
        "hi": "गोद्दा",
        "gu": "ગોદ્દા"
    },
    "Golaghat": {
        "hi": "गोलघत",
        "gu": "ગોલઘત"
    },
    "Gomati": {
        "hi": "गोमति",
        "gu": "ગોમતિ"
    },
    "Gonda": {
        "hi": "गोन्दा",
        "gu": "ગોન્દા"
    },
    "Gondia": {
        "hi": "गोन्दिअ",
        "gu": "ગોન્દિઅ"
    },
    "Gopalganj": {
        "hi": "गोपल्गन्ज",
        "gu": "ગોપલ્ગન્જ"
    },
    "Gorakhpur": {
        "hi": "गोरखपुर",
        "gu": "ગોરખપુર"
    },
    "Gumla": {
        "hi": "गुम्ला",
        "gu": "ગુમ્લા"
    },
    "Guna": {
        "hi": "गुना",
        "gu": "ગુના"
    },
    "Guntur": {
        "hi": "गुंटूर",
        "gu": "ગુંટૂર"
    },
    "Gurdaspur": {
        "hi": "गुरदासपुर",
        "gu": "ગુરદાસપુર"
    },
    "Gurugram": {
        "hi": "गुरुग्रम",
        "gu": "ગુરુગ્રમ"
    },
    "Gwalior": {
        "hi": "ग्वालियर",
        "gu": "ગ્વાલિયર"
    },
    "Gyalshing": {
        "hi": "ज्ञल्शिंग",
        "gu": "જ્ઞલ્શિંગ"
    },
    "Hailakandi": {
        "hi": "हैलकन्दि",
        "gu": "હૈલકન્દિ"
    },
    "Hamirpur": {
        "hi": "हमिर्पुर",
        "gu": "હમિર્પુર"
    },
    "Hanumakonda": {
        "hi": "हनुमकोन्दा",
        "gu": "હનુમકોન્દા"
    },
    "Hanumangarh": {
        "hi": "हनुमंगर्ह",
        "gu": "હનુમંગર્હ"
    },
    "Hapur": {
        "hi": "हपुर",
        "gu": "હપુર"
    },
    "Harda": {
        "hi": "हर्दा",
        "gu": "હર્દા"
    },
    "Hardoi": {
        "hi": "हर्दोइ",
        "gu": "હર્દોઇ"
    },
    "Haridwar": {
        "hi": "हरिद्वर",
        "gu": "હરિદ્વર"
    },
    "Hassan": {
        "hi": "हस्सन",
        "gu": "હસ્સન"
    },
    "Hathras": {
        "hi": "हथ्रस",
        "gu": "હથ્રસ"
    },
    "Haveri": {
        "hi": "हवेरि",
        "gu": "હવેરિ"
    },
    "Hazaribagh": {
        "hi": "हज़रिबघ",
        "gu": "હઝરિબઘ"
    },
    "Hingoli": {
        "hi": "हिंगोलि",
        "gu": "હિંગોલિ"
    },
    "Hisar": {
        "hi": "हिसार",
        "gu": "હિસાર"
    },
    "Hnahthial": {
        "hi": "ह्नह्थिअल",
        "gu": "હ્નહ્થિઅલ"
    },
    "Hojai": {
        "hi": "होजै",
        "gu": "હોજૈ"
    },
    "Hooghly": {
        "hi": "हूघ्ल्य",
        "gu": "હૂઘ્લ્ય"
    },
    "Hoshiarpur": {
        "hi": "होशियारपुर",
        "gu": "હોશિયારપુર"
    },
    "Howrah": {
        "hi": "होव्रह",
        "gu": "હોવ્રહ"
    },
    "Idukki": {
        "hi": "इदुक्कि",
        "gu": "ઇદુક્કિ"
    },
    "Indore": {
        "hi": "इंदौर",
        "gu": "ઇન્દોર"
    },
    "Jabalpur": {
        "hi": "जबलपुर",
        "gu": "જબલપુર"
    },
    "Jagatsinghapur": {
        "hi": "जगत्सिंग्हपुर",
        "gu": "જગત્સિંગ્હપુર"
    },
    "Jagitial": {
        "hi": "जगितिअल",
        "gu": "જગિતિઅલ"
    },
    "Jaipur": {
        "hi": "जयपुर",
        "gu": "જયપુર"
    },
    "Jaisalmer": {
        "hi": "जैसल्मेर",
        "gu": "જૈસલ્મેર"
    },
    "Jajpur": {
        "hi": "जज्पुर",
        "gu": "જજ્પુર"
    },
    "Jalandhar": {
        "hi": "जालंधर",
        "gu": "જાલંધર"
    },
    "Jalaun": {
        "hi": "जलौन",
        "gu": "જલૌન"
    },
    "Jalgaon": {
        "hi": "जलगांव",
        "gu": "જલગાંવ"
    },
    "Jalna": {
        "hi": "जल्ना",
        "gu": "જલ્ના"
    },
    "Jalore": {
        "hi": "जलोरे",
        "gu": "જલોરે"
    },
    "Jalpaiguri": {
        "hi": "जल्पैगुरि",
        "gu": "જલ્પૈગુરિ"
    },
    "Jammu": {
        "hi": "जम्मु",
        "gu": "જમ્મુ"
    },
    "Jamnagar": {
        "hi": "जामनगर",
        "gu": "જામનગર"
    },
    "Jamtara": {
        "hi": "जम्तरा",
        "gu": "જમ્તરા"
    },
    "Jamui": {
        "hi": "जमुइ",
        "gu": "જમુઇ"
    },
    "Jangoan": {
        "hi": "जंगोअन",
        "gu": "જંગોઅન"
    },
    "Janjgir-Champa": {
        "hi": "जन्ज्गिर-चम्पा",
        "gu": "જન્જ્ગિર-ચમ્પા"
    },
    "Jashpur": {
        "hi": "जश्पुर",
        "gu": "જશ્પુર"
    },
    "Jaunpur": {
        "hi": "जौन्पुर",
        "gu": "જૌન્પુર"
    },
    "Jayashankar Bhupalapally": {
        "hi": "जयशन्कर भुपलपल्ल्य",
        "gu": "જયશન્કર ભુપલપલ્લ્ય"
    },
    "Jehanabad": {
        "hi": "जेहनबद",
        "gu": "જેહનબદ"
    },
    "Jhabua": {
        "hi": "झबुअ",
        "gu": "ઝબુઅ"
    },
    "Jhajjar": {
        "hi": "झज्जर",
        "gu": "ઝજ્જર"
    },
    "Jhalawar": {
        "hi": "झलवर",
        "gu": "ઝલવર"
    },
    "Jhansi": {
        "hi": "झन्सि",
        "gu": "ઝન્સિ"
    },
    "Jhargram": {
        "hi": "झर्ग्रम",
        "gu": "ઝર્ગ્રમ"
    },
    "Jharsuguda": {
        "hi": "झर्सुगुदा",
        "gu": "ઝર્સુગુદા"
    },
    "Jhunjhunu": {
        "hi": "झुन्झुनु",
        "gu": "ઝુન્ઝુનુ"
    },
    "Jind": {
        "hi": "जिन्द",
        "gu": "જિન્દ"
    },
    "Jodhpur": {
        "hi": "जोधपुर",
        "gu": "જોધપુર"
    },
    "Jogulamba Gadwal": {
        "hi": "जोगुलम्बा गद्वल",
        "gu": "જોગુલમ્બા ગદ્વલ"
    },
    "Jorhat": {
        "hi": "जोर्हत",
        "gu": "જોર્હત"
    },
    "Junagadh": {
        "hi": "जूनागढ़",
        "gu": "જૂનાગઢ"
    },
    "Kabeerdham": {
        "hi": "कबीर्धम",
        "gu": "કબીર્ધમ"
    },
    "Kachchh": {
        "hi": "कच्छ",
        "gu": "કચ્છ"
    },
    "Kaimur (Bhabua)": {
        "hi": "कैमुर (भबुअ)",
        "gu": "કૈમુર (ભબુઅ)"
    },
    "Kaithal": {
        "hi": "कैथल",
        "gu": "કૈથલ"
    },
    "Kakinada": {
        "hi": "ककिनदा",
        "gu": "કકિનદા"
    },
    "Kalaburagi": {
        "hi": "कलबुरगि",
        "gu": "કલબુરગિ"
    },
    "Kalahandi": {
        "hi": "कलहन्दि",
        "gu": "કલહન્દિ"
    },
    "Kalimpong": {
        "hi": "कलिम्पोंग",
        "gu": "કલિમ્પોંગ"
    },
    "Kallakurichi": {
        "hi": "कल्लकुरिचि",
        "gu": "કલ્લકુરિચિ"
    },
    "Kamareddy": {
        "hi": "कमरेद्द्य",
        "gu": "કમરેદ્દ્ય"
    },
    "Kamle": {
        "hi": "कमले",
        "gu": "કમલે"
    },
    "Kamrup": {
        "hi": "कम्रुप",
        "gu": "કમ્રુપ"
    },
    "Kamrup Metro": {
        "hi": "कम्रुप मेत्रो",
        "gu": "કમ્રુપ મેત્રો"
    },
    "Kancheepuram": {
        "hi": "कन्चीपुरम",
        "gu": "કન્ચીપુરમ"
    },
    "Kandhamal": {
        "hi": "कन्द्हमल",
        "gu": "કન્દ્હમલ"
    },
    "Kangra": {
        "hi": "कंग्रा",
        "gu": "કંગ્રા"
    },
    "Kannauj": {
        "hi": "कन्नौज",
        "gu": "કન્નૌજ"
    },
    "Kanniyakumari": {
        "hi": "कन्नियकुमरि",
        "gu": "કન્નિયકુમરિ"
    },
    "Kannur": {
        "hi": "कन्नुर",
        "gu": "કન્નુર"
    },
    "Kanpur Dehat": {
        "hi": "कन्पुर देहत",
        "gu": "કન્પુર દેહત"
    },
    "Kanpur Nagar": {
        "hi": "कानपुर नगर",
        "gu": "કાનપુર નગર"
    },
    "Kapurthala": {
        "hi": "कपुर्थला",
        "gu": "કપુર્થલા"
    },
    "Karaikal": {
        "hi": "करैकल",
        "gu": "કરૈકલ"
    },
    "Karauli": {
        "hi": "करौलि",
        "gu": "કરૌલિ"
    },
    "Karbi Anglong": {
        "hi": "कर्बि अंग्लोंग",
        "gu": "કર્બિ અંગ્લોંગ"
    },
    "Kargil": {
        "hi": "कर्गिल",
        "gu": "કર્ગિલ"
    },
    "Karimnagar": {
        "hi": "करिम्नगर",
        "gu": "કરિમ્નગર"
    },
    "Karnal": {
        "hi": "करनाल",
        "gu": "કરનાલ"
    },
    "Karur": {
        "hi": "करुर",
        "gu": "કરુર"
    },
    "Kasaragod": {
        "hi": "कसरगोद",
        "gu": "કસરગોદ"
    },
    "Kasganj": {
        "hi": "कस्गन्ज",
        "gu": "કસ્ગન્જ"
    },
    "Kathua": {
        "hi": "कथुअ",
        "gu": "કથુઅ"
    },
    "Katihar": {
        "hi": "कतिहर",
        "gu": "કતિહર"
    },
    "Katni": {
        "hi": "कत्नि",
        "gu": "કત્નિ"
    },
    "Kaushambi": {
        "hi": "कौशम्बि",
        "gu": "કૌશમ્બિ"
    },
    "Kendrapara": {
        "hi": "केन्द्रपरा",
        "gu": "કેન્દ્રપરા"
    },
    "Kendujhar": {
        "hi": "केन्दुझर",
        "gu": "કેન્દુઝર"
    },
    "Khagaria": {
        "hi": "खगरिअ",
        "gu": "ખગરિઅ"
    },
    "Khairagarh-Chhuikhadan-Gandai": {
        "hi": "खैरगर्ह-छुइखदन-गन्दै",
        "gu": "ખૈરગર્હ-છુઇખદન-ગન્દૈ"
    },
    "Khairthal-Tijara": {
        "hi": "खैर्थल-तिजरा",
        "gu": "ખૈર્થલ-તિજરા"
    },
    "Khammam": {
        "hi": "खम्मम",
        "gu": "ખમ્મમ"
    },
    "Khandwa (East Nimar)": {
        "hi": "खन्द्वा (पूर्वी निमर)",
        "gu": "ખન્દ્વા (પૂર્વ નિમર)"
    },
    "Khargone (West Nimar)": {
        "hi": "खर्गोने (पश्चिम निमर)",
        "gu": "ખર્ગોને (પશ્ચિમ નિમર)"
    },
    "Khawzawl": {
        "hi": "खव्ज़व्ल",
        "gu": "ખવ્ઝવ્લ"
    },
    "Kheda": {
        "hi": "खेड़ा",
        "gu": "ખેડા"
    },
    "Kheri": {
        "hi": "खेरि",
        "gu": "ખેરિ"
    },
    "Khordha": {
        "hi": "खोर्धा",
        "gu": "ખોર્ધા"
    },
    "Khowai": {
        "hi": "खोवै",
        "gu": "ખોવૈ"
    },
    "Khunti": {
        "hi": "खुन्ति",
        "gu": "ખુન્તિ"
    },
    "Kinnaur": {
        "hi": "किन्नौर",
        "gu": "કિન્નૌર"
    },
    "Kiphire": {
        "hi": "किफिरे",
        "gu": "કિફિરે"
    },
    "Kishanganj": {
        "hi": "किशंगन्ज",
        "gu": "કિશંગન્જ"
    },
    "Kishtwar": {
        "hi": "किश्त्वर",
        "gu": "કિશ્ત્વર"
    },
    "Kodagu": {
        "hi": "कोदगु",
        "gu": "કોદગુ"
    },
    "Koderma": {
        "hi": "कोदेर्मा",
        "gu": "કોદેર્મા"
    },
    "Kohima": {
        "hi": "कोहिमा",
        "gu": "કોહિમા"
    },
    "Kokrajhar": {
        "hi": "कोक्रझर",
        "gu": "કોક્રઝર"
    },
    "Kolar": {
        "hi": "कोलर",
        "gu": "કોલર"
    },
    "Kolasib": {
        "hi": "कोलसिब",
        "gu": "કોલસિબ"
    },
    "Kolhapur": {
        "hi": "कोल्हापुर",
        "gu": "કોલ્હાપુર"
    },
    "Kollam": {
        "hi": "कोल्लम",
        "gu": "કોલ્લમ"
    },
    "Kondagaon": {
        "hi": "कोन्दगओन",
        "gu": "કોન્દગઓન"
    },
    "Koppal": {
        "hi": "कोप्पल",
        "gu": "કોપ્પલ"
    },
    "Koraput": {
        "hi": "कोरपुत",
        "gu": "કોરપુત"
    },
    "Korba": {
        "hi": "कोर्बा",
        "gu": "કોર્બા"
    },
    "Korea": {
        "hi": "कोरेअ",
        "gu": "કોરેઅ"
    },
    "Kota": {
        "hi": "कोटा",
        "gu": "કોટા"
    },
    "Kotputli-Behror": {
        "hi": "कोत्पुत्लि-बेह्रोर",
        "gu": "કોત્પુત્લિ-બેહ્રોર"
    },
    "Kottayam": {
        "hi": "कोत्तयम",
        "gu": "કોત્તયમ"
    },
    "Kozhikode": {
        "hi": "कोझिकोदे",
        "gu": "કોઝિકોદે"
    },
    "Kra Daadi": {
        "hi": "क्रा दादी",
        "gu": "ક્રા દાદી"
    },
    "Krishna": {
        "hi": "क्रिश्ना",
        "gu": "ક્રિશ્ના"
    },
    "Krishnagiri": {
        "hi": "क्रिश्नगिरि",
        "gu": "ક્રિશ્નગિરિ"
    },
    "Kulgam": {
        "hi": "कुल्गम",
        "gu": "કુલ્ગમ"
    },
    "Kullu": {
        "hi": "कुल्लु",
        "gu": "કુલ્લુ"
    },
    "Kumuram Bheem Asifabad": {
        "hi": "कुमुरम भीम असिफबद",
        "gu": "કુમુરમ ભીમ અસિફબદ"
    },
    "Kupwara": {
        "hi": "कुप्वरा",
        "gu": "કુપ્વરા"
    },
    "Kurnool": {
        "hi": "कुर्नूल",
        "gu": "કુર્નૂલ"
    },
    "Kurukshetra": {
        "hi": "कुरुक्षेत्र",
        "gu": "કુરુક્ષેત્ર"
    },
    "Kurung Kumey": {
        "hi": "कुरुंग कुमे",
        "gu": "કુરુંગ કુમે"
    },
    "Kushinagar": {
        "hi": "कुशिनगर",
        "gu": "કુશિનગર"
    },
    "Lahaul And Spiti": {
        "hi": "लहौल अन्द स्पिति",
        "gu": "લહૌલ અન્દ સ્પિતિ"
    },
    "Lakhimpur": {
        "hi": "लखिम्पुर",
        "gu": "લખિમ્પુર"
    },
    "Lakhisarai": {
        "hi": "लखिसरै",
        "gu": "લખિસરૈ"
    },
    "Lalitpur": {
        "hi": "ललित्पुर",
        "gu": "લલિત્પુર"
    },
    "Latehar": {
        "hi": "लतेहर",
        "gu": "લતેહર"
    },
    "Latur": {
        "hi": "लतुर",
        "gu": "લતુર"
    },
    "Lawngtlai": {
        "hi": "लव्ंग्त्लै",
        "gu": "લવ્ંગ્ત્લૈ"
    },
    "Leh Ladakh": {
        "hi": "लेह लदख",
        "gu": "લેહ લદખ"
    },
    "Leparada": {
        "hi": "लेपाराडा",
        "gu": "લેપારાદા"
    },
    "Lohardaga": {
        "hi": "लोहर्दगा",
        "gu": "લોહર્દગા"
    },
    "Lohit": {
        "hi": "लोहित",
        "gu": "લોહિત"
    },
    "Longding": {
        "hi": "लोंगडिंग",
        "gu": "લોંગડિંગ"
    },
    "Longleng": {
        "hi": "लोंग्लेंग",
        "gu": "લોંગ્લેંગ"
    },
    "Lower Dibang Valley": {
        "hi": "निचली दिबांग घाटी",
        "gu": "નીચલી દિબાંગ ખીણ"
    },
    "Lower Siang": {
        "hi": "निचला सियांग",
        "gu": "નીચલા સિયાંગ"
    },
    "Lower Subansiri": {
        "hi": "निचली सुबनसिरी",
        "gu": "નીચલી સુબનસિરી"
    },
    "Lucknow": {
        "hi": "लखनऊ",
        "gu": "લખનૌ"
    },
    "Ludhiana": {
        "hi": "लुधियाना",
        "gu": "લુધિયાણા"
    },
    "Lunglei": {
        "hi": "लुंग्लेइ",
        "gu": "લુંગ્લેઇ"
    },
    "Madhepura": {
        "hi": "मधेपुरा",
        "gu": "મધેપુરા"
    },
    "Madhubani": {
        "hi": "मधुबनि",
        "gu": "મધુબનિ"
    },
    "Madurai": {
        "hi": "मदुरै",
        "gu": "મદુરાઈ"
    },
    "Mahabubabad": {
        "hi": "महबुबबद",
        "gu": "મહબુબબદ"
    },
    "Mahabubnagar": {
        "hi": "महबुब्नगर",
        "gu": "મહબુબ્નગર"
    },
    "Mahasamund": {
        "hi": "महसमुन्द",
        "gu": "મહસમુન્દ"
    },
    "Mahendragarh": {
        "hi": "महेन्द्रगर्ह",
        "gu": "મહેન્દ્રગર્હ"
    },
    "Mahesana": {
        "hi": "महेसाणा",
        "gu": "મહેસાણા"
    },
    "Mahisagar": {
        "hi": "महिसागर",
        "gu": "મહીસાગર"
    },
    "Mahoba": {
        "hi": "महोबा",
        "gu": "મહોબા"
    },
    "Mahrajganj": {
        "hi": "मह्रज्गन्ज",
        "gu": "મહ્રજ્ગન્જ"
    },
    "Maihar": {
        "hi": "मैहर",
        "gu": "મૈહર"
    },
    "Mainpuri": {
        "hi": "मैन्पुरि",
        "gu": "મૈન્પુરિ"
    },
    "Malappuram": {
        "hi": "मलप्पुरम",
        "gu": "મલપ્પુરમ"
    },
    "Malda": {
        "hi": "मल्दा",
        "gu": "મલ્દા"
    },
    "Malerkotla": {
        "hi": "मलेर्कोत्ला",
        "gu": "મલેર્કોત્લા"
    },
    "Malkangiri": {
        "hi": "मल्कंगिरि",
        "gu": "મલ્કંગિરિ"
    },
    "Mamit": {
        "hi": "ममित",
        "gu": "મમિત"
    },
    "Mancherial": {
        "hi": "मन्चेरिअल",
        "gu": "મન્ચેરિઅલ"
    },
    "Mandi": {
        "hi": "मन्दि",
        "gu": "મન્દિ"
    },
    "Mandla": {
        "hi": "मन्द्ला",
        "gu": "મન્દ્લા"
    },
    "Mandsaur": {
        "hi": "मन्द्सौर",
        "gu": "મન્દ્સૌર"
    },
    "Mandya": {
        "hi": "मन्द्या",
        "gu": "મન્દ્યા"
    },
    "Manendragarh-Chirmiri-Bharatpur(M C B)": {
        "hi": "मनेन्द्रगर्ह-चिर्मिरि-भरत्पुर(म क ब)",
        "gu": "મનેન્દ્રગર્હ-ચિર્મિરિ-ભરત્પુર(મ ક બ)"
    },
    "Mangan": {
        "hi": "मंगन",
        "gu": "મંગન"
    },
    "Mansa": {
        "hi": "मन्सा",
        "gu": "મન્સા"
    },
    "Marigaon": {
        "hi": "मरिगओन",
        "gu": "મરિગઓન"
    },
    "Mathura": {
        "hi": "मथुरा",
        "gu": "મથુરા"
    },
    "Mau": {
        "hi": "मौ",
        "gu": "મૌ"
    },
    "Mauganj": {
        "hi": "मौगन्ज",
        "gu": "મૌગન્જ"
    },
    "Mayiladuthurai": {
        "hi": "मयिलदुथुरै",
        "gu": "મયિલદુથુરૈ"
    },
    "Mayurbhanj": {
        "hi": "मयुर्भन्ज",
        "gu": "મયુર્ભન્જ"
    },
    "Medak": {
        "hi": "मेदक",
        "gu": "મેદક"
    },
    "Medchal Malkajgiri": {
        "hi": "मेद्चल मल्कज्गिरि",
        "gu": "મેદ્ચલ મલ્કજ્ગિરિ"
    },
    "Meerut": {
        "hi": "मेरठ",
        "gu": "મેરઠ"
    },
    "Meluri": {
        "hi": "मेलुरि",
        "gu": "મેલુરિ"
    },
    "Mirzapur": {
        "hi": "मिर्ज़पुर",
        "gu": "મિર્ઝપુર"
    },
    "Moga": {
        "hi": "मोगा",
        "gu": "મોગા"
    },
    "Mohla-Manpur-Ambagarh Chouki": {
        "hi": "मोह्ला-मन्पुर-अम्बगर्ह चौकि",
        "gu": "મોહ્લા-મન્પુર-અમ્બગર્હ ચૌકિ"
    },
    "Mokokchung": {
        "hi": "मोकोक्चुंग",
        "gu": "મોકોક્ચુંગ"
    },
    "Mon": {
        "hi": "मोन",
        "gu": "મોન"
    },
    "Moradabad": {
        "hi": "मोरदबद",
        "gu": "મોરદબદ"
    },
    "Morbi": {
        "hi": "मोरबी",
        "gu": "મોરબી"
    },
    "Morena": {
        "hi": "मोरेना",
        "gu": "મોરેના"
    },
    "Mulugu": {
        "hi": "मुलुगु",
        "gu": "મુલુગુ"
    },
    "Mungeli": {
        "hi": "मुंगेलि",
        "gu": "મુંગેલિ"
    },
    "Munger": {
        "hi": "मुंगेर",
        "gu": "મુંગેર"
    },
    "Murshidabad": {
        "hi": "मुर्शिदबद",
        "gu": "મુર્શિદબદ"
    },
    "Muzaffarnagar": {
        "hi": "मुज़फ्फर्नगर",
        "gu": "મુઝફ્ફર્નગર"
    },
    "Muzaffarpur": {
        "hi": "मुजफ्फरपुर",
        "gu": "મુઝફ્ફરપુર"
    },
    "Mysuru": {
        "hi": "मैसूर",
        "gu": "મૈસૂર"
    },
    "Nabarangpur": {
        "hi": "नबरंग्पुर",
        "gu": "નબરંગ્પુર"
    },
    "Nadia": {
        "hi": "नदिअ",
        "gu": "નદિઅ"
    },
    "Nagaon": {
        "hi": "नगओन",
        "gu": "નગઓન"
    },
    "Nagapattinam": {
        "hi": "नगपत्तिनम",
        "gu": "નગપત્તિનમ"
    },
    "Nagarkurnool": {
        "hi": "नगर्कुर्नूल",
        "gu": "નગર્કુર્નૂલ"
    },
    "Nagaur": {
        "hi": "नागौर",
        "gu": "નાગૌર"
    },
    "Nagpur": {
        "hi": "नागपुर",
        "gu": "નાગપુર"
    },
    "Nainital": {
        "hi": "नैनितल",
        "gu": "નૈનિતલ"
    },
    "Nalanda": {
        "hi": "नलन्दा",
        "gu": "નલન્દા"
    },
    "Nalbari": {
        "hi": "नल्बरि",
        "gu": "નલ્બરિ"
    },
    "Nalgonda": {
        "hi": "नल्गोन्दा",
        "gu": "નલ્ગોન્દા"
    },
    "Namakkal": {
        "hi": "नमक्कल",
        "gu": "નમક્કલ"
    },
    "Namchi": {
        "hi": "नम्चि",
        "gu": "નમ્ચિ"
    },
    "Namsai": {
        "hi": "नामसाई",
        "gu": "નામસાઈ"
    },
    "Nanded": {
        "hi": "नन्देद",
        "gu": "નન્દેદ"
    },
    "Nandurbar": {
        "hi": "नन्दुर्बर",
        "gu": "નન્દુર્બર"
    },
    "Nandyal": {
        "hi": "नन्द्यल",
        "gu": "નન્દ્યલ"
    },
    "Narayanpet": {
        "hi": "नरयन्पेत",
        "gu": "નરયન્પેત"
    },
    "Narayanpur": {
        "hi": "नरयन्पुर",
        "gu": "નરયન્પુર"
    },
    "Narmada": {
        "hi": "नर्मदा",
        "gu": "નર્મદા"
    },
    "Narmadapuram": {
        "hi": "नर्मदपुरम",
        "gu": "નર્મદપુરમ"
    },
    "Narsimhapur": {
        "hi": "नर्सिम्हपुर",
        "gu": "નર્સિમ્હપુર"
    },
    "Nashik": {
        "hi": "नासिक",
        "gu": "નાસિક"
    },
    "Navsari": {
        "hi": "नवसारी",
        "gu": "નવસારી"
    },
    "Nawada": {
        "hi": "नवदा",
        "gu": "નવદા"
    },
    "Nayagarh": {
        "hi": "नयगर्ह",
        "gu": "નયગર્હ"
    },
    "Neemuch": {
        "hi": "नीमुच",
        "gu": "નીમુચ"
    },
    "Nicobars": {
        "hi": "निकोबर्स",
        "gu": "નિકોબર્સ"
    },
    "Nirmal": {
        "hi": "निर्मल",
        "gu": "નિર્મલ"
    },
    "Niuland": {
        "hi": "निउलन्द",
        "gu": "નિઉલન્દ"
    },
    "Niwari": {
        "hi": "निवरि",
        "gu": "નિવરિ"
    },
    "Nizamabad": {
        "hi": "निज़मबद",
        "gu": "નિઝમબદ"
    },
    "Noklak": {
        "hi": "नोक्लक",
        "gu": "નોક્લક"
    },
    "North 24 Parganas": {
        "hi": "उत्तरी 24 पर्गनस",
        "gu": "ઉત્તર 24 પર્ગનસ"
    },
    "North And Middle Andaman": {
        "hi": "उत्तरी अन्द मिद्द्ले अन्दमन",
        "gu": "ઉત્તર અન્દ મિદ્દ્લે અન્દમન"
    },
    "North Garo Hills": {
        "hi": "उत्तरी गरो हिल्स",
        "gu": "ઉત્તર ગરો ટેકરીઓ"
    },
    "North Goa": {
        "hi": "उत्तरी गोअ",
        "gu": "ઉત્તર ગોઅ"
    },
    "North Tripura": {
        "hi": "उत्तरी त्रिपुरा",
        "gu": "ઉત્તર ત્રિપુરા"
    },
    "Ntr": {
        "hi": "न्त्र",
        "gu": "ન્ત્ર"
    },
    "Nuapada": {
        "hi": "नुअपदा",
        "gu": "નુઅપદા"
    },
    "Nuh": {
        "hi": "नुह",
        "gu": "નુહ"
    },
    "Pakke Kessang": {
        "hi": "पक्के केसांग",
        "gu": "પક્કે કેસાંગ"
    },
    "Pakur": {
        "hi": "पकुर",
        "gu": "પકુર"
    },
    "Pakyong": {
        "hi": "पक्योंग",
        "gu": "પક્યોંગ"
    },
    "Palakkad": {
        "hi": "पलक्कद",
        "gu": "પલક્કદ"
    },
    "Palamu": {
        "hi": "पलमु",
        "gu": "પલમુ"
    },
    "Palghar": {
        "hi": "पल्घर",
        "gu": "પલ્ઘર"
    },
    "Pali": {
        "hi": "पाली",
        "gu": "પાલી"
    },
    "Palnadu": {
        "hi": "पल्नदु",
        "gu": "પલ્નદુ"
    },
    "Palwal": {
        "hi": "पल्वल",
        "gu": "પલ્વલ"
    },
    "Panch Mahals": {
        "hi": "पंचमहाल",
        "gu": "પંચમહાલ"
    },
    "Panchkula": {
        "hi": "पन्च्कुला",
        "gu": "પન્ચ્કુલા"
    },
    "Pandhurna": {
        "hi": "पन्द्हुर्ना",
        "gu": "પન્દ્હુર્ના"
    },
    "Panipat": {
        "hi": "पानीपत",
        "gu": "પાણીપત"
    },
    "Panna": {
        "hi": "पन्ना",
        "gu": "પન્ના"
    },
    "Papum Pare": {
        "hi": "पापुम पारे",
        "gu": "પાપમ પારે"
    },
    "Parbhani": {
        "hi": "पर्भनि",
        "gu": "પર્ભનિ"
    },
    "Parvathipuram Manyam": {
        "hi": "पर्वथिपुरम मञम",
        "gu": "પર્વથિપુરમ મઞમ"
    },
    "Paschim Bardhaman": {
        "hi": "पस्चिम बर्धमन",
        "gu": "પસ્ચિમ બર્ધમન"
    },
    "Paschim Medinipur": {
        "hi": "पस्चिम मेदिनिपुर",
        "gu": "પસ્ચિમ મેદિનિપુર"
    },
    "Pashchim Champaran": {
        "hi": "पश्चिम चम्परन",
        "gu": "પશ્ચિમ ચમ્પરન"
    },
    "Patan": {
        "hi": "पाटन",
        "gu": "પાટણ"
    },
    "Pathanamthitta": {
        "hi": "पथनम्थित्ता",
        "gu": "પથનમ્થિત્તા"
    },
    "Pathankot": {
        "hi": "पथन्कोत",
        "gu": "પથન્કોત"
    },
    "Patiala": {
        "hi": "पटियाला",
        "gu": "પટિયાલા"
    },
    "Patna": {
        "hi": "पटना",
        "gu": "પટના"
    },
    "Pauri Garhwal": {
        "hi": "पौरि गर्ह्वल",
        "gu": "પૌરિ ગર્હ્વલ"
    },
    "Peddapalli": {
        "hi": "पेद्दपल्लि",
        "gu": "પેદ્દપલ્લિ"
    },
    "Perambalur": {
        "hi": "पेरम्बलुर",
        "gu": "પેરમ્બલુર"
    },
    "Peren": {
        "hi": "पेरेन",
        "gu": "પેરેન"
    },
    "Phalodi": {
        "hi": "फलोदि",
        "gu": "ફલોદિ"
    },
    "Phek": {
        "hi": "फेक",
        "gu": "ફેક"
    },
    "Pilibhit": {
        "hi": "पिलिभित",
        "gu": "પિલિભિત"
    },
    "Pithoragarh": {
        "hi": "पिथोरगर्ह",
        "gu": "પિથોરગર્હ"
    },
    "Poonch": {
        "hi": "पून्च",
        "gu": "પૂન્ચ"
    },
    "Porbandar": {
        "hi": "पोरबंदर",
        "gu": "પોરબંદર"
    },
    "Prakasam": {
        "hi": "प्रकसम",
        "gu": "પ્રકસમ"
    },
    "Pratapgarh": {
        "hi": "प्रतप्गर्ह",
        "gu": "પ્રતપ્ગર્હ"
    },
    "Prayagraj": {
        "hi": "प्रयागराज",
        "gu": "પ્રયાગરાજ"
    },
    "Puducherry": {
        "hi": "पुदुचेर्र्य",
        "gu": "પુદુચેર્ર્ય"
    },
    "Pudukkottai": {
        "hi": "पुदुक्कोत्तै",
        "gu": "પુદુક્કોત્તૈ"
    },
    "Pulwama": {
        "hi": "पुल्वमा",
        "gu": "પુલ્વમા"
    },
    "Pune": {
        "hi": "पुणे",
        "gu": "પુણે"
    },
    "Purba Bardhaman": {
        "hi": "पुर्बा बर्धमन",
        "gu": "પુર્બા બર્ધમન"
    },
    "Purba Medinipur": {
        "hi": "पुर्बा मेदिनिपुर",
        "gu": "પુર્બા મેદિનિપુર"
    },
    "Purbi Champaran": {
        "hi": "पुर्बि चम्परन",
        "gu": "પુર્બિ ચમ્પરન"
    },
    "Puri": {
        "hi": "पुरि",
        "gu": "પુરિ"
    },
    "Purnia": {
        "hi": "पुर्निअ",
        "gu": "પુર્નિઅ"
    },
    "Purulia": {
        "hi": "पुरुलिअ",
        "gu": "પુરુલિઅ"
    },
    "Rae Bareli": {
        "hi": "रए बरेलि",
        "gu": "રએ બરેલિ"
    },
    "Raichur": {
        "hi": "रैचुर",
        "gu": "રૈચુર"
    },
    "Raigad": {
        "hi": "रैगद",
        "gu": "રૈગદ"
    },
    "Raigarh": {
        "hi": "रैगर्ह",
        "gu": "રૈગર્હ"
    },
    "Raipur": {
        "hi": "रैपुर",
        "gu": "રૈપુર"
    },
    "Raisen": {
        "hi": "रैसेन",
        "gu": "રૈસેન"
    },
    "Rajanna Sircilla": {
        "hi": "रजन्ना सिर्किल्ला",
        "gu": "રજન્ના સિર્કિલ્લા"
    },
    "Rajgarh": {
        "hi": "रज्गर्ह",
        "gu": "રજ્ગર્હ"
    },
    "Rajkot": {
        "hi": "राजकोट",
        "gu": "રાજકોટ"
    },
    "Rajnandgaon": {
        "hi": "रज्नन्द्गओन",
        "gu": "રજ્નન્દ્ગઓન"
    },
    "Rajouri": {
        "hi": "रजौरि",
        "gu": "રજૌરિ"
    },
    "Rajsamand": {
        "hi": "रज्समन्द",
        "gu": "રજ્સમન્દ"
    },
    "Ramanathapuram": {
        "hi": "रमनथपुरम",
        "gu": "રમનથપુરમ"
    },
    "Ramban": {
        "hi": "रम्बन",
        "gu": "રમ્બન"
    },
    "Ramgarh": {
        "hi": "रम्गर्ह",
        "gu": "રમ્ગર્હ"
    },
    "Rampur": {
        "hi": "रम्पुर",
        "gu": "રમ્પુર"
    },
    "Ranchi": {
        "hi": "रन्चि",
        "gu": "રન્ચિ"
    },
    "Ranga Reddy": {
        "hi": "रंगा रेद्द्य",
        "gu": "રંગા રેદ્દ્ય"
    },
    "Ranipet": {
        "hi": "रनिपेत",
        "gu": "રનિપેત"
    },
    "Ratlam": {
        "hi": "रत्लम",
        "gu": "રત્લમ"
    },
    "Ratnagiri": {
        "hi": "रत्नगिरि",
        "gu": "રત્નગિરિ"
    },
    "Rayagada": {
        "hi": "रयगदा",
        "gu": "રયગદા"
    },
    "Reasi": {
        "hi": "रेअसि",
        "gu": "રેઅસિ"
    },
    "Rewa": {
        "hi": "रेवा",
        "gu": "રેવા"
    },
    "Rewari": {
        "hi": "रेवरि",
        "gu": "રેવરિ"
    },
    "Ri Bhoi": {
        "hi": "ऋ भोइ",
        "gu": "ઋ ભોઇ"
    },
    "Rohtak": {
        "hi": "रोहतक",
        "gu": "રોહતક"
    },
    "Rohtas": {
        "hi": "रोह्तस",
        "gu": "રોહ્તસ"
    },
    "Rudraprayag": {
        "hi": "रुद्रप्रयग",
        "gu": "રુદ્રપ્રયગ"
    },
    "Rupnagar": {
        "hi": "रुप्नगर",
        "gu": "રુપ્નગર"
    },
    "S.A.S Nagar": {
        "hi": "स.अ.स नगर",
        "gu": "સ.અ.સ નગર"
    },
    "Sabar Kantha": {
        "hi": "साबरकांठा",
        "gu": "સાબરકાંઠા"
    },
    "Sagar": {
        "hi": "सागर",
        "gu": "સાગર"
    },
    "Saharanpur": {
        "hi": "सहरन्पुर",
        "gu": "સહરન્પુર"
    },
    "Saharsa": {
        "hi": "सहर्सा",
        "gu": "સહર્સા"
    },
    "Sahebganj": {
        "hi": "सहेब्गन्ज",
        "gu": "સહેબ્ગન્જ"
    },
    "Saitual": {
        "hi": "सैतुअल",
        "gu": "સૈતુઅલ"
    },
    "Sakti": {
        "hi": "सक्ति",
        "gu": "સક્તિ"
    },
    "Salem": {
        "hi": "सलेम",
        "gu": "સલેમ"
    },
    "Salumbar": {
        "hi": "सलुम्बर",
        "gu": "સલુમ્બર"
    },
    "Samastipur": {
        "hi": "समस्तिपुर",
        "gu": "સમસ્તિપુર"
    },
    "Samba": {
        "hi": "सम्बा",
        "gu": "સમ્બા"
    },
    "Sambalpur": {
        "hi": "सम्बल्पुर",
        "gu": "સમ્બલ્પુર"
    },
    "Sambhal": {
        "hi": "सम्ब्हल",
        "gu": "સમ્બ્હલ"
    },
    "Sangareddy": {
        "hi": "संगरेद्द्य",
        "gu": "સંગરેદ્દ્ય"
    },
    "Sangli": {
        "hi": "सांगली",
        "gu": "સાંગલી"
    },
    "Sangrur": {
        "hi": "संग्रुर",
        "gu": "સંગ્રુર"
    },
    "Sant Kabir Nagar": {
        "hi": "सन्त कबिर नगर",
        "gu": "સન્ત કબિર નગર"
    },
    "Saraikela Kharsawan": {
        "hi": "सरैकेला खर्सवन",
        "gu": "સરૈકેલા ખર્સવન"
    },
    "Saran": {
        "hi": "सरन",
        "gu": "સરન"
    },
    "Sarangarh-Bilaigarh": {
        "hi": "सरंगर्ह-बिलैगर्ह",
        "gu": "સરંગર્હ-બિલૈગર્હ"
    },
    "Satara": {
        "hi": "सतारा",
        "gu": "સાતારા"
    },
    "Satna": {
        "hi": "सत्ना",
        "gu": "સત્ના"
    },
    "Sawai Madhopur": {
        "hi": "सवै मधोपुर",
        "gu": "સવૈ મધોપુર"
    },
    "Sehore": {
        "hi": "सेहोरे",
        "gu": "સેહોરે"
    },
    "Seoni": {
        "hi": "सेओनि",
        "gu": "સેઓનિ"
    },
    "Sepahijala": {
        "hi": "सेपहिजला",
        "gu": "સેપહિજલા"
    },
    "Serchhip": {
        "hi": "सेर्छिप",
        "gu": "સેર્છિપ"
    },
    "Shahdol": {
        "hi": "शह्दोल",
        "gu": "શહ્દોલ"
    },
    "Shahid Bhagat Singh Nagar": {
        "hi": "शहिद भगत सिंग्ह नगर",
        "gu": "શહિદ ભગત સિંગ્હ નગર"
    },
    "Shahjahanpur": {
        "hi": "शह्जहन्पुर",
        "gu": "શહ્જહન્પુર"
    },
    "Shajapur": {
        "hi": "शजपुर",
        "gu": "શજપુર"
    },
    "Shamator": {
        "hi": "शमतोर",
        "gu": "શમતોર"
    },
    "Shamli": {
        "hi": "शम्लि",
        "gu": "શમ્લિ"
    },
    "Sheikhpura": {
        "hi": "शेइख्पुरा",
        "gu": "શેઇખ્પુરા"
    },
    "Sheohar": {
        "hi": "शेओहर",
        "gu": "શેઓહર"
    },
    "Sheopur": {
        "hi": "शेओपुर",
        "gu": "શેઓપુર"
    },
    "Shi Yomi": {
        "hi": "शी योमी",
        "gu": "શી યોમી"
    },
    "Shimla": {
        "hi": "शिम्ला",
        "gu": "શિમ્લા"
    },
    "Shivamogga": {
        "hi": "शिवमोग्गा",
        "gu": "શિવમોગ્ગા"
    },
    "Shivpuri": {
        "hi": "शिव्पुरि",
        "gu": "શિવ્પુરિ"
    },
    "Shopian": {
        "hi": "शोपिअन",
        "gu": "શોપિઅન"
    },
    "Shrawasti": {
        "hi": "श्रवस्ति",
        "gu": "શ્રવસ્તિ"
    },
    "Siaha": {
        "hi": "सिअहा",
        "gu": "સિઅહા"
    },
    "Siang": {
        "hi": "सिअंग",
        "gu": "સિઅંગ"
    },
    "Siddharthnagar": {
        "hi": "सिद्धर्थ्नगर",
        "gu": "સિદ્ધર્થ્નગર"
    },
    "Siddipet": {
        "hi": "सिद्दिपेत",
        "gu": "સિદ્દિપેત"
    },
    "Sidhi": {
        "hi": "सिधि",
        "gu": "સિધિ"
    },
    "Sikar": {
        "hi": "सीकर",
        "gu": "સીકર"
    },
    "Simdega": {
        "hi": "सिम्देगा",
        "gu": "સિમ્દેગા"
    },
    "Sindhudurg": {
        "hi": "सिन्द्हुदुर्ग",
        "gu": "સિન્દ્હુદુર્ગ"
    },
    "Singrauli": {
        "hi": "सिंग्रौलि",
        "gu": "સિંગ્રૌલિ"
    },
    "Sirmaur": {
        "hi": "सिर्मौर",
        "gu": "સિર્મૌર"
    },
    "Sirohi": {
        "hi": "सिरोहि",
        "gu": "સિરોહિ"
    },
    "Sirsa": {
        "hi": "सिरसा",
        "gu": "સિરસા"
    },
    "Sitamarhi": {
        "hi": "सितमर्हि",
        "gu": "સિતમર્હિ"
    },
    "Sitapur": {
        "hi": "सितपुर",
        "gu": "સિતપુર"
    },
    "Sivaganga": {
        "hi": "सिवगंगा",
        "gu": "સિવગંગા"
    },
    "Sivasagar": {
        "hi": "सिवसगर",
        "gu": "સિવસગર"
    },
    "Siwan": {
        "hi": "सिवन",
        "gu": "સિવન"
    },
    "Solan": {
        "hi": "सोलन",
        "gu": "સોલન"
    },
    "Solapur": {
        "hi": "सोलापुर",
        "gu": "સોલાપુર"
    },
    "Sonbhadra": {
        "hi": "सोन्भद्रा",
        "gu": "સોન્ભદ્રા"
    },
    "Sonepur": {
        "hi": "सोनेपुर",
        "gu": "સોનેપુર"
    },
    "Sonipat": {
        "hi": "सोनीपत",
        "gu": "સોનીપત"
    },
    "Sonitpur": {
        "hi": "सोनित्पुर",
        "gu": "સોનિત્પુર"
    },
    "Soreng": {
        "hi": "सोरेंग",
        "gu": "સોરેંગ"
    },
    "South 24 Parganas": {
        "hi": "दक्षिणी 24 पर्गनस",
        "gu": "દક્ષિણ 24 પર્ગનસ"
    },
    "South Andamans": {
        "hi": "दक्षिणी अन्दमन्स",
        "gu": "દક્ષિણ અન્દમન્સ"
    },
    "South Garo Hills": {
        "hi": "दक्षिणी गरो हिल्स",
        "gu": "દક્ષિણ ગરો ટેકરીઓ"
    },
    "South Goa": {
        "hi": "दक्षिणी गोअ",
        "gu": "દક્ષિણ ગોઅ"
    },
    "South Salmara Mancachar": {
        "hi": "दक्षिणी सल्मरा मन्कचर",
        "gu": "દક્ષિણ સલ્મરા મન્કચર"
    },
    "South Tripura": {
        "hi": "दक्षिणी त्रिपुरा",
        "gu": "દક્ષિણ ત્રિપુરા"
    },
    "South West Garo Hills": {
        "hi": "दक्षिणी पश्चिम गरो हिल्स",
        "gu": "દક્ષિણ પશ્ચિમ ગરો ટેકરીઓ"
    },
    "South West Khasi Hills": {
        "hi": "दक्षिणी पश्चिम खसि हिल्स",
        "gu": "દક્ષિણ પશ્ચિમ ખસિ ટેકરીઓ"
    },
    "Sri Muktsar Sahib": {
        "hi": "स्रि मुक्त्सर सहिब",
        "gu": "સ્રિ મુક્ત્સર સહિબ"
    },
    "Sri Potti Sriramulu Nellore": {
        "hi": "स्रि पोत्ति स्रिरमुलु नेल्लोरे",
        "gu": "સ્રિ પોત્તિ સ્રિરમુલુ નેલ્લોરે"
    },
    "Sri Sathya Sai": {
        "hi": "स्रि सथ्या सै",
        "gu": "સ્રિ સથ્યા સૈ"
    },
    "Sribhumi": {
        "hi": "स्रिभुमि",
        "gu": "સ્રિભુમિ"
    },
    "Srikakulam": {
        "hi": "स्रिककुलम",
        "gu": "સ્રિકકુલમ"
    },
    "Srinagar": {
        "hi": "स्रिनगर",
        "gu": "સ્રિનગર"
    },
    "Sukma": {
        "hi": "सुक्मा",
        "gu": "સુક્મા"
    },
    "Sultanpur": {
        "hi": "सुल्तन्पुर",
        "gu": "સુલ્તન્પુર"
    },
    "Sundargarh": {
        "hi": "सुन्दर्गर्ह",
        "gu": "સુન્દર્ગર્હ"
    },
    "Supaul": {
        "hi": "सुपौल",
        "gu": "સુપૌલ"
    },
    "Surajpur": {
        "hi": "सुरज्पुर",
        "gu": "સુરજ્પુર"
    },
    "Surat": {
        "hi": "सूरत",
        "gu": "સુરત"
    },
    "Surendranagar": {
        "hi": "सुरेंद्रनगर",
        "gu": "સુરેન્દ્રનગર"
    },
    "Surguja": {
        "hi": "सुर्गुजा",
        "gu": "સુર્ગુજા"
    },
    "Suryapet": {
        "hi": "सुर्यपेत",
        "gu": "સુર્યપેત"
    },
    "Tamulpur": {
        "hi": "तमुल्पुर",
        "gu": "તમુલ્પુર"
    },
    "Tapi": {
        "hi": "तापी",
        "gu": "તાપી"
    },
    "Tarn Taran": {
        "hi": "तर्न तरन",
        "gu": "તર્ન તરન"
    },
    "Tawang": {
        "hi": "तवांग",
        "gu": "તવાંગ"
    },
    "Tehri Garhwal": {
        "hi": "तेह्रि गर्ह्वल",
        "gu": "તેહ્રિ ગર્હ્વલ"
    },
    "Tenkasi": {
        "hi": "तेन्कसि",
        "gu": "તેન્કસિ"
    },
    "Thane": {
        "hi": "थने",
        "gu": "થને"
    },
    "Thanjavur": {
        "hi": "थन्जवुर",
        "gu": "થન્જવુર"
    },
    "The Nilgiris": {
        "hi": "थे निल्गिरिस",
        "gu": "થે નિલ્ગિરિસ"
    },
    "Theni": {
        "hi": "थेनि",
        "gu": "થેનિ"
    },
    "Thiruvallur": {
        "hi": "थिरुवल्लुर",
        "gu": "થિરુવલ્લુર"
    },
    "Thiruvananthapuram": {
        "hi": "थिरुवनन्त्हपुरम",
        "gu": "થિરુવનન્ત્હપુરમ"
    },
    "Thiruvarur": {
        "hi": "थिरुवरुर",
        "gu": "થિરુવરુર"
    },
    "Thoothukkudi": {
        "hi": "थूथुक्कुदि",
        "gu": "થૂથુક્કુદિ"
    },
    "Thrissur": {
        "hi": "थ्रिस्सुर",
        "gu": "થ્રિસ્સુર"
    },
    "Tikamgarh": {
        "hi": "तिकम्गर्ह",
        "gu": "તિકમ્ગર્હ"
    },
    "Tinsukia": {
        "hi": "तिन्सुकिअ",
        "gu": "તિન્સુકિઅ"
    },
    "Tirap": {
        "hi": "तिरप",
        "gu": "તિરપ"
    },
    "Tiruchirappalli": {
        "hi": "तिरुचिरप्पल्लि",
        "gu": "તિરુચિરપ્પલ્લિ"
    },
    "Tirunelveli": {
        "hi": "तिरुनेल्वेलि",
        "gu": "તિરુનેલ્વેલિ"
    },
    "Tirupathur": {
        "hi": "तिरुपथुर",
        "gu": "તિરુપથુર"
    },
    "Tirupati": {
        "hi": "तिरुपति",
        "gu": "તિરુપતિ"
    },
    "Tiruppur": {
        "hi": "तिरुप्पुर",
        "gu": "તિરુપ્પુર"
    },
    "Tiruvannamalai": {
        "hi": "तिरुवन्नमलै",
        "gu": "તિરુવન્નમલૈ"
    },
    "Tonk": {
        "hi": "तोन्क",
        "gu": "તોન્ક"
    },
    "Tseminyu": {
        "hi": "त्सेमिञु",
        "gu": "ત્સેમિઞુ"
    },
    "Tuensang": {
        "hi": "तुएन्संग",
        "gu": "તુએન્સંગ"
    },
    "Tumakuru": {
        "hi": "तुमकुरु",
        "gu": "તુમકુરુ"
    },
    "Udaipur": {
        "hi": "उदयपुर",
        "gu": "ઉદયપુર"
    },
    "Udalguri": {
        "hi": "उदल्गुरि",
        "gu": "ઉદલ્ગુરિ"
    },
    "Udham Singh Nagar": {
        "hi": "उधम सिंग्ह नगर",
        "gu": "ઉધમ સિંગ્હ નગર"
    },
    "Udhampur": {
        "hi": "उधम्पुर",
        "gu": "ઉધમ્પુર"
    },
    "Udupi": {
        "hi": "उदुपि",
        "gu": "ઉદુપિ"
    },
    "Ujjain": {
        "hi": "उज्जैन",
        "gu": "ઉજ્જૈન"
    },
    "Umaria": {
        "hi": "उमरिअ",
        "gu": "ઉમરિઅ"
    },
    "Una": {
        "hi": "उना",
        "gu": "ઉના"
    },
    "Unakoti": {
        "hi": "उनकोति",
        "gu": "ઉનકોતિ"
    },
    "Unnao": {
        "hi": "उन्नओ",
        "gu": "ઉન્નઓ"
    },
    "Upper Siang": {
        "hi": "ऊपरी सियांग",
        "gu": "ઉપલા સિયાંગ"
    },
    "Upper Subansiri": {
        "hi": "ऊपरी सुबनसिरी",
        "gu": "ઉપલા સુબનસિરી"
    },
    "Uttar Bastar Kanker": {
        "hi": "उत्तर बस्तर कन्केर",
        "gu": "ઉત્તર બસ્તર કન્કેર"
    },
    "Uttar Dinajpur": {
        "hi": "उत्तर दिनज्पुर",
        "gu": "ઉત્તર દિનજ્પુર"
    },
    "Uttara Kannada": {
        "hi": "उत्तरा कन्नदा",
        "gu": "ઉત્તરા કન્નદા"
    },
    "Uttarkashi": {
        "hi": "उत्तर्कशि",
        "gu": "ઉત્તર્કશિ"
    },
    "Vadodara": {
        "hi": "वडोदरा (बड़ौदा)",
        "gu": "વડોદરા"
    },
    "Vaishali": {
        "hi": "वैशलि",
        "gu": "વૈશલિ"
    },
    "Valsad": {
        "hi": "वलसाड",
        "gu": "વલસાડ"
    },
    "Varanasi": {
        "hi": "वाराणसी",
        "gu": "વારાણસી"
    },
    "Vellore": {
        "hi": "वेल्लोरे",
        "gu": "વેલ્લોરે"
    },
    "Vidisha": {
        "hi": "विदिशा",
        "gu": "વિદિશા"
    },
    "Vijayanagara": {
        "hi": "विजयनगरा",
        "gu": "વિજયનગરા"
    },
    "Vijayapura": {
        "hi": "विजयपुरा",
        "gu": "વિજયપુરા"
    },
    "Vikarabad": {
        "hi": "विकरबद",
        "gu": "વિકરબદ"
    },
    "Viluppuram": {
        "hi": "विलुप्पुरम",
        "gu": "વિલુપ્પુરમ"
    },
    "Virudhunagar": {
        "hi": "विरुधुनगर",
        "gu": "વિરુધુનગર"
    },
    "Visakhapatnam": {
        "hi": "विशाखापत्तनम",
        "gu": "વિશાખાપટ્ટનમ"
    },
    "Vizianagaram": {
        "hi": "विज़िअनगरम",
        "gu": "વિઝિઅનગરમ"
    },
    "Wanaparthy": {
        "hi": "वनपर्थ्य",
        "gu": "વનપર્થ્ય"
    },
    "Warangal": {
        "hi": "वारंगल",
        "gu": "વારંગલ"
    },
    "Wardha": {
        "hi": "वर्धा",
        "gu": "વર્ધા"
    },
    "Washim": {
        "hi": "वशिम",
        "gu": "વશિમ"
    },
    "Wayanad": {
        "hi": "वयनद",
        "gu": "વયનદ"
    },
    "West Garo Hills": {
        "hi": "पश्चिम गरो हिल्स",
        "gu": "પશ્ચિમ ગરો ટેકરીઓ"
    },
    "West Godavari": {
        "hi": "पश्चिम गोदवरि",
        "gu": "પશ્ચિમ ગોદવરિ"
    },
    "West Jaintia Hills": {
        "hi": "पश्चिम जैन्तिअ हिल्स",
        "gu": "પશ્ચિમ જૈન્તિઅ ટેકરીઓ"
    },
    "West Kameng": {
        "hi": "पश्चिम कमेंग",
        "gu": "પશ્ચિમ કમેંગ"
    },
    "West Karbi Anglong": {
        "hi": "पश्चिम कर्बि अंग्लोंग",
        "gu": "પશ્ચિમ કર્બિ અંગ્લોંગ"
    },
    "West Khasi Hills": {
        "hi": "पश्चिम खसि हिल्स",
        "gu": "પશ્ચિમ ખસિ ટેકરીઓ"
    },
    "West Siang": {
        "hi": "पश्चिम सियांग",
        "gu": "પશ્ચિમ સિયાંગ"
    },
    "West Singhbhum": {
        "hi": "पश्चिम सिंग्ह्भुम",
        "gu": "પશ્ચિમ સિંગ્હ્ભુમ"
    },
    "West Tripura": {
        "hi": "पश्चिम त्रिपुरा",
        "gu": "પશ્ચિમ ત્રિપુરા"
    },
    "Wokha": {
        "hi": "वोखा",
        "gu": "વોખા"
    },
    "Y.S.R. Kadapa": {
        "hi": "य.स.र. कदपा",
        "gu": "ય.સ.ર. કદપા"
    },
    "Yadadri Bhuvanagiri": {
        "hi": "यदद्रि भुवनगिरि",
        "gu": "યદદ્રિ ભુવનગિરિ"
    },
    "Yadgir": {
        "hi": "यद्गिर",
        "gu": "યદ્ગિર"
    },
    "Yamunanagar": {
        "hi": "यमुननगर",
        "gu": "યમુનનગર"
    },
    "Yavatmal": {
        "hi": "यवत्मल",
        "gu": "યવત્મલ"
    },
    "Zunheboto": {
        "hi": "ज़ुन्हेबोतो",
        "gu": "ઝુન્હેબોતો"
    }
};

const BLOCK_TRANSLATIONS = {
    "Bavla": {
        "hi": "बावला",
        "gu": "બાવળા"
    },
    "Daskroi": {
        "hi": "दस्करोई",
        "gu": "દસક્રોઈ"
    },
    "Detroj Rampura": {
        "hi": "देतड़ोज रामपुरा",
        "gu": "દેત્રોજ રામપુરા"
    },
    "Detroj-Rampura": {
        "hi": "देतड़ोज रामपुरा",
        "gu": "દેત્રોજ રામપુરા"
    },
    "Dhandhuka": {
        "hi": "धंधुका",
        "gu": "ધંધૂકા"
    },
    "Dholera": {
        "hi": "धोलेरा",
        "gu": "ધોલેરા"
    },
    "Dholka": {
        "hi": "धोलका",
        "gu": "ધોળકા"
    },
    "Mandal": {
        "hi": "मांडल",
        "gu": "માંડલ"
    },
    "Sanand": {
        "hi": "साणंद",
        "gu": "સાણંદ"
    },
    "Viramgam": {
        "hi": "विरामगाम",
        "gu": "વિરમગામ"
    },
    "Ahmedabad City": {
        "hi": "अहमदाबाद शहर",
        "gu": "અમદાવાદ શહેર"
    },
    "Dehgam": {
        "hi": "दहेजगाम (दहेगाम)",
        "gu": "દહેગામ"
    },
    "Gandhinagar": {
        "hi": "गांधीनगर",
        "gu": "ગાંધીનગર"
    },
    "Kalol": {
        "hi": "कलोल",
        "gu": "કલોલ"
    },
    "Mansa": {
        "hi": "माणसा",
        "gu": "માણસા"
    },
    "Dhoraji": {
        "hi": "धोराजी",
        "gu": "ધોરાજી"
    },
    "Gondal": {
        "hi": "गोंडल",
        "gu": "ગોંડલ"
    },
    "Jamkandorna": {
        "hi": "जामकंडोरणा",
        "gu": "જામકંડોરણા"
    },
    "Jamkandorana": {
        "hi": "जामकंडोरणा",
        "gu": "જામકંડોરણા"
    },
    "Jasdan": {
        "hi": "जसदन",
        "gu": "જસદણ"
    },
    "Jetpur": {
        "hi": "जेतपुर",
        "gu": "જેતપુર"
    },
    "Kotda Sangani": {
        "hi": "कोटड़ा सांगाणी",
        "gu": "કોટડા સાંગાણી"
    },
    "Kotdasangani": {
        "hi": "कोटड़ा सांगाणी",
        "gu": "કોટડા સાંગાણી"
    },
    "Lodhika": {
        "hi": "लोधिका",
        "gu": "લોધીકા"
    },
    "Paddhari": {
        "hi": "पद्धरी",
        "gu": "પડધરી"
    },
    "Rajkot": {
        "hi": "राजकोट",
        "gu": "રાજકોટ"
    },
    "Upleta": {
        "hi": "उपलेटा",
        "gu": "ઉપલેટા"
    },
    "Vinchhiya": {
        "hi": "विंछिया",
        "gu": "વીંછિયા"
    },
    "Vinchia": {
        "hi": "विंछिया",
        "gu": "વીંછિયા"
    },
    "Bardoli": {
        "hi": "बारडोली",
        "gu": "બારડોલી"
    },
    "Chorasi": {
        "hi": "चौरासी",
        "gu": "ચોર્યાસી"
    },
    "Choryasi": {
        "hi": "चौरासी",
        "gu": "ચોર્યાસી"
    },
    "Kamrej": {
        "hi": "कामरेज",
        "gu": "કામરેજ"
    },
    "Mahuva": {
        "hi": "महुवा",
        "gu": "મહુવા"
    },
    "Mandvi": {
        "hi": "मांडवी",
        "gu": "માંડવી"
    },
    "Mangrol": {
        "hi": "मांगरोल",
        "gu": "માંગરોળ"
    },
    "Olpad": {
        "hi": "ओलपाड",
        "gu": "ઓલપાડ"
    },
    "Palsana": {
        "hi": "पलसाना",
        "gu": "પલસાણા"
    },
    "Umarpada": {
        "hi": "उमरपाड़ा",
        "gu": "ઉમરપાડા"
    },
    "Surat City": {
        "hi": "सूरत शहर",
        "gu": "સુરત શહેર"
    },
    "Dabhoi": {
        "hi": "डभोई",
        "gu": "ડભોઈ"
    },
    "Desar": {
        "hi": "डेसर",
        "gu": "ડેસર"
    },
    "Karjan": {
        "hi": "करजण",
        "gu": "કરજણ"
    },
    "Padra": {
        "hi": "पादरा",
        "gu": "પાદરા"
    },
    "Savli": {
        "hi": "सावली",
        "gu": "સાવલી"
    },
    "Sinor": {
        "hi": "शिनोर",
        "gu": "શિનોર"
    },
    "Vaghodia": {
        "hi": "वाघोडिया",
        "gu": "વાઘોડિયા"
    },
    "Vadodara Rural": {
        "hi": "वडोदरा ग्रामीण",
        "gu": "વડોદરા ગ્રામ્ય"
    },
    "Anand": {
        "hi": "आणंद",
        "gu": "આણંદ"
    },
    "Anklav": {
        "hi": "आंकलाव",
        "gu": "આંકલાવ"
    },
    "Borsad": {
        "hi": "बोरसद",
        "gu": "બોરસદ"
    },
    "Khambhat": {
        "hi": "खंभात",
        "gu": "ખંભાત"
    },
    "Petlad": {
        "hi": "पेतलाद",
        "gu": "પેટલાદ"
    },
    "Sojitra": {
        "hi": "सोजित्रा",
        "gu": "સોજિત્રા"
    },
    "Tarapur": {
        "hi": "तारापुर",
        "gu": "તારાપુર"
    },
    "Umreth": {
        "hi": "उमरेठ",
        "gu": "ઉમરેઠ"
    },
    "Kapadvanj": {
        "hi": "कपड़वंज",
        "gu": "કપડવંજ"
    },
    "Kheda": {
        "hi": "खेड़ा",
        "gu": "ખેડા"
    },
    "Matar": {
        "hi": "मातर",
        "gu": "માતર"
    },
    "Mehmadabad": {
        "hi": "महेमदावाद",
        "gu": "મહેમદાવાદ"
    },
    "Nadiad": {
        "hi": "नडियाद",
        "gu": "નડિયાદ"
    },
    "Thasra": {
        "hi": "ठासरा",
        "gu": "ઠાસરા"
    },
    "Vaso": {
        "hi": "वासो",
        "gu": "વાસો"
    },
    "Galteshwar": {
        "hi": "गलतेश्वर",
        "gu": "ગળતેશ્વર"
    },
    "Amreli": {
        "hi": "अमरेली",
        "gu": "અમરેલી"
    },
    "Babra": {
        "hi": "बाबरा",
        "gu": "બાવરા / બાબરા"
    },
    "Bagasara": {
        "hi": "बागसरा",
        "gu": "બગસરા"
    },
    "Dhari": {
        "hi": "धारी",
        "gu": "ધારી"
    },
    "Jafrabad": {
        "hi": "जाफराबाद",
        "gu": "જાફરાબાદ"
    },
    "Khambha": {
        "hi": "खांभा",
        "gu": "ખાંભા"
    },
    "Kunkavav Vadia": {
        "hi": "कुंकावाव वाडिया",
        "gu": "કુંકાવાવ વડિયા"
    },
    "Kunkavav": {
        "hi": "कुंकावाव",
        "gu": "કુંકાવાવ"
    },
    "Lathi": {
        "hi": "लाठी",
        "gu": "લાઠી"
    },
    "Lilia": {
        "hi": "लीलियां",
        "gu": "લીલીયા"
    },
    "Rajula": {
        "hi": "राजूला",
        "gu": "રાજુલા"
    },
    "Savarkundla": {
        "hi": "सावरकुंडला",
        "gu": "સાવરકુંડલા"
    },
    "Bhavnagar": {
        "hi": "भावनगर",
        "gu": "ભાવનગર"
    },
    "Gariadhar": {
        "hi": "गारियाधार",
        "gu": "ગારીયાધાર"
    },
    "Ghogha": {
        "hi": "घोघा",
        "gu": "ઘોઘા"
    },
    "Jesar": {
        "hi": "जेसर",
        "gu": "જેસર"
    },
    "Palitana": {
        "hi": "पालीताना",
        "gu": "પાલીતાણા"
    },
    "Sihor": {
        "hi": "सिहोर",
        "gu": "સિહોર"
    },
    "Talaja": {
        "hi": "तलाजा",
        "gu": "તળાજા"
    },
    "Umrala": {
        "hi": "उमराला",
        "gu": "ઉમરાળા"
    },
    "Vallabhipur": {
        "hi": "वल्लभीपुर",
        "gu": "વલ્લભીપુર"
    },
    "Botad": {
        "hi": "बोटाद",
        "gu": "બોટાદ"
    },
    "Barwala": {
        "hi": "बरवाला",
        "gu": "બરવાળા"
    },
    "Gadhada": {
        "hi": "गढडा",
        "gu": "ગઢડા"
    },
    "Ranpur": {
        "hi": "राणपुर",
        "gu": "રાણપુર"
    },
    "Morbi": {
        "hi": "मोरबी",
        "gu": "મોરબી"
    },
    "Halvad": {
        "hi": "हलवद",
        "gu": "હળવદ"
    },
    "Maliya": {
        "hi": "मालिया",
        "gu": "માળિયા"
    },
    "Tankara": {
        "hi": "टंकारा",
        "gu": "ટંકારા"
    },
    "Wankaner": {
        "hi": "वांकानेर",
        "gu": "વાંકાનેર"
    },
    "Chotila": {
        "hi": "चोटिला",
        "gu": "ચોટીલા"
    },
    "Chuda": {
        "hi": "चुड़ा",
        "gu": "ચૂડા"
    },
    "Dasada": {
        "hi": "दसाड़ा",
        "gu": "દસાડા"
    },
    "Dhrangadhra": {
        "hi": "ध्रांगध्रा",
        "gu": "ધ્રાંગધ્રા"
    },
    "Lakhtar": {
        "hi": "लखतर",
        "gu": "લખતર"
    },
    "Limbdi": {
        "hi": "लिंबडी",
        "gu": "લીંબડી"
    },
    "Muli": {
        "hi": "मूली",
        "gu": "મૂળી"
    },
    "Sayla": {
        "hi": "सायला",
        "gu": "સાયલા"
    },
    "Thangadh": {
        "hi": "थानगढ़",
        "gu": "થાનગઢ"
    },
    "Wadhwan": {
        "hi": "वढवाण",
        "gu": "વઢવાણ"
    },
    "Bhesan": {
        "hi": "भेसाण",
        "gu": "ભેસાણ"
    },
    "Junagadh": {
        "hi": "जूनागढ़",
        "gu": "જૂનાગઢ"
    },
    "Keshod": {
        "hi": "केशोद",
        "gu": "કેશોદ"
    },
    "Manavadar": {
        "hi": "माणावदर",
        "gu": "માણાવદર"
    },
    "Mendarda": {
        "hi": "मेंदरडा",
        "gu": "મેંદરડા"
    },
    "Vanthali": {
        "hi": "वंथाली",
        "gu": "વંથલી"
    },
    "Visavadar": {
        "hi": "विसावदर",
        "gu": "વિસાવદર"
    },
    "Gir Gadhada": {
        "hi": "गिर गढडा",
        "gu": "ગીર ગઢડા"
    },
    "Kodinar": {
        "hi": "कोडीनार",
        "gu": "કોડીનાર"
    },
    "Patan Veraval": {
        "hi": "वेरावल",
        "gu": "વેરાવળ"
    },
    "Veraval": {
        "hi": "वेरावल",
        "gu": "વેરાવળ"
    },
    "Sutrapada": {
        "hi": "सुत्रापाड़ा",
        "gu": "સુત્રાપાડા"
    },
    "Talala": {
        "hi": "तलाला",
        "gu": "તાલાલા"
    },
    "Una": {
        "hi": "ऊना",
        "gu": "ઉના"
    },
    "Porbandar": {
        "hi": "पोरबंदर",
        "gu": "પોરબંદર"
    },
    "Kutiyana": {
        "hi": "कुतियाना",
        "gu": "કુતિયાણા"
    },
    "Ranavav": {
        "hi": "राणावाव",
        "gu": "રાણાવાવ"
    },
    "Dhrol": {
        "hi": "ध्रोल",
        "gu": "ધ્રોલ"
    },
    "Jamjodhpur": {
        "hi": "जामजोधपुर",
        "gu": "જામજોધપુર"
    },
    "Jodiya": {
        "hi": "जोड़िया",
        "gu": "જોડિયા"
    },
    "Kalavad": {
        "hi": "कालावाद",
        "gu": "કાલાવડ"
    },
    "Lalpur": {
        "hi": "लालपुर",
        "gu": "લાલપુર"
    },
    "Jamnagar": {
        "hi": "जामनगर",
        "gu": "જામનગર"
    },
    "Bhanvad": {
        "hi": "भाणवड़",
        "gu": "ભાણવડ"
    },
    "Kalyanpur": {
        "hi": "कल्याणपुर",
        "gu": "કલ્યાણપુર"
    },
    "Khambhalia": {
        "hi": "खंभालिया",
        "gu": "ખંભાળિયા"
    },
    "Okhamandal": {
        "hi": "ओखामंडल (द्वारका)",
        "gu": "ઓખામંડળ (દ્વારકા)"
    },
    "Abdasa": {
        "hi": "अबडासा",
        "gu": "અબડાસા"
    },
    "Anjar": {
        "hi": "अंजार",
        "gu": "અંજાર"
    },
    "Bhachau": {
        "hi": "भचाऊ",
        "gu": "ભચાઉ"
    },
    "Bhuj": {
        "hi": "भुज",
        "gu": "ભુજ"
    },
    "Gandhidham": {
        "hi": "गांधीधाम",
        "gu": "ગાંધીધામ"
    },
    "Lakhpat": {
        "hi": "लखपत",
        "gu": "લખપત"
    },
    "Mundra": {
        "hi": "मुंद्रा",
        "gu": "મુન્દ્રા"
    },
    "Nakhtrana": {
        "hi": "नखत्राणा",
        "gu": "નખત્રાણા"
    },
    "Rapar": {
        "hi": "रापर",
        "gu": "રાપર"
    },
    "Becharaji": {
        "hi": "बेचराजी",
        "gu": "બેચરાજી"
    },
    "Bechraji": {
        "hi": "બેચરાજી",
        "gu": "બેચરાજી"
    },
    "Jotana": {
        "hi": "जोताणा",
        "gu": "જોટાણા"
    },
    "Kadi": {
        "hi": "कड़ी",
        "gu": "કડી"
    },
    "Kheralu": {
        "hi": "खेरालू",
        "gu": "ખેરાલુ"
    },
    "Satlasana": {
        "hi": "सतलासणा",
        "gu": "સતલાસણા"
    },
    "Unjha": {
        "hi": "ऊंझा",
        "gu": "ઊંઝા"
    },
    "Vadnagar": {
        "hi": "वडनगर",
        "gu": "વડનગર"
    },
    "Vijapur": {
        "hi": "विजापुर",
        "gu": "વિજાપુર"
    },
    "Visnagar": {
        "hi": "विसनगर",
        "gu": "વિસનગર"
    },
    "Chanasma": {
        "hi": "चाणस्मा",
        "gu": "ચાણસ્મા"
    },
    "Harij": {
        "hi": "हारिज",
        "gu": "હારીજ"
    },
    "Radhanpur": {
        "hi": "राधनपुर",
        "gu": "રાધનપુર"
    },
    "Sami": {
        "hi": "समी",
        "gu": "સમી"
    },
    "Sankheshwar": {
        "hi": "शंखेश्वर",
        "gu": "શંખેશ્વર"
    },
    "Santalpur": {
        "hi": "सांतलपुर",
        "gu": "સાંતલપુર"
    },
    "Saraswati": {
        "hi": "सरस्वती",
        "gu": "સરસ્વતી"
    },
    "Sidhpur": {
        "hi": "सिद्धपुर",
        "gu": "સિદ્ધપુર"
    },
    "Patan": {
        "hi": "पाटन",
        "gu": "પાટણ"
    },
    "Amirgadh": {
        "hi": "अमीरगढ़",
        "gu": "અમીરગઢ"
    },
    "Bhabhar": {
        "hi": "भाभर",
        "gu": "ભાભર"
    },
    "Danta": {
        "hi": "दांता",
        "gu": "દાંતા"
    },
    "Dantiwada": {
        "hi": "दांतीवाड़ा",
        "gu": "દાંતીવાડા"
    },
    "Deesa": {
        "hi": "डीसा",
        "gu": "ડીસા"
    },
    "Deodar": {
        "hi": "दियोदर",
        "gu": "દિયોદર"
    },
    "Dhanera": {
        "hi": "धानेरा",
        "gu": "ધાનેરા"
    },
    "Kankrej": {
        "hi": "कांकरेज",
        "gu": "કાંકરેજ"
    },
    "Lakhani": {
        "hi": "लाखाणी",
        "gu": "લાખાણી"
    },
    "Palanpur": {
        "hi": "पालनपुर",
        "gu": "પાલનપુર"
    },
    "Suigam": {
        "hi": "सुईगाम",
        "gu": "સુઈગામ"
    },
    "Tharad": {
        "hi": "थराद",
        "gu": "થરાદ"
    },
    "Vadgam": {
        "hi": "वडगाम",
        "gu": "વડગામ"
    },
    "Vav": {
        "hi": "वाव",
        "gu": "વાવ"
    },
    "Himatnagar": {
        "hi": "हिम्मतनगर",
        "gu": "હિંમતનગર"
    },
    "Idar": {
        "hi": "इदर",
        "gu": "ઇડર"
    },
    "Khedbrahma": {
        "hi": "खेडब्रह्मा",
        "gu": "ખેડબ્રહ્મા"
    },
    "Poshina": {
        "hi": "पोषीणा",
        "gu": "પોશીના"
    },
    "Prantij": {
        "hi": "प्रांतिज",
        "gu": "પ્રાંતિજ"
    },
    "Talod": {
        "hi": "तलोद",
        "gu": "તલોદ"
    },
    "Vadali": {
        "hi": "वडाली",
        "gu": "વડાલી"
    },
    "Vijaynagar": {
        "hi": "विजयनगर",
        "gu": "વિજયનગર"
    },
    "Bayad": {
        "hi": "बायड",
        "gu": "બાયડ"
    },
    "Bhiloda": {
        "hi": "भिलोड़ा",
        "gu": "ભિલોડા"
    },
    "Dhansura": {
        "hi": "धनसुरा",
        "gu": "ધનસુરા"
    },
    "Malpur": {
        "hi": "मालपुर",
        "gu": "માલપુર"
    },
    "Meghraj": {
        "hi": "मेघराज",
        "gu": "મેઘરજ"
    },
    "Modasa": {
        "hi": "मोडासा",
        "gu": "મોડાસા"
    },
    "Ghoghamba": {
        "hi": "घोघंबा",
        "gu": "ઘોઘંબા"
    },
    "Godhra": {
        "hi": "गोधरा",
        "gu": "ગોધરા"
    },
    "Halol": {
        "hi": "हालोल",
        "gu": "હાલોલ"
    },
    "Jambughoda": {
        "hi": "जांबुघोड़ा",
        "gu": "જાંબુઘોડા"
    },
    "Morwa Hadaf": {
        "hi": "मोरवा हड़फ",
        "gu": "મોરવા હડફ"
    },
    "Shehera": {
        "hi": "शहेरा",
        "gu": "શહેરા"
    },
    "Devgadh Baria": {
        "hi": "देवगढ़ बारिया",
        "gu": "દેવગઢ બારિયા"
    },
    "Dhanpur": {
        "hi": "धानपुर",
        "gu": "ધાનપુર"
    },
    "Fatepura": {
        "hi": "फतेपुरा",
        "gu": "ફતેપુરા"
    },
    "Garbada": {
        "hi": "गरबाड़ा",
        "gu": "ગરબાડા"
    },
    "Jhalod": {
        "hi": "झालोद",
        "gu": "ઝાલોદ"
    },
    "Limkheda": {
        "hi": "लिमखेड़ा",
        "gu": "લીમખેડા"
    },
    "Sanjeli": {
        "hi": "संजेली",
        "gu": "સંજેલી"
    },
    "Singvad": {
        "hi": "सिंगवड़",
        "gu": "સિંગવડ"
    },
    "Dahod": {
        "hi": "दाहोद",
        "gu": "દાહોદ"
    },
    "Balasinor": {
        "hi": "बालासिनोर",
        "gu": "બાલાસિનોર"
    },
    "Kadana": {
        "hi": "कडाणा",
        "gu": "કડાણા"
    },
    "Khanpur": {
        "hi": "खानपुर",
        "gu": "ખાનપુર"
    },
    "Lunawada": {
        "hi": "लूणावाड़ा",
        "gu": "લુણાવાડા"
    },
    "Santrampur": {
        "hi": "संतरामपुर",
        "gu": "સંતરામપુર"
    },
    "Virpur": {
        "hi": "वीरपुर",
        "gu": "વીરપુર"
    },
    "Amod": {
        "hi": "आमोद",
        "gu": "આમોદ"
    },
    "Ankleshwar": {
        "hi": "अंकलेश्वर",
        "gu": "અંકલેશ્વર"
    },
    "Anklesvar": {
        "hi": "अंकलेश्वर",
        "gu": "અંકલેશ્વર"
    },
    "Hansot": {
        "hi": "हंसोट",
        "gu": "હંસોટ"
    },
    "Jambusar": {
        "hi": "जंबूसर",
        "gu": "જંબુસર"
    },
    "Jhagadia": {
        "hi": "झगड़िया",
        "gu": "ઝઘડિયા"
    },
    "Netrang": {
        "hi": "नेत्रंग",
        "gu": "નેત્રંગ"
    },
    "Vagra": {
        "hi": "वागरा",
        "gu": "વાગરા"
    },
    "Valia": {
        "hi": "वालिया",
        "gu": "વાલિયા"
    },
    "Bharuch": {
        "hi": "भरूच",
        "gu": "ભરૂચ"
    },
    "Dediapada": {
        "hi": "डेडियापाड़ा",
        "gu": "ડેડિયાપાડા"
    },
    "Garudeshwar": {
        "hi": "गरुड़ेश्वर",
        "gu": "ગરુડેશ્વર"
    },
    "Nandod": {
        "hi": "नांदोद (राजपीपला)",
        "gu": "નાંદોદ (રાજપીપળા)"
    },
    "Sagbara": {
        "hi": "सागबारा",
        "gu": "સાગબારા"
    },
    "Tilakwada": {
        "hi": "तिलकवाड़ा",
        "gu": "તિલકવાડા"
    },
    "Bodeli": {
        "hi": "बोडेली",
        "gu": "બોડેલી"
    },
    "Chhota Udepur": {
        "hi": "छोटा उदेपुर",
        "gu": "છોટાઉદેપુર"
    },
    "Jetpur Pavi": {
        "hi": "जेतपुर पावी",
        "gu": "જેતપુર પાવી"
    },
    "Kavant": {
        "hi": "कवांट",
        "gu": "કવાંટ"
    },
    "Nasvadi": {
        "hi": "नसवाड़ी",
        "gu": "નસવાડી"
    },
    "Sankheda": {
        "hi": "संखेड़ा",
        "gu": "સંખેડા"
    },
    "Nizar": {
        "hi": "निझर",
        "gu": "નિઝર"
    },
    "Songadh": {
        "hi": "सोनगढ़",
        "gu": "સોનગઢ"
    },
    "Uchchhal": {
        "hi": "उच्छल",
        "gu": "ઉચ્છલ"
    },
    "Valod": {
        "hi": "वालोड",
        "gu": "વાલોડ"
    },
    "Vyara": {
        "hi": "व्यरा",
        "gu": "વ્યારા"
    },
    "Kukarmunda": {
        "hi": "कुकुरमुंडा",
        "gu": "કુકરમુંડા"
    },
    "Dolvan": {
        "hi": "डोलवण",
        "gu": "ડોલવણ"
    },
    "Chikhli": {
        "hi": "चिखली",
        "gu": "ચીખલી"
    },
    "Gandevi": {
        "hi": "गंदेवी",
        "gu": "ગણદેવી"
    },
    "Jalalpore": {
        "hi": "जलालपोर",
        "gu": "જલાલપોર"
    },
    "Khergam": {
        "hi": "खेरगाम",
        "gu": "ખેરગામ"
    },
    "Navsari": {
        "hi": "नवसारी",
        "gu": "નવસારી"
    },
    "Vansda": {
        "hi": "वांसदा",
        "gu": "વાંસદા"
    },
    "Dharampur": {
        "hi": "धरमपुर",
        "gu": "ધરમપુર"
    },
    "Kaprada": {
        "hi": "कपराड़ा",
        "gu": "કપરાડા"
    },
    "Pardi": {
        "hi": "पारडी",
        "gu": "પારડી"
    },
    "Umbergaon": {
        "hi": "उंबरगांव",
        "gu": "ઉમરગામ"
    },
    "Vapi": {
        "hi": "वापी",
        "gu": "વાપી"
    },
    "Valsad": {
        "hi": "वलसाड",
        "gu": "વલસાડ"
    },
    "Ahwa": {
        "hi": "आहवा",
        "gu": "આહવા"
    },
    "Subir": {
        "hi": "सुबीर",
        "gu": "સુબીર"
    },
    "Waghai": {
        "hi": "वाघई",
        "gu": "વઘઈ"
    }
};


const HI_PREFIX_MAP = {
    'east': 'पूर्वी', 'west': 'पश्चिम', 'north': 'उत्तरी', 'south': 'दक्षिणी',
    'upper': 'ऊपरी', 'lower': 'निचला', 'central': 'मध्य', 'city': 'शहर',
    'rural': 'ग्रामीण', 'valley': 'घाटी', 'hills': 'हिल्स', 'islands': 'द्वीप समूह'
};

const GU_PREFIX_MAP = {
    'east': 'પૂર્વ', 'west': 'પશ્ચિમ', 'north': 'ઉત્તર', 'south': 'દક્ષિણ',
    'upper': 'ઉપલા', 'lower': 'નીચલા', 'central': 'મધ્ય', 'city': 'શહેર',
    'rural': 'ગ્રામ્ય', 'valley': 'ખીણ', 'hills': 'ટેકરીઓ', 'islands': 'દ્વીપસમૂહ'
};

const HI_CONSONANTS_MAP = {
    'chh': 'छ', 'kh': 'ख', 'gh': 'घ', 'ch': 'च', 'jh': 'झ',
    'th': 'थ', 'dh': 'ध', 'ph': 'फ', 'bh': 'भ', 'sh': 'श',
    'zh': 'झ', 'ng': 'ंग', 'ny': 'ञ', 'ts': 'त्स', 'tr': 'त्र',
    'shr': 'श्र', 'ksh': 'क्ष', 'gn': 'ज्ञ', 'gy': 'ज्ञ',
    'kr': 'क्र', 'pr': 'प्र', 'br': 'ब्र', 'dr': 'द्र', 'gr': 'ग्र',
    'str': 'स्त्र', 'st': 'स्त', 'sp': 'स्प', 'sk': 'स्क',
    'nd': 'न्द', 'nt': 'न्त', 'mp': 'म्प', 'mb': 'म्ब', 'nk': 'न्क',
    'k': 'क', 'g': 'ग', 'c': 'क', 'j': 'ज', 't': 'त', 'd': 'द',
    'n': 'न', 'p': 'प', 'f': 'फ', 'b': 'ब', 'm': 'म', 'y': 'य',
    'r': 'र', 'l': 'ल', 'v': 'व', 'w': 'व', 's': 'स', 'h': 'ह',
    'z': 'ज़', 'q': 'क', 'x': 'क्स'
};

const GU_CONSONANTS_MAP = {
    'chh': 'છ', 'kh': 'ખ', 'gh': 'ઘ', 'ch': 'ચ', 'jh': 'ઝ',
    'th': 'થ', 'dh': 'ધ', 'ph': 'ફ', 'bh': 'ભ', 'sh': 'શ',
    'zh': 'ઝ', 'ng': 'ંગ', 'ny': 'ઞ', 'ts': 'ત્સ', 'tr': 'ત્ર',
    'shr': 'શ્ર', 'ksh': 'ક્ષ', 'gn': 'જ્ઞ', 'gy': 'જ્ઞ',
    'kr': 'ક્ર', 'pr': 'પ્ર', 'br': 'બ્ર', 'dr': 'દ્ર', 'gr': 'ગ્ર',
    'str': 'સ્ત્ર', 'st': 'સ્ત', 'sp': 'સ્પ', 'sk': 'સ્ક',
    'nd': 'ન્દ', 'nt': 'ન્ત', 'mp': 'મ્પ', 'mb': 'મ્બ', 'nk': 'ન્ક',
    'k': 'ક', 'g': 'ગ', 'c': 'ક', 'j': 'જ', 't': 'ત', 'd': 'દ',
    'n': 'ન', 'p': 'પ', 'f': 'ફ', 'b': 'બ', 'm': 'મ', 'y': 'ય',
    'r': 'ર', 'l': 'લ', 'v': 'વ', 'w': 'વ', 's': 'સ', 'h': 'હ',
    'z': 'ઝ', 'q': 'ક', 'x': 'ક્સ'
};

const HI_INIT_VOWELS_MAP = {
    'aa': 'आ', 'a': 'अ', 'ee': 'ई', 'i': 'इ', 'oo': 'ऊ', 'u': 'उ',
    'e': 'ए', 'ai': 'ऐ', 'ou': 'औ', 'au': 'औ', 'o': 'ओ', 'ri': 'ऋ'
};

const GU_INIT_VOWELS_MAP = {
    'aa': 'આ', 'a': 'અ', 'ee': 'ઈ', 'i': 'ઇ', 'oo': 'ઊ', 'u': 'ઉ',
    'e': 'એ', 'ai': 'ઐ', 'ou': 'ઔ', 'au': 'ઔ', 'o': 'ઓ', 'ri': 'ઋ'
};

const HI_MATRAS_MAP = {
    'aa': 'ा', 'a': '', 'ee': 'ी', 'i': 'ि', 'oo': 'ू', 'u': 'ु',
    'e': 'े', 'ai': 'ै', 'ou': 'ौ', 'au': 'ौ', 'o': 'ो'
};

const GU_MATRAS_MAP = {
    'aa': 'ા', 'a': '', 'ee': 'ી', 'i': 'િ', 'oo': 'ૂ', 'u': 'ુ',
    'e': 'ે', 'ai': 'ૈ', 'ou': 'ૌ', 'au': 'ૌ', 'o': 'ો'
};

function transliterateWordIndic(word, lang = 'hi') {
    if (!word) return '';
    const w = word.toLowerCase();
    const prefixMap = lang === 'hi' ? HI_PREFIX_MAP : GU_PREFIX_MAP;
    if (prefixMap[w]) return prefixMap[w];

    const consonants = lang === 'hi' ? HI_CONSONANTS_MAP : GU_CONSONANTS_MAP;
    const initVowels = lang === 'hi' ? HI_INIT_VOWELS_MAP : GU_INIT_VOWELS_MAP;
    const matras = lang === 'hi' ? HI_MATRAS_MAP : GU_MATRAS_MAP;
    const halant = lang === 'hi' ? '्' : '્';
    const aaMatra = lang === 'hi' ? 'ा' : 'ા';

    const cKeys = Object.keys(consonants).sort((a, b) => b.length - a.length);
    const vKeys = Object.keys(matras).sort((a, b) => b.length - a.length);
    const initVKeys = Object.keys(initVowels).sort((a, b) => b.length - a.length);

    let res = '';
    let i = 0;
    const n = w.length;
    let isWordStart = true;

    while (i < n) {
        if (!/[a-z]/.test(w[i])) {
            res += w[i];
            i++;
            isWordStart = true;
            continue;
        }

        if (isWordStart) {
            let vMatch = null;
            for (const vk of initVKeys) {
                if (w.startsWith(vk, i)) {
                    vMatch = vk;
                    break;
                }
            }
            if (vMatch) {
                res += initVowels[vMatch];
                i += vMatch.length;
                isWordStart = false;
                continue;
            }
        }

        let cMatch = null;
        for (const ck of cKeys) {
            if (w.startsWith(ck, i)) {
                cMatch = ck;
                break;
            }
        }

        if (cMatch) {
            const cChar = consonants[cMatch];
            i += cMatch.length;
            isWordStart = false;

            let vMatch = null;
            for (const vk of vKeys) {
                if (w.startsWith(vk, i)) {
                    vMatch = vk;
                    break;
                }
            }

            if (vMatch) {
                if (vMatch === 'a' && (i + 1 === n || !/[a-z]/.test(w[i + 1]))) {
                    res += cChar + aaMatra;
                } else {
                    res += cChar + matras[vMatch];
                }
                i += vMatch.length;
            } else {
                if (i < n && /[a-z]/.test(w[i])) {
                    res += cChar + halant;
                } else {
                    res += cChar;
                }
            }
        } else {
            let vMatch = null;
            for (const vk of initVKeys) {
                if (w.startsWith(vk, i)) {
                    vMatch = vk;
                    break;
                }
            }
            if (vMatch) {
                res += initVowels[vMatch];
                i += vMatch.length;
            } else {
                res += w[i];
                i++;
            }
            isWordStart = false;
        }
    }

    return res;
}

function transliterateFullIndic(text, lang = 'hi') {
    if (!text || lang === 'en') return text;
    return text.replace(/[a-zA-Z]+/g, (match) => transliterateWordIndic(match, lang));
}

class I18nManager {
    constructor() {
        this.currentLang = localStorage.getItem('krishi_lang') || 'en';
        this.listeners = [];
    }

    getCurrentLanguage() {
        return this.currentLang;
    }

    setLanguage(lang) {
        if (!translations[lang]) lang = 'en';
        this.currentLang = lang;
        localStorage.setItem('krishi_lang', lang);
        document.documentElement.lang = lang;
        
        // Update cookie for Django server-side awareness if needed
        document.cookie = `django_language=${lang};path=/;max-age=31536000`;

        this.translatePage();
        this.notifyListeners(lang);
    }

    t(key, params = {}, fallback = '') {
        const langDict = translations[this.currentLang] || translations.en;
        let text = langDict[key] || translations.en[key] || fallback || key;

        // Replace parameters like {state}, {district}
        if (params && typeof params === 'object') {
            Object.keys(params).forEach(p => {
                text = text.replace(new RegExp(`\\{${p}\\}`, 'g'), params[p]);
            });
        }
        return text;
    }

    
    translateState(name) {
        if (!name || this.currentLang === 'en') return name;
        const lang = this.currentLang;
        const clean = name.trim();
        if (STATE_TRANSLATIONS[clean]) return STATE_TRANSLATIONS[clean][lang] || clean;
        for (const k of Object.keys(STATE_TRANSLATIONS)) {
            if (k.toLowerCase() === clean.toLowerCase()) {
                return STATE_TRANSLATIONS[k][lang] || clean;
            }
        }
        return this.transliterateIndic(clean, lang);
    }

    translateDistrict(name) {
        if (!name || this.currentLang === 'en') return name;
        const lang = this.currentLang;
        const clean = name.trim();
        if (DISTRICT_TRANSLATIONS[clean]) return DISTRICT_TRANSLATIONS[clean][lang] || clean;
        for (const k of Object.keys(DISTRICT_TRANSLATIONS)) {
            if (k.toLowerCase() === clean.toLowerCase()) {
                return DISTRICT_TRANSLATIONS[k][lang] || clean;
            }
        }
        return this.transliterateIndic(clean, lang);
    }

    translateBlock(name) {
        if (!name || this.currentLang === 'en') return name;
        const lang = this.currentLang;
        const clean = name.trim();
        if (BLOCK_TRANSLATIONS[clean]) return BLOCK_TRANSLATIONS[clean][lang] || clean;
        for (const k of Object.keys(BLOCK_TRANSLATIONS)) {
            if (k.toLowerCase() === clean.toLowerCase()) {
                return BLOCK_TRANSLATIONS[k][lang] || clean;
            }
        }
        return this.transliterateIndic(clean, lang);
    }

    translateSource(source) {
        if (!source || this.currentLang === 'en') return source;
        const lang = this.currentLang;
        
        if (source.includes('10.85M') || source.includes('Benchmark') || source.includes('Database')) {
            const match = source.match(/\(([^)]+)\)/);
            if (match) {
                const parts = match[1].split(',').map(p => p.trim());
                const translatedParts = parts.map(p => {
                    const st = this.translateState(p);
                    if (st !== p) return st;
                    const dt = this.translateDistrict(p);
                    if (dt !== p) return dt;
                    const bk = this.translateBlock(p);
                    if (bk !== p) return bk;
                    return p;
                });
                const locStr = translatedParts.join(', ');
                return lang === 'hi' 
                    ? `10.85M राष्ट्रीय मृदा डेटाबेस मानक (${locStr})`
                    : `10.85M રાષ્ટ્રીય જમીન ડેટાબેઝ માપદંડ (${locStr})`;
            }
            return lang === 'hi' ? '10.85M राष्ट्रीय मृदा डेटाबेस मानक' : '10.85M રાષ્ટ્રીય જમીન ડેટાબેઝ માપદંડ';
        }

        if (source.includes('Field Diagnostic') || source.includes('Direct Farmer') || source.includes('Field Test')) {
            return lang === 'hi' ? 'खेत परीक्षण / नैदानिक इनपुट' : 'ખેતર ચકાસણી / ખેડૂત ઇનપુટ';
        }

        return source;
    }

    transliterateIndic(text, lang) {
        if (!text || lang === 'en') return text;
        return transliterateFullIndic(text, lang);
    }

    translateFertilizer(name) {
        if (!name) return '-';
        const key = `fert.${name}`;
        if (translations[this.currentLang] && translations[this.currentLang][key]) {
            return translations[this.currentLang][key];
        }
        if (name.includes('+')) {
            const parts = name.split('+').map(part => {
                const trimmed = part.trim();
                for (const k of Object.keys(translations.en)) {
                    if (k.startsWith('fert.')) {
                        const fertName = k.replace('fert.', '');
                        if (trimmed === fertName || trimmed.startsWith(fertName + ' ') || trimmed.startsWith(fertName + '(')) {
                            const translated = this.t(k);
                            return trimmed.replace(fertName, translated);
                        }
                    }
                }
                return trimmed;
            });
            return parts.join(' + ');
        }
        for (const k of Object.keys(translations.en)) {
            if (k.startsWith('fert.') && (name === k.replace('fert.', '') || name.startsWith(k.replace('fert.', '') + ' '))) {
                return this.t(k, {}, name);
            }
        }
        return name;
    }

    translateCrop(name) {
        if (!name) return '-';
        const key = `crop.${name}`;
        if (translations[this.currentLang] && translations[this.currentLang][key]) {
            return translations[this.currentLang][key];
        }
        for (const k of Object.keys(translations.en)) {
            if (k.startsWith('crop.')) {
                const rawCrop = k.replace('crop.', '');
                if (name.toLowerCase().includes(rawCrop.toLowerCase()) || rawCrop.toLowerCase().includes(name.toLowerCase())) {
                    return this.t(k, {}, name);
                }
            }
        }
        return name;
    }

    translateCategory(cat) {
        if (!cat) return '-';
        const key = `cat.${cat}`;
        if (translations[this.currentLang] && translations[this.currentLang][key]) {
            return translations[this.currentLang][key];
        }
        for (const k of Object.keys(translations.en)) {
            if (k.startsWith('cat.')) {
                const rawCat = k.replace('cat.', '');
                if (cat.toLowerCase().includes(rawCat.toLowerCase()) || rawCat.toLowerCase().includes(cat.toLowerCase())) {
                    return this.t(k, {}, cat);
                }
            }
        }
        return cat;
    }

    translateRating(status) {
        if (!status) return '-';
        const s = status.toUpperCase();
        if (s.includes('LOW')) return this.t('report.statusLow', {}, 'LOW');
        if (s.includes('MED')) return this.t('report.statusMedium', {}, 'MEDIUM');
        if (s.includes('HIGH')) return this.t('report.statusHigh', {}, 'HIGH');
        if (s.includes('DEFICIENT')) return this.t('report.statusDeficient', {}, 'DEFICIENT');
        if (s.includes('ADEQUATE')) return this.t('report.statusAdequate', {}, 'ADEQUATE');
        return status;
    }

    /**
     * Localizes dynamic Soil pH amendment strings
     */
    translatePhAmendment(text) {
        if (!text || this.currentLang === 'en') return text;
        const lang = this.currentLang;

        // Extract numbers like pH 5.0, 750 kg, 750 kg/ha
        const phMatch = text.match(/pH\s*([\d\.]+)/i);
        const kgMatch = text.match(/at\s*([\d\.]+)\s*kg/i);
        const rateMatch = text.match(/\(([\d\.]+)\s*kg\/ha\)/i);

        const ph = phMatch ? phMatch[1] : '';
        const kg = kgMatch ? kgMatch[1] : '';
        const rate = rateMatch ? rateMatch[1] : '750';

        if (text.toLowerCase().includes('strongly acidic')) {
            if (lang === 'hi') {
                return `अत्यधिक अम्लीय मिट्टी (pH ${ph})। फास्फोरस की उपलब्धता सुधारने के लिए बुआई से 2-3 सप्ताह पूर्व ${kg} kg (${rate} kg/ha) कृषि चूना (CaCO3) या डोलोमाइट डालें।`;
            } else if (lang === 'gu') {
                return `અત્યંત એસિડિક જમીન (pH ${ph}). ફોસ્ફરસની ઉપલબ્ધતા વધારવા માટે વાવણીના 2-3 અઠવાડિયા પહેલાં ${kg} kg (${rate} kg/ha) કૃષિ ચૂનો (CaCO3) અથવા ડોલોમાઇટ ઉમેરો.`;
            }
        } else if (text.toLowerCase().includes('moderately acidic')) {
            if (lang === 'hi') {
                return `मध्यम अम्लीय मिट्टी (pH ${ph})। ${kg} kg (${rate} kg/ha) कृषि चूना डालें या अच्छी तरह सड़ी हुई गोबर की खाद (FYM)/कम्पोस्ट मिलाएं।`;
            } else if (lang === 'gu') {
                return `મધ્યમ એસિડિક જમીન (pH ${ph}). ${kg} kg (${rate} kg/ha) કૃષિ ચૂનો ઉમેરો અથવા સારું કોહવાયેલું છાણિયું ખાતર/કમ્પોસ્ટ ભેળવો.`;
            }
        } else if (text.toLowerCase().includes('alkaline / sodic') || text.toLowerCase().includes('sodic')) {
            if (lang === 'hi') {
                return `क्षारीय / सोदिक मिट्टी (pH ${ph})। सोडियम विषाक्तता कम करने के लिए जल निकास के साथ ${kg} kg (${rate} kg/ha) कृषि जिप्सम (CaSO4·2H2O) डालें।`;
            } else if (lang === 'gu') {
                return `ક્ષારીય / સોડિક જમીન (pH ${ph}). સોડિયમની હાનિકારકતા ઘટાડવા માટે યોગ્ય નિતાર સાથે ${kg} kg (${rate} kg/ha) કૃષિ જીપ્સમ (CaSO4·2H2O) આપો.`;
            }
        } else if (text.toLowerCase().includes('slightly alkaline')) {
            if (lang === 'hi') {
                return `हल्की क्षारीय मिट्टी (pH ${ph})। जड़ क्षेत्र को स्वाभाविक रूप से उदासीन करने के लिए पोषक तत्व स्रोत के रूप में अमोनियम सल्फेट या SSP का प्रयोग करें।`;
            } else if (lang === 'gu') {
                return `હળવી ક્ષારીય જમીન (pH ${ph}). મૂળ વિસ્તારને તટસ્થ કરવા માટે ખાતર તરીકે એમોનિયમ સલ્ફેટ અથવા SSP નો ઉપયોગ કરો.`;
            }
        } else if (text.toLowerCase().includes('optimal')) {
            if (lang === 'hi') {
                return `अनुकूल मृदा pH (${ph})। पोषक तत्व अवशोषण क्षमता उत्कृष्ट है।`;
            } else if (lang === 'gu') {
                return `ઉત્તમ જમીન pH (${ph}). પોષક તત્વો ગ્રહણ ક્ષમતા શ્રેષ્ઠ છે.`;
            }
        }

        return text;
    }

    /**
     * Localizes dynamic Micronutrient advice strings
     */
    translateMicronutrientAdvice(text) {
        if (!text || this.currentLang === 'en') return text;
        const lang = this.currentLang;

        if (text.toLowerCase().includes('adequate')) {
            return lang === 'hi' ? 'सूक्ष्म पोषक तत्व (Zn, B, S, Fe) कृषि मानकों के अनुसार पर्याप्त मात्रा में हैं।' : 'સૂક્ષ્મ પોષક તત્વો (Zn, B, S, Fe) ખેતી માટે પૂરતા પ્રમાણમાં છે.';
        }

        const segments = text.split('|').map(s => s.trim());
        const translatedSegments = segments.map(seg => {
            // Zinc
            if (seg.toLowerCase().includes('zinc') || seg.toLowerCase().includes('znso4')) {
                const valMatch = seg.match(/([\d\.]+)\s*ppm/i);
                const kgMatch = seg.match(/@\s*([\d\.]+)\s*kg/i);
                const rateMatch = seg.match(/\(([\d\.]+)\s*kg\/ha\)/i);
                const val = valMatch ? valMatch[1] : '0.00';
                const kg = kgMatch ? kgMatch[1] : '25';
                const rate = rateMatch ? rateMatch[1] : '25';
                if (lang === 'hi') {
                    return `जिंक की कमी (${val} ppm < 0.6 ppm): आधारभूत (बेसल) अवस्था में ${kg} kg (${rate} kg/ha) जिंक सल्फेट (ZnSO4 21%) डालें।`;
                } else {
                    return `ઝિંકની ખામી (${val} ppm < 0.6 ppm): પાયાના તબક્કે ${kg} kg (${rate} kg/ha) ઝિંક સલ્ફેટ (ZnSO4 21%) આપો.`;
                }
            }
            // Boron
            if (seg.toLowerCase().includes('boron') || seg.toLowerCase().includes('borax')) {
                const valMatch = seg.match(/([\d\.]+)\s*ppm/i);
                const kgMatch = seg.match(/@\s*([\d\.]+)\s*kg/i);
                const rateMatch = seg.match(/\(([\d\.]+)\s*kg\/ha\)/i);
                const val = valMatch ? valMatch[1] : '0.00';
                const kg = kgMatch ? kgMatch[1] : '5.0';
                const rate = rateMatch ? rateMatch[1] : '5';
                if (lang === 'hi') {
                    return `बोरॉन की कमी (${val} ppm < 0.5 ppm): फल फटने और फूल झड़ने से रोकने के लिए ${kg} kg (${rate} kg/ha) बोरेक्स (10.5% B) डालें।`;
                } else {
                    return `બોરોનની ખામી (${val} ppm < 0.5 ppm): ફળ ફાટતા અને ફૂલ ખરતા અટકાવવા માટે ${kg} kg (${rate} kg/ha) બોરેક્સ (10.5% B) આપો.`;
                }
            }
            // Sulphur
            if (seg.toLowerCase().includes('sulphur') || seg.toLowerCase().includes('gypsum')) {
                const valMatch = seg.match(/([\d\.]+)\s*ppm/i);
                const kgMatch = seg.match(/@\s*([\d\.]+)\s*kg/i);
                const rateMatch = seg.match(/\(([\d\.]+)\s*kg\/ha\)/i);
                const val = valMatch ? valMatch[1] : '0.0';
                const kg = kgMatch ? kgMatch[1] : '35';
                const rate = rateMatch ? rateMatch[1] : '35';
                if (lang === 'hi') {
                    return `सल्फर की कमी (${val} ppm < 10 ppm): तिलहन और दलहन में प्रोटीन निर्माण के लिए ${kg} kg (${rate} kg/ha) तत्वीय सल्फर या जिप्सम डालें।`;
                } else {
                    return `સલ્ફરની ખામી (${val} ppm < 10 ppm): તેલીબિયાં અને કઠોળમાં પ્રોટીન વૃદ્ધિ માટે ${kg} kg (${rate} kg/ha) સલ્ફર અથવા જીપ્સમ આપો.`;
                }
            }
            // Iron
            if (seg.toLowerCase().includes('iron') || seg.toLowerCase().includes('ferrous')) {
                const valMatch = seg.match(/([\d\.]+)\s*ppm/i);
                const val = valMatch ? valMatch[1] : '0.0';
                if (lang === 'hi') {
                    return `आयरन की कमी (${val} ppm < 4.5 ppm): वानस्पतिक अवस्था में फेरस सल्फेट (FeSO4 0.5%) + 0.1% साइट्रिक एसिड का पर्णीय छिड़काव करें।`;
                } else {
                    return `આયર્નની ખામી (${val} ppm < 4.5 ppm): વાનસ્પતિક વૃદ્ધિ સમયે ફેરસ સલ્ફેટ (FeSO4 0.5%) + 0.1% સાઇટ્રિક એસિડનો છંટકાવ કરો.`;
                }
            }
            return seg;
        });

        return translatedSegments.join(' | ');
    }

    /**
     * Localizes dynamic warning sentences
     */
    translateWarning(w) {
        if (!w || this.currentLang === 'en') return w;
        const lang = this.currentLang;
        const low = w.toLowerCase();

        if (low.includes('soil ph is very low') || (low.includes('phosphorus') && low.includes('locked'))) {
            const ph = (w.match(/([\d\.]+)/) || [])[1] || '5.0';
            return lang === 'hi' ? `मिट्टी का pH बहुत कम है (${ph})। चूना डाले बिना फॉस्फोरस पौधों को नहीं मिल पाएगा।` : `જમીનનું pH ખૂબ ઓછું છે (${ph}). ચૂનો ઉમેર્યા વિના ફોસ્ફરસ પાકને મળી શકશે નહીં.`;
        }
        if (low.includes('high soil ph') || low.includes('reduces micronutrient')) {
            const ph = (w.match(/([\d\.]+)/) || [])[1] || '8.5';
            return lang === 'hi' ? `मिट्टी का pH अधिक (${ph}) होने से सूक्ष्म पोषक तत्वों (Zn, Fe) और फॉस्फोरस का अवशोषण घट जाता है।` : `જમીનનું pH વધુ (${ph}) હોવાથી સૂક્ષ્મ પોષક તત્વો (Zn, Fe) અને ફોસ્ફરસનું શોષણ ઘટે છે.`;
        }
        if (low.includes('zinc') && (low.includes('khaira') || low.includes('stunted'))) {
            return lang === 'hi' ? `जिंक की कमी पाई गई: धान में खैरा रोग और पौधों का विकास रुकने का खतरा है।` : `ઝિંકની ખામી જણાઈ: ડાંગરમાં ખૈરા રોગ અને છોડનો વિકાસ અટકી જવાનું જોખમ છે.`;
        }
        if (low.includes('heavy rainfall alert')) {
            const rain = (w.match(/([\d\.]+)\s*mm/) || [])[1] || '25.0';
            return lang === 'hi' ? `भारी वर्षा की चेतावनी: अगले 24-48 घंटों में ${rain} mm वर्षा का अनुमान है। अभी नाइट्रोजन या जल-घुलनशील उर्वरक न डालें क्योंकि बहाव से खाद व्यर्थ हो जाएगी।` : `ભારે વરસાદની ચેતવણી: આગામી 24-48 કલાકમાં ${rain} mm વરસાદની આગાહી છે. અત્યારે નાઇટ્રોજન કે ખાતર ન આપો અન્યથા ખાતર ધોવાઈ જશે.`;
        }
        if (low.includes('high wind speed')) {
            const wind = (w.match(/([\d\.]+)\s*km\/h/) || [])[1] || '20.0';
            return lang === 'hi' ? `तेज हवा की गति (${wind} km/h)। असमान छिड़काव से बचने के लिए पर्णीय छिड़काव और दानेदार खाद का छिड़काव न करें।` : `પવનની ગતિ વધુ (${wind} km/h) છે. ખાતરનો છંટકાવ કે પૂર્તિ ખાતર આપવાનું ટાળો જેથી સરખો ફેલાવો થાય.`;
        }
        if (low.includes('high temperature')) {
            const temp = (w.match(/([\d\.]+)\s*°c/i) || [])[1] || '38.0';
            return lang === 'hi' ? `अधिक तापमान (${temp}°C): अमोनिया गैस बनकर उड़ने से रोकने के लिए यूरिया का प्रयोग सुबह (6-8 बजे) या शाम (5-7 बजे) करें।` : `વધુ તાપમાન (${temp}°C): યુરિયાનું બાષ્પીભવન અટકાવવા માટે વહેલી સવારે (6-8 વાગ્યે) અથવા સાંજે (5-7 વાગ્યે) યુરિયા આપો.`;
        }

        return w;
    }

    /**
     * Localizes dynamic weather advisory strings
     */
    translateWeatherAdvisory(text) {
        if (!text || this.currentLang === 'en') return text;
        const lang = this.currentLang;
        const low = text.toLowerCase();

        // 1. Weather is optimal ({temp_c:.1f}°C, {humidity_pct:.0f}% humidity, {rain_48h_mm:.1f} mm rain). Ideal 48h window for fertilizer broadcasting, fertigation, and foliar spray.
        // Also matches "Weather conditions are optimal..." or "Weather window is optimal..."
        if (low.includes('optimal') || low.includes('favorable') || low.includes('ideal 48h window') || low.includes('ideal for fertilizer')) {
            const tempMatch = text.match(/([\d\.]+)\s*°c/i);
            const humMatch = text.match(/([\d\.]+)\s*%\s*humidity/i) || text.match(/([\d\.]+)\s*%/i);
            const rainMatch = text.match(/([\d\.]+)\s*mm/i);

            const temp = tempMatch ? tempMatch[1] : '';
            const hum = humMatch ? humMatch[1] : '';
            const rain = rainMatch ? rainMatch[1] : '';

            if (temp && hum && rain) {
                return lang === 'hi'
                    ? `मौसम अनुकूल है (${temp}°C, ${hum}% आर्द्रता, ${rain} mm वर्षा)। उर्वरक छिड़काव, फर्टिगेशन और पर्णीय छिड़काव के लिए अगले 48 घंटे आदर्श हैं।`
                    : `હવામાન અનુકૂળ છે (${temp}°C, ${hum}% ભેજ, ${rain} mm વરસાદ). ખાતર આપવા, ફર્ટિગેશન અને છંટકાવ માટે આગામી 48 કલાક ઉત્તમ છે.`;
            } else if (temp && rain) {
                return lang === 'hi'
                    ? `मौसम अनुकूल है (${temp}°C, ${rain} mm वर्षा)। उर्वरक टॉप-ड्रेसिंग और हल्की सिंचाई के लिए उत्तम समय है।`
                    : `હવામાન અનુકૂળ છે (${temp}°C, ${rain} mm વરસાદ). પૂર્તિ ખાતર આપવા અને હળવા પિયત માટે શ્રેષ્ઠ સમય છે.`;
            } else {
                return lang === 'hi'
                    ? 'उर्वरक अनुप्रयोग और टॉप-ड्रेसिंग के लिए मौसम परिस्थितियां पूरी तरह अनुकूल हैं।'
                    : 'ખાતર આપવા અને પૂર્તિ ખાતર (ટોપ-ડ્રેસિંગ) માટે હવામાન અનુકૂળ છે.';
            }
        }

        // 2. Heavy rainfall ({rain_48h_mm:.1f} mm) forecast in next 48h. AVOID fertilizer application and spraying to prevent severe nutrient runoff and leaching.
        if (low.includes('heavy rainfall') || low.includes('delay fertilizer broadcast') || (low.includes('avoid') && low.includes('rain'))) {
            const rainMatch = text.match(/([\d\.]+)\s*mm/i);
            const rain = rainMatch ? rainMatch[1] : '25.0';
            return lang === 'hi'
                ? `अगले 48 घंटों में भारी वर्षा (${rain} mm) का अनुमान! पोषक तत्वों के बहाव और बर्बादी को रोकने के लिए उर्वरक अनुप्रयोग व छिड़काव से बचें।`
                : `આગામી 48 કલાકમાં ભારે વરસાદ (${rain} mm) ની આગાહી! ખાતર ધોવાઈ જતું અટકાવવા માટે ખાતર આપવાનું અને છંટકાવ મુલતવી રાખો.`;
        }

        // 3. Moderate rainfall ({rain_48h_mm:.1f} mm) expected. Delay foliar spraying; incorporate basal fertilizer deep into soil to minimize surface loss.
        if (low.includes('moderate rainfall') || low.includes('moderate rain')) {
            const rainMatch = text.match(/([\d\.]+)\s*mm/i);
            const rain = rainMatch ? rainMatch[1] : '12.0';
            return lang === 'hi'
                ? `मध्यम वर्षा (${rain} mm) की संभावना। पत्तियों पर छिड़काव टालें; सतह से नुकसान कम करने के लिए बेसल खाद मिट्टी में गहराई से मिलाएं।`
                : `મધ્યમ વરસાદ (${rain} mm) ની શક્યતા. પાન પર છંટકાવ મુલતવી રાખો; ખાતરનો બગાડ અટકાવવા પાયાનું ખાતર જમીનમાં ઊંડે સુધી ભેળવો.`;
        }

        // 4. High wind velocity ({wind_kmh:.1f} km/h) detected. AVOID fine foliar spray to prevent chemical drift; soil application acceptable.
        if (low.includes('high wind') || low.includes('wind velocity')) {
            const windMatch = text.match(/([\d\.]+)\s*km\/h/i);
            const wind = windMatch ? windMatch[1] : '20.0';
            return lang === 'hi'
                ? `तेज हवा की गति (${wind} km/h) दर्ज की गई। दवा को उड़ने से रोकने के लिए पर्णीय छिड़काव से बचें; मिट्टी में खाद देना सुरक्षित है।`
                : `પવનની ગતિ વધુ (${wind} km/h) જણાઈ છે. દવાનો છંટકાવ ઉડી ન જાય તે માટે છંટકાવ ટાળો; જમીનમાં ખાતર આપવું સુરક્ષિત છે.`;
        }

        // 5. High ambient heat ({temp_c:.1f}°C). Apply nitrogenous fertilizers during early morning or late evening followed by light irrigation to curb volatilization.
        if (low.includes('high ambient heat') || low.includes('extreme heat') || (low.includes('heat') && low.includes('volatilization'))) {
            const tempMatch = text.match(/([\d\.]+)\s*°c/i);
            const temp = tempMatch ? tempMatch[1] : '38.0';
            return lang === 'hi'
                ? `अधिक तापमान (${temp}°C): अमोनिया गैस बनकर उड़ने से रोकने के लिए नाइट्रोजन उर्वरक सुबह जल्दी या शाम को दें और हल्की सिंचाई करें।`
                : `વધુ ગરમી/તાપમાન (${temp}°C): યુરિયાનું બાષ્પીભવન અટકાવવા માટે નાઇટ્રોજન ખાતર વહેલી સવારે અથવા સાંજે આપો અને હળવું પિયત આપો.`;
        }

        // 6. High relative humidity ({humidity_pct:.0f}%) with wet conditions ({rain_48h_mm:.1f} mm). Ensure good field aeration before top-dressing.
        if (low.includes('humidity') && (low.includes('wet conditions') || low.includes('aeration'))) {
            const humMatch = text.match(/([\d\.]+)\s*%/i);
            const rainMatch = text.match(/([\d\.]+)\s*mm/i);
            const hum = humMatch ? humMatch[1] : '85';
            const rain = rainMatch ? rainMatch[1] : '5.0';
            return lang === 'hi'
                ? `अधिक आर्द्रता (${hum}%) और गीली परिस्थितियां (${rain} mm)। टॉप-ड्रेसिंग से पहले खेत में उचित वायु संचार सुनिश्चित करें।`
                : `વધુ ભેજ (${hum}%) અને ભીની પરિસ્થિતિ (${rain} mm). પૂર્તિ ખાતર આપતા પહેલાં ખેતરમાં યોગ્ય હવા ઉજાસ થવા દો.`;
        }

        // 7. Postpone fertilizer application until rainfall subsides and standing water drains.
        if (low.includes('postpone fertilizer') || low.includes('standing water')) {
            return lang === 'hi'
                ? 'वर्षा थमने और खेत से जमा पानी निकलने तक उर्वरक का प्रयोग स्थगित रखें।'
                : 'વરસાદ બંધ ન થાય અને ખેતરમાંથી પાણી ન નીકળે ત્યાં સુધી ખાતર આપવાનું મુલતવી રાખો.';
        }

        return text;
    }

    /**
     * Localizes dynamic AI decision driver strings
     */
    translateDecisionDriver(text) {
        if (!text || this.currentLang === 'en') return text;
        const lang = this.currentLang;
        const low = text.toLowerCase();

        // 1. Acidic soil pH
        if (low.includes('acidic soil ph') && low.includes('buffering')) {
            const ph = (text.match(/([\d\.]+)/) || [])[1] || '5.0';
            return lang === 'hi'
                ? `अम्लीय मृदा pH (${ph}) चूना और फॉस्फेट बफरिंग स्रोतों को प्राथमिकता देता है`
                : `એસિડિક જમીન pH (${ph}) કેલ્શિયમ અને ફોસ્ફેટ બફરિંગ સ્રોતોને પ્રાથમિકતા આપે છે`;
        }
        // 2. Alkaline soil pH
        if (low.includes('alkaline soil ph') && low.includes('sulphate')) {
            const ph = (text.match(/([\d\.]+)/) || [])[1] || '8.5';
            return lang === 'hi'
                ? `क्षारीय मृदा pH (${ph}) अम्लीय सल्फेट-आधारित उर्वरक स्रोतों को प्राथमिकता देता है`
                : `ક્ષારીય જમીન pH (${ph}) સલ્ફેટ-આધારિત ખાતર સ્રોતોને પ્રાથમિકતા આપે છે`;
        }
        // 3. Moderately Alkaline
        if (low.includes('moderately alkaline')) {
            const ph = (text.match(/([\d\.]+)/) || [])[1] || '7.8';
            return lang === 'hi'
                ? `मृदा pH मध्यम क्षारीय है (${ph}); पोषक तत्व आमतौर पर सुलभ रहते हैं`
                : `જમીનનું pH મધ્યમ ક્ષારીય છે (${ph}); પોષક તત્વો સામાન્ય રીતે પ્રાપ્ય રહે છે`;
        }
        // 4. Available Phosphorus is High
        if (low.includes('phosphorus') && low.includes('high')) {
            const val = (text.match(/([\d\.]+)\s*kg\/ha/i) || [])[1] || '144.0';
            return lang === 'hi'
                ? `उपलब्ध फॉस्फोरस अधिक है (${val} kg/ha); मॉडल मृदा भंडार पर भरोसा करते हुए केवल शुरुआती बेसल फॉस्फोरस का उपयोग करता है`
                : `ઉપલબ્ધ ફોસ્ફરસ વધુ છે (${val} kg/ha); મોડેલ જમીનના ભંડાર પર નિર્ભર રહીને માત્ર પાયાના ફોસ્ફરસનો ઉપયોગ કરે છે`;
        }
        // 5. Available Phosphorus is Low
        if (low.includes('phosphorus') && low.includes('low')) {
            const val = (text.match(/([\d\.]+)\s*kg\/ha/i) || [])[1] || '10.0';
            return lang === 'hi'
                ? `उपलब्ध फॉस्फोरस कम है (${val} kg/ha); मॉडल फॉस्फेट पुनःपूर्ति को प्राथमिकता देता है`
                : `ઉપલબ્ધ ફોસ્ફરસ ઓછું છે (${val} kg/ha); મોડેલ ફોસ્ફરસ પૂર્તિને પ્રાથમિકતા આપે છે`;
        }
        // 6. Available Potassium is High
        if (low.includes('potassium') && low.includes('high')) {
            const val = (text.match(/([\d\.]+)\s*kg\/ha/i) || [])[1] || '280.0';
            return lang === 'hi'
                ? `उपलब्ध पोटैशियम अधिक है (${val} kg/ha); मॉडल मिट्टी की कमी के बजाय फसल पोषण के लिए पोटाश आवंटित करता है`
                : `ઉપલબ્ધ પોટેશિયમ વધુ છે (${val} kg/ha); મોડેલ જમીનની ખામીના બદલે પાકના નિભાવ માટે પોટાશ ફાળવે છે`;
        }
        // 7. Available Potassium is Low
        if (low.includes('potassium') && low.includes('low')) {
            const val = (text.match(/([\d\.]+)\s*kg\/ha/i) || [])[1] || '110.0';
            return lang === 'hi'
                ? `उपलब्ध पोटैशियम कम है (${val} kg/ha); मॉडल पोटाश पूरकता को प्राथमिकता देता है`
                : `ઉપલબ્ધ પોટેશિયમ ઓછું છે (${val} kg/ha); મોડેલ પોટાશ પૂર્તિને પ્રાથમિકતા આપે છે`;
        }
        // 8. Soil Organic Carbon is Low
        if (low.includes('organic carbon') && low.includes('low')) {
            const val = (text.match(/([\d\.]+)\s*%/i) || [])[1] || '0.50';
            return lang === 'hi'
                ? `मृदा जैविक कार्बन कम है (${val}%); जैविक खाद/गोबर खाद प्रबंधन मृदा स्वास्थ्य के लिए लाभकारी है`
                : `જમીનમાં ઓર્ગેનિક કાર્બન ઓછો છે (${val}%); દેશી ખાતર/સેન્દ્રીય ખાતર વ્યવસ્થાપન જમીન સ્વાસ્થ્ય માટે ફાયદાકારક છે`;
        }
        // 9. Available Sulphur is Low
        if (low.includes('sulphur') && low.includes('low')) {
            const val = (text.match(/([\d\.]+)\s*ppm/i) || [])[1] || '0.0';
            return lang === 'hi'
                ? `उपलब्ध सल्फर कम है (${val} ppm); मॉडल सल्फर-युक्त उर्वरक यौगिकों को शामिल करता है`
                : `ઉપલબ્ધ સલ્ફર ઓછું છે (${val} ppm); મોડેલ સલ્ફર-યુક્ત ખાતરોનો સમાવેશ કરે છે`;
        }
        // 10. Nitrogen deficiency
        if (low.includes('nitrogen deficiency') || (low.includes('nitrogen') && low.includes('urea'))) {
            const val = (text.match(/([\d\.]+)\s*kg\/ha/i) || [])[1] || '140.0';
            return lang === 'hi'
                ? `नाइट्रोजन की कमी (${val} kg/ha < 280.0 kg/ha) के लिए यूरिया की बेसल और टॉप-ड्रेसिंग विभाजित खुराक आवश्यक है`
                : `નાઇટ્રોજનની ખામી (${val} kg/ha < 280.0 kg/ha) માટે યુરિયા પાયામાં અને પૂર્તિ ખાતર તરીકે તબક્કાવાર આપવું જરૂરી છે`;
        }
        // 11. Standard nutrient balance
        if (low.includes('standard nutrient balance')) {
            return lang === 'hi'
                ? `फसल की लक्षित वृद्धि आवश्यकताओं के अनुसार मानक पोषक तत्व संतुलन`
                : `પાકની લક્ષિત વૃદ્ધિ જરૂરિયાતો મુજબ પ્રમાણભૂત પોષક તત્વ સંતુલન`;
        }

        return text;
    }

    /**
     * Localizes dynamic Explainable AI Scientific Rationale
     */
    translateExplanation(text) {
        if (!text || this.currentLang === 'en') return text;
        const lang = this.currentLang;

        const lines = text.split('\n');
        const translatedLines = lines.map(line => {
            const trLine = line.trim();
            if (!trLine) return '';

            // 1. Section 1 Heading: "1. SOIL NUTRIENT STATUS (Input Data vs Reference Scale for Mustard):"
            if (/^1\.\s*SOIL NUTRIENT STATUS/i.test(trLine)) {
                const cropMatch = trLine.match(/for\s+([^)]+)\)/i);
                const rawCrop = cropMatch ? cropMatch[1].trim() : '';
                const crop = rawCrop ? (this.translateCrop(rawCrop) || rawCrop) : '';
                return lang === 'hi'
                    ? `1. मृदा पोषक तत्व स्थिति (${crop ? `${crop} के लिए ` : ''}परीक्षण मान बनाम मानक पैमाना):`
                    : `1. જમીન પોષક તત્વોની સ્થિતિ (${crop ? `${crop} માટે ` : ''}ચકાસણી પરિણામો વિરુદ્ધ સંદર્ભ માપદંડ):`;
            }

            // Available Nitrogen (N)
            if (/Available Nitrogen/i.test(trLine)) {
                const valMatch = trLine.match(/:\s*([^->]+)->\s*(\w+)/i);
                const val = valMatch ? valMatch[1].trim() : '140.0 kg/ha';
                const rawRating = valMatch ? valMatch[2] : 'LOW';
                const rating = this.translateRating(rawRating);
                return lang === 'hi'
                    ? `  • उपलब्ध नाइट्रोजन (N)   : ${val} -> ${rating} (मानक पैमाना: <280 कम, 280-560 मध्यम, >560 अधिक)`
                    : `  • ઉપલબ્ધ નાઇટ્રોજન (N)   : ${val} -> ${rating} (સંદર્ભ માપદંડ: <280 ઓછું, 280-560 મધ્યમ, >560 વધારે)`;
            }

            // Available Phosphorus (P)
            if (/Available Phosphorus/i.test(trLine)) {
                const valMatch = trLine.match(/:\s*([^->]+)->\s*(\w+)/i);
                const val = valMatch ? valMatch[1].trim() : '18.0 kg/ha';
                const rawRating = valMatch ? valMatch[2] : 'MEDIUM';
                const rating = this.translateRating(rawRating);
                return lang === 'hi'
                    ? `  • उपलब्ध फॉस्फोरस (P)   : ${val} -> ${rating} (मानक पैमाना: <10 कम, 10-25 मध्यम, >25 अधिक)`
                    : `  • ઉપલબ્ધ ફોસ્ફરસ (P)   : ${val} -> ${rating} (સંદર્ભ માપદંડ: <10 ઓછું, 10-25 મધ્યમ, >25 વધારે)`;
            }

            // Available Potassium (K)
            if (/Available Potassium/i.test(trLine)) {
                const valMatch = trLine.match(/:\s*([^->]+)->\s*(\w+)/i);
                const val = valMatch ? valMatch[1].trim() : '180.0 kg/ha';
                const rawRating = valMatch ? valMatch[2] : 'MEDIUM';
                const rating = this.translateRating(rawRating);
                return lang === 'hi'
                    ? `  • उपलब्ध पोटैशियम (K)   : ${val} -> ${rating} (मानक पैमाना: <110 कम, 110-280 मध्यम, >280 अधिक)`
                    : `  • ઉપલબ્ધ પોટેશિયમ (K)   : ${val} -> ${rating} (સંદર્ભ માપદંડ: <110 ઓછું, 110-280 મધ્યમ, >280 વધારે)`;
            }

            // Soil Organic Carbon (OC)
            if (/Soil Organic Carbon/i.test(trLine) || /Soil जैविक कार्बन/i.test(trLine)) {
                const valMatch = trLine.match(/:\s*([^->]+)->\s*(\w+)/i);
                const val = valMatch ? valMatch[1].trim() : '0.55%';
                const rawRating = valMatch ? valMatch[2] : 'MEDIUM';
                const rating = this.translateRating(rawRating);
                return lang === 'hi'
                    ? `  • मृदा जैविक कार्बन (OC) : ${val} -> ${rating} (मानक पैमाना: <0.50% कम, 0.50-0.75% मध्यम, >0.75% अधिक)`
                    : `  • જમીન ઓર્ગેનિક કાર્બન (OC) : ${val} -> ${rating} (સંદર્ભ માપદંડ: <0.50% ઓછું, 0.50-0.75% મધ્યમ, >0.75% વધારે)`;
            }

            // Note on Organic Matter
            if (/\[Note on Organic Matter/i.test(trLine) || /\[जैविक पदार्थ पर टिप्पणी/i.test(trLine)) {
                if (/adequate|high|पर्याप्त/i.test(trLine)) {
                    return lang === 'hi'
                        ? `  [जैविक पदार्थ पर टिप्पणी: मृदा जैविक कार्बन पर्याप्त/उच्च श्रेणी में है, जो सूक्ष्मजीवों द्वारा पोषक तत्व उपलब्धता को बढ़ावा देता है।]`
                        : `  [સેન્દ્રીય પદાર્થ અંગે નોંધ: જમીનમાં ઓર્ગેનિક કાર્બન પૂરતો/વધુ છે, જે સૂક્ષ્મજીવાણુઓ દ્વારા પોષક તત્વો મુક્ત કરવામાં મદદરૂપ છે.]`;
                } else {
                    return lang === 'hi'
                        ? `  [जैविक पदार्थ पर टिप्पणी: मृदा जैविक कार्बन कम है। मिट्टी के जैविक स्वास्थ्य और नमी धारण क्षमता के लिए नियमित रूप से जैविक खाद, गोबर खाद या कम्पोस्ट का प्रयोग लाभकारी है।]`
                    : `  [સેન્દ્રીય પદાર્થ અંગે નોંધ: જમીનમાં ઓર્ગેનિક કાર્બન ઓછો છે. જમીનનું સ્વાસ્થ્ય અને ભેજ સંગ્રહ શક્તિ વધારવા માટે નિયમિત સેન્દ્રીય/છાણિયું ખાતર આપવું ફાયદાકારક છે.]`;
                }
            }

            // Soil pH
            if (/Soil pH/i.test(trLine)) {
                const phMatch = trLine.match(/:\s*([\d\.]+)\s*->\s*([^(\.]+)/i);
                const ph = phMatch ? phMatch[1] : '6.8';
                const cat = phMatch ? phMatch[2].trim() : 'NEUTRAL';
                let catText = cat;
                let detailText = '';
                if (/acidic/i.test(cat)) {
                    catText = lang === 'hi' ? 'अम्लीय (ACIDIC)' : 'એસિડિક (ACIDIC)';
                    detailText = lang === 'hi' ? 'फास्फोरस की उपलब्धता और पोषक तत्व अवशोषण बाधित हो सकता है; चूना या क्षारीय सुधारक की सिफारिश की जाती है।' : 'ફોસ્ફરસની ઉપલબ્ધતા અને પોષક તત્વોનું શોષણ ઘટી શકે છે; ચૂનો અથવા ક્ષાર સુધારકની ભલામણ છે.';
                } else if (/alkaline|sodic/i.test(cat)) {
                    catText = lang === 'hi' ? 'क्षारीय (ALKALINE)' : 'ક્ષારીય (ALKALINE)';
                    detailText = lang === 'hi' ? 'उच्च क्षारीयता सूक्ष्म पोषक तत्वों (Zn, Fe) की उपलब्धता को कम कर सकती है; जिप्सम प्रयोग की सिफारिश की जाती है।' : 'વધુ ક્ષારીયતા સૂક્ષ્મ પોષક તત્વો (Zn, Fe) ની પ્રાપ્યતા ઘટાડી શકે છે; જીપ્સમ આપવાની ભલામણ છે.';
                } else {
                    catText = lang === 'hi' ? 'उदासीन / अनुकूल (NEUTRAL / OPTIMAL)' : 'તટસ્થ / ઉત્તમ (NEUTRAL / OPTIMAL)';
                    detailText = lang === 'hi' ? 'फसल द्वारा पोषक तत्व अवशोषण और सूक्ष्मजीवी गतिविधि के लिए आदर्श स्थिति।' : 'પાક દ્વારા પોષક તત્વો ગ્રહણ કરવા અને સૂક્ષ્મજીવાણુ પ્રવૃત્તિ માટે ઉત્તમ સ્થિતિ.';
                }
                return lang === 'hi'
                    ? `  • मृदा pH                  : ${ph} -> ${catText} (मानक: 6.0-7.5 उदासीन, 7.5-8.5 मध्यम क्षारीय, >8.5 क्षारीय)। ${detailText}`
                    : `  • જમીન pH                  : ${ph} -> ${catText} (સંદર્ભ: 6.0-7.5 તટસ્થ, 7.5-8.5 મધ્યમ ક્ષારીય, >8.5 ક્ષારીય). ${detailText}`;
            }

            // Electrical Cond. (EC)
            if (/Electrical Cond/i.test(trLine)) {
                const ecMatch = trLine.match(/:\s*([\d\.]+)\s*dS\/m\s*->\s*([^(\.]+)/i);
                const ec = ecMatch ? ecMatch[1] : '0.45';
                const cat = ecMatch ? ecMatch[2].trim() : 'SALT-FREE';
                let catText = cat;
                let detailText = '';
                if (/saline/i.test(cat)) {
                    catText = lang === 'hi' ? 'लवणीय (SALINE)' : 'ખારવાળી (SALINE)';
                    detailText = lang === 'hi' ? 'बढ़ी हुई लवणता जड़ों द्वारा जल और पोषक तत्व अवशोषण को बाधित कर सकती है।' : 'વધારે ક્ષારના કારણે મૂળ દ્વારા પાણી અને પોષક તત્વો ગ્રહણ કરવામાં અવરોધ આવી શકે છે.';
                } else {
                    catText = lang === 'hi' ? 'लवण-मुक्त (SALT-FREE)' : 'ક્ષાર-મુક્ત (SALT-FREE)';
                    detailText = lang === 'hi' ? 'जड़ों द्वारा पोषक तत्व अवशोषण पर कोई लवणता का प्रतिकूल प्रभाव नहीं है।' : 'મૂળ દ્વારા પોષક તત્વો ગ્રહણ કરવામાં કોઈ ક્ષારની પ્રતિકૂળ અસર નથી.';
                }
                return lang === 'hi'
                    ? `  • विद्युत चालकता (EC)    : ${ec} dS/m -> ${catText} (मानक पैमाना: <1.0 dS/m लवण-मुक्त)। ${detailText}`
                    : `  • વિદ્યુત વાહકતા (EC)    : ${ec} dS/m -> ${catText} (સંદર્ભ માપદંડ: <1.0 dS/m ક્ષાર-મુક્ત). ${detailText}`;
            }

            // 2. Section 2 Heading: "2. MODEL PREDICTION & FERTILIZER RECOMMENDATION JUSTIFICATION (1.0 Hectare Plot):"
            if (/^2\.\s*MODEL PREDICTION/i.test(trLine)) {
                const haMatch = trLine.match(/\(([\d\.]+)\s*Hectare/i);
                const ha = haMatch ? haMatch[1] : '1.0';
                return lang === 'hi'
                    ? `2. मॉडल पूर्वानुमान एवं उर्वरक सिफारिश का वैज्ञानिक आधार (${ha} हेक्टेयर प्लॉट):`
                    : `2. મોડેલ પરિણામ અને ખાતર ભલામણનો વૈજ્ઞાનિક આધાર (${ha} હેક્ટર પ્લોટ):`;
            }

            // Phosphorus Management
            if (/Phosphorus Management/i.test(trLine)) {
                const valMatch = trLine.match(/HIGH\s*\(([\d\.]+)\s*kg\/ha\)/i) || trLine.match(/LOW\s*\(([\d\.]+)\s*kg\/ha\)/i) || trLine.match(/MEDIUM\s*range\s*\(([\d\.]+)\s*kg\/ha\)/i) || trLine.match(/\(([\d\.]+)\s*kg\/ha\)/i);
                const val = valMatch ? valMatch[1] : '18.0';
                const dapMatch = trLine.match(/recommends\s*([\d\.]+)\s*kg\/ha DAP/i);
                const dap = dapMatch ? dapMatch[1] : '73.4';
                const nMatch = trLine.match(/\(([\d\.]+)\s*kg N\)/i);
                const n = nMatch ? nMatch[1] : '13.2';
                const pMatch = trLine.match(/\(([\d\.]+)\s*kg P2O5\)/i);
                const p = pMatch ? pMatch[1] : '33.8';

                if (/already HIGH/i.test(trLine) || /HIGH/i.test(trLine)) {
                    return lang === 'hi'
                        ? `  • फॉस्फोरस प्रबंधन: मिट्टी में उपलब्ध फॉस्फोरस पहले से अधिक (${val} kg/ha) है। मिट्टी में फॉस्फोरस की कोई कमी नहीं है। मॉडल ${dap} kg/ha DAP की सिफारिश मुख्य रूप से शुरुआती बेसल नाइट्रोजन (${n} kg N) और शुरुआती जड़ों के विकास के लिए न्यूनतम फॉस्फेट (${p} kg P₂O₅) प्रदान करने के लिए करता है, जबकि शेष आवश्यकता मिट्टी के मौजूदा भंडार से पूरी होती है।`
                        : `  • ફોસ્ફરસ વ્યવસ્થાપન: જમીનમાં ઉપલબ્ધ ફોસ્ફરસ પહેલેથી વધુ (${val} kg/ha) છે. જમીનમાં ફોસ્ફરસની કોઈ ખામી નથી. મોડેલ ${dap} kg/ha DAP ની ભલામણ મુખ્યત્વે પાયાનો નાઇટ્રોજન (${n} kg N) અને મૂળના પ્રારંભિક વિકાસ માટે જરૂરી ફોસ્ફેટ (${p} kg P₂O₅) આપવા માટે કરે છે, જ્યારે બાકીની જરૂરિયાત જમીનમાં રહેલા ફોસ્ફરસ ભંડારમાંથી પૂરી થાય છે.`;
                } else if (/LOW/i.test(trLine)) {
                    return lang === 'hi'
                        ? `  • फॉस्फोरस प्रबंधन: मिट्टी में उपलब्ध फॉस्फोरस कम (${val} kg/ha) है। मॉडल मिट्टी की कमी को दूर करने और जड़ों के विकास के लिए ${dap} kg/ha DAP (${p} kg P₂O₅) की सिफारिश करता है।`
                        : `  • ફોસ્ફરસ વ્યવસ્થાપન: જમીનમાં ઉપલબ્ધ ફોસ્ફરસ ઓછું (${val} kg/ha) છે. મોડેલ જમીનની ખામી સુધારવા અને મૂળના વિકાસ માટે ${dap} kg/ha DAP (${p} kg P₂O₅) ની ભલામણ કરે છે.`;
                } else {
                    return lang === 'hi'
                        ? `  • फॉस्फोरस प्रबंधन: मिट्टी में उपलब्ध फॉस्फोरस मध्यम (${val} kg/ha) है। मॉडल मानक फसल मांग (${p} kg P₂O₅) पूरी करने और उर्वरता बनाए रखने के लिए ${dap} kg/ha DAP की सिफारिश करता है।`
                        : `  • ફોસ્ફરસ વ્યવસ્થાપન: જમીનમાં ઉપલબ્ધ ફોસ્ફરસ મધ્યમ (${val} kg/ha) છે. મોડેલ પાકની સામાન્ય જરૂરિયાત (${p} kg P₂O₅) પૂરી કરવા અને જમીનની ફળદ્રુપતા જાળવવા ${dap} kg/ha DAP ની ભલામણ કરે છે.`;
                }
            }

            // Nitrogen Management
            if (/Nitrogen Management/i.test(trLine)) {
                const valMatch = trLine.match(/\(([\d\.]+)\s*kg\/ha\)/i);
                const val = valMatch ? valMatch[1] : '140.0';
                const targetMatch = trLine.match(/target of\s*([\d\.]+)\s*kg\/ha N/i);
                const target = targetMatch ? targetMatch[1] : '112.5';
                const nDapMatch = trLine.match(/Accounting for\s*([\d\.]+)\s*kg N/i);
                const nDap = nDapMatch ? nDapMatch[1] : '13.2';
                const remNMatch = trLine.match(/remaining\s*([\d\.]+)\s*kg\/ha N/i);
                const remN = remNMatch ? remNMatch[1] : '99.3';
                const ureaMatch = trLine.match(/through\s*([\d\.]+)\s*kg\/ha/i);
                const urea = ureaMatch ? ureaMatch[1] : '215.9';

                return lang === 'hi'
                    ? `  • नाइट्रोजन प्रबंधन : मिट्टी में उपलब्ध नाइट्रोजन (${val} kg/ha) है, जिससे फसल का समायोजित लक्ष्य ${target} kg/ha N निर्धारित हुआ है। DAP से प्राप्त ${nDap} kg N को घटाकर, शेष ${remN} kg/ha N की पूर्ति ${urea} kg/ha यूरिया द्वारा की जाती है, जिसे नाइट्रोजन उपयोग दक्षता (NUE) बढ़ाने और बर्बादी रोकने के लिए विकास के विभिन्न चरणों में विभाजित खुराक में दिया जाता है।`
                    : `  • નાઇટ્રોજન વ્યવસ્થાપન : જમીનમાં ઉપલબ્ધ નાઇટ્રોજન (${val} kg/ha) હોવાથી પાકનો સંશોધિત લક્ષ્યાંક ${target} kg/ha N નક્કી થયો છે. DAP માંથી મળતા ${nDap} kg N ને બાદ કરતાં, બાકીનો ${remN} kg/ha N ${urea} kg/ha યુરિયા દ્વારા પૂરો પાડવામાં આવે છે, જે નાઇટ્રોજન ઉપયોગ ક્ષમતા (NUE) વધારવા અને બગાડ અટકાવવા તબક્કાવાર વહેંચીને આપવામાં આવે છે.`;
            }

            // Potassium Management
            if (/Potassium Management/i.test(trLine)) {
                const valMatch = trLine.match(/\(([\d\.]+)\s*kg\/ha\)/i);
                const val = valMatch ? valMatch[1] : '134.0';
                const mopMatch = trLine.match(/([\d\.]+)\s*kg\/ha MOP/i);
                const mop = mopMatch ? mopMatch[1] : '75.0';
                const kMatch = trLine.match(/supply\s*([\d\.]+)\s*kg K2O/i);
                const k = kMatch ? kMatch[1] : '45.0';

                if (/already HIGH/i.test(trLine)) {
                    return lang === 'hi'
                        ? `  • पोटैशियम प्रबंधन : मिट्टी में उपलब्ध पोटैशियम पहले से अधिक (${val} kg/ha) है। मॉडल मिट्टी की कमी सुधारने के बजाय दाना/फली भराव के लिए ${mop} kg/ha MOP की रखरखाव खुराक की सिफारिश करता है।`
                        : `  • પોટેશિયમ વ્યવસ્થાપન : જમીનમાં ઉપલબ્ધ પોટેશિયમ પહેલેથી વધુ (${val} kg/ha) છે. મોડેલ જમીનની ખામી સુધારવાને બદલે દાણા ભરાવ માટે ${mop} kg/ha MOP નિભાવ માત્રા તરીકે આપવાની ભલામણ કરે છે.`;
                } else if (/LOW/i.test(trLine)) {
                    return lang === 'hi'
                        ? `  • पोटैशियम प्रबंधन : मिट्टी में उपलब्ध पोटैशियम कम (${val} kg/ha) है। मॉडल मिट्टी की कमी दूर करने और पौधों की मजबूती के लिए ${k} kg K₂O देने हेतु ${mop} kg/ha MOP की सिफारिश करता है।`
                        : `  • પોટેશિયમ વ્યવસ્થાપન : જમીનમાં ઉપલબ્ધ પોટેશિયમ ઓછું (${val} kg/ha) છે. મોડેલ જમીનની ખામી સુધારવા અને પાકની રોગપ્રતિકારક શક્તિ વધારવા ${k} kg K₂O આપવા ${mop} kg/ha MOP ની ભલામણ કરે છે.`;
                } else {
                    return lang === 'hi'
                        ? `  • पोटैशियम प्रबंधन : मिट्टी में उपलब्ध पोटैशियम मध्यम (${val} kg/ha) श्रेणी में है। मॉडल मानक फसल अवशोषण आवश्यकताओं को पूरा करने के लिए ${k} kg K₂O प्रदान करने हेतु ${mop} kg/ha MOP की सिफारिश करता है।`
                        : `  • પોટેશિયમ વ્યવસ્થાપન : જમીનમાં ઉપલબ્ધ પોટેશિયમ મધ્યમ (${val} kg/ha) છે. મોડેલ પાકની પ્રમાણભૂત પોષક જરૂરિયાતો પૂરી કરવા ${k} kg K₂O આપવા માટે ${mop} kg/ha MOP ની ભલામણ કરે છે.`;
                }
            }

            // 3. Section 3 Heading: "3. SUMMARY:"
            if (/^3\.\s*SUMMARY/i.test(trLine)) {
                return lang === 'hi' ? '3. सारांश:' : '3. સારાંશ:';
            }

            // Summary content
            if (/The recommended fertilizer quantities are generated by the AI model/i.test(trLine)) {
                return lang === 'hi'
                    ? '  अनुशंसित उर्वरक मात्राएं AI मॉडल द्वारा फसल की आवश्यकताओं और मिट्टी की स्थिति के आधार पर निर्धारित की गई हैं। मिट्टी परीक्षण मान प्रारंभिक उर्वरता दर्शाते हैं, जबकि यह उर्वरक समय-सारणी लक्षित फसल के लिए सटीक संतुलित पोषक तत्व प्रदान करती है।'
                    : '  ભલામણ કરેલ ખાતરનો જથ્થો AI મોડેલ દ્વારા પાકની જરૂરિયાતો અને જમીનની સ્થિતિના આધારે નક્કી કરવામાં આવ્યો છે. જમીન ચકાસણી પરિણામો મૂળ ફળદ્રુપતા દર્શાવે છે, જ્યારે ખાતરની આ સમય-સારણી પાક માટે સચોટ સંતુલિત પોષક તત્વો પૂરા પાડે છે.';
            }

            return line;
        });

        return translatedLines.join('\n');
    }

    translatePage() {
        // Translate textContent
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key) {
                const translation = this.t(key);
                if (el.tagName === 'INPUT' && (el.type === 'button' || el.type === 'submit')) {
                    el.value = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });

        // Translate placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (key) el.placeholder = this.t(key);
        });

        // Translate titles
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (key) el.title = this.t(key);
        });

        // Update active state in language selectors
        document.querySelectorAll('.lang-selector-select').forEach(select => {
            select.value = this.currentLang;
        });
    }

    onLanguageChange(callback) {
        if (typeof callback === 'function') {
            this.listeners.push(callback);
        }
    }

    notifyListeners(lang) {
        this.listeners.forEach(cb => {
            try { cb(lang); } catch (e) { console.error("Error in i18n listener:", e); }
        });
    }
}

// Global instance
window.i18n = new I18nManager();

document.addEventListener('DOMContentLoaded', () => {
    window.i18n.translatePage();
});
