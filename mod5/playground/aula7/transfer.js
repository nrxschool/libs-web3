import { createWalletClient, http, parseEther } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { anvil } from "viem/chains";
import abi from "./abi.js";

const PRIVATE_KEY =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

const walletClient = createWalletClient({
  transport: http(),
  chain: anvil,
  account: privateKeyToAccount(PRIVATE_KEY),
});

// Endereço do contrato
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const recipient = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
const amount = parseEther("10");

async function transfer(address, amount) {
  const hash = await walletClient.writeContract({
    address: contractAddress,
    abi,
    functionName: "transfer",
    args: [address, amount],
    account: walletClient.account.address,
  });

  console.log("Transação enviada com hash:", hash);
}

transfer(recipient, amount);
