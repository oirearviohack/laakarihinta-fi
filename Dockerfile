FROM node:6.9.1

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

ENV PATH="/root/.yarn/bin:${PATH}"

RUN mkdir -p /usr/src/wwwonderful-web
RUN mkdir -p /usr/src/wwwonderful-web/build
RUN mkdir -p /usr/src/wwwonderful-web/build/public
RUN mkdir -p /usr/src/wwwonderful-web/src
RUN mkdir -p /usr/src/wwwonderful-web/tools

WORKDIR /usr/src/wwwonderful-web

COPY build/public /usr/src/wwwonderful-web/build/public
COPY src /usr/src/wwwonderful-web/src
COPY tools /usr/src/wwwonderful-web/tools
COPY package.json /usr/src/wwwonderful-web
COPY .babelrc /usr/src/wwwonderful-web
COPY .eslintrc /usr/src/wwwonderful-web
COPY .stylelintrc /usr/src/wwwonderful-web
COPY index.js /usr/src/wwwonderful-web
COPY test-config.js /usr/src/wwwonderful-web

RUN ["yarn", "install"]

EXPOSE 8080

CMD ["yarn", "run", "start"]
