import gql from "graphql-tag";

export const FETCH_BLOG_POSTS = gql`
  {
    posts {
      id
      slug
      title
      body
      image
      isActive
      createdAt
      updatedAt
    }
  }
`;
