import { ethers } from "ethers";
import readline from "readline";

// 1. Configure o provider
const RPC_URL = "http://127.0.0.1:8545";
const provider = new ethers.JsonRpcProvider(RPC_URL);

// 2. Função principal
async function main() {
  console.log("Do you want to consult some transactions?");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter block hash (or none for the latest block): ",
    async (answer) => {
      try {
        if (answer === "") {
          // Obter o número do último bloco
          const currentBlockNumber = await provider.getBlockNumber();
          const currentBlock = await provider.getBlock(currentBlockNumber);

          // Obter a contagem de transações no bloco
          const txCount = currentBlock.transactions.length;
          console.log(`This block hash ${txCount} Transaction`);

          // Exibir uma transação do bloco (a primeira, por exemplo)
          if (txCount > 0) {
            const transaction = await provider.getTransaction(currentBlock.transactions[0]);
            console.log(transaction);
          }
        } else {
          // Obter o bloco pelo hash
          const block = await provider.getBlock(answer);

          // Obter a contagem de transações no bloco
          const txCount = block.transactions.length;
          console.log(`This block hash ${txCount} Transaction`);

          // Exibir a transação pelo índice
          if (txCount > 0) {
            const transaction = await provider.getTransaction(block.transactions[0]);
            console.log(transaction);
          }
        }
      } catch (error) {
        console.error("Erro ao obter transações:", error);
      }
      rl.close();
    }
  );
}

main();
