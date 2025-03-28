FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache pciutils dpkg

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

CMD ["npm", "run", "dev"] 