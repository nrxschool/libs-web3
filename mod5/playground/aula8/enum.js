import contract from "./config.js";

// Nova função para chamar pushGen
async function getNamesByGender(gender) {
  const names = await contract.read.pushGen([gender]);
  console.log(names);
}

getNamesByGender(0);
