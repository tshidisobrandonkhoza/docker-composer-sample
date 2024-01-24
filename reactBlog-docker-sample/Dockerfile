FROM node:21-alpine

WORKDIR /viteblog_sample

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

