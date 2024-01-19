#Base image
FROM node:21-alpine

WORKDIR /app

#Install dependencies 
COPY .. .
RUN npm install

#Default command
CMD ["npm", "run", "serve"]