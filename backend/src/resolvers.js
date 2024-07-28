const { bettingContract, nftContract } = require('./contracts');

const resolvers = {
  Query: {
    hello: () => 'Hello from Apollo Server!',
  },
  Mutation: {
    placeBet: async (_, { amount }) => {
      const accounts = await ethers.getSigners();
      await bettingContract.placeBet({ value: ethers.utils.parseEther(amount.toString()), from: accounts[0] });
      return 'Bet placed';
    },
    mintNFT: async (_, { to }) => {
      const accounts = await ethers.getSigners();
      await nftContract.mint(to, { from: accounts[0] });
      return 'NFT minted';
    }
  }
};

module.exports = resolvers;
