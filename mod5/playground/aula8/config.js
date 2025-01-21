import { http, getContract } from "viem";
import { anvil } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import abi from "./abi.js";

const contract = getContract({
  address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  abi: abi,
  client: {
    public: {
      chain: anvil,
      transport: http(),
    },
    wallet: {
      chain: anvil,
      transport: http(),
      account: privateKeyToAccount(
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
      ),
    },
  },
});

export default contract;
