import dotenv from 'dotenv';
dotenv.config();

import createApolloServer from './graphql';
import app from './app';
import { Application } from "apollo-server-express/node_modules/@types/express";


async function startServer() {
  const server = await createApolloServer();
  await server.start();
  server.applyMiddleware({ app: app as Application });

  const port = process.env.PORT || 3000;


  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}${server.graphqlPath}`);
  });
}

startServer();
