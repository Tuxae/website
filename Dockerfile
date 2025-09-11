FROM node:20-bookworm-slim

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

ENV NODE_ENV=production
ENV PATH=/app/node_modules/.bin:$PATH
EXPOSE 3000
ENTRYPOINT npm run start
