# Aula 1: Como criar carteiras com Ethers.js

## Abertura

Bem-vindo à primeira aula prática do Módulo 2, onde exploraremos **Ethers.js** e seu uso na criação e gerenciamento de carteiras e assinaturas de mensagens. Ethers.js é uma biblioteca popular para interagir com a blockchain Ethereum, e hoje vamos focar na criação de carteiras e assinaturas digitais.

### Programa da aula:

1. Como instalar a versão 6.x da Ethers.js
2. Diferença entre Ethers.js e Web3.js
3. Criando carteiras com Ethers.js
4. Assinando mensagens digitalmente

Ao final desta aula, você será capaz de configurar o Ethers.js no seu ambiente, criar carteiras e gerar assinaturas seguras para interagir com a blockchain.

---

## 1. Como instalar a Ethers.js v6

Para começar, vamos instalar a versão 6.x da Ethers.js, que traz diversas melhorias e uma API modernizada.

### Passo a Passo de Instalação

1. **Pré-requisitos**: Certifique-se de ter o **Node.js** e o **npm** instalados.

2. **Instalando o Ethers.js v6**:

```bash
npm install ethers@^6.0.0
```

---

## 2. Diferença entre Ethers.js e Web3.js

O Ethers.js v6.x oferece várias vantagens em relação ao Web3.js, como:

- **API simplificada**: Ethers.js é conhecido por ser mais leve e intuitivo, com uma estrutura de código focada em simplificar a interação com contratos e transações Ethereum.
- **Tamanho reduzido**: O pacote Ethers.js é menor e mais otimizado para performance, ideal para aplicações onde o desempenho e tamanho de arquivo são cruciais.
- **Integração de carteira nativa**: O Ethers.js facilita o gerenciamento seguro das chaves privadas.
- **Melhor compatibilidade com TypeScript**: A biblioteca oferece suporte abrangente para TypeScript, melhorando a experiência de desenvolvimento.

---

## 3. Criando Carteiras com Ethers.js

Para gerenciar uma conta na blockchain, é necessário criar uma carteira, que inclui uma chave pública e uma chave privada.

- **Criação de Carteira Aleatória**:

```javascript
const { ethers } = require('ethers'); 

const wallet = ethers.Wallet.createRandom()
console.log('Endereço:', wallet.address);
console.log('Chave Privada:', wallet.privateKey);
```

- **Importando Carteira de uma Chave Privada**:

```javascript
const privateKey = '0x2a227235514c6334f9b88aa4088e1dbb1e3d1a5ee23053ff2a26a4ae9f51b7a1';
const wallet = new ethers.Wallet(privateKey)
console.log('Endereço:', wallet.address);
```

- **Armazenando Carteiras**:

Ethers.js facilita o armazenamento seguro de carteiras. Podemos criptografar a carteira e salvar em um keystore:

```javascript
async function encryptWallet(password) {
    const encryptedJson = await wallet.encrypt(password); 
    console.log("Keystore Encriptado:", encryptedJson);
}

encryptWallet('sua_senha_secreta');
```

---

## 4. Assinando Mensagens

Assinar uma mensagem é útil para autenticação e verificação de identidade sem realizar transações on-chain. A assinatura é gerada usando a chave privada da conta.

- **Assinando Mensagens**:

```javascript
const message = "Sua mensagem para assinar";
const sig = await wallet.signMessage(message);
```

---

## Conclusão

Hoje instalamos e configuramos o Ethers.js v6, exploramos suas principais diferenças em relação ao Web3.js, e vimos como criar carteiras e gerar assinaturas digitais. Esses fundamentos são essenciais para qualquer integração Web3, pois a criação e o gerenciamento de contas e assinaturas são usados em autenticação e transações seguras.

---

## Recapitulação

- Instalamos o Ethers.js v6 e discutimos suas vantagens sobre o Web3.js.
- Aprendemos a criar e gerenciar carteiras, protegendo as chaves com keystores.
- Demonstramos como assinar e verificar mensagens com a chave privada da conta.

---

## Lição de casa

1. Instale o Ethers.js v6 em um novo projeto.
2. Crie uma nova carteira e armazene-a em um keystore.
3. Assine uma mensagem personalizada e verifique a assinatura em seu código.

---

## Próxima Aula

Na próxima aula, vamos aprender a ler saldos da blockchain utilizando o Ethers.js, permitindo que você obtenha informações financeiras de contas e explore dados on-chain. Até lá!