# Aula 2: **Lendo saldos da blockchain**

## Abertura

Bem-vindo à segunda aula do Módulo 4! Hoje, vamos explorar como ler o saldo de endereços na blockchain Ethereum usando a biblioteca **Ethersjs**. Saber como consultar saldos de endereços é uma habilidade fundamental para integrar seu sistema Web3, permitindo que você construa funcionalidades como exibir o saldo de usuários e verificar a quantidade de tokens ou Ether em uma conta.

### Programa da aula:

1. Como conectar-se à blockchain com EthersJS
2. Lendo o saldo de um endereço de Ether
3. Convertendo o saldo para unidades de fácil leitura (ether, gwei, wei)
4. Lendo o saldo de tokens ERC-20

Ao final desta aula, você será capaz de consultar saldos e convertê-los em diferentes unidades, além de ler o saldo de tokens ERC-20, aumentando sua capacidade de obter dados diretamente da blockchain.

---

## 1. Como conectar-se à blockchain com a EtherJS

Para interagir com a blockchain, é necessário se conectar a um **provider**. O provider atua como um canal entre o seu código e a blockchain, e hoje usaremos o Infura para configurar nosso provedor.

- [Conectar com um Provider](../../../playground/aula2/connect.js)

---

## 2. Lendo o saldo de um endereço de Ether

Com a conexão configurada, podemos ler o saldo de qualquer endereço na blockchain. Os saldos de contas Ethereum são armazenados em **wei** por padrão, que é a menor unidade de Ether.

- [Obter o Saldo de uma endereço](../../../playground/aula2/balanceOf.js)

---

## 3. Convertendo o saldo para unidades de fácil leitura

Os valores de saldo são retornados em **wei**, mas geralmente é mais útil exibi-los em **ether** ou **gwei**. A EthersJS facilita essa conversão com métodos de utilidade. Podemos converter o saldo para ether e exibi-lo em uma unidade mais amigável.

- [Exemplo de Conversão](../../../playground/aula2/convertWei.js)

### Unidades de Conversão Comuns

Aqui está uma tabela com as unidades de medida de Ether, da menor unidade (**wei**) à maior (**tetherether**). Cada unidade representa uma potência de 10:

| Nome            | Unidade                                       | Equivalência em Ether (ETH)        | Potência de 10 |
| --------------- | --------------------------------------------- | ---------------------------------- | -------------- |
| Wei             | 1 wei                                         | 0.000000000000000001 Ether (1e-18) | 10^0           |
| Kwei (babbage)  | 1,000 wei                                     | 0.000000000000001 Ether (1e-15)    | 10^3           |
| Mwei (lovelace) | 1,000,000 wei                                 | 0.000000000001 Ether (1e-12)       | 10^6           |
| Gwei (shannon)  | 1,000,000,000 wei                             | 0.000000001 Ether (1e-9)           | 10^9           |
| Szabo           | 1,000,000,000,000 wei                         | 0.000001 Ether (1e-6)              | 10^12          |
| Finney          | 1,000,000,000,000,000 wei                     | 0.001 Ether (1e-3)                 | 10^15          |
| Ether (ETH)     | 1,000,000,000,000,000,000 wei                 | 1 Ether (1e0)                      | 10^18          |
| Kether (grand)  | 1,000,000,000,000,000,000,000 wei             | 1,000 Ether (1e3)                  | 10^21          |
| Mether          | 1,000,000,000,000,000,000,000,000 wei         | 1,000,000 Ether (1e6)              | 10^24          |
| Gether          | 1,000,000,000,000,000,000,000,000,000 wei     | 1,000,000,000 Ether (1e9)          | 10^27          |
| Tetherether     | 1,000,000,000,000,000,000,000,000,000,000 wei | 1,000,000,000,000 Ether (1e12)     | 10^30          |

As unidades mais comuns são:

- **Wei**: menor unidade de Ether, frequentemente usada para cálculos de precisão.
- **Gwei**: usado para especificar o preço do gás em transações.
- **Ether**: unidade padrão para exibir valores no Ethereum.

Essas unidades ajudam a representar valores grandes e pequenos com precisão e são fundamentais para operações financeiras e cálculos de taxas.

---

## 4. Lendo o saldo de tokens ERC-20

Para obter o saldo de um token ERC-20, precisamos conectar-se ao contrato do token e chamar a função `balanceOf`. A função `balanceOf` aceita um endereço e retorna o saldo do token para esse endereço. Primeiro, precisamos de um **ABI** (Interface Binária de Aplicação) simplificada e do endereço do contrato do token. Aqui, usaremos o exemplo do token DAI.

Neste exemplo, estamos convertendo o saldo de DAI para **ether** (o que representa uma unidade decimal ajustada para tokens ERC-20), mas a unidade depende do contrato do token.

- [Obter Saldo de ERC20](../../../playground/aula2/balanceOfERC20.js)

---

## Conclusão

Nesta aula, exploramos como ler saldos da blockchain com EthersJS, incluindo:

- Conexão com um **provider**.
- Leitura do saldo de Ether.
- Conversão de saldo entre unidades como **wei**, **gwei** e **ether**.
- Consulta do saldo de tokens ERC-20 usando um ABI.

Esses conceitos são fundamentais para trabalhar com dados financeiros na blockchain, oferecendo visibilidade em tempo real dos recursos em uma conta.

---

## Recapitulação

- Conectamos nosso código à blockchain usando um provider.
- Aprendemos a consultar o saldo de um endereço de Ether e a converter o saldo para unidades mais legíveis.
- Exploramos como consultar o saldo de tokens ERC-20 chamando a função `balanceOf`.

---

## Lição de casa

1. Conecte-se a uma rede de teste (como Ropsten ou Kovan) e consulte o saldo de um endereço.
2. Experimente converter o saldo para **gwei** e **ether**.
3. Consulte o saldo de um token ERC-20 em um endereço e exiba o saldo com 18 casas decimais.

---

## Próxima Aula

Na próxima aula, vamos explorar como ler dados de transações diretamente na blockchain, aprofundando-se na análise de transações e seus detalhes. Até lá!
