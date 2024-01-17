FROM node

WORKDIR /app

COPY . .

RUN npm i pnpm -g

RUN pnpm i

RUN pnpm run build

FROM nginx:alpine AS server

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY .htaccess /usr/share/nginx/html/.htaccess

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
