"""
Agro-Meteorological Service for Precision Fertilizer Timing & Spray Windows
===========================================================================
Location-aware live weather service integrating real-time meteorological feeds,
state/district coordinate resolution, 48-hour cumulative rainfall forecasting,
and rule-based agro-meteorological spray safety indicators.
"""

import os
import time
import json
import logging
import urllib.request
import urllib.parse
from typing import Dict, Any, Optional, Tuple

logger = logging.getLogger("fertilizer_app.weather")

# ---------------------------------------------------------------------------
# 1. State Representative Coordinates Database (32 States & UTs)
# ---------------------------------------------------------------------------
STATE_LOCATIONS: Dict[str, Dict[str, Any]] = {
    "Andaman And Nicobar Islands": {"name": "Port Blair", "latitude": 11.6234, "longitude": 92.7265},
    "Andhra Pradesh": {"name": "Amaravati", "latitude": 16.5745, "longitude": 80.3575},
    "Arunachal Pradesh": {"name": "Itanagar", "latitude": 27.0844, "longitude": 93.6053},
    "Assam": {"name": "Guwahati", "latitude": 26.1445, "longitude": 91.7362},
    "Bihar": {"name": "Patna", "latitude": 25.5941, "longitude": 85.1376},
    "Chhattisgarh": {"name": "Raipur", "latitude": 21.2514, "longitude": 81.6296},
    "Goa": {"name": "Panaji", "latitude": 15.4909, "longitude": 73.8278},
    "Gujarat": {"name": "Ahmedabad", "latitude": 23.0225, "longitude": 72.5714},
    "Haryana": {"name": "Chandigarh", "latitude": 30.7333, "longitude": 76.7794},
    "Himachal Pradesh": {"name": "Shimla", "latitude": 31.1048, "longitude": 77.1734},
    "Jammu And Kashmir": {"name": "Srinagar", "latitude": 34.0837, "longitude": 74.7973},
    "Jharkhand": {"name": "Ranchi", "latitude": 23.3441, "longitude": 85.3096},
    "Karnataka": {"name": "Bengaluru", "latitude": 12.9716, "longitude": 77.5946},
    "Kerala": {"name": "Thiruvananthapuram", "latitude": 8.5241, "longitude": 76.9366},
    "Ladakh": {"name": "Leh", "latitude": 34.1526, "longitude": 77.5771},
    "Madhya Pradesh": {"name": "Bhopal", "latitude": 23.2599, "longitude": 77.4126},
    "Maharashtra": {"name": "Mumbai", "latitude": 19.0760, "longitude": 72.8777},
    "Manipur": {"name": "Imphal", "latitude": 24.8170, "longitude": 93.9368},
    "Meghalaya": {"name": "Shillong", "latitude": 25.5788, "longitude": 91.8933},
    "Mizoram": {"name": "Aizawl", "latitude": 23.7271, "longitude": 92.7176},
    "Nagaland": {"name": "Kohima", "latitude": 25.6751, "longitude": 94.1086},
    "Odisha": {"name": "Bhubaneswar", "latitude": 20.2961, "longitude": 85.8245},
    "Puducherry": {"name": "Puducherry", "latitude": 11.9416, "longitude": 79.8083},
    "Punjab": {"name": "Chandigarh", "latitude": 30.7333, "longitude": 76.7794},
    "Rajasthan": {"name": "Jaipur", "latitude": 26.9124, "longitude": 75.7873},
    "Sikkim": {"name": "Gangtok", "latitude": 27.3389, "longitude": 88.6065},
    "Tamil Nadu": {"name": "Chennai", "latitude": 13.0827, "longitude": 80.2707},
    "Telangana": {"name": "Hyderabad", "latitude": 17.3850, "longitude": 78.4867},
    "Tripura": {"name": "Agartala", "latitude": 23.8315, "longitude": 91.2868},
    "Uttar Pradesh": {"name": "Lucknow", "latitude": 26.8467, "longitude": 80.9462},
    "Uttarakhand": {"name": "Dehradun", "latitude": 30.3165, "longitude": 78.0322},
    "West Bengal": {"name": "Kolkata", "latitude": 22.5726, "longitude": 88.3639}
}

