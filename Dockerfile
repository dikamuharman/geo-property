FROM node AS builder

WORKDIR /app

COPY . .

RUN npm i pnpm -g

RUN pnpm i

RUN pnpm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY --from=builder /app/dist/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist/htaccess_config /usr/share/nginx/html/.htaccess

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
