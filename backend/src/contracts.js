const { ethers } = require('ethers');
const BettingABI = require('./abis/Betting.json').abi;
const NFTABI = require('./abis/NFT.json').abi;
const dotenv = require('dotenv');

dotenv.config();

console.log('Private Key:', process.env.PRIVATE_KEY);

const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:9933');
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const bettingContract = new ethers.Contract('DEPLOYED_BETTING_CONTRACT_ADDRESS', BettingABI, signer);
const nftContract = new ethers.Contract('DEPLOYED_NFT_CONTRACT_ADDRESS', NFTABI, signer);

module.exports = { bettingContract, nftContract };
