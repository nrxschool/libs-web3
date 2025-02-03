import { createPublicClient, getContract, http } from "viem";
import { anvil } from "viem/chains";
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

async function readAllNames() {
  const names = await contract.read.getAllNames();
  console.log("Todos os nomes no array:", names);
}

async function readAllPerson() {
  let people = await contract.read.getAllPeople();
  people = people.map((p) => {
    return {
      name: p.name,
      age: p.age,
      gender: p.gender === 0 ? "Homem" : "Mulher",
    };
  });
  console.table(people);
}

readAllNames();
readAllPerson();
