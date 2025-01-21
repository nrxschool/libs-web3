# Aula: **Subscrição de Eventos EVM**

## Abertura

Olá! Bem-vindo à nossa aula sobre subscrição de eventos EVM e resposta automatizada para eventos específicos de contratos. Nesta aula, vamos aprender a monitorar eventos importantes na blockchain, tanto em nível global (novos blocos e transações) quanto eventos específicos de contratos (como transferências de tokens ERC20). No final, vamos implementar uma lógica de estorno automático para transferências direcionadas a pessoas publicamente expostas, um recurso importante para aplicações que buscam aumentar a transparência e segurança em transações com pessoas públicas.

### Programação:

1. Subscrição de eventos EVM: Monitorando novos blocos e transações
2. Subscrição de eventos de contratos: Monitorando transferências de tokens ERC20
3. Estorno automático para pessoas publicamente expostas: Implementação prática

---

## 1. Subscrição de eventos EVM (novos blocos e novas transações)

Eventos globais na EVM (Ethereum Virtual Machine) incluem a mineração de novos blocos e a confirmação de novas transações. Monitorar esses eventos permite criar aplicações que reagem em tempo real à atividade da rede, algo fundamental para análise de dados, segurança e aplicações automatizadas.

### Monitorando novos blocos

A subscrição ao evento `newBlockHeaders` permite que você seja notificado assim que um novo bloco é minerado. O código a seguir demonstra como monitorar novos blocos:

```javascript
import Web3 from "web3";
const web3 = new Web3("ws://127.0.0.1:8546"); // WebSocket para ouvir eventos em tempo real

// Subscreve ao evento de novos blocos
web3.eth.subscribe("newBlockHeaders", (error, blockHeader) => {
  if (!error) {
    console.log("Novo bloco:", blockHeader.number);
    console.log("Hash:", blockHeader.hash);
  } else {
    console.error("Erro ao subscrever ao novo bloco:", error);
  }
});
```

### Monitorando novas transações

Para monitorar todas as transações na rede, você pode assinar o evento `pendingTransactions`. Isso permite capturar transações antes que sejam incluídas em blocos.

```javascript
web3.eth.subscribe("pendingTransactions", (error, transactionHash) => {
  if (!error) {
    console.log("Nova transação pendente:", transactionHash);
  } else {
    console.error("Erro ao subscrever a transações pendentes:", error);
  }
});
```

Esses métodos de monitoramento são muito úteis para aplicações que precisam agir imediatamente após a mineração de novos blocos ou a criação de transações pendentes, como bots de arbitragem.

## 2. Subscrição de eventos de contratos (Transferência ERC20)

Podemos monitorar eventos específicos de um contrato, como o evento `Transfer` de tokens ERC20. Esse evento é acionado sempre que uma transferência ocorre e é útil para monitorar fluxos de tokens entre contas, registrar atividades ou acionar funções baseadas na movimentação de tokens.

### Exemplo: Monitorando Transferências ERC20

Para monitorar eventos de transferência de um token ERC20, primeiro criamos uma instância do contrato e, em seguida, subscrevemos ao evento `Transfer`.

```javascript
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
```

Neste exemplo:

- Especificamos o `fromBlock: "latest"` para monitorar apenas transferências a partir do bloco mais recente.
- Quando uma transferência ocorre, os detalhes são exibidos no console.

## 3. Estorno Automático para Pessoas Publicamente Expostas

Podemos implementar uma lógica para monitorar transferências que envolvem pessoas publicamente expostas (PPEs) e automaticamente enviar um estorno quando detectarmos uma transferência. Isso é especialmente útil para garantir transparência e fornecer um mecanismo de devolução em transações com pessoas públicas.

### Implementação Básica: Estorno Automático para Transferências para PPEs

Suponha que temos uma lista de endereços de PPEs. Quando uma transferência para um desses endereços é detectada, o sistema automaticamente envia uma transação de estorno para o remetente, devolvendo o valor transferido.

```javascript
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
```

Neste código:

- **Lista de PPEs**: Definimos uma lista de endereços de pessoas publicamente expostas para monitorar.
- **Monitoramento de Eventos**: Subscrevemos ao evento `Transfer` e verificamos cada transação para ver se o destinatário está na lista de PPEs.
- **Estorno Condicional**: Se o destinatário estiver na lista de PPEs, uma transação de estorno é enviada automaticamente, devolvendo o valor ao remetente original.

> **Nota**: Certifique-se de que as operações de estorno estejam bem estruturadas para evitar transferências indesejadas e garantir que os contratos permitam essa funcionalidade.

## Conclusão

Hoje aprendemos como monitorar eventos importantes na blockchain Ethereum e implementamos uma resposta automática para transferências direcionadas a pessoas publicamente expostas. Esse recurso é importante para garantir a segurança e transparência em transações, especialmente quando envolvem figuras públicas.

## Recapitulação

1. **Eventos EVM**: Monitoramos novos blocos e transações pendentes.
2. **Eventos de Contrato**: Subscrevemos a transferências de tokens ERC20.
3. **Estorno Automático para PPEs**: Implementamos uma resposta automatizada para estornar valores enviados a pessoas publicamente expostas.

## Lição de Casa

1. **Fácil**: Subscreva ao evento `newBlockHeaders` e exiba o número e o hash de cada novo bloco.
2. **Médio**: Subscreva ao evento `Transfer` de um contrato ERC20 e exiba as transferências acima de um valor específico.
3. **Difícil**: Implemente uma lógica de estorno automático que detecte transferências para uma lista de PPEs e estorne o valor para o remetente.

## Próxima Aula

Na próxima aula, vamos aprender sobre **Ether.js**. Nos vemos lá!
