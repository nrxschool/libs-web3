import { Web3 } from "web3";
import abi from "./abi.js";

// Configuração do provider
const RPC_URL = "http://127.0.0.1:8545";
const web3 = new Web3(RPC_URL);

const PRIVATE_KEY =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const account = web3.eth.accounts.wallet.add(PRIVATE_KEY)[0];

// Endereço do contrato
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// Cria uma instância do contrato
const contract = new web3.eth.Contract(abi, contractAddress);

async function addPeople(name, age, gender) {
  const person = {
    name: name,
    age: age,
    gender: gender,
  };

  await contract.methods.pushPeople(person).send({ from: account.address });
}

const male = 0;
const female = 1;

addPeople("Carlos", 32, male);
