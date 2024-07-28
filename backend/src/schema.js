const { gql } = require('graphql-tag');

const typeDefs = gql`
  type Query {
    hello: String
  }

  type Mutation {
    placeBet(amount: Float!): String
    mintNFT(to: String!): String
  }
`;

module.exports = typeDefs;
