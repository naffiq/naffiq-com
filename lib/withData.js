import React from 'react';
import cookie from 'cookie';
import {ApolloProvider, getDataFromTree} from 'react-apollo';
import Head from 'next/head';

import initApollo from './initApollo';

function getComponentDisplayName (Component) {
    return Component.displayName || Component.name || 'Unknown';
}

function parseCookies(context = {}, options = {}) {
    return cookie.parse(
        context.req && context.req.headers.cookie
            ? context.req.headers.cookie
            : document.cookie,
        options
    );
}

export default ComposedComponent => {
    return class WithData extends React.Component {
        static displayName = `WithData(${getComponentDisplayName(ComposedComponent)})`;
        apollo;
        
        static async getInitialProps (context) {
            let serverState = {};

            const apollo = initApollo({}, {
                getToken: () => parseCookies(context).token
            });
            
            let composedInitialProps = {};
            if (ComposedComponent.getInitialProps) {
                composedInitialProps = await ComposedComponent.getInitialProps(context, apollo);
            }

            if (!process.browser) {
                if (context.res && context.res.finished) {
                    return; // Redirect response handling
                }

                const url = {query: context.query, pathname: context.pathname};
                try {
                    const app = (
                        <ApolloProvider client={apollo}>
                            <ComposedComponent url={url} {...composedInitialProps} />
                        </ApolloProvider>
                    );
                    await getDataFromTree(app, {
                        router: {
                            query: context.query,
                            pathname: context.pathname,
                            asPath: context.asPath
                        }
                    });
                } catch (error) {
                    console.log('apollo error', error)
                }

                Head.rewind();
                serverState = apollo.cache.extract();
            }

            return {
                serverState,
                ...composedInitialProps
            };
        }

        constructor (props) {
            super(props);
            this.apollo = initApollo(this.props.serverState, {
                getToken: () => parseCookies().token
            });
        }

        render () {
            return (
                <ApolloProvider client={this.apollo}>
                    <ComposedComponent {...this.props} />
                </ApolloProvider>
            );
        }
    }
}