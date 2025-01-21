import { ethers, parseEther, formatUnits } from "ethers";
import abi from "./abi.js";

// Configuração do provider
const RPC_URL = "http://127.0.0.1:8545";
const provider = new ethers.JsonRpcProvider(RPC_URL);

const PRIVATE_KEY =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Endereço do contrato
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// Cria uma instância do contrato
const contract = new ethers.Contract(contractAddress, abi, wallet);

const recipient = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
const amount = parseEther("10");

async function approve(address, amount) {
  const tx = await contract.approve(address, amount);
  console.log("Transação enviada com hash:", tx.hash);

  // Verifica o allowance após a confirmação
  validateAllowance(wallet.address, recipient, amount);
}

async function validateAllowance(owner, spender, amount) {
  try {
    const allowance = await contract.allowance(owner, spender);
    const allowanceETH = formatUnits(allowance, "ether");
    const amountETH = formatUnits(amount, "ether");
    console.log(`Permissão atual para ${spender}: ${allowanceETH} ether`);
    console.log(
      `Approve ${amountETH === allowanceETH ? "Concluído" : "falhou"}`
    );
  } catch (error) {
    console.error("Erro ao verificar permissão:", error);
  }
}

approve(recipient, amount);
