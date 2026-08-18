"""
Backend i18n Translation Dictionary and Localizer for KrishiKisan AI
Supports English (en), Hindi (hi), and Gujarati (gu) for PDF and server-rendered templates.
"""

from typing import Dict, Any, List

CROP_TRANSLATIONS = {
    'Rice / Paddy': {'hi': 'धान (चावल)', 'gu': 'ડાંગર (ચોખા)'},
    'Rice (Paddy)': {'hi': 'धान (चावल)', 'gu': 'ડાંગર (ચોખા)'},
    'Rice': {'hi': 'धान (चावल)', 'gu': 'ડાંગર (ચોખા)'},
    'Wheat': {'hi': 'गेहूं', 'gu': 'ઘઉં'},
    'Cotton': {'hi': 'कपास', 'gu': 'કપાસ'},
    'Sugarcane': {'hi': 'गन्ना', 'gu': 'શેરડી'},
    'Maize / Corn': {'hi': 'मक्का', 'gu': 'મકાઈ'},
    'Maize': {'hi': 'मक्का', 'gu': 'મકાઈ'},
    'Soybean': {'hi': 'सोयाबीन', 'gu': 'સોયાબીન'},
    'Groundnut / Peanut': {'hi': 'मूंगफली', 'gu': 'મગફળી'},
    'Groundnut': {'hi': 'मूंगफली', 'gu': 'મગફળી'},
    'Mustard': {'hi': 'सरसों', 'gu': 'રાયડો / સરસવ'},
    'Tomato': {'hi': 'टमाटर', 'gu': 'ટામેટા'},
    'Potato': {'hi': 'आलू', 'gu': 'બટાકા'},
    'Onion': {'hi': 'प्याज', 'gu': 'ડુંગળી'},
    'Gram / Chickpea': {'hi': 'चना (छोला)', 'gu': 'ચણા'},
    'Chickpea (Gram)': {'hi': 'चना (छोला)', 'gu': 'ચણા'},
    'Barley': {'hi': 'जौ', 'gu': 'જવ'},
    'Bajra (Pearl Millet)': {'hi': 'बाजरा', 'gu': 'બાજરી'},
    'Jowar (Sorghum)': {'hi': 'ज्वार', 'gu': 'જુવાર'},
    'Pigeon Pea (Tur/Arhar)': {'hi': 'अरहर (तुअर)', 'gu': 'તુવેર'}
}

CATEGORY_TRANSLATIONS = {
    'Cereal': {'hi': 'अनाज', 'gu': 'ધાન્ય પાક'},
    'Cereals': {'hi': 'अनाज', 'gu': 'ધાન્ય પાકો'},
    'Pulse': {'hi': 'दलहन', 'gu': 'કઠોળ પાક'},
    'Pulses': {'hi': 'दलहन', 'gu': 'કઠોળ પાકો'},
    'Cash Crop': {'hi': 'नकदी फसल', 'gu': 'રોકડિયો પાક'},
    'Commercial': {'hi': 'व्यावसायिक फसलें', 'gu': 'રોકડિયા પાકો'},
    'Oilseed': {'hi': 'तिलहन', 'gu': 'તેલીબિયાં પાક'},
    'Oilseeds': {'hi': 'तिलहन', 'gu': 'તેલીબિયાં પાકો'},
    'Vegetable': {'hi': 'सब्जी', 'gu': 'શાકભાજી'},
    'Vegetables': {'hi': 'सब्जियां', 'gu': 'શાકભાજી'},
    'Fruits': {'hi': 'फल', 'gu': 'ફળો'}
}

FERT_TRANSLATIONS = {
    'Urea': {'hi': 'यूरिया (46% N)', 'gu': 'યુરિયા (46% N)'},
    'DAP': {'hi': 'डीएपी / DAP (18-46-0)', 'gu': 'ડીએપી / DAP (18-46-0)'},
    'MOP': {'hi': 'एमओपी / MOP (0-0-60)', 'gu': 'એમઓપી / MOP (0-0-60)'},
    'NPK 10-26-26': {'hi': 'एनपीके (10-26-26)', 'gu': 'એનપીકે (10-26-26)'},
    'NPK 12-32-16': {'hi': 'एनपीके (12-32-16)', 'gu': 'એનપીકે (12-32-16)'},
    'NPK 20-20-0-13': {'hi': 'एनपीके (20-20-0-13)', 'gu': 'એનપીકે (20-20-0-13)'},
    'SSP': {'hi': 'सिंगल सुपर फॉस्फेट (SSP)', 'gu': 'સિંગલ સુપર ફોસ્ફેટ (SSP)'},
    'Zinc Sulphate': {'hi': 'जिंक सल्फेट (21% Zn)', 'gu': 'ઝિંક સલ્ફેટ (21% Zn)'},
    'Borax': {'hi': 'बोरेक्स (10.5% B)', 'gu': 'બોરેક્સ (10.5% B)'},
    'Agricultural Lime': {'hi': 'कृषि चूना (CaCO3)', 'gu': 'કૃષિ ચૂનો (CaCO3)'},
    'Gypsum': {'hi': 'कृषि जिप्सम (CaSO4)', 'gu': 'કૃષિ જીપ્સમ (CaSO4)'},
}

