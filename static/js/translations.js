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
 * i18n Translation Engine
 */
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

    translateFertilizer(name) {
        if (!name) return '-';
        const key = `fert.${name}`;
        if (translations[this.currentLang] && translations[this.currentLang][key]) {
            return translations[this.currentLang][key];
        }
        // Partial search
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
