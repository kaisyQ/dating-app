FROM node:latest as build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.25.3-alpine

COPY nginx.conf /etc/nginx/nginx.conf

RUN chown -R nginx:nginx /usr/share/nginx/html

RUN chmod -R 755 /usr/share/nginx/html

COPY --from=build /usr/src/app/dist/dating-app/browser /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
