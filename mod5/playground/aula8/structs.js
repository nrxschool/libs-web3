import contract from "./config";

async function addPeople(name, age, gender) {
  contract.write.pushPeople([
    {
      name: name,
      age: age,
      gender: gender,
    },
  ]);
}

const male = 0;
const female = 1;

addPeople("Carlos", 32, male);
