# Aula 5: **Como criar transações simples (envio de Ether)**

## Abertura

Olá! Bem-vindo à quinta aula do curso sobre Ethers v6.x. Hoje, vamos abordar a criação de transações simples na blockchain Ethereum, focando no envio de Ether de uma conta para outra. Aprender a realizar transações é um passo fundamental para quem deseja interagir com a blockchain de forma prática, e nesta aula você ganhará confiança para começar a trabalhar com transferências de ativos.

### Programação:

1. Entendendo transações na blockchain
2. Passo a passo para criar uma transação simples
3. Executando e verificando a transação

---

## 1. Entendendo transações na blockchain

Uma transação na blockchain é uma ação registrada e validada por mineradores (ou validadores) que atualiza o estado da blockchain. No Ethereum, uma transação envolve a transferência de Ether de uma conta para outra, podendo conter informações como:

- **De (from)**: Endereço da conta de origem.
- **Para (to)**: Endereço da conta de destino.
- **Valor (value)**: Quantidade de Ether a ser transferida (em wei, a menor unidade de Ether).
- **Taxa de gás (gas fee)**: Quantidade de gás que será paga aos mineradores para processar a transação.
- **Assinatura (signature)**: Assinatura criptográfica que confirma a origem da transação.

Esse processo é totalmente descentralizado, o que significa que a transação precisa ser assinada pela conta de origem para garantir sua autenticidade e autorização.

## 2. Passo a passo para criar uma transação simples

1. Montar transação
2. Assinar transação
3. Enviar transação

## 3. Executando e Verificando a Transação

- [Enviando Transação](../../../playground/aula5/sendTx.js)

## Conclusão

Hoje aprendemos a criar e enviar transações simples usando Ethers. Compreendemos os elementos fundamentais de uma transação, configuramos uma transação em Ethers, e a assinamos e enviamos com segurança. Este conhecimento permite que você envie Ether programaticamente, uma habilidade essencial para criar aplicações descentralizadas.

## Recapitulação

1. **Entendendo transações**: Estrutura básica e campos importantes.
2. **Configuração inicial**: Conexão com a blockchain e definição das contas.
3. **Passo a passo da transação**: Definindo, assinando e enviando.
4. **Verificação de sucesso**: Confirmando a execução da transação.

## Lição de casa

1. **Fácil**: Configure uma transação simples e exiba o hash no console.
2. **Médio**: Modifique o código para enviar um valor de Ether configurável por entrada de usuário.
3. **Difícil**: Crie uma função que monitore o saldo de uma conta e envie automaticamente Ether se o saldo cair abaixo de um valor específico.

## Próxima aula

Na próxima aula, vamos aprender sobre **ABIs e como eles são usados para se conectar a contratos inteligentes no Ethereum com Ethers**. Nos vemos lá!
