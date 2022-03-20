FROM node:16-alpine3.11

RUN apk update && apk add bash sudo vim

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

RUN ["chmod", "+x", "/server/wait-for-it.sh"]

EXPOSE 3000