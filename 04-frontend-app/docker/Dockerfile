FROM node:21-alpine as builder

WORKDIR /app

COPY ../package.json .
RUN npm install
COPY .. .

CMD [ "npm", "run", "start" ]

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
# No CMD, nginx starts automatically

