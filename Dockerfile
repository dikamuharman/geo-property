FROM node:lts-slim

WORKDIR /app

COPY . .

RUN npm i pnpm -g

RUN pnpm i

RUN pnpm run build

RUN pnpm run preview

EXPOSE 4173

CMD ["pnpm", "run", "preview"]