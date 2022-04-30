FROM node:16

RUN apt-get update -qq && apt-get -y upgrade

RUN mkdir /front
WORKDIR /front

COPY . /front

RUN yarn install