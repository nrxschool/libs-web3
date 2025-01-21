// ABI do contrato ERC20 (apenas o evento Transfer é necessário aqui)
const abi = [
  {
    type: "event",
    name: "Transfer",
    inputs: [
      { name: "from", type: "address", indexed: true },
      { name: "to", type: "address", indexed: true },
      { name: "value", type: "uint256", indexed: false },
    ],
  },
];

// Endereço do contrato
const contractAddress = "0xEndereçoDoContratoToken";
const contract = new web3.eth.Contract(abi, contractAddress);

// Subscreve ao evento Transfer do token ERC20
contract.events.Transfer({ fromBlock: "latest" }, (error, event) => {
  if (!error) {
    console.log("Transferência detectada:");
    console.log("De:", event.returnValues.from);
    console.log("Para:", event.returnValues.to);
    console.log(
      "Quantidade:",
      web3.utils.fromWei(event.returnValues.value, "ether")
    );
  } else {
    console.error("Erro ao subscrever ao evento Transfer:", error);
  }
});
