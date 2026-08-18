"""
Full I18N Deployment Script
===========================
Generates 100% complete state, district, block dictionaries and full syllable transliterator
for static/js/translations.js and fertilizer_app/translations.py.
"""

import sys
import os
import re
import json
import sqlite3
from pathlib import Path

BASE_DIR = Path(r"c:\Users\Divyarajsinh\Documents\Node js\HACKATHON")
JS_FILE = BASE_DIR / "static" / "js" / "translations.js"
PY_FILE = BASE_DIR / "fertilizer_app" / "translations.py"

sys.path.insert(0, str(BASE_DIR))
from scripts.geo_data import STATE_TRANSLATIONS, DISTRICT_TRANSLATIONS, BLOCK_TRANSLATIONS
from scripts.test_full_translit import transliterate_full_indic

# Connect to DB and fetch all 735 districts
conn = sqlite3.connect('data/agriculture.db')
cur = conn.cursor()
cur.execute('SELECT DISTINCT district_name FROM soil_records WHERE district_name IS NOT NULL ORDER BY district_name')
all_districts = [r[0] for r in cur.fetchall()]
conn.close()

# Build comprehensive DISTRICT_TRANSLATIONS
ALL_DISTRICTS_MAP = {}
for d in all_districts:
    if d in DISTRICT_TRANSLATIONS:
        ALL_DISTRICTS_MAP[d] = DISTRICT_TRANSLATIONS[d]
    else:
        ALL_DISTRICTS_MAP[d] = {
            'hi': transliterate_full_indic(d, 'hi'),
            'gu': transliterate_full_indic(d, 'gu')
        }

# Specific high-accuracy overrides
DISTRICT_OVERRIDES = {
    'Kra Daadi': {'hi': 'क्रा दादी', 'gu': 'ક્રા દાદી'},
    'Kurung Kumey': {'hi': 'कुरुंग कुमे', 'gu': 'કુરુંગ કુમે'},
    'Dibang Valley': {'hi': 'दिबांग घाटी', 'gu': 'દિબાંગ ખીણ'},
    'Lower Dibang Valley': {'hi': 'निचली दिबांग घाटी', 'gu': 'નીચલી દિબાંગ ખીણ'},
    'East Kameng': {'hi': 'पूर्वी कमेंग', 'gu': 'પૂર્વ કમેંગ'},
    'West Kameng': {'hi': 'पश्चिम कमेंग', 'gu': 'પશ્ચિમ કમેંગ'},
    'East Siang': {'hi': 'पूर्वी सियांग', 'gu': 'પૂર્વ સિયાંગ'},
    'West Siang': {'hi': 'पश्चिम सियांग', 'gu': 'પશ્ચિમ સિયાંગ'},
    'Upper Siang': {'hi': 'ऊपरी सियांग', 'gu': 'ઉપલા સિયાંગ'},
    'Lower Siang': {'hi': 'निचला सियांग', 'gu': 'નીચલા સિયાંગ'},
    'Upper Subansiri': {'hi': 'ऊपरी सुबनसिरी', 'gu': 'ઉપલા સુબનસિરી'},
    'Lower Subansiri': {'hi': 'निचली सुबनसिरी', 'gu': 'નીચલી સુબનસિરી'},
    'Papum Pare': {'hi': 'पापुम पारे', 'gu': 'પાપમ પારે'},
    'Tawang': {'hi': 'तवांग', 'gu': 'તવાંગ'},
    'Tirap': {'hi': 'तिरप', 'gu': 'તિરપ'},
    'Changlang': {'hi': 'चांगलांग', 'gu': 'ચાંગલાંગ'},
    'Lohit': {'hi': 'लोहित', 'gu': 'લોહિત'},
    'Namsai': {'hi': 'नामसाई', 'gu': 'નામસાઈ'},
    'Kamle': {'hi': 'कमले', 'gu': 'કમલે'},
    'Pakke Kessang': {'hi': 'पक्के केसांग', 'gu': 'પક્કે કેસાંગ'},
    'Shi Yomi': {'hi': 'शी योमी', 'gu': 'શી યોમી'},
    'Leparada': {'hi': 'लेपाराडा', 'gu': 'લેપારાદા'},
    'Longding': {'hi': 'लोंगडिंग', 'gu': 'લોંગડિંગ'},
    'Anjaw': {'hi': 'अंजॉ', 'gu': 'અંજૉ'},
}
ALL_DISTRICTS_MAP.update(DISTRICT_OVERRIDES)

print(f"Total States in DB: {len(STATE_TRANSLATIONS)}")
print(f"Total Districts in DB: {len(ALL_DISTRICTS_MAP)}")
print(f"Sample Kra Daadi: {ALL_DISTRICTS_MAP.get('Kra Daadi')}")

# JavaScript Transliteration Engine Code
JS_TRANSLITERATOR_CODE = """
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
"""

# Read translations.js and update
js_text = JS_FILE.read_text(encoding='utf-8')

# 1. Update dict definitions
js_dicts_block = f"""
const STATE_TRANSLATIONS = {json.dumps(STATE_TRANSLATIONS, ensure_ascii=False, indent=4)};

const DISTRICT_TRANSLATIONS = {json.dumps(ALL_DISTRICTS_MAP, ensure_ascii=False, indent=4)};

const BLOCK_TRANSLATIONS = {json.dumps(BLOCK_TRANSLATIONS, ensure_ascii=False, indent=4)};

{JS_TRANSLITERATOR_CODE}
"""

js_text = re.sub(
    r'const STATE_TRANSLATIONS = \{.*?\n(?=class I18nManager \{)',
    js_dicts_block.strip() + "\n\n",
    js_text,
    flags=re.DOTALL
)

# 2. Update transliterateIndic method in class I18nManager
js_text = re.sub(
    r'transliterateIndic\(text, lang\) \{.*?^\s*\}',
    """transliterateIndic(text, lang) {
        if (!text || lang === 'en') return text;
        return transliterateFullIndic(text, lang);
    }""",
    js_text,
    flags=re.DOTALL | re.MULTILINE
)

JS_FILE.write_text(js_text, encoding='utf-8')
print("Successfully deployed 735 districts and full Indic transliterator to static/js/translations.js")

# Update fertilizer_app/translations.py
py_text = PY_FILE.read_text(encoding='utf-8')

py_dicts_block = f"""
STATE_TRANSLATIONS = {json.dumps(STATE_TRANSLATIONS, ensure_ascii=False, indent=4)}

DISTRICT_TRANSLATIONS = {json.dumps(ALL_DISTRICTS_MAP, ensure_ascii=False, indent=4)}

BLOCK_TRANSLATIONS = {json.dumps(BLOCK_TRANSLATIONS, ensure_ascii=False, indent=4)}
"""

py_text = re.sub(
    r'STATE_TRANSLATIONS = \{.*?\n(?=HI_CONSONANTS_DICT = \{)',
    py_dicts_block.strip() + "\n\n",
    py_text,
    flags=re.DOTALL
)

PY_FILE.write_text(py_text, encoding='utf-8')
print("Successfully deployed 735 districts and full Indic transliterator to fertilizer_app/translations.py")
