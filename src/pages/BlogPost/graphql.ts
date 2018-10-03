import gql from "graphql-tag";

export const FETCH_BLOG_BY_SLUG = gql`
  query post($slug: String!) {
    post(slug: $slug) {
      id
      slug
      id
      title
      body
      image
      isActive
      createdAt
      updatedAt
    }
  }
`;
