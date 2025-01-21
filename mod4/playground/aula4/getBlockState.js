// 1. Instale e importe a biblioteca Ethers.js
import { ethers } from "ethers";

// 2. Configure o provider
const RPC_URL = "http://127.0.0.1:8545";
const provider = new ethers.JsonRpcProvider(RPC_URL);

async function getBlocks() {
  const blockTypes = ["earliest", "latest", "pending", "finalized", "safe"];
  const blocks = [];
  
  for (const type of blockTypes) {
    const block = await provider.getBlock(type);
    blocks.push({
      Type: type.toUpperCase(),
      Block: block.number
    });
  }
  console.table(blocks);
}

getBlocks();
