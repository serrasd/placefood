FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install -g @angular/cli

COPY . .

RUN ng build --project=placefood-developer

FROM docker.io/library/nginx:alpine

RUN apk add --no-cache nodejs npm

COPY --from=builder /app/dist/placefood-developer/browser /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY package*.json ./

COPY server.ts .

WORKDIR /app

RUN npm install tsx express cors fs path

EXPOSE 8080 3000

CMD ["sh", "-c", "npm run server & nginx -g 'daemon off;'"]