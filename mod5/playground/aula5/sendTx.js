import { createWalletClient, http, parseEther, createPublicClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { anvil } from "viem/chains";

const PRIVATE_KEY =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

// Inicialize o cliente com a chave privada
const account = privateKeyToAccount(PRIVATE_KEY);

const provider = createPublicClient({
  chain: anvil,
  transport: http(),
});

const signer = createWalletClient({
  chain: anvil,
  transport: http(),
  account,
});

async function preparedTx() {
  try {
    const toAddress = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
    const valueInEther = "1";

    // Etapa 1: Montar a transação
    const unsignedTx = await provider.prepareTransactionRequest({
      to: toAddress,
      value: parseEther(valueInEther),
      nonce: await provider.getTransactionCount({ address: account.address }),
    });

    console.log("Transação montada:", unsignedTx);

    // Etapa 2: Assinar a transação
    const signedTx = await signer.signTransaction(unsignedTx);
    console.log("Transação assinada:", signedTx);

    // Etapa 3: Enviar a transação
    const txHash = await provider.sendRawTransaction({
      serializedTransaction: signedTx,
    });
    console.log("Transação enviada com sucesso! Hash:", txHash);
  } catch (error) {
    console.error("Erro ao enviar a transação:", error);
  }
}
preparedTx()

