import { http, getContract, createWalletClient } from "viem";
import { anvil } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import abi from "./abi.js";

const CONTRACT_ADDRESS = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

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
