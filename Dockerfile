FROM node:lts-slim

WORKDIR /app

COPY . .

RUN npm i pnpm -g

RUN pnpm i

EXPOSE 5173

CMD ["pnpm", "dev"]