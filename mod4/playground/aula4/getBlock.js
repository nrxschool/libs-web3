// 1. Instale e importe a biblioteca Ethers.js
import { ethers } from "ethers";
import readline from "readline";

// 2. Configure o provider
const RPC_URL = "http://127.0.0.1:8545";
const provider = new ethers.JsonRpcProvider(RPC_URL);

async function main() {
  const currentBlockNumber = await provider.getBlockNumber();
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
        const block = await provider.getBlock("latest");
        console.log(block);
      } else {
        const blockNumber = parseInt(answer, 10);
        if (blockNumber < currentBlockNumber) {
          const block = await provider.getBlock(blockNumber);
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
