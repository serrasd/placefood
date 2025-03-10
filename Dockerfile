FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli

COPY . .

EXPOSE 4200 3000

CMD ["sh", "-c", "npm run server & ng serve --host 0.0.0.0 --disable-host-check"]
