FROM node:18-alpine

WORKDIR /app

COPY app/package*.json ./

RUN npm install --legacy-peer-deps

COPY app/ .

EXPOSE 3000

CMD ["node", "app.js"]
