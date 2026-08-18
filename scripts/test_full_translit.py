"""
Comprehensive Indic Transliterator Engine for Indian Administrative Entities
"""

import re
import sqlite3

HI_PREFIX_MAP = {
    'east': 'पूर्वी',
    'west': 'पश्चिम',
    'north': 'उत्तरी',
    'south': 'दक्षिणी',
    'upper': 'ऊपरी',
    'lower': 'निचला',
    'central': 'मध्य',
    'city': 'शहर',
    'rural': 'ग्रामीण',
    'valley': 'घाटी',
    'hills': 'हिल्स',
    'islands': 'द्वीप समूह'
}

GU_PREFIX_MAP = {
    'east': 'પૂર્વ',
    'west': 'પશ્ચિમ',
    'north': 'ઉત્તર',
    'south': 'દક્ષિણ',
    'upper': 'ઉપલા',
    'lower': 'નીચલા',
    'central': 'મધ્ય',
    'city': 'શહેર',
    'rural': 'ગ્રામ્ય',
    'valley': 'ખીણ',
    'hills': 'ટેકરીઓ',
    'islands': 'દ્વીપસમૂહ'
}

HI_CONSONANTS = {
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
}

GU_CONSONANTS = {
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
}

HI_INIT_VOWELS = {
    'aa': 'आ', 'a': 'अ', 'ee': 'ई', 'i': 'इ', 'oo': 'ऊ', 'u': 'उ',
    'e': 'ए', 'ai': 'ऐ', 'ou': 'औ', 'au': 'औ', 'o': 'ओ', 'ri': 'ऋ'
}

GU_INIT_VOWELS = {
    'aa': 'આ', 'a': 'અ', 'ee': 'ઈ', 'i': 'ઇ', 'oo': 'ઊ', 'u': 'ઉ',
    'e': 'એ', 'ai': 'ઐ', 'ou': 'ઔ', 'au': 'ઔ', 'o': 'ઓ', 'ri': 'ઋ'
}

HI_MATRAS = {
    'aa': 'ा', 'a': '', 'ee': 'ी', 'i': 'ि', 'oo': 'ू', 'u': 'ु',
    'e': 'े', 'ai': 'ै', 'ou': 'ौ', 'au': 'ौ', 'o': 'ो'
}

GU_MATRAS = {
    'aa': 'ા', 'a': '', 'ee': 'ી', 'i': 'િ', 'oo': 'ૂ', 'u': 'ુ',
    'e': 'ે', 'ai': 'ૈ', 'ou': 'ૌ', 'au': 'ૌ', 'o': 'ો'
}

def transliterate_indic_word(word: str, lang: str = 'hi') -> str:
    if not word:
        return ''
    w = word.lower()
    
    # Check prefix map
    prefix_map = HI_PREFIX_MAP if lang == 'hi' else GU_PREFIX_MAP
    if w in prefix_map:
        return prefix_map[w]

    consonants = HI_CONSONANTS if lang == 'hi' else GU_CONSONANTS
    init_vowels = HI_INIT_VOWELS if lang == 'hi' else GU_INIT_VOWELS
    matras = HI_MATRAS if lang == 'hi' else GU_MATRAS
    halant = '्' if lang == 'hi' else '્'
    aa_matra = 'ा' if lang == 'hi' else 'ા'

    c_keys = sorted(consonants.keys(), key=lambda x: -len(x))
    v_keys = sorted(matras.keys(), key=lambda x: -len(x))
    init_v_keys = sorted(init_vowels.keys(), key=lambda x: -len(x))

    res = []
    i = 0
    n = len(w)
    is_word_start = True

    while i < n:
        if not w[i].isalpha():
            res.append(w[i])
            i += 1
            is_word_start = True
            continue

        if is_word_start:
            v_match = None
            for vk in init_v_keys:
                if w.startswith(vk, i):
                    v_match = vk
                    break
            if v_match:
                res.append(init_vowels[v_match])
                i += len(v_match)
                is_word_start = False
                continue

        c_match = None
        for ck in c_keys:
            if w.startswith(ck, i):
                c_match = ck
                break

        if c_match:
            c_char = consonants[c_match]
            i += len(c_match)
            is_word_start = False

            v_match = None
            for vk in v_keys:
                if w.startswith(vk, i):
                    v_match = vk
                    break

            if v_match:
                # If word ends with 'a', give it 'aa' matra (e.g. Kra -> Kra-aa, Kohima -> Kohim-aa)
                if v_match == 'a' and (i + 1 == n or not w[i+1].isalpha()):
                    res.append(c_char + aa_matra)
                else:
                    res.append(c_char + matras[v_match])
                i += len(v_match)
            else:
                if i < n and w[i].isalpha():
                    res.append(c_char + halant)
                else:
                    res.append(c_char)
        else:
            v_match = None
            for vk in init_v_keys:
                if w.startswith(vk, i):
                    v_match = vk
                    break
            if v_match:
                res.append(init_vowels[v_match])
                i += len(v_match)
            else:
                res.append(w[i])
                i += 1
            is_word_start = False

    return ''.join(res)


def transliterate_full_indic(text: str, lang: str = 'hi') -> str:
    if not text or lang == 'en':
        return text
    words = re.split(r'(\s+|-|/|\(|\)|\.)', text)
    out = []
    for part in words:
        if part.isalpha():
            out.append(transliterate_indic_word(part, lang))
        else:
            out.append(part)
    return ''.join(out)


if __name__ == '__main__':
    test_cases = [
        ('Arunachal Pradesh', 'Kra Daadi', 'Pipsorang'),
        ('Arunachal Pradesh', 'Kra Daadi', 'Chambang'),
        ('Arunachal Pradesh', 'Kra Daadi', 'Palin'),
        ('Arunachal Pradesh', 'East Kameng', 'Seppa'),
        ('Arunachal Pradesh', 'West Siang', 'Aalo'),
        ('Nagaland', 'Kohima', 'Botsa'),
        ('Nagaland', 'Kohima', 'Sechu Zubza'),
        ('Gujarat', 'Ahmedabad', 'Sanand'),
        ('Punjab', 'Ludhiana', 'Jagraon'),
        ('Tamil Nadu', 'Tiruchirappalli', 'Manapparai')
    ]

    print("=== TRANSLITERATION TEST ===")
    for st, dist, blk in test_cases:
        hi_dist = transliterate_full_indic(dist, 'hi')
        gu_dist = transliterate_full_indic(dist, 'gu')
        hi_blk = transliterate_full_indic(blk, 'hi')
        gu_blk = transliterate_full_indic(blk, 'gu')
        print(f"EN: {st} -> {dist} -> {blk}")
        print(f"HI: {transliterate_full_indic(st, 'hi')} -> {hi_dist} -> {hi_blk}")
        print(f"GU: {transliterate_full_indic(st, 'gu')} -> {gu_dist} -> {gu_blk}")
        print("-" * 50)
