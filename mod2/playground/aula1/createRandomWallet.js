import { Web3 } from "web3";

const web3 = new Web3();

// Create Account
const account = web3.eth.accounts.wallet.create(1);
console.log(account);
