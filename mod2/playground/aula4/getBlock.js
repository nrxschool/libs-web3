// 1. Instale e importe a biblioteca Web3.js
import Web3 from "web3";
import readline from "readline";

// 2. Configure o provider
const RPC_URL = "http://127.0.0.1:8545";
const web3 = new Web3(RPC_URL);

async function main() {
  const currentBlockNumber = await web3.eth.getBlockNumber();
  console.log(`Current block is ${currentBlockNumber.toString()}`);
  console.log("Do you want to consult some block?");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter block number (or none for the latest block): ",
    (answer) => {
      if (answer === "") {
        web3.eth.getBlock("latest").then(console.log);
      } else {
        const blockNumber = parseInt(answer, 10);
        if (blockNumber < currentBlockNumber) {
          web3.eth.getBlock(blockNumber).then(console.log);
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
