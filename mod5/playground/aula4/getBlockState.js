// 1. Instale e importe a biblioteca Viem
import { createPublicClient, http } from "viem";
import { anvil } from "viem/chains";

// 2. Configure o client
const client = createPublicClient({
  transport: http(),
  chain: anvil,
});

// block = number
// block = hash
// block = tag

async function fetchBlocks() {
  const blockTags = ["earliest", "latest", "pending", "finalized", "safe"];
  const blocks = [];

  for (const tag of blockTags) {
    const block = await client.getBlock({
      blockTag: tag,
      // blockHash: hash,
      // blockNumber: number,
    });
    blocks.push({
      tag: tag.toUpperCase(),
      Block: block.number,
    });
  }
  console.table(blocks);
}

fetchBlocks();
