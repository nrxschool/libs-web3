import contract from "./config.js";

async function addPeople(name, age, gender) {
  const txHash = await contract.write.pushPeople([
    {
      name: name,
      age: age,
      gender: gender,
    },
  ]);
  console.log("Transação enviada com hash:", txHash);
}

const male = 0;
const female = 1;

addPeople("Carlos", 32, male);