# ---------------------------------------------------------------------------
# 2. Major Agricultural Districts Coordinates Database
# ---------------------------------------------------------------------------
DISTRICT_LOCATIONS: Dict[str, Dict[str, Any]] = {
    # Gujarat
    "ahmedabad": {"name": "Ahmedabad", "latitude": 23.0225, "longitude": 72.5714, "state": "Gujarat"},
    "surat": {"name": "Surat", "latitude": 21.1702, "longitude": 72.8311, "state": "Gujarat"},
    "vadodara": {"name": "Vadodara", "latitude": 22.3072, "longitude": 73.1812, "state": "Gujarat"},
    "rajkot": {"name": "Rajkot", "latitude": 22.3039, "longitude": 70.8022, "state": "Gujarat"},
    "bhavnagar": {"name": "Bhavnagar", "latitude": 21.7645, "longitude": 72.1519, "state": "Gujarat"},
    "jamnagar": {"name": "Jamnagar", "latitude": 22.4707, "longitude": 70.0577, "state": "Gujarat"},
    "junagadh": {"name": "Junagadh", "latitude": 21.5222, "longitude": 70.4579, "state": "Gujarat"},
    "gandhinagar": {"name": "Gandhinagar", "latitude": 23.2156, "longitude": 72.6369, "state": "Gujarat"},
    "anand": {"name": "Anand", "latitude": 22.5645, "longitude": 72.9289, "state": "Gujarat"},
    "kheda": {"name": "Kheda", "latitude": 22.7519, "longitude": 72.6859, "state": "Gujarat"},
    "mehsana": {"name": "Mehsana", "latitude": 23.5880, "longitude": 72.3693, "state": "Gujarat"},
    "banaskantha": {"name": "Palanpur", "latitude": 24.1724, "longitude": 72.4346, "state": "Gujarat"},
    "sabarkantha": {"name": "Himmatnagar", "latitude": 23.5977, "longitude": 73.0645, "state": "Gujarat"},
    "amreli": {"name": "Amreli", "latitude": 21.6032, "longitude": 71.2221, "state": "Gujarat"},
    "bharuch": {"name": "Bharuch", "latitude": 21.7051, "longitude": 72.9959, "state": "Gujarat"},
    "kachchh": {"name": "Bhuj", "latitude": 23.2420, "longitude": 69.6669, "state": "Gujarat"},
    "kutch": {"name": "Bhuj", "latitude": 23.2420, "longitude": 69.6669, "state": "Gujarat"},
    "navsari": {"name": "Navsari", "latitude": 20.9467, "longitude": 72.9520, "state": "Gujarat"},
    "valsad": {"name": "Valsad", "latitude": 20.6100, "longitude": 72.9258, "state": "Gujarat"},
    "patan": {"name": "Patan", "latitude": 23.8493, "longitude": 72.1266, "state": "Gujarat"},
    "surendranagar": {"name": "Surendranagar", "latitude": 22.7277, "longitude": 71.6370, "state": "Gujarat"},
    "panchmahal": {"name": "Godhra", "latitude": 22.7758, "longitude": 73.6149, "state": "Gujarat"},
    "dahod": {"name": "Dahod", "latitude": 22.8375, "longitude": 74.2546, "state": "Gujarat"},
    "morbi": {"name": "Morbi", "latitude": 22.8173, "longitude": 70.8375, "state": "Gujarat"},
    "botad": {"name": "Botad", "latitude": 22.1706, "longitude": 71.6669, "state": "Gujarat"},
    "gir somnath": {"name": "Veraval", "latitude": 20.9004, "longitude": 70.3667, "state": "Gujarat"},

    # Maharashtra
    "mumbai": {"name": "Mumbai", "latitude": 19.0760, "longitude": 72.8777, "state": "Maharashtra"},
    "pune": {"name": "Pune", "latitude": 18.5204, "longitude": 73.8567, "state": "Maharashtra"},
    "nagpur": {"name": "Nagpur", "latitude": 21.1458, "longitude": 79.0882, "state": "Maharashtra"},
    "nashik": {"name": "Nashik", "latitude": 19.9975, "longitude": 73.7898, "state": "Maharashtra"},
    "aurangabad": {"name": "Chhatrapati Sambhajinagar", "latitude": 19.8762, "longitude": 75.3433, "state": "Maharashtra"},
    "chhatrapati sambhajinagar": {"name": "Chhatrapati Sambhajinagar", "latitude": 19.8762, "longitude": 75.3433, "state": "Maharashtra"},
    "solapur": {"name": "Solapur", "latitude": 17.6599, "longitude": 75.9064, "state": "Maharashtra"},
    "kolhapur": {"name": "Kolhapur", "latitude": 16.7050, "longitude": 74.2433, "state": "Maharashtra"},
    "amravati": {"name": "Amravati", "latitude": 20.9374, "longitude": 77.7796, "state": "Maharashtra"},
    "nanded": {"name": "Nanded", "latitude": 19.1383, "longitude": 77.3210, "state": "Maharashtra"},
    "sangli": {"name": "Sangli", "latitude": 16.8524, "longitude": 74.5815, "state": "Maharashtra"},
    "satara": {"name": "Satara", "latitude": 17.6805, "longitude": 74.0183, "state": "Maharashtra"},
    "jalgaon": {"name": "Jalgaon", "latitude": 21.0077, "longitude": 75.5626, "state": "Maharashtra"},
    "ahmednagar": {"name": "Ahmednagar", "latitude": 19.0948, "longitude": 74.7480, "state": "Maharashtra"},
    "ahilyanagar": {"name": "Ahilyanagar", "latitude": 19.0948, "longitude": 74.7480, "state": "Maharashtra"},
    "latur": {"name": "Latur", "latitude": 18.4088, "longitude": 76.5604, "state": "Maharashtra"},
    "akola": {"name": "Akola", "latitude": 20.7002, "longitude": 77.0082, "state": "Maharashtra"},
    "chandrapur": {"name": "Chandrapur", "latitude": 19.9615, "longitude": 79.2961, "state": "Maharashtra"},
    "yavatmal": {"name": "Yavatmal", "latitude": 20.3888, "longitude": 78.1204, "state": "Maharashtra"},

    # Punjab & Haryana
    "ludhiana": {"name": "Ludhiana", "latitude": 30.9010, "longitude": 75.8573, "state": "Punjab"},
    "amritsar": {"name": "Amritsar", "latitude": 31.6340, "longitude": 74.8723, "state": "Punjab"},
    "jalandhar": {"name": "Jalandhar", "latitude": 31.3260, "longitude": 75.5762, "state": "Punjab"},
    "patiala": {"name": "Patiala", "latitude": 30.3398, "longitude": 76.3869, "state": "Punjab"},
    "bathinda": {"name": "Bathinda", "latitude": 30.2110, "longitude": 74.9455, "state": "Punjab"},
    "karnal": {"name": "Karnal", "latitude": 29.6857, "longitude": 76.9905, "state": "Haryana"},
    "hisar": {"name": "Hisar", "latitude": 29.1492, "longitude": 75.7217, "state": "Haryana"},
    "rohtak": {"name": "Rohtak", "latitude": 28.8955, "longitude": 76.6066, "state": "Haryana"},
    "ambala": {"name": "Ambala", "latitude": 30.3782, "longitude": 76.7767, "state": "Haryana"},
    "gurugram": {"name": "Gurugram", "latitude": 28.4595, "longitude": 77.0266, "state": "Haryana"},
    "faridabad": {"name": "Faridabad", "latitude": 28.4089, "longitude": 77.3178, "state": "Haryana"},
    "sirsa": {"name": "Sirsa", "latitude": 29.5349, "longitude": 75.0298, "state": "Haryana"},

    # Uttar Pradesh
    "lucknow": {"name": "Lucknow", "latitude": 26.8467, "longitude": 80.9462, "state": "Uttar Pradesh"},
    "kanpur": {"name": "Kanpur", "latitude": 26.4499, "longitude": 80.3319, "state": "Uttar Pradesh"},
    "kanpur nagar": {"name": "Kanpur", "latitude": 26.4499, "longitude": 80.3319, "state": "Uttar Pradesh"},
    "varanasi": {"name": "Varanasi", "latitude": 25.3176, "longitude": 82.9739, "state": "Uttar Pradesh"},
    "prayagraj": {"name": "Prayagraj", "latitude": 25.4358, "longitude": 81.8463, "state": "Uttar Pradesh"},
    "allahabad": {"name": "Prayagraj", "latitude": 25.4358, "longitude": 81.8463, "state": "Uttar Pradesh"},
    "agra": {"name": "Agra", "latitude": 27.1767, "longitude": 78.0081, "state": "Uttar Pradesh"},
    "meerut": {"name": "Meerut", "latitude": 28.9845, "longitude": 77.7064, "state": "Uttar Pradesh"},
    "bareilly": {"name": "Bareilly", "latitude": 28.3670, "longitude": 79.4304, "state": "Uttar Pradesh"},
    "aligarh": {"name": "Aligarh", "latitude": 27.8974, "longitude": 78.0880, "state": "Uttar Pradesh"},
    "moradabad": {"name": "Moradabad", "latitude": 28.8386, "longitude": 78.7733, "state": "Uttar Pradesh"},
    "gorakhpur": {"name": "Gorakhpur", "latitude": 26.7606, "longitude": 83.3732, "state": "Uttar Pradesh"},
    "ayodhya": {"name": "Ayodhya", "latitude": 26.7922, "longitude": 82.1998, "state": "Uttar Pradesh"},
    "faizabad": {"name": "Ayodhya", "latitude": 26.7922, "longitude": 82.1998, "state": "Uttar Pradesh"},
    "jhansi": {"name": "Jhansi", "latitude": 25.4484, "longitude": 78.5685, "state": "Uttar Pradesh"},
    "mathura": {"name": "Mathura", "latitude": 27.4924, "longitude": 77.6737, "state": "Uttar Pradesh"},

    # Madhya Pradesh
    "bhopal": {"name": "Bhopal", "latitude": 23.2599, "longitude": 77.4126, "state": "Madhya Pradesh"},
    "indore": {"name": "Indore", "latitude": 22.7196, "longitude": 75.8577, "state": "Madhya Pradesh"},
    "jabalpur": {"name": "Jabalpur", "latitude": 23.1815, "longitude": 79.9864, "state": "Madhya Pradesh"},
    "gwalior": {"name": "Gwalior", "latitude": 26.2183, "longitude": 78.1828, "state": "Madhya Pradesh"},
    "ujjain": {"name": "Ujjain", "latitude": 23.1765, "longitude": 75.7885, "state": "Madhya Pradesh"},
    "sagar": {"name": "Sagar", "latitude": 23.8388, "longitude": 78.7378, "state": "Madhya Pradesh"},
    "rewa": {"name": "Rewa", "latitude": 24.5362, "longitude": 81.3037, "state": "Madhya Pradesh"},
    "satna": {"name": "Satna", "latitude": 24.5802, "longitude": 80.8322, "state": "Madhya Pradesh"},
    "ratlam": {"name": "Ratlam", "latitude": 23.3315, "longitude": 75.0367, "state": "Madhya Pradesh"},

    # Rajasthan
    "jaipur": {"name": "Jaipur", "latitude": 26.9124, "longitude": 75.7873, "state": "Rajasthan"},
    "jodhpur": {"name": "Jodhpur", "latitude": 26.2389, "longitude": 73.0243, "state": "Rajasthan"},
    "kota": {"name": "Kota", "latitude": 25.2138, "longitude": 75.8648, "state": "Rajasthan"},
    "bikaner": {"name": "Bikaner", "latitude": 28.0229, "longitude": 73.3119, "state": "Rajasthan"},
    "ajmer": {"name": "Ajmer", "latitude": 26.4499, "longitude": 74.6399, "state": "Rajasthan"},
    "udaipur": {"name": "Udaipur", "latitude": 24.5854, "longitude": 73.7125, "state": "Rajasthan"},
    "bhilwara": {"name": "Bhilwara", "latitude": 25.3216, "longitude": 74.6307, "state": "Rajasthan"},
    "alwar": {"name": "Alwar", "latitude": 27.5530, "longitude": 76.6346, "state": "Rajasthan"},
    "sriganganagar": {"name": "Sri Ganganagar", "latitude": 29.9038, "longitude": 73.8772, "state": "Rajasthan"},
    "ganganagar": {"name": "Sri Ganganagar", "latitude": 29.9038, "longitude": 73.8772, "state": "Rajasthan"},

    # Karnataka
    "bengaluru": {"name": "Bengaluru", "latitude": 12.9716, "longitude": 77.5946, "state": "Karnataka"},
    "bangalore": {"name": "Bengaluru", "latitude": 12.9716, "longitude": 77.5946, "state": "Karnataka"},
    "bengaluru urban": {"name": "Bengaluru", "latitude": 12.9716, "longitude": 77.5946, "state": "Karnataka"},
    "mysuru": {"name": "Mysuru", "latitude": 12.2958, "longitude": 76.6394, "state": "Karnataka"},
    "mysore": {"name": "Mysuru", "latitude": 12.2958, "longitude": 76.6394, "state": "Karnataka"},
    "belagavi": {"name": "Belagavi", "latitude": 15.8497, "longitude": 74.4977, "state": "Karnataka"},
    "belgaum": {"name": "Belagavi", "latitude": 15.8497, "longitude": 74.4977, "state": "Karnataka"},
    "hubballi": {"name": "Hubballi", "latitude": 15.3647, "longitude": 75.1240, "state": "Karnataka"},
    "dharwad": {"name": "Dharwad", "latitude": 15.4589, "longitude": 75.0078, "state": "Karnataka"},
    "kalaburagi": {"name": "Kalaburagi", "latitude": 17.3297, "longitude": 76.8343, "state": "Karnataka"},
    "gulbarga": {"name": "Kalaburagi", "latitude": 17.3297, "longitude": 76.8343, "state": "Karnataka"},
    "ballari": {"name": "Ballari", "latitude": 15.1394, "longitude": 76.9214, "state": "Karnataka"},
    "bellary": {"name": "Ballari", "latitude": 15.1394, "longitude": 76.9214, "state": "Karnataka"},
    "shivamogga": {"name": "Shivamogga", "latitude": 13.9299, "longitude": 75.5681, "state": "Karnataka"},
    "shimoga": {"name": "Shivamogga", "latitude": 13.9299, "longitude": 75.5681, "state": "Karnataka"},
    "mangaluru": {"name": "Mangaluru", "latitude": 12.9141, "longitude": 74.8560, "state": "Karnataka"},
    "dakshina kannada": {"name": "Mangaluru", "latitude": 12.9141, "longitude": 74.8560, "state": "Karnataka"},

    # Tamil Nadu
    "chennai": {"name": "Chennai", "latitude": 13.0827, "longitude": 80.2707, "state": "Tamil Nadu"},
    "coimbatore": {"name": "Coimbatore", "latitude": 11.0168, "longitude": 76.9558, "state": "Tamil Nadu"},
    "madurai": {"name": "Madurai", "latitude": 9.9252, "longitude": 78.1198, "state": "Tamil Nadu"},
    "tiruchirappalli": {"name": "Tiruchirappalli", "latitude": 10.7905, "longitude": 78.7047, "state": "Tamil Nadu"},
    "trichy": {"name": "Tiruchirappalli", "latitude": 10.7905, "longitude": 78.7047, "state": "Tamil Nadu"},
    "salem": {"name": "Salem", "latitude": 11.6643, "longitude": 78.1460, "state": "Tamil Nadu"},
    "tirunelveli": {"name": "Tirunelveli", "latitude": 8.7139, "longitude": 77.7567, "state": "Tamil Nadu"},
    "erode": {"name": "Erode", "latitude": 11.3410, "longitude": 77.7172, "state": "Tamil Nadu"},
    "vellore": {"name": "Vellore", "latitude": 12.9165, "longitude": 79.1325, "state": "Tamil Nadu"},
    "thanjavur": {"name": "Thanjavur", "latitude": 10.7870, "longitude": 79.1378, "state": "Tamil Nadu"},

    # Andhra Pradesh & Telangana
    "visakhapatnam": {"name": "Visakhapatnam", "latitude": 17.6868, "longitude": 83.2185, "state": "Andhra Pradesh"},
    "vijayawada": {"name": "Vijayawada", "latitude": 16.5062, "longitude": 80.6480, "state": "Andhra Pradesh"},
    "guntur": {"name": "Guntur", "latitude": 16.3067, "longitude": 80.4365, "state": "Andhra Pradesh"},
    "kurnool": {"name": "Kurnool", "latitude": 15.8281, "longitude": 78.0373, "state": "Andhra Pradesh"},
    "chittoor": {"name": "Chittoor", "latitude": 13.2172, "longitude": 79.1003, "state": "Andhra Pradesh"},
    "tirupati": {"name": "Tirupati", "latitude": 13.6288, "longitude": 79.4192, "state": "Andhra Pradesh"},
    "hyderabad": {"name": "Hyderabad", "latitude": 17.3850, "longitude": 78.4867, "state": "Telangana"},
    "warangal": {"name": "Warangal", "latitude": 17.9689, "longitude": 79.5941, "state": "Telangana"},
    "nizamabad": {"name": "Nizamabad", "latitude": 18.6725, "longitude": 78.0941, "state": "Telangana"},
    "karimnagar": {"name": "Karimnagar", "latitude": 18.4386, "longitude": 79.1288, "state": "Telangana"},
    "khammam": {"name": "Khammam", "latitude": 17.2473, "longitude": 80.1514, "state": "Telangana"},

    # West Bengal & Bihar
    "kolkata": {"name": "Kolkata", "latitude": 22.5726, "longitude": 88.3639, "state": "West Bengal"},
    "howrah": {"name": "Howrah", "latitude": 22.5958, "longitude": 88.2636, "state": "West Bengal"},
    "siliguri": {"name": "Siliguri", "latitude": 26.7271, "longitude": 88.3953, "state": "West Bengal"},
    "darjeeling": {"name": "Darjeeling", "latitude": 27.0410, "longitude": 88.2663, "state": "West Bengal"},
    "asansol": {"name": "Asansol", "latitude": 23.6739, "longitude": 86.9524, "state": "West Bengal"},
    "bardhaman": {"name": "Bardhaman", "latitude": 23.2324, "longitude": 87.8615, "state": "West Bengal"},
    "purba bardhaman": {"name": "Bardhaman", "latitude": 23.2324, "longitude": 87.8615, "state": "West Bengal"},
    "murshidabad": {"name": "Baharampur", "latitude": 24.0984, "longitude": 88.2680, "state": "West Bengal"},
    "patna": {"name": "Patna", "latitude": 25.5941, "longitude": 85.1376, "state": "Bihar"},
    "gaya": {"name": "Gaya", "latitude": 24.7914, "longitude": 85.0002, "state": "Bihar"},
    "muzaffarpur": {"name": "Muzaffarpur", "latitude": 26.1209, "longitude": 85.3647, "state": "Bihar"},
    "bhagalpur": {"name": "Bhagalpur", "latitude": 25.2425, "longitude": 86.9842, "state": "Bihar"},
    "darbhanga": {"name": "Darbhanga", "latitude": 26.1542, "longitude": 85.8918, "state": "Bihar"},
    "purnia": {"name": "Purnia", "latitude": 25.7771, "longitude": 87.4753, "state": "Bihar"},

    # Odisha & Jharkhand & Chhattisgarh
    "bhubaneswar": {"name": "Bhubaneswar", "latitude": 20.2961, "longitude": 85.8245, "state": "Odisha"},
    "cuttack": {"name": "Cuttack", "latitude": 20.4625, "longitude": 85.8828, "state": "Odisha"},
    "rourkela": {"name": "Rourkela", "latitude": 22.2604, "longitude": 84.8536, "state": "Odisha"},
    "sundargarh": {"name": "Sundargarh", "latitude": 22.1167, "longitude": 84.0333, "state": "Odisha"},
    "sambalpur": {"name": "Sambalpur", "latitude": 21.4669, "longitude": 83.9812, "state": "Odisha"},
    "puri": {"name": "Puri", "latitude": 19.8135, "longitude": 85.8312, "state": "Odisha"},
    "balasore": {"name": "Balasore", "latitude": 21.4934, "longitude": 86.9135, "state": "Odisha"},
    "ranchi": {"name": "Ranchi", "latitude": 23.3441, "longitude": 85.3096, "state": "Jharkhand"},
    "dhanbad": {"name": "Dhanbad", "latitude": 23.7957, "longitude": 86.4304, "state": "Jharkhand"},
    "jamshedpur": {"name": "Jamshedpur", "latitude": 22.8046, "longitude": 86.2029, "state": "Jharkhand"},
    "east singhbhum": {"name": "Jamshedpur", "latitude": 22.8046, "longitude": 86.2029, "state": "Jharkhand"},
    "bokaro": {"name": "Bokaro", "latitude": 23.6693, "longitude": 86.1511, "state": "Jharkhand"},
    "raipur": {"name": "Raipur", "latitude": 21.2514, "longitude": 81.6296, "state": "Chhattisgarh"},
    "bilaspur": {"name": "Bilaspur", "latitude": 22.0797, "longitude": 82.1409, "state": "Chhattisgarh"},
    "durg": {"name": "Durg", "latitude": 21.1904, "longitude": 81.2849, "state": "Chhattisgarh"},
    "rajnandgaon": {"name": "Rajnandgaon", "latitude": 21.0974, "longitude": 81.0345, "state": "Chhattisgarh"},

    # Kerala
    "thiruvananthapuram": {"name": "Thiruvananthapuram", "latitude": 8.5241, "longitude": 76.9366, "state": "Kerala"},
    "kochi": {"name": "Kochi", "latitude": 9.9312, "longitude": 76.2673, "state": "Kerala"},
    "ernakulam": {"name": "Kochi", "latitude": 9.9312, "longitude": 76.2673, "state": "Kerala"},
    "kozhikode": {"name": "Kozhikode", "latitude": 11.2588, "longitude": 75.7804, "state": "Kerala"},
    "thrissur": {"name": "Thrissur", "latitude": 10.5276, "longitude": 76.2144, "state": "Kerala"},
    "palakkad": {"name": "Palakkad", "latitude": 10.7867, "longitude": 76.6548, "state": "Kerala"},
    "kollam": {"name": "Kollam", "latitude": 8.8932, "longitude": 76.6141, "state": "Kerala"},
    "kottayam": {"name": "Kottayam", "latitude": 9.5916, "longitude": 76.5222, "state": "Kerala"},
    "alappuzha": {"name": "Alappuzha", "latitude": 9.4981, "longitude": 76.3388, "state": "Kerala"},
}


