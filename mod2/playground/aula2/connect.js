// 1. Instale e importe a biblioteca Web3.js
import Web3 from "web3";

// 2. Configure o provider
const RPC_URL = "http://127.0.0.1:8545";
const web3 = new Web3(RPC_URL);

// 3. Verifique a conexão
web3.eth.getBlockNumber().then((number) => {
  console.log(`Block number ${number}`);
});
