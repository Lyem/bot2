FROM node:16.14.2-alpine

WORKDIR /home/rss

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

CMD yarn start