# ---------------------------------------------------------------------------
# 3. Coordinate Resolution Engine
# ---------------------------------------------------------------------------
def normalize_key(name: Optional[str]) -> str:
    """Sanitizes place names for robust dictionary lookup."""
    if not name:
        return ""
    # Strip whitespace, lower case, replace hyphens and underscores
    clean = name.strip().lower().replace("-", " ").replace("_", " ")
    # Remove common qualifiers
    clean = clean.replace(" district", "").replace(" dist", "").strip()
    return clean


def resolve_location_coordinates(
    state_name: Optional[str] = None,
    district_name: Optional[str] = None,
    latitude: Optional[float] = None,
    longitude: Optional[float] = None
) -> Tuple[float, float, str, str, Optional[str]]:
    """
    Resolves the geographic coordinates using the hierarchical priority:
      1. Exact Latitude/Longitude if provided (GPS or direct input)
      2. Selected District coordinates within state
      3. Selected State representative coordinates
      4. Safe fallback (New Delhi / India Center)

    Returns:
      (latitude, longitude, display_location_name, resolved_state, resolved_district)
    """
    # 1. Exact GPS Coordinates provided
    if latitude is not None and longitude is not None:
        try:
            lat = float(latitude)
            lon = float(longitude)
            # Basic bounding box check for India region
            if 5.0 <= lat <= 40.0 and 65.0 <= lon <= 100.0:
                loc_parts = []
                if district_name:
                    loc_parts.append(district_name.strip())
                if state_name:
                    loc_parts.append(state_name.strip())
                display_name = ", ".join(loc_parts) if loc_parts else f"GPS ({lat:.2f}°, {lon:.2f}°)"
                return (lat, lon, display_name, state_name or "GPS Location", district_name)
        except (ValueError, TypeError):
            pass

    norm_dist = normalize_key(district_name)
    norm_state = normalize_key(state_name)

    # 2. Match District from District Database
    if norm_dist and norm_dist in DISTRICT_LOCATIONS:
        d_info = DISTRICT_LOCATIONS[norm_dist]
        state_display = state_name.strip() if state_name else d_info.get("state", "")
        dist_display = district_name.strip() if district_name else d_info.get("name", "")
        full_name = f"{dist_display}, {state_display}".strip(", ")
        return (d_info["latitude"], d_info["longitude"], full_name, state_display, dist_display)

    # 3. Match State from State Database
    # Look for exact or fuzzy match in STATE_LOCATIONS
    matched_state = None
    for st_key, st_info in STATE_LOCATIONS.items():
        if normalize_key(st_key) == norm_state:
            matched_state = (st_key, st_info)
            break

    if matched_state:
        st_key, st_info = matched_state
        dist_display = district_name.strip() if district_name else st_info["name"]
        full_name = f"{dist_display}, {st_key}" if district_name else f"{st_info['name']}, {st_key}"
        return (st_info["latitude"], st_info["longitude"], full_name, st_key, district_name)

    # 4. Default Representative Center (Gujarat / Central India default for SIH demo)
    default_state = "Gujarat"
    default_info = STATE_LOCATIONS[default_state]
    display_name = f"{district_name.strip()}, {default_state}" if district_name else f"{default_info['name']}, {default_state}"
    return (default_info["latitude"], default_info["longitude"], display_name, default_state, district_name)


