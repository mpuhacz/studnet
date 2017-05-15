#!/bin/sh
pip install -r requirements.txt
python /app/manage.py migrate
python /app/manage.py collectstatic --noinput
python /app/manage.py loaddata fixture.json
python /app/manage.py runserver 0.0.0.0:8000
#/usr/local/bin/gunicorn studnet.wsgi -w 4 -b 0.0.0.0:5000 --chdir=/app
