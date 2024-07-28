require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.20", // Add the compiler version required by your contracts
      },
      {
        version: "0.8.0", // Include other versions if necessary
      }
    ]
  },
  networks: {
    moonbaseAlpha: {
      url: "https://rpc.api.moonbase.moonbeam.network",
      accounts: [process.env.PRIVATE_KEY], // Your private key
      chainId: 1287, // Moonbase Alpha chain ID
    }
  }
};
