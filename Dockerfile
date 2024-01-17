FROM node AS builder

WORKDIR /app

COPY . .

RUN npm i pnpm -g

RUN pnpm i

RUN pnpm run build

FROM httpd AS server

COPY --from=builder /app/dist /usr/local/apache2/htdocs/

EXPOSE 80