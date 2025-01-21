# Aula 1: **Como criar carteiras com Web3.js**

## Abertura

Bem-vindo à primeira aula prática do Módulo 2, onde aprenderemos sobre **Web3.js** e seu uso na criação e gerenciamento de carteiras e assinaturas de mensagens. Web3.js é uma das bibliotecas mais usadas para conectar aplicações à blockchain Ethereum, e nesta aula, vamos focar na criação de carteiras e assinaturas digitais.

### Programa da aula:

1. Como instalar a versão 4.x da Web3.js
2. Diferença entre Web3.js v1.x e v4.x
3. Criando carteiras com Web3.js
4. Assinando mensagens digitalmente

Ao final desta aula, você será capaz de configurar a Web3.js no seu ambiente, criar carteiras e gerar assinaturas seguras para interagir com a blockchain.

---

## 1. Como instalar a Web3.js v4

Para começar, vamos instalar a versão mais recente da Web3.js, que possui melhorias e mudanças em relação à v1.x.

### Passo a Passo de Instalação

1. **Pré-requisitos**: Certifique-se de ter o **Node.js** e o **npm** instalados.

2. **Instalando a Web3.js v4.x**:

```bash
npm install web3
```

---

## 2. Diferença entre Web3.js v1.x e v4.x

A Web3.js v4.x traz diversas melhorias e mudanças de arquitetura em comparação com a v1.x, incluindo:

- **Modularização**: A versão 4.x é mais modular e otimizada para pacotes, permitindo que você carregue apenas os módulos que precisa, o que melhora a performance e reduz o tamanho dos builds.
- **Suporte aprimorado a TypeScript**: Agora há uma integração mais forte com TypeScript, facilitando o uso de tipos, autocompletes e verificações de erro.
- **Mudanças nas chamadas de função**: Algumas funções da API foram renomeadas e agora possuem sintaxe atualizada, visando tornar o código mais legível e eficiente.
- **Conexão com múltiplas blockchains**: A versão v4 oferece maior flexibilidade e suporte para múltiplas redes.

---

## 3. Criando Carteiras com Web3.js

Para gerenciar uma conta na blockchain, é necessário criar uma carteira, composta por uma chave pública e uma chave privada.

- [Criação de Carteira Aleatória](../../playground/aula1/createRandomWallet.js)
- [Importando Carteira de uma Chave Privada](../../playground/aula1/importWalletFromPrivateKey.js)
- [Armazenando Carteiras](../../playground/aula1/encryptWallet.js)

---

## 4. Assinando Mensagens

Assinar uma mensagem é útil para autenticação e verificação de identidade sem realizar transações on-chain. Esse processo cria uma assinatura digital única usando a chave privada da conta.

- [Assinando Messagens](../../playground/aula1/signMessage.js)

---

## Conclusão

Hoje aprendemos a instalar e configurar a Web3.js v4, exploramos as diferenças principais em relação à versão 1.x, e vimos como criar carteiras e gerar assinaturas digitais. Esses fundamentos são essenciais para qualquer integração Web3, pois a criação e o gerenciamento de contas e assinaturas são usados em autenticação e transações seguras.

---

## Recapitulação

- Instalamos a Web3.js v4 e discutimos suas diferenças com a v1.x.
- Aprendemos a criar e gerenciar carteiras, protegendo as chaves com keystores.
- Demonstramos como assinar e verificar mensagens com a chave privada da conta.

---

## Lição de casa

1. Instale a Web3.js v4 em um novo projeto.
2. Crie uma nova carteira e armazene-a em um keystore.
3. Assine uma mensagem personalizada e verifique a assinatura em seu código.

---

## Próxima Aula

Na próxima aula, vamos aprender a ler saldos da blockchain utilizando a Web3.js, permitindo que você obtenha informações financeiras de contas e explore dados on-chain. Até lá!