# ---------------------------------------------------------------------------
# 4. In-Memory Weather Cache (Short-term TTL)
# ---------------------------------------------------------------------------
# Format: { (lat_round, lon_round): (timestamp, data_dict) }
_WEATHER_CACHE: Dict[Tuple[float, float], Tuple[float, Dict[str, Any]]] = {}
CACHE_TTL_SECONDS = 600  # 10 minutes cache window


# ---------------------------------------------------------------------------
# 5. Live Weather API Fetcher (Open-Meteo Primary + Optional Key Fallback)
# ---------------------------------------------------------------------------
def _fetch_from_open_meteo(latitude: float, longitude: float) -> Dict[str, Any]:
    """
    Fetches real-time and 48-hour hourly weather data from Open-Meteo forecast API.
    Zero-friction, high-accuracy global meteorological model (ECMWF/GFS).
    """
    endpoint = "https://api.open-meteo.com/v1/forecast"
    params = {
        "latitude": str(latitude),
        "longitude": str(longitude),
        "current": "temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code",
        "hourly": "precipitation,temperature_2m,relative_humidity_2m,wind_speed_10m",
        "forecast_days": "2",
        "timezone": "Asia/Kolkata"
    }

    url = f"{endpoint}?{urllib.parse.urlencode(params)}"
    req = urllib.request.Request(
        url,
        headers={"User-Agent": "KrishiKisan-Precision-Fertilizer/1.0"}
    )
    with urllib.request.urlopen(req, timeout=6.0) as response:
        if response.status != 200:
            raise RuntimeError(f"Open-Meteo HTTP error: status {response.status}")
        raw_data = response.read().decode('utf-8')
        return json.loads(raw_data)


