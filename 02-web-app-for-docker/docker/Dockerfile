#Base image
FROM node:21-alpine

WORKDIR /app

#Install dependencies 
COPY ../package.json .
RUN npm install
COPY .. .

#Default command
CMD ["npm", "run", "serve"]