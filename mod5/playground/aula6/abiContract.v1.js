import { createPublicClient, http, formatUnits } from "viem";
import { getContract } from "viem";
import { anvil } from "viem/chains";
import abi from "./abi.js";

// Configuração do provider
const publicClient = createPublicClient({
  chain: anvil,
  transport: http(),
});

// Endereço do contrato
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const address = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

// Cria uma instância do contrato
const contract = getContract({
  address: CONTRACT_ADDRESS,
  abi: abi,
  client: publicClient,
});

// Função para verificar o saldo de uma conta
const balance = await contract.read.balanceOf([address]);
const name = await contract.read.name();

console.table({
  tokenName: name,
  conta: address,
  balance: formatUnits(balance, 18),
});
