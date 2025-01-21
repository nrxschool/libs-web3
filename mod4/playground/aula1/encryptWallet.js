import { ethers } from "ethers";
import readline from "readline";

const PRIVATE_KEY =
  "0xb762c5177d93ae67873060b655b652eecddca5085d918c2de4ca23b1e6be4812";
const wallet = new ethers.Wallet(PRIVATE_KEY);
console.log("PrivateKey:", wallet.privateKey);
console.log("Address:", wallet.address);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para solicitar a senha e encriptar a chave privada
const encryptPrivateKey = async () => {
  rl.question("Digite sua senha para encriptar: ", async (password) => {
    rl.close();

    const encryptedWallet = await wallet.encrypt(password);
    console.log("Wallet Encriptado:", encryptedWallet);

    // Chamar a função para decriptar
    decryptWallet(encryptedWallet);
  });
};

// Função para solicitar a senha e decriptar a chave privada
const decryptWallet = (encryptedWallet) => {
  const rlDecrypt = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rlDecrypt.question("Digite sua senha para decriptar: ", async (password) => {
    rlDecrypt.close();

    try {
      const decryptedWallet = await ethers.Wallet.fromEncryptedJson(
        encryptedWallet,
        password
      );
      console.log("Wallet Decriptado:", decryptedWallet.address);
      console.log("Wallet Decriptado:", decryptedWallet.privateKey);
    } catch (error) {
      console.error("Erro ao decriptar a chave:", error.message);
    }
  });
};

// Inicia o processo
encryptPrivateKey();