SOIL_TYPE_TRANSLATIONS = {
    'Loamy Soil': {'hi': 'दोमट मिट्टी (जलोढ़ / मध्यम)', 'gu': 'ગોરાડુ / કાંપવાળી જમીન (મધ્યમ)'},
    'Loamy': {'hi': 'दोमट मिट्टी (जलोढ़ / मध्यम)', 'gu': 'ગોરાડુ / કાંપવાળી જમીન (મધ્યમ)'},
    'Black Soil': {'hi': 'काली कपास मिट्टी (रेगुर)', 'gu': 'કાળી કપાસની જમીન (રેગુર)'},
    'Red Soil': {'hi': 'लाल और पीली मिट्टी', 'gu': 'લાલ અને પીળી જમીન'},
    'Sandy Loam': {'hi': 'बलुई दोमट / हल्की बनावट', 'gu': 'રેતાળ ગોરાડુ / હલકી જમીન'},
    'Clayey Soil': {'hi': 'चिकनी मिट्टी / भारी बनावट', 'gu': 'ચીકણી / ભારે જમીન'},
    'Laterite Soil': {'hi': 'लैटेराइट मिट्टी', 'gu': 'લેટેરાઈટ (રાતી) જમીન'}
}

STAGE_TRANSLATIONS = {
    'Basal': {'hi': 'आधारभूत खुराक / बेसल (बुआई/रोपाई के समय)', 'gu': 'પાયાનું ખાતર (વાવણી / ફેરરોપણી સમયે)'},
    'First Top Dressing': {'hi': 'प्रथम टॉप ड्रेसिंग (वानस्पतिक विकास चरण)', 'gu': 'પ્રથમ પૂર્તિ ખાતર (વાનસ્પતિક વિકાસ તબક્કે)'},
    'Second Top Dressing': {'hi': 'द्वितीय टॉप ड्रेसिंग (फूल/बाली आने का चरण)', 'gu': 'બીજું પૂર્તિ ખાતર (ફૂલ / કંકી બેસવાના સમયે)'}
}

TIMING_TRANSLATIONS = {
    'At Sowing': {'hi': 'बुआई / रोपाई के समय', 'gu': 'વાવણી અથવા ફેરરોપણી સમયે'},
    'Vegetative Stage': {'hi': 'बुआई / रोपाई के 20 - 30 दिन बाद (कल्ले फूटने के समय)', 'gu': 'વાવણી પછી 20 થી 30 દિવસે (ફૂટ આવવાના સમયે)'},
    'Flowering Stage': {'hi': 'बुआई / रोपाई के 45 - 60 दिन बाद (बाली निकलने से पूर्व)', 'gu': 'વાવણી પછી 45 થી 60 દિવસે (કંકી / ફૂલ બેસતા પહેલાં)'}
}

INSTRUCTION_TRANSLATIONS = {
    'basal': {'hi': 'पूरा फॉस्फोरस और पोटाश, बेसल नाइट्रोजन के साथ खेत की अंतिम जुताई से पहले नम मिट्टी में अच्छी तरह मिलाएँ।', 'gu': 'સંપૂર્ણ ફોસ્ફરસ અને પોટાશ તથા પાયાનો નાઇટ્રોજન, છેલ્લી ખેડ વખતે જમીનમાં ભેજ હોય ત્યારે બરાબર ભેળવી દો.'},
    'top1': {'hi': 'शेष यूरिया की खुराक पौधों की कतारों में समान रूप से बिखेरें जब मिट्टी में पर्याप्त नमी हो। तेज धूप में छिड़काव न करें।', 'gu': 'બાકી રહેલ યુરિયા જમીનમાં પૂરતો ભેજ હોય ત્યારે હારમાં સરખી રીતે આપો. તીવ્ર તડકામાં છંટકાવ ટાળો.'},
    'top2': {'hi': 'अंतिम नाइट्रोजन खुराक जड़ क्षेत्र में दें और अधिकतम पोषक तत्व अवशोषण के लिए हल्की सिंचाई करें।', 'gu': 'છેલ્લો નાઇટ્રોજન ડોઝ મૂળ વિસ્તાર નજીક આપી હળવું પિયત આપો જેથી પાક વધુ પોષક તત્વો ગ્રહણ કરી શકે.'}
}

