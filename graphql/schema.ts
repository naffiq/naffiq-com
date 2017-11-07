import {
    makeExecutableSchema,

} from 'graphql-tools';
import {resolvers} from './resolvers';

const typeDefs = `
  type File @model {
    contentType: String!
    createdAt: String!
    id: ID! @isUnique
    name: String!
    secret: String! @isUnique
    size: Int!
    updatedAt: String!
    url: String! @isUnique
  }
  
  type Post @model {
    createdAt: String!
    description: String!
    id: ID! @isUnique
    imageUrl: String!
    slug: String! @isUnique
    text: String!
    title: String!
  }
  
  type User @model {
    createdAt: String!
    id: ID! @isUnique
    updatedAt: String!
  }

  type Query {
    allPosts: [Post]
  }
`;
const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
  