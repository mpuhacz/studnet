#!/bin/sh
python manage.py migrate
python /app/manage.py loaddata fixture.json
python manage.py runserver_plus 0.0.0.0:8000
