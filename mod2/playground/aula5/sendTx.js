import { Web3 } from "web3";

// Configuração do provider
const RPC_URL = "http://127.0.0.1:8545";
const web3 = new Web3(RPC_URL);

// Configuração do signer
const PRIVATE_KEY =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const account = web3.eth.accounts.wallet.add(PRIVATE_KEY)[0];

// Função para enviar uma transação
async function sendTransaction(account) {
  try {
    // Obtém o nonce do endereço
    const nonce = await web3.eth.getTransactionCount(account.address);

    // Define o destinatário e o valor da transação
    const toAddress = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
    const valueInEther = "1";

    // Obtém o preço atual do gás da rede
    const gasPrice = await web3.eth.getGasPrice();

    // Calcula o gás necessário para a transação
    const gasLimit = await web3.eth.estimateGas({
      to: toAddress,
      from: account.address,
      value: web3.utils.toWei(valueInEther, "ether"),
    });

    // Monta a transação
    const transaction = {
      to: toAddress,
      value: web3.utils.toWei(valueInEther, "ether"),
      gas: gasLimit,
      gasPrice: gasPrice,
      nonce: nonce,
    };

    // Assina a transação
    const signedTransaction = await web3.eth.accounts.signTransaction(
      transaction,
      PRIVATE_KEY
    );

    // Envia a transação
    const receipt = await web3.eth.sendSignedTransaction(
      signedTransaction.rawTransaction
    );

    console.log(
      "Transação enviada com sucesso! Hash:",
      receipt.transactionHash
    );
  } catch (error) {
    console.error("Erro ao enviar a transação:", error);
  }
}

// Chama a função para enviar a transação
sendTransaction(account);
