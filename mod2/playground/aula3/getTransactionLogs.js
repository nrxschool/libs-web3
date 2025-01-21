// 1. Instale e importe a biblioteca Web3.js
import Web3 from "web3";
import readline from "readline";

// 2. Configure o provider
const RPC_URL = "http://127.0.0.1:8545";
const web3 = new Web3(RPC_URL);

// 3. Obtenha o endereço da conta via readline input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o endereço da conta: ", (txHash) => {
  web3.eth
    .getTransactionReceipt(txHash)
    .then((transaction) => {
      console.log("Logs da Transação:", transaction.logs);
      transaction.logs.forEach((log) => {
        console.log("Log Address:", log.address);
        console.log("Log Topics:", log.topics);
        console.log("Log Data:", log.data);
      });
    })
    .catch((error) => {
      console.error("Erro ao buscar a transação:", error);
    });
  rl.close();
});
