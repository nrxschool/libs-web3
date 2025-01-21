// 1. Instale e importe a biblioteca Viem
import { createPublicClient, http } from 'viem';
import readline from "readline";


// 2. Configure o client
export const client = createPublicClient({
  transport: http('http://127.0.0.1:8545'),
});

// 3. Obtenha o endereço da conta via readline input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o hash da transação: ", async (txHash) => {
  try {
    console.log("Buscando transação para o hash:", txHash);
    const receipt = await client.getTransactionReceipt({ hash: txHash });

    // Log para verificar o que está sendo retornado
    console.log("Resposta da transação:", receipt.logs);

    // Verifique se a transação foi encontrada
    if (!receipt) {
      console.error("Transação não encontrada.");
      return;
    }

    console.log(`Transação de ${txHash}`, receipt);
  } catch (error) {
    console.error("Erro ao buscar a transação:", error);
  } finally {
    rl.close();
  }
});
