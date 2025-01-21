import { ethers } from "ethers";

// Create Account
const PRIVATE_KEY = "0x2045decb6a28c0e8a68995c150645d55b8ce2dbff367565962cad2f94edbc018";
const wallet = new ethers.Wallet(PRIVATE_KEY);
console.log(wallet.address);