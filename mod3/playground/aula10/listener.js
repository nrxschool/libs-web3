const ppeList = ["0xPPEAddress1", "0xPPEAddress2"]; // Lista de endereços públicos

// Subscreve ao evento Transfer e responde com estorno para PPEs
contract.events.Transfer({ fromBlock: "latest" }, async (error, event) => {
  if (error) {
    console.error("Erro ao subscrever ao evento Transfer:", error);
    return;
  }

  const receiver = event.returnValues.to;
  const amount = event.returnValues.value;
  const sender = event.returnValues.from;

  // Verifica se o destinatário está na lista de pessoas publicamente expostas
  if (ppeList.includes(receiver)) {
    console.log("Transferência detectada para um PPE:", receiver);
    console.log("Iniciando estorno...");

    // Cria a transação de estorno
    const transaction = contract.methods.transfer(sender, amount);
    const gasLimit = await transaction.estimateGas({ from: account.address });
    const gasPrice = await web3.eth.getGasPrice();
    const data = transaction.encodeABI();

    const tx = {
      from: account.address,
      to: contractAddress,
      gas: gasLimit,
      gasPrice: gasPrice,
      data: data,
    };

    const signedTransaction = await web3.eth.accounts.signTransaction(
      tx,
      PRIVATE_KEY
    );
    const receipt = await web3.eth.sendSignedTransaction(
      signedTransaction.rawTransaction
    );

    console.log(
      "Estorno enviado com sucesso! Hash da transação:",
      receipt.transactionHash
    );
  } else {
    console.log(
      "Transferência detectada, mas o destinatário não está na lista de PPE."
    );
  }
});
