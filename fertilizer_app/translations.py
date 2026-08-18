"""
Backend i18n Translation Dictionary and Localizer for KrishiKisan AI
Supports English (en), Hindi (hi), and Gujarati (gu) for PDF and server-rendered templates.
"""

import re
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


def localize_ph_amendment(text: str, lang: str = 'en') -> str:
    if not text or lang == 'en':
        return text

    ph_match = re.search(r'pH\s*([\d\.]+)', text, re.IGNORECASE)
    kg_match = re.search(r'at\s*([\d\.]+)\s*kg', text, re.IGNORECASE)
    rate_match = re.search(r'\(([\d\.]+)\s*kg/ha\)', text, re.IGNORECASE)

    ph = ph_match.group(1) if ph_match else ''
    kg = kg_match.group(1) if kg_match else ''
    rate = rate_match.group(1) if rate_match else '750'

    if 'strongly acidic' in text.lower():
        if lang == 'hi':
            return f"अत्यधिक अम्लीय मिट्टी (pH {ph})। फास्फोरस की उपलब्धता सुधारने के लिए बुआई से 2-3 सप्ताह पूर्व {kg} kg ({rate} kg/ha) कृषि चूना (CaCO3) या डोलोमाइट डालें।"
        elif lang == 'gu':
            return f"અત્યંત એસિડિક જમીન (pH {ph}). ફોસ્ફરસની ઉપલબ્ધતા વધારવા માટે વાવણીના 2-3 અઠવાડિયા પહેલાં {kg} kg ({rate} kg/ha) કૃષિ ચૂનો (CaCO3) અથવા ડોલોમાઇટ ઉમેરો."
    elif 'moderately acidic' in text.lower():
        if lang == 'hi':
            return f"मध्यम अम्लीय मिट्टी (pH {ph})। {kg} kg ({rate} kg/ha) कृषि चूना डालें या अच्छी तरह सड़ी हुई गोबर की खाद (FYM)/कम्पोस्ट मिलाएं।"
        elif lang == 'gu':
            return f"મધ્યમ એસિડિક જમીન (pH {ph}). {kg} kg ({rate} kg/ha) કૃષિ ચૂનો ઉમેરો અથવા સારું કોહવાયેલું છાણિયું ખાતર/કમ્પોસ્ટ ભેળવો."
    elif 'alkaline' in text.lower() or 'sodic' in text.lower():
        if lang == 'hi':
            return f"क्षारीय / सोदिक मिट्टी (pH {ph})। सोडियम विषाक्तता कम करने के लिए जल निकास के साथ {kg} kg ({rate} kg/ha) कृषि जिप्सम (CaSO4·2H2O) डालें।"
        elif lang == 'gu':
            return f"ક્ષારીય / સોડિક જમીન (pH {ph}). સોડિયમની હાનિકારકતા ઘટાડવા માટે યોગ્ય નિતાર સાથે {kg} kg ({rate} kg/ha) કૃષિ જીપ્સમ (CaSO4·2H2O) આપો."
    elif 'optimal' in text.lower():
        if lang == 'hi':
            return f"अनुकूल मृदा pH ({ph})। पोषक तत्व अवशोषण क्षमता उत्कृष्ट है।"
        elif lang == 'gu':
            return f"ઉત્તમ જમીન pH ({ph}). પોષક તત્વો ગ્રહણ ક્ષમતા શ્રેષ્ઠ છે."

    return text


