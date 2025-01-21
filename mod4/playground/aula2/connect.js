// 1. Instale e importe a biblioteca Ethers.js
import { ethers } from "ethers";

// 2. Configure o provider
const RPC_URL = "http://127.0.0.1:8545";
const provider = new ethers.JsonRpcProvider(RPC_URL);

// 3. Verifique a conexão
provider.getBlockNumber().then((number) => {
  console.log("Blockchain connected with success!")
  console.log(`Block number ${number}`);
});
