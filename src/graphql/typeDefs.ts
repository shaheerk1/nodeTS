import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    password: String!
  }

  type Query {
    users: [User]
  }
`;

export default typeDefs;
