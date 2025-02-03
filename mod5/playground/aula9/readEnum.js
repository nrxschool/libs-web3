import { createPublicClient, getContract, http } from "viem";
import abi from "../aula8/abi.js";

// Configuração do provider
const publicClient = createPublicClient({
  chain: anvil,
  transport: http(),
});

const CONTRACT_ADDRESS = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
const contract = getContract({
  address: CONTRACT_ADDRESS,
  abi: abi,
  client: publicClient,
});

// Nova função para chamar pushGen
async function readGenderEnum() {
  const genderValue = await contract.read.getGender();
  const gender = genderValue === 0n ? "Male" : "Female";
  console.log("Gênero:", gender);
}

async function getPeopleByGender(gender) {
  const gen = gender === "Male" ? 0 : 1;
  const peopleNames = await contract.read.pushGen();
  console.log("Nomes de pessoas com gênero " + gender + ":", peopleNames);
}

readGenderEnum();
getPeopleByGender("Male");
