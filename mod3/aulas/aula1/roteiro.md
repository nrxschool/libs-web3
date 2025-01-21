# Aula 1: Como criar carteiras com Web3.py

## Abertura

Bem-vindo à primeira aula prática do Módulo 2, onde aprenderemos sobre **Web3.py** e seu uso na criação e gerenciamento de carteiras e assinaturas de mensagens. O Web3.py é uma das bibliotecas mais usadas para conectar aplicações à blockchain Ethereum, e nesta aula, vamos focar na criação de carteiras e assinaturas digitais.

### Programa da aula:

1. Como instalar a Web3.py v7
2. Criando carteiras com Web3.py
3. Assinando mensagens digitalmente

Ao final desta aula, você será capaz de configurar a Web3.py no seu ambiente, criar carteiras e gerar assinaturas seguras para interagir com a blockchain.

---

## 1. Como instalar a Web3.py

Para começar, vamos instalar a versão mais recente do Web3.py.

### Passo a Passo de Instalação

1. **Pré-requisitos**: Certifique-se de ter o **Python** e o **pip** instalados.

2. **Instalando o Web3.py**:

```bash
pip install web3
```

---

## 2. Criando Carteiras com Web3.py

Para gerenciar uma conta na blockchain, é necessário criar uma carteira, composta por uma chave pública e uma chave privada.

- [Criação de Carteira Aleatória](../../playground/aula1/create_random_wallet.py)
- [Importando Carteira de uma Chave Privada](../../playground/aula1/import_wallet_from_private_key.py)
- [Armazenando Carteiras](../../playground/aula1/encrypt_wallet.py)

---

## 3. Assinando Mensagens

Assinar uma mensagem é útil para autenticação e verificação de identidade sem realizar transações on-chain. Esse processo cria uma assinatura digital única usando a chave privada da conta.

- [Assinando Messagens](../../playground/aula1/signMessage.js)

---

## Conclusão

Hoje aprendemos a instalar e configurar a Web3.py, exploramos as diferenças principais em relação ao Web3.js, e vimos como criar carteiras e gerar assinaturas digitais. Esses fundamentos são essenciais para qualquer integração Web3, pois a criação e o gerenciamento de contas e assinaturas são usados em autenticação e transações seguras.

---

## Recapitulação

- Instalamos o Web3.py.
- Aprendemos a criar e gerenciar carteiras, protegendo as chaves com keystores.
- Demonstramos como assinar e verificar mensagens com a chave privada da conta.

---

## Lição de casa

1. Instale o Web3.py em um novo projeto.
2. Crie uma nova carteira e armazene-a em um keystore.
3. Assine uma mensagem personalizada e verifique a assinatura em seu código.

---

## Próxima Aula

Na próxima aula, vamos aprender a ler saldos da blockchain utilizando o Web3.py, permitindo que você obtenha informações financeiras de contas e explore dados on-chain. Até lá!