def _wmo_code_to_condition(code: int) -> str:
    """Maps WMO Weather interpretation codes to human-readable condition text."""
    wmo_map = {
        0: "Clear Sky",
        1: "Mainly Clear",
        2: "Partly Cloudy",
        3: "Overcast",
        45: "Foggy",
        48: "Depositing Rime Fog",
        51: "Light Drizzle",
        53: "Moderate Drizzle",
        55: "Dense Drizzle",
        61: "Slight Rain",
        63: "Moderate Rain",
        65: "Heavy Rain",
        71: "Slight Snow Fall",
        80: "Slight Rain Showers",
        81: "Moderate Rain Showers",
        82: "Violent Rain Showers",
        95: "Thunderstorm",
        96: "Thunderstorm with Slight Hail",
        99: "Thunderstorm with Heavy Hail"
    }
    return wmo_map.get(code, "Clear")


# ---------------------------------------------------------------------------
# 6. Dynamic Agro-Meteorology & Spray Safety Rule Engine
# ---------------------------------------------------------------------------
def compute_spray_safety(
    temp_c: float,
    humidity_pct: float,
    rain_48h_mm: float,
    wind_kmh: float
) -> Tuple[str, str, bool, str]:
    """
    Evaluates agro-meteorological safety for fertilizer foliar spray and broadcasting.

    Returns:
      (spray_safety, risk_level, is_safe_to_apply, advice_string)
      where spray_safety in ["OPTIMAL", "CAUTION", "AVOID"]
            risk_level in ["LOW", "MEDIUM", "HIGH"]
            is_safe_to_apply is boolean
    """
    # 1. High Rain Forecast (>25mm) -> Wash-off & Leaching Danger
    if rain_48h_mm >= 25.0:
        return (
            "AVOID",
            "HIGH",
            False,
            f"Heavy rainfall ({rain_48h_mm:.1f} mm) forecast in next 48h. AVOID fertilizer application and spraying to prevent severe nutrient runoff and leaching."
        )

    # 2. Moderate Rain Forecast (10mm - 25mm) -> Caution
    if rain_48h_mm >= 10.0:
        return (
            "CAUTION",
            "MEDIUM",
            True,
            f"Moderate rainfall ({rain_48h_mm:.1f} mm) expected. Delay foliar spraying; incorporate basal fertilizer deep into soil to minimize surface loss."
        )

    # 3. High Wind Speed (>20 km/h) -> Spray Drift Danger
    if wind_kmh >= 20.0:
        return (
            "CAUTION",
            "MEDIUM",
            True,
            f"High wind velocity ({wind_kmh:.1f} km/h) detected. AVOID fine foliar spray to prevent chemical drift; soil application acceptable."
        )

    # 4. Extreme Heat (>38°C) -> Ammonia Volatilization & Leaf Scorch
    if temp_c >= 38.0:
        return (
            "CAUTION",
            "MEDIUM",
            True,
            f"High ambient heat ({temp_c:.1f}°C). Apply nitrogenous fertilizers during early morning or late evening followed by light irrigation to curb volatilization."
        )

    # 5. Very High Humidity (>85%) + Light Showers (3mm - 10mm) -> Damp/Fungal Caution
    if humidity_pct >= 85.0 and rain_48h_mm >= 3.0:
        return (
            "CAUTION",
            "MEDIUM",
            True,
            f"High relative humidity ({humidity_pct:.0f}%) with wet conditions ({rain_48h_mm:.1f} mm). Ensure good field aeration before top-dressing."
        )

    # 6. Optimal Conditions (Mild Temp, Gentle Wind, Low Rain)
    return (
        "OPTIMAL",
        "LOW",
        True,
        f"Weather is optimal ({temp_c:.1f}°C, {humidity_pct:.0f}% humidity, {rain_48h_mm:.1f} mm rain). Ideal 48h window for fertilizer broadcasting, fertigation, and foliar spray."
    )


