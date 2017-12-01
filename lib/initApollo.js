import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-unfetch';

let apolloClient = null;

if (typeof process.browser === 'undefined') {
    global.fetch = fetch;
}

function create (initialState) {
    return new ApolloClient({
        connectToDevTools: process.browser,
        ssrMode: !process.browser,
        link: createHttpLink({
            uri: process.env.REACT_APP_GRAPHQL_URL,
            fetch
        }),
        cache: new InMemoryCache().restore(initialState || {}),
    })
}

export default function initApollo (initialState) {
    if (!process.browser) {
        return create(initialState);
    }

    if (!apolloClient) {
        apolloClient = create(initialState);
    }

    return apolloClient;
}