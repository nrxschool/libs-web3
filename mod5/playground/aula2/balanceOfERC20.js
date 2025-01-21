// 1. Instale e importe a biblioteca Viem
import { createPublicClient, http } from "viem";
import { anvil } from "viem/chains";
import readline from "readline";

// 2. Configure o provider
const client = createPublicClient({
  chain: anvil,
  transport: http(),
});

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
const checkBalance = async (contractAddress, accountAddress) => {
  const balance = await client.readContract({
    address: contractAddress,
    abi: abi,
    functionName: "balanceOf",
    args: [accountAddress],
  });

  console.log("Saldo do Token:", balance.toString());
  rl.close();
};

// Inicia o processo
askForContractAddress();
