FROM node:7.8.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./front /usr/src/app

RUN yarn install
RUN npm install -g create-react-app

CMD npm start