TRANSLATIONS: Dict[str, Dict[str, str]] = {
    'en': {
        'brand_title': 'KrishiKisan AI',
        'report_official_badge': 'Official Agronomic Prescription',
        'report_title': 'Precision Fertilizer Recommendation Report',
        'report_subtitle': 'KrishiKisan AI • Multi-Model Ensemble & ICAR Stoichiometric Prescription',
        'report_id_label': 'Report ID:',
        'target_crop': 'Target Crop',
        'field_area': 'Field Area',
        'soil_texture': 'Soil Texture',
        'source_benchmark': 'Source Benchmark',
        'field_test_default': 'Field Diagnostic Test',
        'rec_primary_tag': 'Recommended Primary Formulation',
        'est_total_cost': 'Est. Total Fertilizer Cost',
        'total_fert_qty': 'Total Fertilizer Quantity',
        'ai_confidence': 'AI Model Confidence',
        'weather_app_window': 'Weather Application Window',
        'optimal_safe': 'Optimal / Safe',
        'caution_advised': 'Caution Advised',
        'nutrient_matrix_title': 'Soil Nutrient Status & Balance',
        'split_schedule_title': 'Agronomic Split Application',
        'split_3stage_badge': '3-Stage Plan',
        'amendments_title': 'Soil Amendments & Micronutrients',
        'ph_amendment_label': 'pH Amendment:',
        'micronutrients_label': 'Micronutrients (Zn, B, S, Fe):',
        'weather_radar_title': 'Agro-Meteorology & Spray Radar',
        'temp_label': 'Temp',
        'humidity_label': 'Humidity',
        'rain_label': 'Rain',
        'wind_label': 'Wind',
        'weather_optimal_text': 'Weather window is optimal for fertilizer broadcasting and foliage spray.',
        'ai_alternatives_title': 'AI Multi-Model Ensemble Alternatives',
        'soft_voting_badge': 'Weighted Soft-Voting',
        'explainable_rationale_title': 'Explainable AI Scientific Rationale',
        'icar_badge': 'ICAR Stoichiometry',
        'timing_label': 'Timing:',
        'nitrogen_label': 'Nitrogen (N):',
        'phosphorus_label': 'Phosphorus (P₂O₅):',
        'potassium_label': 'Potassium (K₂O):',
        'soil_ph_label': 'Soil pH',
        'organic_carbon_label': 'Organic Carbon (OC)',
        'ec_label': 'Electrical Cond. (EC)',
        'zinc_label': 'Zinc (Zn)',
        'boron_label': 'Boron (B)',
        'sulphur_label': 'Sulphur (S)',
        'iron_label': 'Iron (Fe)',
        'low': 'LOW',
        'medium': 'MEDIUM',
        'high': 'HIGH',
    },
    'hi': {
        'brand_title': 'कृषिकिसान AI',
        'report_official_badge': 'आधिकारिक कृषि परामर्श रिपोर्ट',
        'report_title': 'सटीक उर्वरक सिफारिश रिपोर्ट',
        'report_subtitle': 'कृषिकिसान AI • मल्टी-मॉडल एन्सेम्बल और ICAR पोषक तत्व निर्धारण',
        'report_id_label': 'रिपोर्ट संख्या:',
        'target_crop': 'लक्षित फसल',
        'field_area': 'खेत का क्षेत्रफल',
        'soil_texture': 'मिट्टी की बनावट',
        'source_benchmark': 'स्रोत मानक',
        'field_test_default': 'खेत परीक्षण / नैदानिक इनपुट',
        'rec_primary_tag': 'अनुशंसित प्राथमिक उर्वरक मिश्रण',
        'est_total_cost': 'अनुमानित कुल उर्वरक लागत',
        'total_fert_qty': 'कुल उर्वरक मात्रा',
        'ai_confidence': 'AI मॉडल विश्वसनीयता',
        'weather_app_window': 'मौसम अनुप्रयोग समय',
        'optimal_safe': 'अनुकूल / सुरक्षित',
        'caution_advised': 'सावधानी बरतें',
        'nutrient_matrix_title': 'मृदा पोषक तत्व स्थिति और संतुलन',
        'split_schedule_title': 'उर्वरक विभाजन अनुप्रयोग समय-सारणी',
        'split_3stage_badge': '3-चरणीय योजना',
        'amendments_title': 'मृदा सुधारक और सूक्ष्म पोषक तत्व सिफारिश',
        'ph_amendment_label': 'pH सुधार:',
        'micronutrients_label': 'सूक्ष्म पोषक तत्व (Zn, B, S, Fe):',
        'weather_radar_title': 'कृषि-मौसम व छिड़काव सुरक्षा रडार',
        'temp_label': 'तापमान',
        'humidity_label': 'नमी',
        'rain_label': 'वर्षा',
        'wind_label': 'हवा',
        'weather_optimal_text': 'उर्वरक छिड़काव और अनुप्रयोग के लिए मौसम परिस्थितियां पूरी तरह अनुकूल हैं।',
        'ai_alternatives_title': 'AI मल्टी-मॉडल एन्सेम्बल वैकल्पिक उर्वरक',
        'soft_voting_badge': 'सॉफ्ट-वोटिंग एन्सेम्बल',
        'explainable_rationale_title': 'व्याख्यात्मक AI वैज्ञानिक आधार',
        'icar_badge': 'ICAR मानक',
        'timing_label': 'समय:',
        'nitrogen_label': 'नाइट्रोजन (N):',
        'phosphorus_label': 'फॉस्फोरस (P₂O₅):',
        'potassium_label': 'पोटैशियम (K₂O):',
        'soil_ph_label': 'मिट्टी का pH',
        'organic_carbon_label': 'जैविक कार्बन (OC)',
        'ec_label': 'विद्युत चालकता (EC)',
        'zinc_label': 'जिंक (Zn)',
        'boron_label': 'बोरॉन (B)',
        'sulphur_label': 'सल्फर (S)',
        'iron_label': 'आयरन (Fe)',
        'low': 'कम (LOW)',
        'medium': 'मध्यम (MEDIUM)',
        'high': 'अधिक (HIGH)',
    },
    'gu': {
        'brand_title': 'કૃષિકિસાન AI',
        'report_official_badge': 'સત્તાવાર કૃષિ ભલામણ પત્ર',
        'report_title': 'ચોક્કસ ખાતર ભલામણ અહેવાલ',
        'report_subtitle': 'કૃષિકિસાન AI • AI મલ્ટી-મોડેલ અને ICAR વૈજ્ઞાનિક પોષક તત્વ નિર્ધારણ',
        'report_id_label': 'અહેવાલ નંબર:',
        'target_crop': 'લક્ષિત પાક',
        'field_area': 'ખેતરનું ક્ષેત્રફળ',
        'soil_texture': 'જમીનનો પ્રકાર',
        'source_benchmark': 'માહિતી સ્રોત',
        'field_test_default': 'ખેતર ચકાસણી / ખેડૂત ઇનપુટ',
        'rec_primary_tag': 'ભલામણ કરેલ મુખ્ય ખાતર',
        'est_total_cost': 'અંદાજિત કુલ ખાતર ખર્ચ',
        'total_fert_qty': 'કુલ ખાતરનો જથ્થો',
        'ai_confidence': 'AI મોડેલ ચોકસાઈ',
        'weather_app_window': 'હવામાન અનુકૂળ સમય',
        'optimal_safe': 'ઉત્તમ / સલામત',
        'caution_advised': 'સાવચેતી જરૂરી',
        'nutrient_matrix_title': 'જમીન પોષક તત્વ સ્થિતિ અને સંતુલન',
        'split_schedule_title': 'તબક્કાવાર ખાતર આપવાની સમય-સારણી',
        'split_3stage_badge': '3-તબક્કાનું આયોજન',
        'amendments_title': 'જમીન સુધારક અને સૂક્ષ્મ પોષક તત્વો',
        'ph_amendment_label': 'pH સુધારણા:',
        'micronutrients_label': 'સૂક્ષ્મ પોષક તત્વો (Zn, B, S, Fe):',
        'weather_radar_title': 'કૃષિ-હવામાન અને છંટકાવ સલામતી રડાર',
        'temp_label': 'તાપમાન',
        'humidity_label': 'ભેજ',
        'rain_label': 'વરસાદ',
        'wind_label': 'પવન',
        'weather_optimal_text': 'ખાતર છંટકાવ અને પાક સંભાળ માટે હવામાન ખૂબ અનુકૂળ છે.',
        'ai_alternatives_title': 'AI મલ્ટી-મોડેલ વૈકલ્પિક ખાતરો',
        'soft_voting_badge': 'સોફ્ટ-વોટિંગ એન્સેમ્બલ',
        'explainable_rationale_title': 'વૈજ્ઞાનિક AI સમજૂતી અને આધાર',
        'icar_badge': 'ICAR માપદંડ',
        'timing_label': 'સમય:',
        'nitrogen_label': 'નાઇટ્રોજન (N):',
        'phosphorus_label': 'ફોસ્ફરસ (P₂O₅):',
        'potassium_label': 'પોટેશિયમ (K₂O):',
        'soil_ph_label': 'જમીનનું pH',
        'organic_carbon_label': 'ઓર્ગેનિક કાર્બન (OC)',
        'ec_label': 'વિદ્યુત વાહકતા (EC)',
        'zinc_label': 'ઝિંક (Zn)',
        'boron_label': 'બોરોન (B)',
        'sulphur_label': 'સલ્ફર (S)',
        'iron_label': 'આયર્ન (Fe)',
        'low': 'ઓછું (LOW)',
        'medium': 'મધ્યમ (MEDIUM)',
        'high': 'વધારે (HIGH)',
    }
}


