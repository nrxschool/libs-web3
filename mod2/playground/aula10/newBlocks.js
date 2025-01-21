import Web3 from "web3";
const RPC_URL = "http://127.0.0.1:8545";
let web3 = new Web3(RPC_URL);

// 3. Verifique a conexão
web3.eth.getBlockNumber().then((number) => {
  console.log(`Block number ${number}`);
});

web3 = new Web3("ws://127.0.0.1:8546");
web3.eth.subscribe("newBlockHeaders", async (error, blockHeader) => {
  if (!error) {
    const block = await web3.eth.getBlock(blockHeader.hash, true);
    block.transactions.forEach((transaction) => {
      const data = `@here\n🔨 Transação minerada no bloco ${transaction.blockNumber}: , ${transaction.hash}`;
      console.log(data);
      sendDiscord(data);
    });
  } else {
    console.error("Erro ao ouvir novos blocos:", error);
  }
});

console.log("Ouvindo eventos e transações na mempool...");
