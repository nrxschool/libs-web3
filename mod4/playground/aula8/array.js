import { ethers } from "ethers";
import abi from "./abi.js";

// Configuração do provider
const RPC_URL = "http://127.0.0.1:8545";
const provider = new ethers.JsonRpcProvider(RPC_URL);

const PRIVATE_KEY =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Endereço do contrato
const contractAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";

// Cria uma instância do contrato
const contract = new ethers.Contract(contractAddress, abi, wallet);

async function addPeopleArray(peopleArray) {
  const persons = peopleArray.map((person) => ({
    name: person.name,
    age: person.age,
    gender: person.gender,
  }));
  console.log(persons);
  await contract.pushPeopleArray(persons);
}

addPeopleArray([
  { name: "Ana", age: 28, gender: 1 },
  { name: "João", age: 25, gender: 0 },
  { name: "Maria", age: 30, gender: 1 },
  { name: "Pedro", age: 27, gender: 0 },
  { name: "Sofia", age: 29, gender: 1 },
  { name: "Luís", age: 26, gender: 0 },
  { name: "Isabel", age: 31, gender: 1 },
  { name: "Ricardo", age: 24, gender: 0 },
  { name: "Beatriz", age: 32, gender: 1 },
  { name: "Henrique", age: 23, gender: 0 },
]);
