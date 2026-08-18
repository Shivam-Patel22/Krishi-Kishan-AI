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
        "report.statusDeficient": "DEFICIENT",
        "report.statusAdequate": "ADEQUATE",
        "report.statusAcidic": "Acidic",
        "report.statusNeutral": "Neutral / Optimum",
        "report.statusAlkaline": "Alkaline / Sodic",
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
        "fert.Urea": "Urea (46% N)",
        "fert.DAP": "DAP (18-46-0)",
        "fert.MOP": "MOP (0-0-60)",
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
        "fert.Urea": "यूरिया (46% N)",
        "fert.DAP": "डीएपी / DAP (18-46-0)",
        "fert.MOP": "एमओपी / MOP (0-0-60)",
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
        "fert.Urea": "યુરિયા (46% N)",
        "fert.DAP": "ડીએપી / DAP (18-46-0)",
        "fert.MOP": "એમઓપી / MOP (0-0-60)",
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
    "Ahmedabad": {
        "hi": "अहमदाबाद",
        "gu": "અમદાવાદ"
    },
    "Amreli": {
        "hi": "अमरेली",
        "gu": "અમરેલી"
    },
    "Anand": {
        "hi": "आणंद",
        "gu": "આણંદ"
    },
    "Arvalli": {
        "hi": "अरवल्ली",
        "gu": "અરવલ્લી"
    },
    "Banas Kantha": {
        "hi": "बनासकांठा",
        "gu": "બનાસકાંઠા"
    },
    "Banaskantha": {
        "hi": "बनासकांठा",
        "gu": "બનાસકાંઠા"
    },
    "Bharuch": {
        "hi": "भरूच",
        "gu": "ભરૂચ"
    },
    "Bhavnagar": {
        "hi": "भावनगर",
        "gu": "ભાવનગર"
    },
    "Botad": {
        "hi": "बोटाद",
        "gu": "બોટાદ"
    },
    "Chhotaudepur": {
        "hi": "छोटा उदेपुर",
        "gu": "છોટાઉદેપુર"
    },
    "Chhota Udepur": {
        "hi": "छोटा उदेपुर",
        "gu": "છોટાઉદેપુર"
    },
    "Chhota Udaipur": {
        "hi": "छोटा उदेपुर",
        "gu": "છોટાઉદેપુર"
    },
    "Dahod": {
        "hi": "दाहोद",
        "gu": "દાહોદ"
    },
    "Dangs": {
        "hi": "डांग",
        "gu": "ડાંગ"
    },
    "Dang": {
        "hi": "डांग",
        "gu": "ડાંગ"
    },
    "The Dangs": {
        "hi": "डांग",
        "gu": "ડાંગ"
    },
    "Devbhumi Dwarka": {
        "hi": "देवभूमि द्वारका",
        "gu": "દેવભૂમિ દ્વારકા"
    },
    "Gandhinagar": {
        "hi": "गांधीनगर",
        "gu": "ગાંધીનગર"
    },
    "Gir Somnath": {
        "hi": "गिर सोमनाथ",
        "gu": "ગીર સોમનાથ"
    },
    "Jamnagar": {
        "hi": "जामनगर",
        "gu": "જામનગર"
    },
    "Junagadh": {
        "hi": "जूनागढ़",
        "gu": "જૂનાગઢ"
    },
    "Kachchh": {
        "hi": "कच्छ",
        "gu": "કચ્છ"
    },
    "Kutch": {
        "hi": "कच्छ",
        "gu": "કચ્છ"
    },
    "Kheda": {
        "hi": "खेड़ा",
        "gu": "ખેડા"
    },
    "Mahesana": {
        "hi": "महेसाणा",
        "gu": "મહેસાણા"
    },
    "Mehsana": {
        "hi": "महेसाणा",
        "gu": "મહેસાણા"
    },
    "Mahisagar": {
        "hi": "महिसागर",
        "gu": "મહીસાગર"
    },
    "Morbi": {
        "hi": "मोरबी",
        "gu": "મોરબી"
    },
    "Narmada": {
        "hi": "नर्मदा",
        "gu": "નર્મદા"
    },
    "Navsari": {
        "hi": "नवसारी",
        "gu": "નવસારી"
    },
    "Panch Mahals": {
        "hi": "पंचमहाल",
        "gu": "પંચમહાલ"
    },
    "Panchmahal": {
        "hi": "पंचमहाल",
        "gu": "પંચમહાલ"
    },
    "Patan": {
        "hi": "पाटन",
        "gu": "પાટણ"
    },
    "Porbandar": {
        "hi": "पोरबंदर",
        "gu": "પોરબંદર"
    },
    "Rajkot": {
        "hi": "राजकोट",
        "gu": "રાજકોટ"
    },
    "Sabar Kantha": {
        "hi": "साबरकांठा",
        "gu": "સાબરકાંઠા"
    },
    "Sabarkantha": {
        "hi": "साबरकांठा",
        "gu": "સાબરકાંઠા"
    },
    "Surat": {
        "hi": "सूरत",
        "gu": "સુરત"
    },
    "Surendranagar": {
        "hi": "सुरेंद्रनगर",
        "gu": "સુરેન્દ્રનગર"
    },
    "Tapi": {
        "hi": "तापी",
        "gu": "તાપી"
    },
    "Vadodara": {
        "hi": "वडोदरा (बड़ौदा)",
        "gu": "વડોદરા"
    },
    "Valsad": {
        "hi": "वलसाड",
        "gu": "વલસાડ"
    },
    "Ludhiana": {
        "hi": "लुधियाना",
        "gu": "લુધિયાણા"
    },
    "Amritsar": {
        "hi": "अमृतसर",
        "gu": "અમૃતસર"
    },
    "Jalandhar": {
        "hi": "जालंधर",
        "gu": "જાલંધર"
    },
    "Patiala": {
        "hi": "पटियाला",
        "gu": "પટિયાલા"
    },
    "Bathinda": {
        "hi": "बठिंडा",
        "gu": "બઠિંડા"
    },
    "Firozepur": {
        "hi": "फिरोजपुर",
        "gu": "ફિરોઝપુર"
    },
    "Gurdaspur": {
        "hi": "गुरदासपुर",
        "gu": "ગુરદાસપુર"
    },
    "Hoshiarpur": {
        "hi": "होशियारपुर",
        "gu": "હોશિયારપુર"
    },
    "Karnal": {
        "hi": "करनाल",
        "gu": "કરનાલ"
    },
    "Hisar": {
        "hi": "हिसार",
        "gu": "હિસાર"
    },
    "Ambala": {
        "hi": "अंबाला",
        "gu": "અંબાલા"
    },
    "Kurukshetra": {
        "hi": "कुरुक्षेत्र",
        "gu": "કુરુક્ષેત્ર"
    },
    "Sirsa": {
        "hi": "सिरसा",
        "gu": "સિરસા"
    },
    "Rohtak": {
        "hi": "रोहतक",
        "gu": "રોહતક"
    },
    "Panipat": {
        "hi": "पानीपत",
        "gu": "પાણીપત"
    },
    "Sonipat": {
        "hi": "सोनीपत",
        "gu": "સોનીપત"
    },
    "Jaipur": {
        "hi": "जयपुर",
        "gu": "જયપુર"
    },
    "Jodhpur": {
        "hi": "जोधपुर",
        "gu": "જોધપુર"
    },
    "Udaipur": {
        "hi": "उदयपुर",
        "gu": "ઉદયપુર"
    },
    "Kota": {
        "hi": "कोटा",
        "gu": "કોટા"
    },
    "Bikaner": {
        "hi": "बीकानेर",
        "gu": "બીકાનેર"
    },
    "Ajmer": {
        "hi": "अजमेर",
        "gu": "અજમેર"
    },
    "Alwar": {
        "hi": "अलवर",
        "gu": "અલવર"
    },
    "Bharatpur": {
        "hi": "भरतपुर",
        "gu": "ભરતપુર"
    },
    "Ganganagar": {
        "hi": "श्रीगंगानगर",
        "gu": "શ્રીગંગાનગર"
    },
    "Barmer": {
        "hi": "बाड़मेर",
        "gu": "બાડમેર"
    },
    "Nagaur": {
        "hi": "नागौर",
        "gu": "નાગૌર"
    },
    "Sikar": {
        "hi": "सीकर",
        "gu": "સીકર"
    },
    "Pali": {
        "hi": "पाली",
        "gu": "પાલી"
    },
    "Bhilwara": {
        "hi": "भीलवाड़ा",
        "gu": "ભીલવાડા"
    },
    "Chittorgarh": {
        "hi": "चित्तौड़गढ़",
        "gu": "ચિત્તોડગઢ"
    },
    "Varanasi": {
        "hi": "वाराणसी",
        "gu": "વારાણસી"
    },
    "Lucknow": {
        "hi": "लखनऊ",
        "gu": "લખનૌ"
    },
    "Kanpur": {
        "hi": "कानपुर",
        "gu": "કાનપુર"
    },
    "Kanpur Nagar": {
        "hi": "कानपुर नगर",
        "gu": "કાનપુર નગર"
    },
    "Agra": {
        "hi": "आगरा",
        "gu": "આગ્રા"
    },
    "Prayagraj": {
        "hi": "प्रयागराज",
        "gu": "પ્રયાગરાજ"
    },
    "Allahabad": {
        "hi": "प्रयागराज (इलाहाबाद)",
        "gu": "પ્રયાગરાજ"
    },
    "Gorakhpur": {
        "hi": "गोरखपुर",
        "gu": "ગોરખપુર"
    },
    "Meerut": {
        "hi": "मेरठ",
        "gu": "મેરઠ"
    },
    "Bareilly": {
        "hi": "बरेली",
        "gu": "બરેલી"
    },
    "Aligarh": {
        "hi": "अलीगढ़",
        "gu": "અલીગઢ"
    },
    "Mathura": {
        "hi": "मथुरा",
        "gu": "મથુરા"
    },
    "Indore": {
        "hi": "इंदौर",
        "gu": "ઇન્દોર"
    },
    "Bhopal": {
        "hi": "भोपाल",
        "gu": "ભોપાલ"
    },
    "Jabalpur": {
        "hi": "जबलपुर",
        "gu": "જબલપુર"
    },
    "Gwalior": {
        "hi": "ग्वालियर",
        "gu": "ગ્વાલિયર"
    },
    "Ujjain": {
        "hi": "उज्जैन",
        "gu": "ઉજ્જૈન"
    },
    "Sagar": {
        "hi": "सागर",
        "gu": "સાગર"
    },
    "Patna": {
        "hi": "पटना",
        "gu": "પટના"
    },
    "Gaya": {
        "hi": "गया",
        "gu": "ગયા"
    },
    "Muzaffarpur": {
        "hi": "मुजफ्फरपुर",
        "gu": "મુઝફ્ફરપુર"
    },
    "Bhagalpur": {
        "hi": "भागलपुर",
        "gu": "ભાગલપુર"
    },
    "Pune": {
        "hi": "पुणे",
        "gu": "પુણે"
    },
    "Nashik": {
        "hi": "नासिक",
        "gu": "નાસિક"
    },
    "Nagpur": {
        "hi": "नागपुर",
        "gu": "નાગપુર"
    },
    "Aurangabad": {
        "hi": "औरंगाबाद",
        "gu": "ઔરંગાબાદ"
    },
    "Chhatrapati Sambhajinagar": {
        "hi": "छत्रपति संभाजीनगर",
        "gu": "છત્રપતિ સંભાજીનગર"
    },
    "Kolhapur": {
        "hi": "कोल्हापुर",
        "gu": "કોલ્હાપુર"
    },
    "Solapur": {
        "hi": "सोलापुर",
        "gu": "સોલાપુર"
    },
    "Ahmednagar": {
        "hi": "अहमदनगर",
        "gu": "અહમદનગર"
    },
    "Satara": {
        "hi": "सतारा",
        "gu": "સાતારા"
    },
    "Sangli": {
        "hi": "सांगली",
        "gu": "સાંગલી"
    },
    "Amravati": {
        "hi": "अमरावती",
        "gu": "અમરાવતી"
    },
    "Jalgaon": {
        "hi": "जलगांव",
        "gu": "જલગાંવ"
    },
    "Dhule": {
        "hi": "धुले",
        "gu": "ધુલિયા / ધુળે"
    },
    "Bengaluru": {
        "hi": "बेंगलुरु",
        "gu": "બેંગલુરુ"
    },
    "Bangalore": {
        "hi": "बेंगलुरु",
        "gu": "બેંગલુરુ"
    },
    "Mysuru": {
        "hi": "मैसूर",
        "gu": "મૈસૂર"
    },
    "Belagavi": {
        "hi": "बेलगावी",
        "gu": "બેલગાવી"
    },
    "Hyderabad": {
        "hi": "हैदराबाद",
        "gu": "હૈદરાબાદ"
    },
    "Warangal": {
        "hi": "वारंगल",
        "gu": "વારંગલ"
    },
    "Visakhapatnam": {
        "hi": "विशाखापत्तनम",
        "gu": "વિશાખાપટ્ટનમ"
    },
    "Guntur": {
        "hi": "गुंटूर",
        "gu": "ગુંટૂર"
    },
    "Chennai": {
        "hi": "चेन्नई",
        "gu": "ચેન્નઈ"
    },
    "Coimbatore": {
        "hi": "कोयंबटूर",
        "gu": "કોયમ્બતૂર"
    },
    "Madurai": {
        "hi": "मदुरै",
        "gu": "મદુરાઈ"
    },
    "Kolkata": {
        "hi": "कोलकाता",
        "gu": "કોલકાતા"
    },
    "Bardhaman": {
        "hi": "बर्धमान",
        "gu": "બર્ધમાન"
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
        const isGu = (lang === 'gu');
        let s = text.trim();

        // Common suffix replacements
        if (s.toLowerCase().endsWith('nagar')) {
            const base = s.slice(0, -5);
            return (this.transliterateIndic(base, lang) || base) + (isGu ? 'નગર' : 'नगर');
        }
        if (s.toLowerCase().endsWith('pur')) {
            const base = s.slice(0, -3);
            return (this.transliterateIndic(base, lang) || base) + (isGu ? 'પુર' : 'पुर');
        }
        if (s.toLowerCase().endsWith('garh')) {
            const base = s.slice(0, -4);
            return (this.transliterateIndic(base, lang) || base) + (isGu ? 'ગઢ' : 'गढ़');
        }
        if (s.toLowerCase().endsWith('bad')) {
            const base = s.slice(0, -3);
            return (this.transliterateIndic(base, lang) || base) + (isGu ? 'બાદ' : 'बाद');
        }
        if (s.toLowerCase().endsWith('kheda')) {
            const base = s.slice(0, -5);
            return (this.transliterateIndic(base, lang) || base) + (isGu ? 'ખેડા' : 'खेड़ा');
        }

        return s;
    }

    translateFertilizer(name) {
        if (!name) return '-';
        const key = `fert.${name}`;
        if (translations[this.currentLang] && translations[this.currentLang][key]) {
            return translations[this.currentLang][key];
        }
        for (const k of Object.keys(translations.en)) {
            if (k.startsWith('fert.') && name.includes(k.replace('fert.', ''))) {
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

        // 1. Weather conditions are optimal for fertilizer application and top-dressing.
        if (low.includes('optimal for fertilizer application') || low.includes('weather conditions are optimal') || low.includes('optimal for fertilizer broadcasting')) {
            return lang === 'hi'
                ? 'उर्वरक अनुप्रयोग और टॉप-ड्रेसिंग के लिए मौसम परिस्थितियां पूरी तरह अनुकूल हैं।'
                : 'ખાતર આપવા અને પૂર્તિ ખાતર (ટોપ-ડ્રેસિંગ) માટે હવામાન અનુકૂળ છે.';
        }

        // 2. Weather is favorable ({temp}°C, {rain} mm rain). Ideal for fertilizer top-dressing followed by light irrigation.
        if (low.includes('favorable') || low.includes('ideal for fertilizer')) {
            const temp = (text.match(/([\d\.]+)\s*°c/i) || [])[1] || '28.5';
            const rain = (text.match(/([\d\.]+)\s*mm/i) || [])[1] || '0.0';
            return lang === 'hi'
                ? `मौसम अनुकूल है (${temp}°C, ${rain} mm वर्षा)। उर्वरक टॉप-ड्रेसिंग और हल्की सिंचाई के लिए उत्तम समय है।`
                : `હવામાન અનુકૂળ છે (${temp}°C, ${rain} mm વરસાદ). પૂર્તિ ખાતર આપવા અને હળવા પિયત માટે શ્રેષ્ઠ સમય છે.`;
        }

        // 3. Heavy rainfall forecast in next 48h! Delay fertilizer broadcast to prevent runoff and leaching.
        if (low.includes('heavy rainfall') || low.includes('delay fertilizer broadcast') || low.includes('prevent runoff')) {
            return lang === 'hi'
                ? 'अगले 48 घंटों में भारी वर्षा का अनुमान! बहाव और रिसाव से नुकसान रोकने के लिए उर्वरक छिड़काव में देरी करें।'
                : 'આગામી 48 કલાકમાં ભારે વરસાદની આગાહી! ખાતર ધોવાઈ જતું અટકાવવા માટે ખાતર આપવાનું મુલતવી રાખો.';
        }

        // 4. Moderate rain expected / Moderate rainfall ({rain} mm) forecasted
        if (low.includes('moderate rain') || low.includes('moderate rainfall')) {
            const rainMatch = text.match(/([\d\.]+)\s*mm/i);
            if (rainMatch) {
                const rain = rainMatch[1];
                return lang === 'hi'
                    ? `मध्यम वर्षा (${rain} mm) का अनुमान: बेसल उर्वरक मिट्टी में मिलाना सुरक्षित है, लेकिन पत्तियों पर छिड़काव न करें।`
                    : `મધ્યમ વરસાદ (${rain} mm)ની આગાહી: પાયાનું ખાતર જમીનમાં ભેળવી શકાય છે, પરંતુ છંટકાવ ટાળો.`;
            }
            return lang === 'hi'
                ? 'मध्यम वर्षा का अनुमान। पत्तियों पर छिड़काव न करें; खुराक को विभाजित करें या धीमी गति से घुलने वाले उर्वरक का प्रयोग करें।'
                : 'મધ્યમ વરસાદની શક્યતા. પાન પર છંટકાવ ટાળો; ખાતર તબક્કાવાર વહેંચીને આપો અથવા ધીમે ઓગળતા ખાતરનો ઉપયોગ કરો.';
        }

        // 5. High ambient heat detected
        if (low.includes('high ambient heat') || low.includes('ammonia volatilization')) {
            return lang === 'hi'
                ? 'अधिक तापमान दर्ज किया गया। अमोनिया गैस बनकर उड़ने से रोकने के लिए यूरिया का प्रयोग सुबह जल्दी या शाम को करें।'
                : 'વધુ ગરમી/તાપમાન જણાયું છે. યુરિયાનું બાષ્પીભવન અટકાવવા માટે વહેલી સવારે અથવા મોડી સાંજે યુરિયા આપો.';
        }

        // 6. Postpone fertilizer application
        if (low.includes('postpone fertilizer')) {
            return lang === 'hi'
                ? 'वर्षा थमने और खेत से पानी निकलने तक उर्वरक का प्रयोग स्थगित रखें।'
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
