FROM node:boron

# Create app directory
WORKDIR /usr/src/naffiq-com

# Install app dependencies
COPY package.json .
COPY yarn.lock .

RUN yarn install

# Bundle app source
COPY . .

ENV DOCKER_ENV '.env'

RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]