def localize_micronutrients(text: str, lang: str = 'en') -> str:
    if not text or lang == 'en':
        return text

    if 'adequate' in text.lower():
        return 'सूक्ष्म पोषक तत्व (Zn, B, S, Fe) कृषि मानकों के अनुसार पर्याप्त मात्रा में हैं।' if lang == 'hi' else 'સૂક્ષ્મ પોષક તત્વો (Zn, B, S, Fe) ખેતી માટે પૂરતા પ્રમાણમાં છે.'

    segments = text.split('|')
    translated = []
    for s in segments:
        seg = s.strip()
        if 'zinc' in seg.lower() or 'znso4' in seg.lower():
            val_m = re.search(r'([\d\.]+)\s*ppm', seg, re.I)
            kg_m = re.search(r'@\s*([\d\.]+)\s*kg', seg, re.I)
            rate_m = re.search(r'\(([\d\.]+)\s*kg/ha\)', seg, re.I)
            val = val_m.group(1) if val_m else '0.00'
            kg = kg_m.group(1) if kg_m else '25'
            rate = rate_m.group(1) if rate_m else '25'
            if lang == 'hi':
                translated.append(f"जिंक की कमी ({val} ppm < 0.6 ppm): आधारभूत (बेसल) अवस्था में {kg} kg ({rate} kg/ha) जिंक सल्फेट (ZnSO4 21%) डालें।")
            else:
                translated.append(f"ઝિંકની ખામી ({val} ppm < 0.6 ppm): પાયાના તબક્કે {kg} kg ({rate} kg/ha) ઝિંક સલ્ફેટ (ZnSO4 21%) આપો.")
        elif 'boron' in seg.lower() or 'borax' in seg.lower():
            val_m = re.search(r'([\d\.]+)\s*ppm', seg, re.I)
            kg_m = re.search(r'@\s*([\d\.]+)\s*kg', seg, re.I)
            rate_m = re.search(r'\(([\d\.]+)\s*kg/ha\)', seg, re.I)
            val = val_m.group(1) if val_m else '0.00'
            kg = kg_m.group(1) if kg_m else '5.0'
            rate = rate_m.group(1) if rate_m else '5'
            if lang == 'hi':
                translated.append(f"बोरॉन की कमी ({val} ppm < 0.5 ppm): फल फटने और फूल झड़ने से रोकने के लिए {kg} kg ({rate} kg/ha) बोरेक्स (10.5% B) डालें।")
            else:
                translated.append(f"બોરોનની ખામી ({val} ppm < 0.5 ppm): ફળ ફાટતા અને ફૂલ ખરતા અટકાવવા માટે {kg} kg ({rate} kg/ha) બોરેક્સ (10.5% B) આપો.")
        elif 'sulphur' in seg.lower() or 'gypsum' in seg.lower():
            val_m = re.search(r'([\d\.]+)\s*ppm', seg, re.I)
            kg_m = re.search(r'@\s*([\d\.]+)\s*kg', seg, re.I)
            rate_m = re.search(r'\(([\d\.]+)\s*kg/ha\)', seg, re.I)
            val = val_m.group(1) if val_m else '0.0'
            kg = kg_m.group(1) if kg_m else '35'
            rate = rate_m.group(1) if rate_m else '35'
            if lang == 'hi':
                translated.append(f"सल्फर की कमी ({val} ppm < 10 ppm): तिलहन और दलहन में प्रोटीन निर्माण के लिए {kg} kg ({rate} kg/ha) तत्वीय सल्फर या जिप्सम डालें।")
            else:
                translated.append(f"સલ્ફરની ખામી ({val} ppm < 10 ppm): તેલીબિયાં અને કઠોળમાં પ્રોટીન વૃદ્ધિ માટે {kg} kg ({rate} kg/ha) સલ્ફર અથવા જીપ્સમ આપો.")
        elif 'iron' in seg.lower() or 'ferrous' in seg.lower():
            val_m = re.search(r'([\d\.]+)\s*ppm', seg, re.I)
            val = val_m.group(1) if val_m else '0.0'
            if lang == 'hi':
                translated.append(f"आयरन की कमी ({val} ppm < 4.5 ppm): वानस्पतिक अवस्था में फेरस सल्फेट (FeSO4 0.5%) + 0.1% साइट्रिक एसिड का पर्णीय छिड़काव करें।")
            else:
                translated.append(f"આયર્નની ખામી ({val} ppm < 4.5 ppm): વાનસ્પતિક વૃદ્ધિ સમયે ફેરસ સલ્ફેટ (FeSO4 0.5%) + 0.1% સાઇટ્રિક એસિડનો છંટકાવ કરો.")
        else:
            translated.append(seg)
    return " | ".join(translated)


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


