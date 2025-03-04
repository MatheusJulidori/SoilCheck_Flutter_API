FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

EXPOSE 4000

CMD [ "node", "server.js" ]