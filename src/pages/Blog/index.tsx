import * as React from "react";
import { Query } from "react-apollo";
import { FETCH_BLOG_POSTS } from "./graphql";
import BlogPost from "./partials/BlogPost";

export default () => (
  <div className="container narrow">
    <Query query={FETCH_BLOG_POSTS}>
      {({ data, loading, error }) => {
        if (loading) {
          return "Loading";
        }

        if (error) {
          return "Error: " + error.message;
        }

        if (data) {
          return data.posts.map(post => <BlogPost post={post} key={post.id} />);
        }
      }}
    </Query>
  </div>
);
