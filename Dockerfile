FROM node:12-alpine as development

RUN apk update && apk add --no-cache curl vim bash

WORKDIR /slack_backend

# COPY package.json ./
COPY package*.json ./

RUN npm install
RUN npm install glob rimraf

COPY . .

# RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# RUN npm run --script build
# CMD node dist/main.js
# CMD [ "npm", "run", "start:dev" ]
# CMD [ "npm", "run", "start:prod" ] # prod

# COPY wait-for-it.sh ./
# RUN chmod +x wait-for-it.sh
# CMD [ "npm", "run", "start:prod" ]