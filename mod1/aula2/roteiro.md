# Aula 2: O que é um SDK?

## Abertura

Bem-vindo à nossa segunda aula! Vamos introduzir o conceito de **SDK** (**Software Development Kit**), que é essencial para o desenvolvimento e integração entre sistemas Web2 e Web3. Um SDK é uma coleção de ferramentas que fornece tudo o que os desenvolvedores precisam para criar aplicações, facilitando a interação com APIs e outros sistemas.

### Programa da aula:

1. Definição de um SDK e API
2. Repositórios de pacotes: NPM, PyPi e Crates
3. Exemplos de SDKs no contexto Web3

---

## 1. Definição de um SDK e API

### O que é um SDK?

Um **SDK** é um conjunto de ferramentas, bibliotecas, exemplos de código e documentação que facilita o desenvolvimento de software em um ambiente específico ou para uma determinada tecnologia. No contexto Web3, os SDKs ajudam os desenvolvedores a interagir com redes blockchain e contratos inteligentes.

- **Exemplo em Web3**: SDKs como Web3.js ou Ethers.js fornecem métodos e funções prontas para realizar operações como consultar saldos, enviar transações e conectar com contratos.

### O que é uma API?

Uma **API** (**Application Programming Interface**) permite que diferentes sistemas se comuniquem de forma padronizada. A API define um conjunto de regras que permite que um software interaja com outro.

- **SDK** é o conjunto completo de ferramentas e recursos que torna a implementação mais fácil.
- **API** são as funções que esse SDK disponibiliza, que deixar mais fácil a implementação de um serviço ou não.

---

## 2. Repositórios de Pacotes: NPM, PyPi e Crates

Os SDKs são geralmente distribuídos em repositórios de pacotes, permitindo que os desenvolvedores integrem esses pacotes diretamente em seus projetos.

### NPM (Node Package Manager)

- **Uso**: Para projetos em JavaScript/TypeScript.
- **Exemplo**: A biblioteca **Web3.js** é disponibilizada via NPM. Com ela, os desenvolvedores conseguem instalar rapidamente o pacote e começar a construir aplicações de Web3.

- [lunesjs](https://www.npmjs.com/package/lunesjs)
- [lunesrs](https://www.npmjs.com/package/lunesrs)
- [lunesweb](https://www.npmjs.com/package/lunesweb)

### PyPi (Python Package Index)

- **Uso**: Para projetos em Python.
- **Exemplo**: A biblioteca **Web3.py** é distribuída pelo PyPi, permitindo que desenvolvedores Python trabalhem com interações blockchain de maneira eficiente.

- [merkly](https://pypi.org/project/merkly/)
- [keccaky](https://pypi.org/project/keccaky/)
- [lunespy](https://pypi.org/project/lunespy/)

### Crates.io

- **Uso**: Para projetos em Rust.
- **Exemplo**: O **ethers-rs** é um SDK popular para interações Web3 em Rust, disponível no Crates.io. Este SDK permite a criação de contratos e interação com a blockchain.

- [calc_near_x](https://crates.io/crates/calc_near_x)
- [merkletreers](https://crates.io/crates/merkletreers)
- [ed25519-axolotl](https://crates.io/crates/ed25519-axolotl)
- [lunes](https://crates.io/crates/lunes)
- [lunesweb](https://crates.io/crates/lunesweb)
- [lunesrs](https://crates.io/crates/lunesrs)
- [lunes-cli](https://crates.io/crates/lunes-cli)

Esses repositórios facilitam a instalação e atualização de bibliotecas, garantindo que desenvolvedores tenham acesso a versões estáveis e seguras das ferramentas que utilizam.

---

## 3. Exemplos de SDKs no Contexto Web3

Vamos explorar alguns dos SDKs mais comuns e utilizados para interagir com blockchain:

- **Web3.js**: Um SDK JavaScript voltado para o Ethereum, permitindo a criação de carteiras, consulta de dados on-chain e transações com contratos inteligentes.
- **Ethers.js**: Alternativa a Web3.js com uma abordagem moderna e orientada à segurança para desenvolvedores JavaScript/TypeScript.
- **Web3.py**: Um SDK Python amplamente utilizado para interações com Ethereum, especialmente em contextos de análise e backend.
- **ethers-rs**: Biblioteca escrita em Rust para quem trabalha com sistemas de alta performance e precisa de integrações blockchain.

Esses SDKs são disponibilizados através dos repositórios de pacotes, possibilitando que desenvolvedores escolham a ferramenta que melhor se adapta à sua linguagem de programação e aos requisitos de seus projetos.

---

## Conclusão

Hoje entendemos o que é um **SDK** e a diferença entre SDK e API. Também vimos como as principais ferramentas Web3 são distribuídas através de repositórios de pacotes como NPM, PyPi e Crates.io, o que facilita a integração desses recursos em nossos projetos.

---

## Lição de Casa

1. [Web3.js] Explore a documentação oficial do SDK e familiarize-se com sua configuração básica.

---

## Próxima Aula

Na próxima aula, vamos entender o papel da **criptografia** nas interações Web3, abordando como proteger dados e realizar transações seguras na blockchain. Até lá!
