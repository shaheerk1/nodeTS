import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './resolvers/UserResolver';
import { makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const createApolloServer = async () => {
    const schema = makeExecutableSchema({
        typeDefs,
        resolvers,
      });

  return new ApolloServer({ schema });
};

export default createApolloServer;
