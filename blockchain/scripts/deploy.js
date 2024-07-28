const { ethers } = require('hardhat');
const fs = require('fs');

async function main() {
  const [deployer] = await ethers.getSigners();
  
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  
  const Betting = await ethers.getContractFactory("Betting");
  const betting = await Betting.deploy();
  await betting.deployed();
  
  const NFT = await ethers.getContractFactory("NFT");
  const nft = await NFT.deploy();
  await nft.deployed();
  
  console.log("Betting contract deployed to:", betting.address);
  console.log("NFT contract deployed to:", nft.address);

  // Save addresses to a JSON file
  const addresses = {
    bettingContract: betting.address,
    nftContract: nft.address
  };
  fs.writeFileSync('deployedAddresses.json', JSON.stringify(addresses, null, 2));
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
