import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from './graphql/typeDefs';
import UserResolver from './graphql/resolvers/UserResolver';
import { mergeTypeDefs } from '@graphql-tools/merge';
import userTypeDefs from './graphql/typedefs/userTypeDefs';

const createApolloServer = async () => {

  // Merge all typeDefs
  const mergedTypeDefs = mergeTypeDefs([
    userTypeDefs, // Add other typeDefs imports as needed
    typeDefs, // typeDefs is a single file for shared types
  ]);

  const schema = await buildSchema({
    resolvers: [UserResolver], // Add other resolvers as needed
    validate: true, // Optional: Disable schema validation (default true)
  });

  const server = new ApolloServer({
    schema,
    typeDefs: mergedTypeDefs,
  });

  return server;
};

export default createApolloServer;
