# nginx/Dockerfile

FROM nginx:1.23.3-alpine

COPY . .

EXPOSE 80
EXPOSE 443
