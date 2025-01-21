import contract from "./config.js";


async function addPeopleArray(persons) {
  console.log("Pessoas a serem adicionadas:", persons);

  const txHash = await contract.write.pushPeopleArray([persons]);

  console.log("Transação enviada com hash:", txHash);
}

addPeopleArray([
  { name: "Ana", age: 28, gender: 1 },
  { name: "João", age: 25, gender: 0 },
  { name: "Maria", age: 30, gender: 1 },
  { name: "Pedro", age: 27, gender: 0 },
  { name: "Sofia", age: 29, gender: 1 },
  { name: "Luís", age: 26, gender: 0 },
  { name: "Isabel", age: 31, gender: 1 },
  { name: "Henrique", age: 24, gender: 0 },
  { name: "Beatriz", age: 32, gender: 1 },
  { name: "Gabriel", age: 23, gender: 0 },
]);
