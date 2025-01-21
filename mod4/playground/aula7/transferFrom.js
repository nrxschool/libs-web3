import { ethers } from "ethers";
import abi from "./abi.js";

// Configuração do provider
const RPC_URL = "http://127.0.0.1:8545";
const provider = new ethers.JsonRpcProvider(RPC_URL);

// Configuração do signer
const ALICE_PRIVATE_KEY =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const BOB_PRIVATE_KEY =
  "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";

const ALICE_ADDRESS = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
const BOB_ADDRESS = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
const EVE_ADDRESS = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// config contract and wallets
const aliceWallet = new ethers.Wallet(ALICE_PRIVATE_KEY, provider);
const bobWallet = new ethers.Wallet(BOB_PRIVATE_KEY, provider);
const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);

async function main() {
  // Alice approves 10 tokens for Bob
  const aliceContract = contract.connect(aliceWallet);
  await aliceContract.approve(BOB_ADDRESS, ethers.parseEther("10"));
  console.log("Alice approved 10 tokens for Bob");

  // Check the balance and allowance of Alice, Bob, and Eve
  const aliceBalance = await contract.balanceOf(ALICE_ADDRESS);
  const bobBalance = await contract.balanceOf(BOB_ADDRESS);
  const eveBalance = await contract.balanceOf(EVE_ADDRESS);
  const allowance = await contract.allowance(ALICE_ADDRESS, BOB_ADDRESS);

  console.table({
    "Alice's balance": ethers.formatEther(aliceBalance),
    "Bob's balance": ethers.formatEther(bobBalance),
    "Eve's balance": ethers.formatEther(eveBalance),
    "Allowance for Bob from Alice": ethers.formatEther(allowance)
  });

  // Bob signs the tx sending 1 token from Alice to Eve
  const bobContract = contract.connect(bobWallet);
  await bobContract.transferFrom(ALICE_ADDRESS, EVE_ADDRESS, ethers.parseEther("1"));
  console.log("Bob transferred 1 token from Alice to Eve");

  // Check the balance and allowance of Alice, Bob, and Eve again
  const newAliceBalance = await contract.balanceOf(ALICE_ADDRESS);
  const newBobBalance = await contract.balanceOf(BOB_ADDRESS);
  const newEveBalance = await contract.balanceOf(EVE_ADDRESS);
  const newAllowance = await contract.allowance(ALICE_ADDRESS, BOB_ADDRESS);

  console.table({
    "Alice's new balance": ethers.formatEther(newAliceBalance),
    "Bob's new balance": ethers.formatEther(newBobBalance),
    "Eve's new balance": ethers.formatEther(newEveBalance),
    "New allowance for Bob from Alice": ethers.formatEther(newAllowance)
  });
}

main().catch(console.error);
