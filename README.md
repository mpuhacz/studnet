# stud.net

### Prerequisities
- Docker


### Setting up & Running
Building:
`docker-compose build`

Running:
`docker-compose up`

### Developing frontend:
Start only `django` and `postgres` containers:
```
docker-compose up -d django postgres
```

Then start frontend application:
```
cd front && npm start
```


### Testing
```
npm install -g create-react-app
npm test
```

Coverage:
```
npm test -- --coverage
```

### Ports:
Django: 8000
Front: 3000


### Agile:
Redmine: https://io.cs.put.poznan.pl/redmine/projects/io2-2016-2017-cmc/agile/board
