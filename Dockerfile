FROM node:20-alpine AS base
# Needs to set explicit ENV in image as Vite does not recognize environment variables in docker compose (???)
ARG ARG_NODE_ENV
ENV NODE_ENV=${ARG_NODE_ENV}

RUN npm i -g typescript

FROM base AS dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install

FROM base AS build
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build

FROM base AS deploy
WORKDIR /app
COPY --from=build /app/package.json /app/pnpm-lock.yaml ./
COPY --from=build /app/dist/ ./dist/
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/vite.config.ts ./vite.config.ts

EXPOSE 3000

CMD ["npm", "run","preview"]
