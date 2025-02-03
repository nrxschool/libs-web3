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

async function readAllNames() {
  const names = await contract.read.getAllNames();
  console.log("Todos os nomes no array:", names);
}

async function readAllPerson() {
  const people = await contract.read.getAllPeople();
  console.table(people);
}

readAllNames();
readAllPerson();
