const { gql } = require('graphql-tag');

const typeDefs = gql`
  type Query {
    hello: String
    latestBlock: Int
  }
`;

module.exports = typeDefs;