"""
Updater script to inject geo translations into static/js/translations.js and fertilizer_app/translations.py
"""

import json
from pathlib import Path
from scripts.geo_data import STATE_TRANSLATIONS, DISTRICT_TRANSLATIONS, BLOCK_TRANSLATIONS

BASE_DIR = Path(r"c:\Users\Divyarajsinh\Documents\Node js\HACKATHON")
JS_FILE = BASE_DIR / "static" / "js" / "translations.js"
PY_FILE = BASE_DIR / "fertilizer_app" / "translations.py"

# 1. Update translations.py
py_content = PY_FILE.read_text(encoding='utf-8')

# Check if STATE_TRANSLATIONS is already in translations.py
if "STATE_TRANSLATIONS = " not in py_content:
    geo_py_code = f"""
STATE_TRANSLATIONS = {json.dumps(STATE_TRANSLATIONS, ensure_ascii=False, indent=4)}

DISTRICT_TRANSLATIONS = {json.dumps(DISTRICT_TRANSLATIONS, ensure_ascii=False, indent=4)}

BLOCK_TRANSLATIONS = {json.dumps(BLOCK_TRANSLATIONS, ensure_ascii=False, indent=4)}


def localize_state(name: str, lang: str = 'en') -> str:
    if not name or lang == 'en':
        return name
    name_clean = name.strip()
    if name_clean in STATE_TRANSLATIONS:
        return STATE_TRANSLATIONS[name_clean].get(lang, name)
    for k, v in STATE_TRANSLATIONS.items():
        if k.lower() == name_clean.lower():
            return v.get(lang, name)
    return name


def localize_district(name: str, lang: str = 'en') -> str:
    if not name or lang == 'en':
        return name
    name_clean = name.strip()
    if name_clean in DISTRICT_TRANSLATIONS:
        return DISTRICT_TRANSLATIONS[name_clean].get(lang, name)
    for k, v in DISTRICT_TRANSLATIONS.items():
        if k.lower() == name_clean.lower():
            return v.get(lang, name)
    return name


def localize_block(name: str, lang: str = 'en') -> str:
    if not name or lang == 'en':
        return name
    name_clean = name.strip()
    if name_clean in BLOCK_TRANSLATIONS:
        return BLOCK_TRANSLATIONS[name_clean].get(lang, name)
    for k, v in BLOCK_TRANSLATIONS.items():
        if k.lower() == name_clean.lower():
            return v.get(lang, name)
    return name
"""
    # Insert after SOIL_TYPE_TRANSLATIONS
    py_content = py_content.replace("STAGE_TRANSLATIONS = {", geo_py_code + "\nSTAGE_TRANSLATIONS = {")
    PY_FILE.write_text(py_content, encoding='utf-8')
    print("Updated translations.py with geographic tables.")

# 2. Update translations.js
js_content = JS_FILE.read_text(encoding='utf-8')

geo_js_dicts = f"""
const STATE_TRANSLATIONS = {json.dumps(STATE_TRANSLATIONS, ensure_ascii=False, indent=4)};

const DISTRICT_TRANSLATIONS = {json.dumps(DISTRICT_TRANSLATIONS, ensure_ascii=False, indent=4)};

const BLOCK_TRANSLATIONS = {json.dumps(BLOCK_TRANSLATIONS, ensure_ascii=False, indent=4)};
"""

geo_methods = """
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
            const match = source.match(/\\(([^)]+)\\)/);
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
"""

if "const STATE_TRANSLATIONS = " not in js_content:
    # Insert before class I18nManager
    js_content = js_content.replace("class I18nManager {", geo_js_dicts + "\nclass I18nManager {")
    
# Insert methods into I18nManager before translateFertilizer
if "translateState(name)" not in js_content:
    js_content = js_content.replace("translateFertilizer(name) {", geo_methods + "\n    translateFertilizer(name) {")

JS_FILE.write_text(js_content, encoding='utf-8')
print("Updated translations.js with geographic methods and tables.")
