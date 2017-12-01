import React, {Component} from 'react';
import { withApollo, compose } from 'react-apollo'
import gql from 'graphql-tag'

import checkUserSession from '../lib/checkUserSession';
import withData from '../lib/withData'

import Page from '../layouts/index';
import PostView from '../components/posts/PostView';


class Post extends Component {
    static async getInitialProps(context, apolloClient) {
        const {userSession} = await checkUserSession(context, apolloClient);

        const {data} = await apolloClient.query({
            query: gql`
            query getPost($slug: String!) {
                Post(slug: $slug) {
                  id
                  slug
                  title
                  text
                  imageUrl
                  description
                  createdAt
                }
              }
            `,
            variables: {
                slug: context.query.slug
            }
        });
        
        return {
            post: data.Post,
            isAuthorized: userSession.user && true
        };
    };

    render() {
        const {post, isAuthorized} = this.props;
        return (
            <Page title={post.title} activeLink='home' description={post.description} imageUrl={post.imageUrl}>
                <PostView post={post} isAuthorized={isAuthorized}/>
            </Page>
        );
    }
}

export default compose(withData, withApollo)(Post);