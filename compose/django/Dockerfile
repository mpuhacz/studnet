
FROM python:2.7
ENV PYTHONUNBUFFERED 1


COPY ./requirements.txt /

RUN apt-get update && apt-get install binutils libproj-dev -y
RUN pip install -r /requirements.txt \
    && groupadd -r django \
    && useradd -r -g django django

RUN mkdir /app
#COPY . /app
RUN chown -R django /app

COPY ./compose/django/gunicorn.sh /gunicorn.sh
COPY ./compose/django/entrypoint.sh /entrypoint.sh
RUN sed -i 's/\r//' /entrypoint.sh \
    && sed -i 's/\r//' /gunicorn.sh \
    && chmod +x /entrypoint.sh \
    && chown django /entrypoint.sh \
    && chmod +x /gunicorn.sh \
    && chown django /gunicorn.sh

WORKDIR /app

ENTRYPOINT ["/entrypoint.sh"]
