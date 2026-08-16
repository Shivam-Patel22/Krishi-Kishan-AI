"""
Django settings snippet for agriculture database integration.
Add/merge this configuration into your Django project's settings.py.
"""

from pathlib import Path

# BASE_DIR is typically defined at the top of settings.py
BASE_DIR = Path(__file__).resolve().parent.parent

# 1. Database Configuration
# Directs Django to read the SQLite database created by the ETL pipeline
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "data" / "agriculture.db",
        # Enable WAL mode and busy timeout for concurrent read/write support
        "OPTIONS": {
            "timeout": 20,
        },
    }
}

# 2. Add your app containing the SoilRecord model
# INSTALLED_APPS = [
#     ...
#     'django.contrib.staticfiles',
#     'soil_app',  # <-- Your Django app containing models.py
# ]
