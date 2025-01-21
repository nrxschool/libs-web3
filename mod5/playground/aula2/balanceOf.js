// web3-libs/mod5/playground/aula2/balanceOf.js
import { http, createPublicClient } from "viem"; // Importando a biblioteca VIem
import readline from "readline"; // Importando readline para entrada do usuário

// 1. Configure o client com a URL do Anvil
export const publicClient = createPublicClient({
  transport: http("http://127.0.0.1:8545"), // URL do Anvil
});

// 2. Obtenha o endereço da conta via readline input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o endereço da conta: ", async (address) => {
  try {
    // 3. Usando a função correta para obter o saldo
    const balance = await publicClient.getBalance({
      address: address,
    });
    console.log("Saldo em wei:", balance.toString());
  } catch (error) {
    console.error("Erro ao consultar o saldo:", error);
  }
  rl.close();
});
