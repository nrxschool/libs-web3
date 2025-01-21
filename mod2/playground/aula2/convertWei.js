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

rl.question("Digite o endereço da conta: ", (address) => {
  web3.eth
    .getBalance(address)
    .then((balance) => {
      const etherBalance = web3.utils.fromWei(balance, "ether");
      console.log("Saldo em wei:", balance);
      console.log("Saldo em ether:", etherBalance);
    })
    .catch((error) => {
      console.error("Erro ao consultar o saldo:", error);
    });
  rl.close();
});
