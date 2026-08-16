"""
WSGI config for precision_fertilizer project.
"""

import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'precision_fertilizer.settings')

application = get_wsgi_application()
