import { ethers } from "ethers";
import abi from "../aula8/abi.js";

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

// Nova função para chamar pushGen
async function readGenderEnum() {
  const genderValue = await contract.getGender();
  const gender = genderValue === 0 ? "Male" : "Female";
  console.log("Gênero:", gender);
}

async function getPeopleByGender(gender) {
  const gen = gender === "Male" ? 0 : 1;
  const peopleNames = await contract.pushGen(gen);
  console.log("Nomes de pessoas com gênero " + gender + ":", peopleNames);
}

readGenderEnum();
getPeopleByGender("Male");
