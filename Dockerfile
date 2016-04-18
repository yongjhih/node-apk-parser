FROM node:latest

ADD . /apk-parser

WORKDIR /apk-parser

RUN npm install
ENTRYPOINT ["npm", "run-script", "apk-parser", "--"]
