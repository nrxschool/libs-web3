// 1. Instale e importe a biblioteca Viem
import { createPublicClient, http } from "viem";
import readline from "readline";

// 2. Configure o client
const client = createPublicClient({
  transport: http("http://127.0.0.1:8545"),
});

async function main() {
  console.log("Do you want to consult some transactions?");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter block hash (or none for the latest block): ",
    async (answer) => {
      if (answer === "") {
        const currentBlockNumber = await client.getBlockNumber();
        const latestBlock = await client.getBlock(currentBlockNumber);
        console.log(latestBlock.transactions); // Exibe as transações do bloco mais recente
      } else {
        try {
          console.log(`Obtendo bloco para o hash: ${answer}`);
          const block = await client.getBlock({
            blockHash: answer,
            includeTransactions: true,
          }); // Obtém o bloco pelo hash
          if (!block) {
            console.log("Bloco não encontrado para o hash fornecido.");
            return;
          }

          const txCount = block.transactions.length;
          console.log(`This block has ${txCount} Transaction`);

          const txHashes = block.transactions.map((txHash) => txHash);
          console.log(txHashes);

          /*
           
          const transaction = await client.getTransaction({
             blockHash: 'answer',
             index: 0
           })
          
          */
        } catch (error) {
          console.error("Erro ao obter o bloco ou transação:", error.message);
        }
      }
      rl.close();
    }
  );
}

main();
