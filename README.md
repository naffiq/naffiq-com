# naffiq.com repository

Tools used in project:

- React
- next.js
- Apollo
- Express

## Installation

Run one of the following commands:

```bash
$ yarn install
-- or --
$ npm install
```

Copy `.env.example` file into `.env` to setup GraphQL endpoint addres:

```
$ cp .env.example .env
```

## Development

In order to run server for development enter following command:

```bash
$ yarn dev
-- or --
$ npm run dev
```

You can also define env PORT variable such as this:

```bash
$ PORT=8080 yarn dev
```

## Build

In order to get production build just run:

```bash
$ yarn start
-- or --
$ npm start
```

Or daemonize app with pm2:

```bash
$ pm2 start yarn -- start
-- or --
$ pm2 start npm -- start
```