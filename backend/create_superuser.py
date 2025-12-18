# backend/create_superuser.py

import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
django.setup()

from django.contrib.auth.models import User

USERNAME = os.environ.get("DJANGO_SUPERUSER_NAME", "admin")
EMAIL = os.environ.get("DJANGO_SUPERUSER_EMAIL", "cybahuntaa@gmail.com")
PASSWORD = os.environ.get("DJANGO_SUPERUSER_PASSWORD", "emily@1234")

if not User.objects.filter(username=USERNAME).exists():
    User.objects.create_superuser(USERNAME, EMAIL, PASSWORD)
    print(f"Superuser '{USERNAME}' created.")
else:
    print(f"Superuser '{USERNAME}' already exists.")
