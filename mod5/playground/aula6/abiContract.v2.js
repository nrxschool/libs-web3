import { createPublicClient, formatUnits, http } from "viem";
import { anvil } from "viem/chains";
import abi from "./abi.js";

// Configuração do provider
const publicClient = createPublicClient({
  chain: anvil,
  transport: http(),
});

// Endereço do contrato e da conta para consulta
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const accountAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

// Função para obter dados do contrato
async function fetchContractData() {
  try {
    // Chama a função `balanceOf` no contrato
    const balance = await publicClient.readContract({
      address: CONTRACT_ADDRESS,
      abi: abi,
      functionName: "balanceOf",
      args: [accountAddress],
    });

    // Chama a função `name` no contrato
    const tokenName = await publicClient.readContract({
      address: CONTRACT_ADDRESS,
      abi: abi,
      functionName: "name",
    });

    console.table({
      tokenName,
      accountAddress,
      balance: formatUnits(balance, 18)
    });
  } catch (error) {
    console.error("Erro ao consultar o contrato:", error);
  }
}

// Executa a função
fetchContractData();
