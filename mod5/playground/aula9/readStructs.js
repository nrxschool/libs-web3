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


async function getPeople() {
  const person = await contract.read.getPerson();

  console.log("last people");
  console.table({
    Nome: person.name,
    Idade: person.age,
    Gênero: person.gender,
  });
}

async function getAllPeople() {
  let allPeople = await contract.read.getAllPeople();

  allPeople = allPeople.map((people) => {
    return {
      name: people.name,
      age: people.age,
      gender: people.gender === 1 ? "Woman" : "Man",
    };
  });
  console.log("All people");
  console.table(allPeople);
}

getPeople();
getAllPeople();
