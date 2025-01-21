# Aula 6: **O que são ABIs**

## Abertura

Olá! Bem-vindo à nossa sexta aula sobre Viem v2. Nesta aula, vamos abordar um componente essencial para a interação com contratos inteligentes na blockchain: os ABIs (Application Binary Interface). Compreender o que são ABIs e como utilizá-los é crucial para qualquer desenvolvedor que queira interagir com contratos na blockchain de forma programática e eficiente.

### Programação:

1. O que é um ABI e por que ele é importante
2. Estrutura de um ABI
3. Como obter e interpretar um ABI
4. Utilizando ABIs em Viem para conectar em contratos

---

## 1. O que é um ABI e por que ele é importante

**ABI (Application Binary Interface)** é uma especificação que permite a comunicação entre contratos inteligentes e outras aplicações na blockchain Ethereum. Em termos simples, o ABI é uma “ponte” que define como uma aplicação externa pode interagir com um contrato inteligente, descrevendo as funções e os eventos que o contrato oferece.

### Importância dos ABIs

- **Interface de Comunicação**: O ABI define como os dados devem ser estruturados e codificados, permitindo que os métodos e eventos de um contrato inteligente sejam chamados de fora da blockchain.
- **Independência da Linguagem**: O ABI abstrai a complexidade de um contrato inteligente, permitindo que desenvolvedores o utilizem em várias linguagens de programação, como JavaScript (Viem), Python (Web3.py), entre outras.
- **Interoperabilidade**: Com o ABI, diferentes aplicações e bibliotecas podem interagir com contratos inteligentes de maneira uniforme.

Em resumo, o ABI atua como um “guia” que mapeia a estrutura do contrato, permitindo que chamadas de funções e leitura de dados sejam feitas com precisão.

## 2. Estrutura de um ABI

O ABI é composto de uma lista de objetos JSON, onde cada objeto representa um **método** ou **evento** do contrato. Os principais componentes de cada entrada de um ABI incluem:

- **name**: Nome da função ou evento.
- **type**: Tipo de entrada, que pode ser "function" para funções e "event" para eventos.
- **inputs**: Lista de parâmetros de entrada, contendo o nome e o tipo de cada parâmetro.
- **outputs**: Lista de parâmetros de saída (usado em funções que retornam valores).
- **stateMutability**: Indica se a função altera o estado da blockchain (ex: `view`, `pure`, `nonpayable`, `payable`).

### Exemplo de um ABI Simples

```json
[
  {
    "type": "function",
    "name": "balanceOf",
    "inputs": [{ "name": "owner", "type": "address" }],
    "outputs": [{ "name": "balance", "type": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "transfer",
    "inputs": [
      { "name": "to", "type": "address" },
      { "name": "value", "type": "uint256" }
    ],
    "outputs": [{ "name": "success", "type": "bool" }],
    "stateMutability": "nonpayable"
  }
]
```

Neste exemplo:

- A função `balanceOf` é uma função de leitura (estado `view`) que recebe um endereço e retorna o saldo (`balance`).
- A função `transfer` permite a transferência de tokens e retorna um valor booleano (`success`) indicando o sucesso da operação.

## 3. Como obter e interpretar um ABI

- [Compilar ERC20](../../playground/aula2/erc20.sol)

```bash
forge create aula2/erc20.sol:MyToken --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 --root .
```

## 4. Utilizando ABIs em Viem para acessar contratos

Agora que entendemos o que é um ABI e como ele é estruturado, vamos usá-lo no Viem para criar uma instância de contrato e interagir com ele. Para isso, precisamos do **endereço do contrato** e do **ABI**.

- [Conectando a um Contrato V1](../../playground/aula6/abiContract.v1.js)
- [Conectando a um Contrato V2](../../playground/aula6/abiContract.v2.js)

## Conclusão

Hoje, aprendemos sobre o que é um ABI e como ele serve como uma interface entre contratos inteligentes e aplicações externas. Entendemos a estrutura básica do ABI e como ele facilita a chamada de funções e eventos de contratos, além de ver um exemplo prático de uso no Viem. Esse conhecimento é crucial para avançarmos no desenvolvimento de aplicações descentralizadas que interagem diretamente com contratos inteligentes.

## Recapitulação

1. **O que é um ABI**: Interface de comunicação para contratos inteligentes.
2. **Estrutura do ABI**: Componentes principais, como inputs, outputs e stateMutability.
3. **Obtendo um ABI**: Acesso ao ABI de contratos públicos, como no Etherscan.
4. **Usando ABIs no Viem**: Instância de contrato e chamada de funções.

## Lição de casa

1. **Fácil**: Obtenha o ABI de um contrato público no Etherscan e exiba no console.
2. **Médio**: Use o ABI de um contrato ERC20 para criar uma função que exibe o saldo de qualquer conta.
3. **Difícil**: Crie uma função que monitore um evento do contrato (por exemplo, `Transfer`) e exiba detalhes das transferências em tempo real.

## Próxima aula

Na próxima aula, vamos aprender **Como escrever dados no contrato (envio de ERC20)**. Nos vemos lá!
