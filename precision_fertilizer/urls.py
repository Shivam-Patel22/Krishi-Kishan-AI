"""
URL configuration for precision_fertilizer project.
"""

from django.contrib import admin
from django.urls import path, include
from fertilizer_app.views import index_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('fertilizer_app.urls')),
    path('', index_view, name='home'),
]
