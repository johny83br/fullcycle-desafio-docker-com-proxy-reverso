FROM node:latest

WORKDIR /usr/src/app

COPY . .

ENTRYPOINT ["/bin/sh", "-c" , "npm install && node index.js"]

EXPOSE 3000