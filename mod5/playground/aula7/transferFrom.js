import {
  createPublicClient,
  createWalletClient,
  http,
  parseEther,
  formatEther,
  getContract,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { anvil } from "viem/chains";
import abi from "./abi.js";

const ALICE_ADDRESS = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
const BOB_ADDRESS = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
const EVE_ADDRESS = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";

const aliceContractConnection = getContract({
  address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  abi: abi,
  client: {
    public: createPublicClient({
      chain: anvil,
      transport: http(),
    }),
    wallet: createWalletClient({
      chain: anvil,
      transport: http(),
      account: privateKeyToAccount(
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
      ),
    }),
  },
});

const bobContractConnection = getContract({
  address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  abi: abi,
  client: {
    public: createPublicClient({
      chain: anvil,
      transport: http(),
    }),
    wallet: createWalletClient({
      chain: anvil,
      transport: http(),
      account: privateKeyToAccount(
        "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"
      ),
    }),
  },
});

const commumConnection = getContract({
  address: CONTRACT_ADDRESS,
  abi,
  client: {
    public: createPublicClient({
      chain: anvil,
      transport: http(),
    }),
  },
});

async function main() {
  // Alice approves 10 tokens for Bob
  const txhash = await aliceContractConnection.write.approve([
    BOB_ADDRESS,
    parseEther("10"),
  ]);

  console.log("Alice approved 10 tokens for Bob in:", txhash);

  // Check the balance and allowance of Alice, Bob, and Eve
  const aliceBalance = await commumConnection.read.balanceOf([ALICE_ADDRESS]);
  const bobBalance = await commumConnection.read.balanceOf([BOB_ADDRESS]);
  const eveBalance = await commumConnection.read.balanceOf([EVE_ADDRESS]);
  const allowance = await commumConnection.read.allowance([
    ALICE_ADDRESS,
    BOB_ADDRESS,
  ]);

  console.table({
    "Alice's balance": formatEther(aliceBalance),
    "Bob's balance": formatEther(bobBalance),
    "Eve's balance": formatEther(eveBalance),
    "Allowance for Bob from Alice": formatEther(allowance),
  });

  // Bob signs the tx sending 1 token from Alice to Eve
  const txhash2 = await bobContractConnection.write.transferFrom([
    ALICE_ADDRESS,
    EVE_ADDRESS,
    parseEther("1"),
  ]);

  console.log("Bob transferred 1 token from Alice to Eve in:", txhash2);

  // Check the balance and allowance of Alice, Bob, and Eve again
  const newAliceBalance = await commumConnection.read.balanceOf([
    ALICE_ADDRESS,
  ]);
  const newBobBalance = await commumConnection.read.balanceOf([BOB_ADDRESS]);
  const newEveBalance = await commumConnection.read.balanceOf([EVE_ADDRESS]);
  const newAllowance = await commumConnection.read.allowance([
    ALICE_ADDRESS,
    BOB_ADDRESS,
  ]);

  console.table({
    "Alice's new balance": formatEther(newAliceBalance),
    "Bob's new balance": formatEther(newBobBalance),
    "Eve's new balance": formatEther(newEveBalance),
    "New allowance for Bob from Alice": formatEther(newAllowance),
  });
}

main().catch(console.error);
