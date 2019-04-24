FROM node:alpine

WORKDIR /src
ADD . .

RUN npm install --production

EXPOSE 80
CMD npm start
