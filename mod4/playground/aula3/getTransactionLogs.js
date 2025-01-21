// 1. Instale e importe a biblioteca Ethers.js
import { ethers } from "ethers";
import readline from "readline";

// 2. Configure o provider
const RPC_URL = "http://127.0.0.1:8545";
const provider = new ethers.JsonRpcProvider(RPC_URL);

// 3. Obtenha o endereço da conta via readline input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o hash da transação: ", async (txHash) => {
  try {
    const transaction = await provider.getTransactionReceipt(txHash);
    console.log("Logs da Transação:", transaction.logs);
    transaction.logs.forEach((log) => {
      console.log("Log Address:", log.address);
      console.log("Log Topics:", log.topics);
      console.log("Log Data:", log.data);
    });
  } catch (error) {
    console.error("Erro ao buscar a transação:", error);
  }
  rl.close();
});
