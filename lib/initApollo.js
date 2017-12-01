import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-unfetch';

let apolloClient = null;

if (typeof process.browser === 'undefined') {
    global.fetch = fetch;
}

function create (initialState, { getToken }) {
    const httpLink = createHttpLink({
        uri: process.env.REACT_APP_GRAPHQL_URL,
        credentials: 'same-origin',
        fetch
    });

    const authLink = setContext((_, { headers }) => {
        const token = getToken();
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : null
            }
        };
    });

    return new ApolloClient({
        connectToDevTools: process.browser,
        ssrMode: !process.browser,
        link: authLink.concat(httpLink),
        cache: new InMemoryCache().restore(initialState || {}),
    })
}

export default function initApollo (initialState, options) {
    if (!process.browser) {
        return create(initialState, options);
    }

    if (!apolloClient) {
        apolloClient = create(initialState, options);
    }

    return apolloClient;
}