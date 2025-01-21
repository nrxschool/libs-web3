// 1. Instale e importe a biblioteca Web3.js
import Web3 from "web3";
import readline from "readline";

// 2. Configure o provider
const RPC_URL = "http://127.0.0.1:8545";
const web3 = new Web3(RPC_URL);

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
        const currentBlockNumber = await web3.eth.getBlockNumber();
        const txCount = await web3.eth.getBlockTransactionCount(
          currentBlockNumber
        );

        console.log(`This block hash ${txCount} Transaction`);
        web3.eth
          .getTransactionFromBlock(currentBlockNumber.hash)
          .then(console.log);
      } else {
        web3.eth.getTransactionFromBlock(answer, 0).then(async (tx) => {
          const txCount = await web3.eth.getBlockTransactionCount(
            tx.blockNumber
          );
          console.log(`This block hash ${txCount} Transaction`);
          console.log(tx)
        });
      }
      rl.close();
    }
  );
}

main();
