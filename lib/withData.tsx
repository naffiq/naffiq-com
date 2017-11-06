/// <reference types="node" />

import * as React from 'react';
import {ApolloProvider, getDataFromTree} from 'react-apollo';
import Head from 'next/head';
import initApollo from './initApollo';

function getComponentDisplayName (Component) {
    return Component.displayName || Component.name || 'Unknown';
}

interface PropTypes {
    serverState: {
        apollo: {
            data: object
        }
    }
};

export default ComposedComponent => {
    return class WithData extends React.Component<PropTypes, any> {
        static displayName = `WithData(${getComponentDisplayName(ComposedComponent)})`;
        apollo: object;
        
        static async getInitialProps (ctx) {
            let serverState = { apollo: { } };

            const apollo = initApollo(null);
            
            let composedInitialProps = {};
            if (ComposedComponent.getInitialProps) {
                composedInitialProps = await ComposedComponent.getInitialProps(ctx, apollo);
            }

            if (!process.browser) {

                const url = {query: ctx.query, pathname: ctx.pathname};
                try {
                    await getDataFromTree(
                        <ApolloProvider client={apollo}>
                            <ComposedComponent url={url} {...composedInitialProps} />
                        </ApolloProvider>
                    );
                } catch (error) {
                    console.log('apollo error', error)
                }

                Head.rewind();
                serverState = {
                    apollo: {
                        data: apollo.cache.extract()
                    }
                };
            }

            return {
                serverState,
                ...composedInitialProps
            };
        }

        constructor (props) {
            super(props);
            this.apollo = initApollo(this.props.serverState.apollo.data);
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