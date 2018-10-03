import * as React from "react";
import { Query } from "react-apollo";
import { FETCH_BLOG_BY_SLUG } from "./graphql";

export default ({ match }) => (
  <div className="container narrow">
    <Query
      query={FETCH_BLOG_BY_SLUG}
      variables={{
        slug: match.params.slug
      }}
    >
      {({ data, loading }) => {
        if (loading) {
          return "Loading";
        }
        return (
          <>
            <h1>{data.post.title}</h1>
            {data.post.body}
          </>
        );
      }}
    </Query>
  </div>
);
