web3.eth.subscribe("pendingTransactions", (error, transactionHash) => {
  if (!error) {
    console.log("Nova transação pendente:", transactionHash);
  } else {
    console.error("Erro ao subscrever a transações pendentes:", error);
  }
});
