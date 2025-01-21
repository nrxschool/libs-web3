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

rl.question("Digite o hash da transação: ", (txHash) => {
  web3.eth
    .getTransaction(txHash)
    .then((transaction) => {
      console.log(`Transação de ${txHash}`, transaction);
    })
    .catch((error) => {
      console.error("Erro ao buscar a transação:", error);
    });
  rl.close();
});
