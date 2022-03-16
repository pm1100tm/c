FROM node:16-alpine3.11

RUN apk add bash

WORKDIR /server

# COPY package.json ./
COPY package*.json ./

RUN npm install

COPY . .

RUN chmod +x wait-for-it.sh
EXPOSE 3000