import { createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { foundry } from "viem/chains";
import abi from "../aula8/abi.js";

// Configuração do provider
const transport = http("http://127.0.0.1:8545");

const publicClient = createPublicClient({
  chain: foundry,
  transport,
});

// Endereço do contrato
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

async function getPeople() {
  const person = await publicClient.readContract({
    address: contractAddress,
    abi,
    functionName: "getPerson",
  });

  console.log("last people");
  console.table({
    Nome: person.name,
    Idade: person.age,
    Gênero: person.gender,
  });
}

async function getAllPeople() {
  let allPeople = await publicClient.readContract({
    address: contractAddress,
    abi,
    functionName: "getAllPeople",
  });

  allPeople = allPeople.map(people => {
    return {
      name: people.name,
      age: people.age,
      gender: people.gender === 1 ? 'Woman' : 'Man'
    }
  })
  console.log("All people");
  console.table(allPeople);
}



getPeople();
getAllPeople();
