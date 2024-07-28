const { ApiPromise, WsProvider, Keyring } = require('@polkadot/api');
const { ContractPromise } = require('@polkadot/api-contract');
const fs = require('fs');
const abi = JSON.parse(fs.readFileSync('artifacts/contracts/MyContract.sol/MyContract.json', 'utf8'));

async function main() {
  const wsProvider = new WsProvider('wss://rococo-rpc.polkadot.io');
  const api = await ApiPromise.create({ provider: wsProvider });

  const keyring = new Keyring({ type: 'sr25519' });
  const alice = keyring.addFromUri('//Alice');

  const contractAddress = 'YOUR_CONTRACT_ADDRESS_HERE'; // Replace with your deployed contract address
  const contract = new ContractPromise(api, abi, contractAddress);

  const { gasRequired, result } = await contract.query.mint(alice.address, { value: 0, gasLimit: -1 }, alice.address, 1000);
  console.log('Gas required:', gasRequired.toString());
  console.log('Result:', result.toString());

  const unsub = await contract.tx.mint({ value: 0, gasLimit: gasRequired }, alice.address, 1000).signAndSend(alice, ({ status }) => {
    if (status.isInBlock) {
      console.log('Included at block hash', status.asInBlock.toHex());
    } else if (status.isFinalized) {
      console.log('Finalized block hash', status.asFinalized.toHex());
      unsub();
    }
  });
}

main().catch(console.error).finally(() => process.exit());
