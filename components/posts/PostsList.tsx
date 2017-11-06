import * as React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag'
import PostsListItem from './PostsListItem';

const POSTS_PER_PAGE = 10;

function PostsList ({data: {loading, error, allPosts, _allPostsMeta}, loadMorePosts}) {
    console.log(allPosts);
    return (
        <div>
            {allPosts.map((post, key) => <PostsListItem key={key} post={post}/>)}
            {allPosts.length === 0 && <span>Я ещё ничего не написал</span>}
        </div>
    )
};

const allPosts = gql`
    query allPosts($first: Int!, $skip: Int!) {
        allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
            id
            title
            slug
            text
            createdAt
            imageUrl
        }
        _allPostsMeta {
            count
        }
    }
`;

export default graphql(allPosts, {
    options: {
        variables: {
            skip: 0,
            first: POSTS_PER_PAGE
        }
    },
    props: ({data}) => ({
        data,
        loadMorePosts: () => {
            return data.fetchMore({
                variables: {
                    skip: data.allPosts.length,
                },
                updateQuery: (previousResult, {fetchMoreResult}) => {
                    if (!fetchMoreResult) {
                        return previousResult;
                    }

                    return Object.assign({}, previousResult, {
                        allPosts: [
                            ...previousResult.allPosts, 
                            ...fetchMoreResult.allPosts
                        ]
                    })
                }
            })
        }
    })
})(PostsList);