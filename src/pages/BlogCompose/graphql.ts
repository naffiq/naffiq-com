import gql from "graphql-tag";

export const CREATE_POST = gql`
  mutation createPost($newPost: NewPost) {
    createPost(newPost: $newPost) {
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