def localize_decision_driver(text: str, lang: str = 'en') -> str:
    if not text or lang == 'en':
        return text
    low = text.lower()

    if 'acidic soil ph' in low and 'buffering' in low:
        m = re.search(r'([\d\.]+)', text)
        ph = m.group(1) if m else '5.0'
        return f"अम्लीय मृदा pH ({ph}) चूना और फॉस्फेट बफरिंग स्रोतों को प्राथमिकता देता है" if lang == 'hi' else f"એસિડિક જમીન pH ({ph}) કેલ્શિયમ અને ફોસ્ફેટ બફરિંગ સ્રોતોને પ્રાથમિકતા આપે છે"
    
    if 'alkaline soil ph' in low and 'sulphate' in low:
        m = re.search(r'([\d\.]+)', text)
        ph = m.group(1) if m else '8.5'
        return f"क्षारीय मृदा pH ({ph}) अम्लीय सल्फेट-आधारित उर्वरक स्रोतों को प्राथमिकता देता है" if lang == 'hi' else f"ક્ષારીય જમીન pH ({ph}) સલ્ફેટ-આધારિત ખાતર સ્રોતોને પ્રાથમિકતા આપે છે"
    
    if 'moderately alkaline' in low:
        m = re.search(r'([\d\.]+)', text)
        ph = m.group(1) if m else '7.8'
        return f"मृदा pH मध्यम क्षारीय है ({ph}); पोषक तत्व आमतौर पर सुलभ रहते हैं" if lang == 'hi' else f"જમીનનું pH મધ્યમ ક્ષારીય છે ({ph}); પોષક તત્વો સામાન્ય રીતે પ્રાપ્ય રહે છે"

    if 'phosphorus' in low and 'high' in low:
        m = re.search(r'([\d\.]+)\s*kg\/ha', text, re.I)
        val = m.group(1) if m else '144.0'
        return f"उपलब्ध फॉस्फोरस अधिक है ({val} kg/ha); मॉडल मृदा भंडार पर भरोसा करते हुए केवल शुरुआती बेसल फॉस्फोरस का उपयोग करता है" if lang == 'hi' else f"ઉપલબ્ધ ફોસ્ફરસ વધુ છે ({val} kg/ha); મોડેલ જમીનના ભંડાર પર નિર્ભર રહીને માત્ર પાયાના ફોસ્ફરસનો ઉપયોગ કરે છે"

    if 'phosphorus' in low and 'low' in low:
        m = re.search(r'([\d\.]+)\s*kg\/ha', text, re.I)
        val = m.group(1) if m else '10.0'
        return f"उपलब्ध फॉस्फोरस कम है ({val} kg/ha); मॉडल फॉस्फेट पुनःपूर्ति को प्राथमिकता देता है" if lang == 'hi' else f"ઉપલબ્ધ ફોસ્ફરસ ઓછું છે ({val} kg/ha); મોડેલ ફોસ્ફરસ પૂર્તિને પ્રાથમિકતા આપે છે"

    if 'potassium' in low and 'high' in low:
        m = re.search(r'([\d\.]+)\s*kg\/ha', text, re.I)
        val = m.group(1) if m else '280.0'
        return f"उपलब्ध पोटैशियम अधिक है ({val} kg/ha); मॉडल मिट्टी की कमी के बजाय फसल पोषण के लिए पोटाश आवंटित करता है" if lang == 'hi' else f"ઉપલબ્ધ પોટેશિયમ વધુ છે ({val} kg/ha); મોડેલ જમીનની ખામીના બદલે પાકના નિભાવ માટે પોટાશ ફાળવે છે"

    if 'potassium' in low and 'low' in low:
        m = re.search(r'([\d\.]+)\s*kg\/ha', text, re.I)
        val = m.group(1) if m else '110.0'
        return f"उपलब्ध पोटैशियम कम है ({val} kg/ha); मॉडल पोटाश पूरकता को प्राथमिकता देता है" if lang == 'hi' else f"ઉપલબ્ધ પોટેશિયમ ઓછું છે ({val} kg/ha); મોડેલ પોટાશ પૂર્તિને પ્રાથમિકતા આપે છે"

    if 'organic carbon' in low and 'low' in low:
        m = re.search(r'([\d\.]+)\s*%', text, re.I)
        val = m.group(1) if m else '0.50'
        return f"मृदा जैविक कार्बन कम है ({val}%); जैविक खाद/गोबर खाद प्रबंधन मृदा स्वास्थ्य के लिए लाभकारी है" if lang == 'hi' else f"જમીનમાં ઓર્ગેનિક કાર્બન ઓછો છે ({val}%); દેશી ખાતર/સેન્દ્રીય ખાતર વ્યવસ્થાપન જમીન સ્વાસ્થ્ય માટે ફાયદાકારક છે"

    if 'sulphur' in low and 'low' in low:
        m = re.search(r'([\d\.]+)\s*ppm', text, re.I)
        val = m.group(1) if m else '0.0'
        return f"उपलब्ध सल्फर कम है ({val} ppm); मॉडल सल्फर-युक्त उर्वरक यौगिकों को शामिल करता है" if lang == 'hi' else f"ઉપલબ્ધ સલ્ફર ઓછું છે ({val} ppm); મોડેલ સલ્ફર-યુક્ત ખાતરોનો સમાવેશ કરે છે"

    if 'nitrogen deficiency' in low or ('nitrogen' in low and 'urea' in low):
        m = re.search(r'([\d\.]+)\s*kg\/ha', text, re.I)
        val = m.group(1) if m else '140.0'
        return f"नाइट्रोजन की कमी ({val} kg/ha < 280.0 kg/ha) के लिए यूरिया की बेसल और टॉप-ड्रेसिंग विभाजित खुराक आवश्यक है" if lang == 'hi' else f"નાઇટ્રોજનની ખામી (${val} kg/ha < 280.0 kg/ha) માટે યુરિયા પાયામાં અને પૂર્તિ ખાતર તરીકે તબક્કાવાર આપવું જરૂરી છે"

    if 'standard nutrient balance' in low:
        return "फसल की लक्षित वृद्धि आवश्यकताओं के अनुसार मानक पोषक तत्व संतुलन" if lang == 'hi' else "પાકની લક્ષિત વૃદ્ધિ જરૂરિયાતો મુજબ પ્રમાણભૂત પોષક તત્વ સંતુલન"

    return text


