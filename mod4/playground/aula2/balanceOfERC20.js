// 1. Instale e importe a biblioteca Ethers.js
import { ethers } from "ethers";
import readline from "readline";

// 2. Configure o provider
const RPC_URL = "http://127.0.0.1:8545";
const provider = new ethers.JsonRpcProvider(RPC_URL);
const abi = [
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    type: "function",
  },
];

// 3. Obtenha o endereço do contrato e da conta via readline input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para solicitar o endereço do contrato
const askForContractAddress = () => {
  rl.question("Digite o endereço do contrato: ", (contractAddress) => {
    askForAccountAddress(contractAddress);
  });
};

// Função para solicitar o endereço da conta
const askForAccountAddress = (contractAddress) => {
  rl.question("Digite o endereço da conta: ", (accountAddress) => {
    checkBalance(contractAddress, accountAddress);
  });
};

// Função para verificar o saldo
const checkBalance = (contractAddress, accountAddress) => {
  const contract = new ethers.Contract(contractAddress, abi, provider);

  contract.balanceOf(accountAddress)
    .then((balance) => {
      console.log("Saldo do Token:", ethers.formatEther(balance));
    })
    .catch((error) => {
      console.error("Erro ao consultar o saldo:", error);
    })
    .finally(() => {
      rl.close();
    });
};

// Inicia o processo
askForContractAddress();