def get_translations_for_lang(lang: str = 'en') -> Dict[str, str]:
    """Returns the translation dictionary for the given language code with fallback to English."""
    lang = (lang or 'en').lower()
    if lang not in TRANSLATIONS:
        lang = 'en'
    return TRANSLATIONS.get(lang, TRANSLATIONS['en'])


def localize_crop(name: str, lang: str = 'en') -> str:
    if not name or lang == 'en':
        return name
    if name in CROP_TRANSLATIONS:
        return CROP_TRANSLATIONS[name].get(lang, name)
    for k, v in CROP_TRANSLATIONS.items():
        if k.lower() in name.lower() or name.lower() in k.lower():
            return v.get(lang, name)
    return name


def localize_fertilizer(name: str, lang: str = 'en') -> str:
    if not name or lang == 'en':
        return name
    for k, v in FERT_TRANSLATIONS.items():
        if k in name:
            return v.get(lang, name)
    return name


def localize_soil_type(soil_type: str, lang: str = 'en') -> str:
    if not soil_type or lang == 'en':
        return soil_type
    for k, v in SOIL_TYPE_TRANSLATIONS.items():
        if k.lower() in soil_type.lower():
            return v.get(lang, soil_type)
    return soil_type


def localize_split_item(item: Dict[str, Any], lang: str = 'en') -> Dict[str, Any]:
    if lang == 'en':
        return item
    
    stage = item.get('stage', '')
    timing = item.get('timing_days', '')
    instr = item.get('instructions', '') or item.get('application_method', '')

    for k, v in STAGE_TRANSLATIONS.items():
        if k.lower() in stage.lower():
            stage = v.get(lang, stage)
            break

    if 'basal' in timing.lower() or 'sowing' in timing.lower() or '0' in timing:
        timing = TIMING_TRANSLATIONS.get('At Sowing', {}).get(lang, timing)
    elif 'tillering' in timing.lower() or 'vegetative' in timing.lower() or '30' in timing:
        timing = TIMING_TRANSLATIONS.get('Vegetative Stage', {}).get(lang, timing)
    elif 'flowering' in timing.lower() or 'panicle' in timing.lower() or '60' in timing:
        timing = TIMING_TRANSLATIONS.get('Flowering Stage', {}).get(lang, timing)

    if 'phosphorus' in instr.lower() or 'potash' in instr.lower() or 'basal' in instr.lower():
        instr = INSTRUCTION_TRANSLATIONS.get('basal', {}).get(lang, instr)
    elif 'urea' in instr.lower() or 'tillering' in instr.lower():
        instr = INSTRUCTION_TRANSLATIONS.get('top1', {}).get(lang, instr)
    elif 'root zone' in instr.lower() or 'irrigation' in instr.lower():
        instr = INSTRUCTION_TRANSLATIONS.get('top2', {}).get(lang, instr)

    new_item = dict(item)
    new_item['stage'] = stage
    new_item['timing_days'] = timing
    new_item['instructions'] = instr
    return new_item