def localize_explanation(text: str, lang: str = 'en') -> str:
    if not text or lang == 'en':
        return text

    lines = text.split('\n')
    translated_lines = []

    for line in lines:
        tr = line.strip()
        if not tr:
            translated_lines.append('')
            continue

        if re.search(r'^1\.\s*SOIL NUTRIENT STATUS', tr, re.I):
            crop_m = re.search(r'for\s+([^)]+)\)', tr, re.I)
            raw_c = crop_m.group(1).strip() if crop_m else ''
            crop = localize_crop(raw_c, lang) if raw_c else ''
            translated_lines.append(
                f"1. मृदा पोषक तत्व स्थिति ({crop + ' के लिए ' if crop else ''}परीक्षण मान बनाम मानक पैमाना):"
                if lang == 'hi' else
                f"1. જમીન પોષક તત્વોની સ્થિતિ ({crop + ' માટે ' if crop else ''}ચકાસણી પરિણામો વિરુદ્ધ સંદર્ભ માપદંડ):"
            )
            continue

        if 'Available Nitrogen' in tr:
            m = re.search(r':\s*([^->]+)->\s*(\w+)', tr, re.I)
            val = m.group(1).strip() if m else '140.0 kg/ha'
            rating = m.group(2).upper() if m else 'LOW'
            r_tr = 'कम (LOW)' if 'LOW' in rating else ('मध्यम (MEDIUM)' if 'MED' in rating else 'अधिक (HIGH)')
            if lang == 'gu':
                r_tr = 'ઓછું (LOW)' if 'LOW' in rating else ('મધ્યમ (MEDIUM)' if 'MED' in rating else 'વધારે (HIGH)')
            translated_lines.append(
                f"  • उपलब्ध नाइट्रोजन (N)   : {val} -> {r_tr} (मानक पैमाना: <280 कम, 280-560 मध्यम, >560 अधिक)"
                if lang == 'hi' else
                f"  • ઉપલબ્ધ નાઇટ્રોજન (N)   : {val} -> {r_tr} (સંદર્ભ માપદંડ: <280 ઓછું, 280-560 મધ્યમ, >560 વધારે)"
            )
            continue

        if 'Available Phosphorus' in tr:
            m = re.search(r':\s*([^->]+)->\s*(\w+)', tr, re.I)
            val = m.group(1).strip() if m else '18.0 kg/ha'
            rating = m.group(2).upper() if m else 'MEDIUM'
            r_tr = 'कम (LOW)' if 'LOW' in rating else ('मध्यम (MEDIUM)' if 'MED' in rating else 'अधिक (HIGH)')
            if lang == 'gu':
                r_tr = 'ઓછું (LOW)' if 'LOW' in rating else ('મધ્યમ (MEDIUM)' if 'MED' in rating else 'વધારે (HIGH)')
            translated_lines.append(
                f"  • उपलब्ध फॉस्फोरस (P)   : {val} -> {r_tr} (मानक पैमाना: <10 कम, 10-25 मध्यम, >25 अधिक)"
                if lang == 'hi' else
                f"  • ઉપલબ્ધ ફોસ્ફરસ (P)   : {val} -> {r_tr} (સંદર્ભ માપદંડ: <10 ઓછું, 10-25 મધ્યમ, >25 વધારે)"
            )
            continue

        if 'Available Potassium' in tr:
            m = re.search(r':\s*([^->]+)->\s*(\w+)', tr, re.I)
            val = m.group(1).strip() if m else '180.0 kg/ha'
            rating = m.group(2).upper() if m else 'MEDIUM'
            r_tr = 'कम (LOW)' if 'LOW' in rating else ('मध्यम (MEDIUM)' if 'MED' in rating else 'अधिक (HIGH)')
            if lang == 'gu':
                r_tr = 'ઓછું (LOW)' if 'LOW' in rating else ('મધ્યમ (MEDIUM)' if 'MED' in rating else 'વધારે (HIGH)')
            translated_lines.append(
                f"  • उपलब्ध पोटैशियम (K)   : {val} -> {r_tr} (मानक पैमाना: <110 कम, 110-280 मध्यम, >280 अधिक)"
                if lang == 'hi' else
                f"  • ઉપલબ્ધ પોટેશિયમ (K)   : {val} -> {r_tr} (સંદર્ભ માપદંડ: <110 ઓછું, 110-280 મધ્યમ, >280 વધારે)"
            )
            continue

        if 'Soil Organic Carbon' in tr or 'Soil जैविक कार्बन' in tr:
            m = re.search(r':\s*([^->]+)->\s*(\w+)', tr, re.I)
            val = m.group(1).strip() if m else '0.55%'
            rating = m.group(2).upper() if m else 'MEDIUM'
            r_tr = 'कम (LOW)' if 'LOW' in rating else ('मध्यम (MEDIUM)' if 'MED' in rating else 'अधिक (HIGH)')
            if lang == 'gu':
                r_tr = 'ઓછું (LOW)' if 'LOW' in rating else ('મધ્યમ (MEDIUM)' if 'MED' in rating else 'વધારે (HIGH)')
            translated_lines.append(
                f"  • मृदा जैविक कार्बन (OC) : {val} -> {r_tr} (मानक पैमाना: <0.50% कम, 0.50-0.75% मध्यम, >0.75% अधिक)"
                if lang == 'hi' else
                f"  • જમીન ઓર્ગેનિક કાર્બન (OC) : {val} -> {r_tr} (સંદર્ભ માપદંડ: <0.50% ઓછું, 0.50-0.75% મધ્યમ, >0.75% વધારે)"
            )
            continue

        if '[Note on Organic Matter' in tr or '[जैविक पदार्थ पर टिप्पणी' in tr:
            if re.search(r'adequate|high|पर्याप्त', tr, re.I):
                translated_lines.append(
                    "  [जैविक पदार्थ पर टिप्पणी: मृदा जैविक कार्बन पर्याप्त/उच्च श्रेणी में है, जो सूक्ष्मजीवों द्वारा पोषक तत्व उपलब्धता को बढ़ावा देता है।]"
                    if lang == 'hi' else
                    "  [સેન્દ્રીય પદાર્થ અંગે નોંધ: જમીનમાં ઓર્ગેનિક કાર્બન પૂરતો/વધુ છે, જે સૂક્ષ્મજીવાણુઓ દ્વારા પોષક તત્વો મુક્ત કરવામાં મદદરૂપ છે.]"
                )
            else:
                translated_lines.append(
                    "  [जैविक पदार्थ पर टिप्पणी: मृदा जैविक कार्बन कम है। मिट्टी के जैविक स्वास्थ्य और नमी धारण क्षमता के लिए नियमित रूप से जैविक खाद, गोबर खाद या कम्पोस्ट का प्रयोग लाभकारी है।]"
                    if lang == 'hi' else
                    "  [સેન્દ્રીય પદાર્થ અંગે નોંધ: જમીનમાં ઓર્ગેનિક કાર્બન ઓછો છે. જમીનનું સ્વાસ્થ્ય અને ભેજ સંગ્રહ શક્તિ વધારવા માટે નિયમિત સેન્દ્રીય/છાણિયું ખાતર આપવું ફાયદાકારક છે.]"
                )
            continue

        if 'Soil pH' in tr:
            m = re.search(r':\s*([\d\.]+)\s*->\s*([^(\.]+)', tr, re.I)
            ph = m.group(1) if m else '6.8'
            cat = m.group(2).strip() if m else 'NEUTRAL'
            if 'acidic' in cat.lower():
                cat_t = 'अम्लीय (ACIDIC)' if lang == 'hi' else 'એસિડિક (ACIDIC)'
                det_t = 'फास्फोरस की उपलब्धता और पोषक तत्व अवशोषण बाधित हो सकता है; चूना या क्षारीय सुधारक की सिफारिश की जाती है।' if lang == 'hi' else 'ફોસ્ફરસની ઉપલબ્ધતા અને પોષક તત્વોનું શોષણ ઘટી શકે છે; ચૂનો અથવા ક્ષાર સુધારકની ભલામણ છે.'
            elif 'alkaline' in cat.lower() or 'sodic' in cat.lower():
                cat_t = 'क्षारीय (ALKALINE)' if lang == 'hi' else 'ક્ષારીય (ALKALINE)'
                det_t = 'उच्च क्षारीयता सूक्ष्म पोषक तत्वों (Zn, Fe) की उपलब्धता को कम कर सकती है; जिप्सम प्रयोग की सिफारिश की जाती है।' if lang == 'hi' else 'વધુ ક્ષારીયતા સૂક્ષ્મ પોષક તત્વો (Zn, Fe) ની પ્રાપ્યતા ઘટાડી શકે છે; જીપ્સમ આપવાની ભલામણ છે.'
            else:
                cat_t = 'उदासीन / अनुकूल (NEUTRAL / OPTIMAL)' if lang == 'hi' else 'તટસ્થ / ઉત્તમ (NEUTRAL / OPTIMAL)'
                det_t = 'फसल द्वारा पोषक तत्व अवशोषण और सूक्ष्मजीवी गतिविधि के लिए आदर्श स्थिति।' if lang == 'hi' else 'પાક દ્વારા પોષક તત્વો ગ્રહણ કરવા અને સૂક્ષ્મજીવાણુ પ્રવૃત્તિ માટે ઉત્તમ સ્થિતિ.'
            translated_lines.append(
                f"  • मृदा pH                  : {ph} -> {cat_t} (मानक: 6.0-7.5 उदासीन, 7.5-8.5 मध्यम क्षारीय, >8.5 क्षारीय)। {det_t}"
                if lang == 'hi' else
                f"  • જમીન pH                  : {ph} -> {cat_t} (સંદર્ભ: 6.0-7.5 તટસ્થ, 7.5-8.5 મધ્યમ ક્ષારીય, >8.5 ક્ષારીય). {det_t}"
            )
            continue

        if 'Electrical Cond' in tr:
            m = re.search(r':\s*([\d\.]+)\s*dS\/m\s*->\s*([^(\.]+)', tr, re.I)
            ec = m.group(1) if m else '0.45'
            cat = m.group(2).strip() if m else 'SALT-FREE'
            if 'saline' in cat.lower():
                cat_t = 'लवणीय (SALINE)' if lang == 'hi' else 'ખારવાળી (SALINE)'
                det_t = 'बढ़ी हुई लवणता जड़ों द्वारा जल और पोषक तत्व अवशोषण को बाधित कर सकती है।' if lang == 'hi' else 'વધારે ક્ષારના કારણે મૂળ દ્વારા પાણી અને પોષક તત્વો ગ્રહણ કરવામાં અવરોધ આવી શકે છે.'
            else:
                cat_t = 'लवण-मुक्त (SALT-FREE)' if lang == 'hi' else 'ક્ષાર-મુક્ત (SALT-FREE)'
                det_t = 'जड़ों द्वारा पोषक तत्व अवशोषण पर कोई लवणता का प्रतिकूल प्रभाव नहीं है।' if lang == 'hi' else 'મૂળ દ્વારા પોષક તત્વો ગ્રહણ કરવામાં કોઈ ક્ષારની પ્રતિકૂળ અસર નથી.'
            translated_lines.append(
                f"  • विद्युत चालकता (EC)    : {ec} dS/m -> {cat_t} (मानक पैमाना: <1.0 dS/m लवण-मुक्त)। {det_t}"
                if lang == 'hi' else
                f"  • વિદ્યુત વાહકતા (EC)    : {ec} dS/m -> {cat_t} (સંદર્ભ માપદંડ: <1.0 dS/m ક્ષાર-મુક્ત). {det_t}"
            )
            continue

        if re.search(r'^2\.\s*MODEL PREDICTION', tr, re.I):
            ha_m = re.search(r'\(([\d\.]+)\s*Hectare', tr, re.I)
            ha = ha_m.group(1) if ha_m else '1.0'
            translated_lines.append(
                f"2. मॉडल पूर्वानुमान एवं उर्वरक सिफारिश का वैज्ञानिक आधार ({ha} हेक्टेयर प्लॉट):"
                if lang == 'hi' else
                f"2. મોડેલ પરિણામ અને ખાતર ભલામણનો વૈજ્ઞાનિક આધાર ({ha} હેક્ટર પ્લોટ):"
            )
            continue

        if 'Phosphorus Management' in tr:
            val_m = re.search(r'HIGH\s*\(([\d\.]+)\s*kg\/ha\)', tr, re.I) or re.search(r'LOW\s*\(([\d\.]+)\s*kg\/ha\)', tr, re.I) or re.search(r'\(([\d\.]+)\s*kg\/ha\)', tr, re.I)
            val = val_m.group(1) if val_m else '18.0'
            dap_m = re.search(r'recommends\s*([\d\.]+)\s*kg\/ha DAP', tr, re.I)
            dap = dap_m.group(1) if dap_m else '73.4'
            n_m = re.search(r'\(([\d\.]+)\s*kg N\)', tr, re.I)
            n = n_m.group(1) if n_m else '13.2'
            p_m = re.search(r'\(([\d\.]+)\s*kg P2O5\)', tr, re.I)
            p = p_m.group(1) if p_m else '33.8'

            if 'already HIGH' in tr or 'HIGH' in tr:
                translated_lines.append(
                    f"  • फॉस्फोरस प्रबंधन: मिट्टी में उपलब्ध फॉस्फोरस पहले से अधिक ({val} kg/ha) है। मिट्टी में फॉस्फोरस की कोई कमी नहीं है। मॉडल {dap} kg/ha DAP की सिफारिश मुख्य रूप से शुरुआती बेसल नाइट्रोजन ({n} kg N) और शुरुआती जड़ों के विकास के लिए न्यूनतम फॉस्फेट ({p} kg P₂O₅) प्रदान करने के लिए करता है, जबकि शेष आवश्यकता मिट्टी के मौजूदा भंडार से पूरी होती है।"
                    if lang == 'hi' else
                    f"  • ફોસ્ફરસ વ્યવસ્થાપન: જમીનમાં ઉપલબ્ધ ફોસ્ફરસ પહેલેથી વધુ ({val} kg/ha) છે. જમીનમાં ફોસ્ફરસની કોઈ ખામી નથી. મોડેલ {dap} kg/ha DAP ની ભલામણ મુખ્યત્વે પાયાનો નાઇટ્રોજન ({n} kg N) અને મૂળના પ્રારંભિક વિકાસ માટે જરૂરી ફોસ્ફેટ ({p} kg P₂O₅) આપવા માટે કરે છે, જ્યારે બાકીની જરૂરિયાત જમીનમાં રહેલા ફોસ્ફરસ ભંડારમાંથી પૂરી થાય છે."
                )
            elif 'LOW' in tr:
                translated_lines.append(
                    f"  • फॉस्फोरस प्रबंधन: मिट्टी में उपलब्ध फॉस्फोरस कम ({val} kg/ha) है। मॉडल मिट्टी की कमी को दूर करने और जड़ों के विकास के लिए {dap} kg/ha DAP ({p} kg P₂O₅) की सिफारिश करता है।"
                    if lang == 'hi' else
                    f"  • ફોસ્ફરસ વ્યવસ્થાપન: જમીનમાં ઉપલબ્ધ ફોસ્ફરસ ઓછું ({val} kg/ha) છે. મોડેલ જમીનની ખામી સુધારવા અને મૂળના વિકાસ માટે {dap} kg/ha DAP ({p} kg P₂O₅) ની ભલામણ કરે છે."
                )
            else:
                translated_lines.append(
                    f"  • फॉस्फोरस प्रबंधन: मिट्टी में उपलब्ध फॉस्फोरस मध्यम ({val} kg/ha) है। मॉडल मानक फसल मांग ({p} kg P₂O₅) पूरी करने और उर्वरता बनाए रखने के लिए {dap} kg/ha DAP की सिफारिश करता है।"
                    if lang == 'hi' else
                    f"  • ફોસ્ફરસ વ્યવસ્થાપન: જમીનમાં ઉપલબ્ધ ફોસ્ફરસ મધ્યમ ({val} kg/ha) છે. મોડેલ પાકની સામાન્ય જરૂરિયાત (${p} kg P₂O₅) પૂરી કરવા અને જમીનની ફળદ્રુપતા જાળવવા ${dap} kg/ha DAP ની ભલામણ કરે છે."
                )
            continue

        if 'Nitrogen Management' in tr:
            val_m = re.search(r'\(([\d\.]+)\s*kg\/ha\)', tr, re.I)
            val = val_m.group(1) if val_m else '140.0'
            t_m = re.search(r'target of\s*([\d\.]+)\s*kg\/ha N', tr, re.I)
            target = t_m.group(1) if t_m else '112.5'
            nd_m = re.search(r'Accounting for\s*([\d\.]+)\s*kg N', tr, re.I)
            n_dap = nd_m.group(1) if nd_m else '13.2'
            rem_m = re.search(r'remaining\s*([\d\.]+)\s*kg\/ha N', tr, re.I)
            rem_n = rem_m.group(1) if rem_m else '99.3'
            u_m = re.search(r'through\s*([\d\.]+)\s*kg\/ha', tr, re.I)
            urea = u_m.group(1) if u_m else '215.9'

            translated_lines.append(
                f"  • नाइट्रोजन प्रबंधन : मिट्टी में उपलब्ध नाइट्रोजन ({val} kg/ha) है, जिससे फसल का समायोजित लक्ष्य {target} kg/ha N निर्धारित हुआ है। DAP से प्राप्त {n_dap} kg N को घटाकर, शेष {rem_n} kg/ha N की पूर्ति {urea} kg/ha यूरिया द्वारा की जाती है, जिसे नाइट्रोजन उपयोग दक्षता (NUE) बढ़ाने और बर्बादी रोकने के लिए विकास के विभिन्न चरणों में विभाजित खुराक में दिया जाता है।"
                if lang == 'hi' else
                f"  • નાઇટ્રોજન વ્યવસ્થાપન : જમીનમાં ઉપલબ્ધ નાઇટ્રોજન ({val} kg/ha) હોવાથી પાકનો સંશોધિત લક્ષ્યાંક {target} kg/ha N નક્કી થયો છે. DAP માંથી મળતા {n_dap} kg N ને બાદ કરતાં, બાકીનો {rem_n} kg/ha N {urea} kg/ha યુરિયા દ્વારા પૂરો પાડવામાં આવે છે, જે નાઇટ્રોજન ઉપયોગ ક્ષમતા (NUE) વધારવા અને બગાડ અટકાવવા તબક્કાવાર વહેંચીને આપવામાં આવે છે."
            )
            continue

        if 'Potassium Management' in tr:
            val_m = re.search(r'\(([\d\.]+)\s*kg\/ha\)', tr, re.I)
            val = val_m.group(1) if val_m else '134.0'
            mop_m = re.search(r'([\d\.]+)\s*kg\/ha MOP', tr, re.I)
            mop = mop_m.group(1) if mop_m else '75.0'
            k_m = re.search(r'supply\s*([\d\.]+)\s*kg K2O', tr, re.I)
            k = k_m.group(1) if k_m else '45.0'

            if 'already HIGH' in tr:
                translated_lines.append(
                    f"  • पोटैशियम प्रबंधन : मिट्टी में उपलब्ध पोटैशियम पहले से अधिक ({val} kg/ha) है। मॉडल मिट्टी की कमी सुधारने के बजाय दाना/फली भराव के लिए {mop} kg/ha MOP की रखरखाव खुराक की सिफारिश करता है।"
                    if lang == 'hi' else
                    f"  • પોટેશિયમ વ્યવસ્થાપન : જમીનમાં ઉપલબ્ધ પોટેશિયમ પહેલેથી વધુ ({val} kg/ha) છે. મોડેલ જમીનની ખામી સુધારવાને બદલે દાણા ભરાવ માટે {mop} kg/ha MOP નિભાવ માત્રા તરીકે આપવાની ભલામણ કરે છે."
                )
            elif 'LOW' in tr:
                translated_lines.append(
                    f"  • पोटैशियम प्रबंधन : मिट्टी में उपलब्ध पोटैशियम कम ({val} kg/ha) है। मॉडल मिट्टी की कमी दूर करने और पौधों की मजबूती के लिए {k} kg K₂O देने हेतु {mop} kg/ha MOP की सिफारिश करता है।"
                    if lang == 'hi' else
                    f"  • પોટેશિયમ વ્યવસ્થાપન : જમીનમાં ઉપલબ્ધ પોટેશિયમ ઓછું ({val} kg/ha) છે. મોડેલ જમીનની ખામી સુધારવા અને પાકની રોગપ્રતિકારક શક્તિ વધારવા {k} kg K₂O આપવા {mop} kg/ha MOP ની ભલામણ કરે છે."
                )
            else:
                translated_lines.append(
                    f"  • पोटैशियम प्रबंधन : मिट्टी में उपलब्ध पोटैशियम मध्यम ({val} kg/ha) श्रेणी में है। मॉडल मानक फसल अवशोषण आवश्यकताओं को पूरा करने के लिए {k} kg K₂O प्रदान करने हेतु {mop} kg/ha MOP की सिफारिश करता है।"
                    if lang == 'hi' else
                    f"  • પોટેશિયમ વ્યવસ્થાપન : જમીનમાં ઉપલબ્ધ પોટેશિયમ મધ્યમ ({val} kg/ha) છે. મોડેલ પાકની પ્રમાણભૂત પોષક જરૂરિયાતો પૂરી કરવા {k} kg K₂O આપવા માટે {mop} kg/ha MOP ની ભલામણ કરે છે."
                )
            continue

        if re.search(r'^3\.\s*SUMMARY', tr, re.I):
            translated_lines.append('3. सारांश:' if lang == 'hi' else '3. સારાંશ:')
            continue

        if 'The recommended fertilizer quantities are generated by the AI model' in tr:
            translated_lines.append(
                "  अनुशंसित उर्वरक मात्राएं AI मॉडल द्वारा फसल की आवश्यकताओं और मिट्टी की स्थिति के आधार पर निर्धारित की गई हैं। मिट्टी परीक्षण मान प्रारंभिक उर्वरता दर्शाते हैं, जबकि यह उर्वरक समय-सारणी लक्षित फसल के लिए सटीक संतुलित पोषक तत्व प्रदान करती है।"
                if lang == 'hi' else
                "  ભલામણ કરેલ ખાતરનો જથ્થો AI મોડેલ દ્વારા પાકની જરૂરિયાતો અને જમીનની સ્થિતિના આધારે નક્કી કરવામાં આવ્યો છે. જમીન ચકાસણી પરિણામો મૂળ ફળદ્રુપતા દર્શાવે છે, જ્યારે ખાતરની આ સમય-સારણી પાક માટે સચોટ સંતુલિત પોષક તત્વો પૂરા પાડે છે."
            )
            continue

        translated_lines.append(line)

    return '\n'.join(translated_lines)

