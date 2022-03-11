FROM ruby:2.7.2

WORKDIR /app

RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN apt-get update -qq
RUN gem install bundler:1.17.3 dotenv
RUN curl -sL https://deb.nodesource.com/setup_14.x | sh -
RUN apt-get install -y nodejs
RUN npm install -g yarn
