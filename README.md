# ALEA

## Overview

ALEA is an innovative esports betting platform built on the Polkadot blockchain, leveraging Unique Network NFTs. Users can place bets on esports events and win NFTs as rewards. These NFTs can be traded like collectible trading cards and sold for money or other assets. The project integrates smart contracts on the Polkadot blockchain to ensure secure and transparent transactions.

## Tech Stack

- **Blockchain**: Solidity, Hardhat, OpenZeppelin, Polkadot, Unique Network
- **Backend**: Node.js, Express.js, Apollo Server, Mongoose, Ethers.js
- **Frontend**: React.js, Apollo Client

## Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- Hardhat
- MetaMask (for Ethereum wallet and private key)
- Polkadot.js (for Polkadot wallet)
- MongoDB Atlas (for database)

## Setup Instructions

### 1. Blockchain (Smart Contracts)

1. **Initialize a Hardhat project**:

    ```bash
    mkdir alea-blockchain
    cd alea-blockchain
    npx hardhat
    ```

2. **Install dependencies**:

    ```bash
    npm install --save-dev @nomiclabs/hardhat-ethers ethers @openzeppelin/contracts dotenv @polkadot/api
    ```

3. **Create and configure `.env` file**:

    ```env
    PRIVATE_KEY=your_ethereum_private_key
    INFURA_PROJECT_ID=your_infura_project_id
    ```

4. **Compile and deploy contracts**:

    ```bash
    npx hardhat compile
    npx hardhat run scripts/deploy.js --network polkadot
    ```

### 2. Backend

1. **Initialize the backend project**:

    ```bash
    mkdir ../alea-backend
    cd ../alea-backend
    npm init -y
    ```

2. **Install dependencies**:

    ```bash
    npm install express graphql apollo-server-express mongoose dotenv ethers @polkadot/api
    ```

3. **Create and configure `.env` file**:

    ```env
    PRIVATE_KEY=your_ethereum_private_key
    INFURA_PROJECT_ID=your_infura_project_id
    MONGO_URI="mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority"
    PORT=4000
    ```

4. **Start the backend server**:

    ```bash
    node src/index.js
    ```

### 3. Frontend

1. **Initialize the frontend project**:

    ```bash
    mkdir ../alea-frontend
    cd ../alea-frontend
    npx create-react-app .
    ```

2. **Install dependencies**:

    ```bash
    npm install @apollo/client graphql
    ```

3. **Start the frontend development server**:

    ```bash
    npm start
    ```

## Deployment

1. **Blockchain**: Follow the steps in the Blockchain section to deploy the smart contracts on the Polkadot network.
2. **Backend**: Ensure the backend server is configured with the correct environment variables and start the server.
3. **Frontend**: Ensure the frontend application is configured to interact with the backend server and start the development server.

## Usage

- **Mint NFTs**: Use the frontend application to mint Unique Network NFTs by interacting with the smart contract through the backend server.
- **Place Bets**: Use the frontend application to place bets on esports events and win Unique Network NFTs as rewards.
- **Trade NFTs**: Users can trade their NFTs like collectible trading cards and sell them for money or other assets.

## Dependencies

- **Blockchain**: Hardhat, Ethers.js, OpenZeppelin, Polkadot.js, Unique Network
- **Backend**: Express.js, Apollo Server, Mongoose, Ethers.js, dotenv, @polkadot/api
- **Frontend**: React.js, Apollo Client, GraphQL

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License.
