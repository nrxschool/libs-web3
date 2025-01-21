# Aula 4: **Lendo dados de blocos**

## Abertura

Olá! Bem-vindo à nossa quarta aula sobre Web3.js v4. Nesta aula, vamos explorar métodos para ler dados de blocos da blockchain Ethereum. Entenderemos como acessar informações específicas de blocos, monitorar transações contidas em blocos específicos e obter o estado dos blocos em diferentes estágios de validação. Esse conhecimento é essencial para monitorar atividades na blockchain e construir aplicações mais interativas e informativas.

### Programação:

1. Buscando blocos com Web3.js
2. Buscando transações de um bloco específico
3. Verificando o estado de um bloco

---

## 1. Buscando blocos com Web3.js

Para acessar informações de blocos, o Web3.js nos fornece métodos como `getBlock` e `getBlockNumber`. Vamos ver como utilizá-los:

- [Buscando Blocos](../../playground/aula4/getBlock.js)

Esses métodos retornam informações detalhadas, como o número do bloco, timestamp, hash, minerador e o total de transações, entre outros. Isso permite analisar tanto o bloco mais recente quanto blocos específicos para entender melhor o histórico da blockchain.

## 2. Buscando transações de um bloco específico

Para investigar transações em um bloco específico, o Web3.js oferece métodos que facilitam o acesso a contagens e detalhes das transações em qualquer bloco:

- [Buscando Transações por Blocos](../../playground/aula4/getTxFromBlock.js)

Nesse exemplo, especificamos o hash do bloco e o índice da transação dentro do bloco para buscar uma transação específica. Isso é útil para rastrear transações individuais dentro de blocos conhecidos.

## 3. Estado de um bloco

Os blocos na blockchain Ethereum possuem diferentes estados conforme sua validação e segurança na rede. Podemos buscar blocos em diferentes estados, como:

- [Direntes Estados de um Bloco](../../playground/aula4/getBlockState.js)

Esses estados de bloco são úteis para entender a validade e segurança dos dados em cada estágio. Por exemplo, blocos “finalizados” ou “seguros” têm maior confiabilidade para análise e monitoramento de dados críticos, enquanto blocos “pendentes” estão ainda aguardando confirmação na rede.

## Conclusão

Nesta aula, aprendemos a usar Web3.js para acessar dados de blocos e transações. Exploramos funções essenciais, como `getBlock`, `getBlockNumber` e `getTransactionFromBlock`, para obter uma visão abrangente da blockchain. Esse conhecimento permite que você analise a blockchain de forma detalhada e aplique esses métodos para monitoramento ou desenvolvimento de ferramentas analíticas.

## Recapitulação

1. **Buscando blocos**: Métodos para acessar blocos específicos e o número mais recente.
2. **Buscando transações em blocos**: Obtendo contagem e detalhes de transações.
3. **Estado de um bloco**: Compreensão dos diferentes estados de blocos, como “earliest”, “latest”, e “pending”.

## Lição de casa

1. **Fácil**: Use `web3.eth.getBlockNumber` para exibir o número do último bloco.
2. **Médio**: Extraia o hash e o timestamp do último bloco e imprima no console.
3. **Difícil**: Crie uma função para monitorar novos blocos e exibir as informações de todas as transações contidas nos blocos recebidos em tempo real.

## Próxima aula

Na próxima aula, vamos aprender sobre **Como criar transações simples com Web3.js (envio de Ether)**. Nos vemos lá!
