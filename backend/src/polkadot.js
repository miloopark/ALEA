const { ApiPromise, WsProvider } = require('@polkadot/api');

const provider = new WsProvider('wss://rpc.polkadot.io');
const api = ApiPromise.create({ provider });

module.exports = api;
