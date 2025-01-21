# Aula 8: **Como criar transações complexas (envio de Struct, Enum e Array)**

## Abertura

Olá! Bem-vindo à nossa décima segunda aula sobre Web3.py v7 Nesta aula, vamos explorar como criar transações complexas enviando dados mais estruturados para contratos inteligentes, incluindo **Structs**, **Enums** e **Arrays**. Este conhecimento permitirá que você desenvolva aplicações mais interativas e sofisticadas, enviando dados ricos e organizados para a blockchain de maneira eficiente.

### Programação:

1. Preparando o contrato para receber Structs, Enums e Arrays
2. Criando e enviando transações com Structs
3. Lidando com Enums em transações
4. Envio de Arrays

---

## 1. Preparando o contrato para receber Structs, Enums e Arrays

Para que possamos enviar dados complexos, precisamos garantir que o contrato inteligente em Solidity está preparado para receber esses tipos de dados. Vamos ver um exemplo de contrato que aceita Structs, Enums e Arrays em uma única função.

- [Contrato em Solidity](../../../playground/aula8/complex.sol)

## 2. Criando e enviando transações com Structs

Para enviar dados para um `struct`, você precisa passar cada atributo do `struct` como um parâmetro na função.

### Exemplo de envio com Web3.py

- **Compilar contrato**

```bash
forge create aula8/complex.sol:Complex --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 --root .
```

- [Enviando um Struct para o contrato](../../../playground/aula8/send_structs.py)

## 3. Lidando com Enums em transações

Para enviar um valor de `enum`, usamos o índice que representa o valor do `enum`. Em Solidity, enums começam no índice 0. No exemplo anterior:

- `0` representa `Pending`
- `1` representa `Shipped`
- `2` representa `Delivered`

Ao enviar o valor `status = 1` no exemplo, estamos especificando que o pedido está no status `Shipped`.

- [Enviando um Enum para o contrato](../../../playground/aula8/send_enum.py)

## 4. Envio de Arrays

Arrays podem ser enviados diretamente, contanto que o contrato Solidity esteja configurado para recebê-los como `memory`. No exemplo `placeOrder`, passamos um array de endereços para o parâmetro `recipients`.

- [Enviando um Array para o contrato](../../../playground/aula8/send_array.py)

## Conclusão

Hoje aprendemos a enviar transações complexas para contratos inteligentes usando Web3.py. Exploramos como manipular e enviar dados estruturados como Structs, Enums e Arrays, permitindo que aplicações descentralizadas transmitam dados ricos e organizados para a blockchain. Com isso, você pode criar interações avançadas e dinâmicas entre os usuários e os contratos.

## Recapitulação

1. **Preparação do contrato**: Como configurar o contrato para receber Structs, Enums e Arrays.
2. **Envio de Structs**: Passo a passo para enviar cada atributo do struct.
3. **Envio de Enums**: Como mapear e enviar valores de Enum.
4. **Envio de Arrays**: Enviando listas de dados e arrays multidimensionais.

## Lição de casa

1. **Fácil**: Crie uma função de contrato que aceite um `struct` com três campos e envie uma transação para ele.
2. **Médio**: Envie um array aninhado para o contrato.
3. **Difícil**: Envie um array de `structs` para um contrato, onde cada struct possui pelo menos três campos diferentes.

## Próxima aula

Na próxima aula, vamos iniciar o Módulo 3, onde exploraremos **Como ler dados complexos do contrato**. Nos vemos lá!
