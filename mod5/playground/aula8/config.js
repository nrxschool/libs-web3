import { http, getContract, createWalletClient } from "viem";
import { anvil } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import abi from "./abi.js";

const CONTRACT_ADDRESS = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";

const walletClient = createWalletClient({
  chain: anvil,
  transport: http(),
  account: privateKeyToAccount(
    "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
  ),
});

const contract = getContract({
  address: CONTRACT_ADDRESS,
  abi: abi,
  client: walletClient,
});


export default contract;
