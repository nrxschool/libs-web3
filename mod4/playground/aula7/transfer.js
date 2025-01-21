import { ethers } from "ethers";
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
const amount = ethers.parseEther("10");

async function transfer(address, amount) {
  const calldata = contract.interface.encodeFunctionData("transfer", [
    address,
    amount,
  ]);
  console.log("calldata:", calldata);

  const nonce = await provider.getTransactionCount(wallet.address);

  const gasPrice = await provider.getFeeData().then((data) => data.gasPrice);

  const gasLimit = await contract.transfer.estimateGas(address, amount);

  const network = await provider.getNetwork();
  const chainId = network.chainId;

  const transaction = {
    to: contractAddress,
    gasLimit: gasLimit,
    gasPrice: gasPrice,
    nonce: nonce,
    data: calldata,
    chainId: chainId,
  };

  const signedTransaction = await wallet.signTransaction(transaction);
  const tx = await provider.broadcastTransaction(signedTransaction);

  console.log("Transação enviada com hash:", tx.hash);
}

transfer(recipient, amount);
