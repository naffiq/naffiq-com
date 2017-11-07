const express = require('express');
const bodyParser = require('body-parser');
const graphqlExpress = require('apollo-server-express').graphqlExpress;
const graphiqlExpress = require('apollo-server-express').graphiqlExpress;
const next = require('next');
const gql = require('graphql-tag');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const schema = require('./graphql/schema').schema;

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;


app.prepare()
.then(() => {
    const server = express();

    server.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
    server.get('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));

    server.get('/post/:slug', (req, res) => {
        const actualPage = '/post';
        const queryParams = {slug: req.params.slug};
        console.log('queryParams', queryParams);
        app.render(req, res, actualPage, queryParams);
    })

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
    })
})
.catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
});