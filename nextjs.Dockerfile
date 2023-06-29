# Build Stage
FROM node:16-alpine AS BUILD_IMAGE
WORKDIR /var/www/homepage
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build


# Production Stage
FROM node:16-alpine AS PRODUCTION_STAGE
WORKDIR /var/www/homepage
COPY --from=BUILD_IMAGE /var/www/homepage/package*.json ./
COPY --from=BUILD_IMAGE /var/www/homepage/.next ./.next
COPY --from=BUILD_IMAGE /var/www/homepage/public ./public
COPY --from=BUILD_IMAGE /var/www/homepage/node_modules ./node_modules
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]