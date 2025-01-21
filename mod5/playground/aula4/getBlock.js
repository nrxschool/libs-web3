// 1. Instale e importe a biblioteca Viem
import { createPublicClient, http } from 'viem';
import readline from "readline";

// 2. Configure o client
const publicClient = createPublicClient({
  transport: http('http://127.0.0.1:8545'),
});

async function main() {
  const currentBlockNumber = await publicClient.getBlockNumber();
  console.log(`Current block is ${currentBlockNumber.toString()}`);
  console.log("Do you want to consult some block?");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter block number (or none for the latest block): ",
    async (answer) => {
      if (answer === "") {
        const latestBlock = await publicClient.getBlock('latest');
        console.log(latestBlock);
      } else {
        const blockNumber = parseInt(answer, 10);
        if (blockNumber < currentBlockNumber) {
          const block = await publicClient.getBlock(blockNumber);
          console.log(block);
        } else if (blockNumber > currentBlockNumber) {
          console.error("Error: Block number is in the future.");
        } else {
          console.error("Error: Invalid block number.");
        }
      }
      rl.close();
    }
  );
}

main();
