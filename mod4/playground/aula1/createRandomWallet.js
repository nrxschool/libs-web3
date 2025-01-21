import { ethers } from "ethers";

// Create random wallet
const wallet = ethers.Wallet.createRandom();
console.table({
  address: wallet.address,
  privateKey: wallet.privateKey,
  publicKey: wallet.publicKey
});
