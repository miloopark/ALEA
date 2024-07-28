const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const cors = require('cors');
const { json } = require('body-parser');

dotenv.config();

console.log('Private Key:', process.env.PRIVATE_KEY);
console.log('Mongo URI:', process.env.MONGO_URI);

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use(cors());
  app.use(
    '/graphql',
    json(),
    expressMiddleware(server),
  );

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }

  app.listen({ port: process.env.PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}/graphql`)
  );
};

startServer();