# ---------------------------------------------------------------------------
# 7. Main Weather Orchestrator Function
# ---------------------------------------------------------------------------
def fetch_weather_data(
    latitude: Optional[float] = None,
    longitude: Optional[float] = None,
    state_name: Optional[str] = None,
    district_name: Optional[str] = None,
    force_refresh: bool = False
) -> Dict[str, Any]:
    """
    Fetches real-time localized agro-meteorological metrics.
    Coordinates are resolved dynamically from District -> State -> GPS.

    Returns:
      Comprehensive Agro-Meteorological Dictionary containing:
      - location metadata (state, district, lat, lon)
      - current conditions (temperature, humidity, wind, condition)
      - 48-hour forecast (accumulated rainfall sum, hourly profile)
      - agro indicators (spray safety status, risk level, advisory)
      - backward-compatible root keys for ML engine and ORM persistence
    """
    lat, lon, display_loc, res_state, res_district = resolve_location_coordinates(
        state_name=state_name,
        district_name=district_name,
        latitude=latitude,
        longitude=longitude
    )

    logger.info(
        "Weather request: State = %s, District = %s, Resolved = %s (Lat: %.4f, Lon: %.4f)",
        state_name, district_name, display_loc, lat, lon
    )

    cache_key = (round(lat, 2), round(lon, 2))
    now = time.time()

    # Check cache unless forced refresh
    if not force_refresh and cache_key in _WEATHER_CACHE:
        cached_time, cached_data = _WEATHER_CACHE[cache_key]
        if (now - cached_time) < CACHE_TTL_SECONDS:
            logger.info("Serving weather from cache for (%.2f, %.2f)", cache_key[0], cache_key[1])
            # Update location display if requested differently
            out = dict(cached_data)
            out["location"]["display_name"] = display_loc
            out["location"]["state"] = res_state
            out["location"]["district"] = res_district or res_state
            return out

    # Call Live Weather API
    try:
        raw_data = _fetch_from_open_meteo(latitude=lat, longitude=lon)
        logger.info("Open-Meteo API response 200 OK for Lat: %.4f, Lon: %.4f", lat, lon)

        current = raw_data.get("current", {})
        temp_c = float(current.get("temperature_2m", 28.0))
        humidity_pct = float(current.get("relative_humidity_2m", 60.0))
        wind_kmh = float(current.get("wind_speed_10m", 10.0))
        wmo_code = int(current.get("weather_code", 0))
        condition_text = _wmo_code_to_condition(wmo_code)

        # 48-Hour Precipitation Summation: sum hourly precipitation for next 48 hours
        hourly = raw_data.get("hourly", {})
        precip_series = hourly.get("precipitation", [])
        # Take the next 48 hours
        precip_48h = precip_series[:48] if precip_series else [0.0]
        rain_48h_mm = round(float(sum(precip_48h)), 1)

        # Calculate dynamic spray safety
        spray_safety, risk_level, is_safe, advice = compute_spray_safety(
            temp_c=temp_c,
            humidity_pct=humidity_pct,
            rain_48h_mm=rain_48h_mm,
            wind_kmh=wind_kmh
        )

        formatted_time = time.strftime("%I:%M %p")

        weather_payload: Dict[str, Any] = {
            # Standardized Structure
            "location": {
                "state": res_state,
                "district": res_district or res_state,
                "display_name": display_loc,
                "latitude": round(lat, 4),
                "longitude": round(lon, 4)
            },
            "current": {
                "temperature": round(temp_c, 1),
                "humidity": round(humidity_pct, 0),
                "wind_speed": round(wind_kmh, 1),
                "weather_code": wmo_code,
                "condition": condition_text
            },
            "forecast_48h": {
                "rain_mm": rain_48h_mm,
                "hourly_rain": [round(float(p), 1) for p in precip_48h]
            },
            "agro": {
                "spray_safety": spray_safety,
                "risk_level": risk_level,
                "is_safe_to_apply": is_safe,
                "advice": advice
            },
            # Backward-compatible root keys for ML model, agronomic rules, and DB records
            "temperature_c": round(temp_c, 1),
            "humidity_pct": round(humidity_pct, 1),
            "rainfall_forecast_mm": rain_48h_mm,
            "wind_speed_kmh": round(wind_kmh, 1),
            "is_safe_to_apply": is_safe,
            "risk_level": risk_level,
            "spray_safety": spray_safety,
            "advice": advice,
            "source": "Open-Meteo Live Agro-Forecast Feeds",
            "timestamp": time.strftime("%Y-%m-%dT%H:%M:%S+05:30"),
            "formatted_time": formatted_time
        }

        # Store in cache
        _WEATHER_CACHE[cache_key] = (now, weather_payload)
        return weather_payload

    except Exception as e:
        logger.error("Live weather provider failed for (%.4f, %.4f): %s", lat, lon, str(e), exc_info=True)
        # Raise exception so views and frontend can display proper error state rather than fake numbers
        raise RuntimeError(f"Live weather feed unavailable for {display_loc}: {str(e)}")
