import contract from "./config";

// Nova função para chamar pushGen
async function getNamesByGender(gender) {
  const names = await publicClient.readContract({
    address: contractAddress,
    abi: abi,
    functionName: "pushGen",
    args: [gender],
  });
  console.log(names);
}

getNamesByGender(0);
