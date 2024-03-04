# Version 1.0.0
FROM node

RUN mkdir /myapp

COPY . /myapp/

WORKDIR /myapp/

RUN npm install

CMD ['npm','start']

EXPOSE 3000
