import * as React from 'react';
import { withApollo, compose } from 'react-apollo'
import gql from 'graphql-tag'

import withData from '../lib/withData'

import Page from '../layouts/index';
import PostView from '../components/posts/PostView';

function Post ({post}) {
    console.log('post', post);

    return (
        <Page title='Some post' activeLink='home'>
            <PostView post={post}/>
        </Page>
    )
}

Post.getInitialProps = async (context, apolloClient) => {
    const {data} = await apolloClient.query({
        query: gql`
        query getPost($slug: String!) {
            Post(slug: $slug) {
              id
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
    })
    
    return {post: data.Post};
};

export default compose(withData, withApollo)(Post);