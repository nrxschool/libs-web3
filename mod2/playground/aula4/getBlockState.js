// 1. Instale e importe a biblioteca Web3.js
import Web3 from "web3";

// 2. Configure o provider
const RPC_URL = "http://127.0.0.1:8545";
const web3 = new Web3(RPC_URL);

web3.eth.getBlock("earliest").then((block) => {
  console.log("================================================");
  console.log("EARLIEST BLOCK");
  console.log("================================================");
  console.log(block);
});
web3.eth.getBlock("latest").then((block) => {
  console.log("================================================");
  console.log("LATEST BLOCK");
  console.log("================================================");
  console.log(block);
});
web3.eth.getBlock("pending").then((block) => {
  console.log("================================================");
  console.log("PENDING BLOCK");
  console.log("================================================");
  console.log(block);
});
web3.eth.getBlock("finalized").then((block) => {
  console.log("================================================");
  console.log("FINALIZED BLOCK");
  console.log("================================================");
  console.log(block);
});
web3.eth.getBlock("safe").then((block) => {
  console.log("================================================");
  console.log("SAFE BLOCK");
  console.log("================================================");
  console.log(block);
});
