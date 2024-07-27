const api = require('./polkadot');

const resolvers = {
  Query: {
    hello: () => 'Hello from Apollo Server!',
    latestBlock: async () => {
      const apiInstance = await api;
      const lastHeader = await apiInstance.rpc.chain.getHeader();
      return lastHeader.number.toNumber();
    },
  },
};

module.exports = resolvers;