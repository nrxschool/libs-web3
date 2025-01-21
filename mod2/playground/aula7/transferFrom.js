import Web3 from "web3";
import abi from "./abi.js";

// Configuração do provider
const RPC_URL = "http://127.0.0.1:8545";
const web3 = new Web3(RPC_URL);

// Configuração do signer
const ALICE_PRIVATE_KEY =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const BOB_PRIVATE_KEY =
  "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";

const ALICE_ADDRESS = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
const BOB_ADDRESS = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
const EVE_ADDRESS = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// config contract
const contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);

async function main() {
  // Alice approves 10 tokens for Bob
  const aliceAccount = web3.eth.accounts.privateKeyToAccount(ALICE_PRIVATE_KEY);
  web3.eth.accounts.wallet.add(aliceAccount);

  await contract.methods.approve(BOB_ADDRESS, web3.utils.toWei("10", "ether")).send({ from: ALICE_ADDRESS });
  console.log("Alice approved 10 tokens for Bob");

  // Check the balance and allowance of Alice, Bob, and Eve
  const aliceBalance = await contract.methods.balanceOf(ALICE_ADDRESS).call();
  const bobBalance = await contract.methods.balanceOf(BOB_ADDRESS).call();
  const eveBalance = await contract.methods.balanceOf(EVE_ADDRESS).call();
  const allowance = await contract.methods.allowance(ALICE_ADDRESS, BOB_ADDRESS).call();

  console.table({
    "Alice's balance": web3.utils.fromWei(aliceBalance, "ether"),
    "Bob's balance": web3.utils.fromWei(bobBalance, "ether"),
    "Eve's balance": web3.utils.fromWei(eveBalance, "ether"),
    "Allowance for Bob from Alice": web3.utils.fromWei(allowance, "ether")
  });

  // Bob signs the tx sending 1 token from Alice to Eve
  const bobAccount = web3.eth.accounts.privateKeyToAccount(BOB_PRIVATE_KEY);
  web3.eth.accounts.wallet.add(bobAccount);

  await contract.methods.transferFrom(ALICE_ADDRESS, EVE_ADDRESS, web3.utils.toWei("1", "ether")).send({ from: BOB_ADDRESS });
  console.log("Bob transferred 1 token from Alice to Eve");

  // Check the balance and allowance of Alice, Bob, and Eve again
  const newAliceBalance = await contract.methods.balanceOf(ALICE_ADDRESS).call();
  const newBobBalance = await contract.methods.balanceOf(BOB_ADDRESS).call();
  const newEveBalance = await contract.methods.balanceOf(EVE_ADDRESS).call();
  const newAllowance = await contract.methods.allowance(ALICE_ADDRESS, BOB_ADDRESS).call();

  console.table({
    "Alice's new balance": web3.utils.fromWei(newAliceBalance, "ether"),
    "Bob's new balance": web3.utils.fromWei(newBobBalance, "ether"),
    "Eve's new balance": web3.utils.fromWei(newEveBalance, "ether"),
    "New allowance for Bob from Alice": web3.utils.fromWei(newAllowance, "ether")
  });
}

main().catch(console.error);
