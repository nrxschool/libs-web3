import { ethers } from "ethers";

// Configuração do provider
const RPC_URL = "http://127.0.0.1:8545";
const provider = new ethers.JsonRpcProvider(RPC_URL);

// Configuração do signer
const PRIVATE_KEY =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const wallet = new ethers.Wallet(PRIVATE_KEY).connect(provider);

// Função para enviar uma transação
async function sendTransaction(wallet) {
  try {
    // Obtém o nonce do endereço usando o provider
    const nonce = await provider.getTransactionCount(wallet.address);

    // Define o destinatário e o valor da transação
    const toAddress = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
    const valueInEther = "1";

    // Obtém o preço atual do gás da rede
    const feeData = await provider.getFeeData(); // Obtém os dados da taxa
    const gasPrice = feeData.gasPrice; // Extraindo o gasPrice do feeData

    // Calcula o gás necessário para a transação
    const gasLimit = await provider.estimateGas({
      to: toAddress,
      from: wallet.address,
      value: ethers.parseEther(valueInEther),
    });

    // Monta a transação
    const transaction = {
      to: toAddress,
      value: ethers.parseEther(valueInEther),
      gasLimit: gasLimit,
      gasPrice: gasPrice,
      nonce: nonce,
    };

    // Envia a transação
    const txResponse = await wallet.sendTransaction(transaction);
    const receipt = await txResponse.wait();

    console.log(
      "Transação enviada com sucesso! Hash:",
      txResponse.hash // Alterado para acessar o hash diretamente do txResponse
    );
  } catch (error) {
    console.error("Erro ao enviar a transação:", error);
  }
}

// Chama a função para enviar a transação
sendTransaction(wallet);