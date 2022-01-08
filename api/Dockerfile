FROM node:alpine

# M1 mac対応
RUN apk add --no-cache python3 make g++

WORKDIR /src

ARG app_env
ENV APP_ENV=${app_env}

COPY package.json .

RUN yarn install

EXPOSE 3000

CMD yarn start:dev