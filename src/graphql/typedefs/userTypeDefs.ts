// src/graphql/typedefs/userTypeDefs.ts

import { gql } from 'apollo-server-express';

const userTypeDefs  = gql`
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

export default userTypeDefs ;
