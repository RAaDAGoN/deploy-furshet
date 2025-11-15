FROM node:alpine as build

COPY package.json package.json
RUN npm install
COPY ..
RUN npm build

FROM nginx:sable-alpine

COPY --from=build /dist /ust/share/nginx/html
COPY --from=build nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD["nginx", "-g", "daemon off;"]
