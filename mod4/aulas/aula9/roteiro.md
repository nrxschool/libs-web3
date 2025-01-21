# Aula 9: **Como Ler Dados Complexos do Contrato (Struct, Enum e Array)**

## Abertura

Olá! Na aula de hoje, exploraremos como ler dados complexos de um contrato inteligente usando Ethers.js, incluindo estruturas (`struct`), enumeradores (`enum`) e arrays. Vamos analisar como acessar essas informações no contrato **Complex**, que gerencia dados de pessoas com atributos como nome, idade e gênero.

### Programação:

1. Lendo dados de structs
2. Lendo valores de enums
3. Lendo e manipulando arrays

---

## 1. Lendo Structs

No Solidity, uma `struct` permite agrupar múltiplos dados de tipos variados em um único objeto. No nosso contrato, temos o struct `People`, que contém as informações de uma pessoa (nome, idade e gênero). Vamos aprender como ler esses dados usando Ethers.js.

- **Função `getPerson()`**:
  - Essa função retorna a primeira pessoa armazenada no array `peoples`.
  - O retorno é do tipo `People`, ou seja, inclui o nome, idade e gênero da pessoa.


- [Buscando um struct](../../../playground/aula9/readStructs.js)

- **Conversão do Gênero**:
  - Note que o `gender` é retornado como um número (0 para `Male` e 1 para `Female`). Podemos converter esse valor manualmente ou usar uma função para interpretar esses dados.

## 2. Lendo Enums

Enums em Solidity são tipos personalizados que ajudam a restringir valores a um conjunto de opções predefinidas. No contrato `Complex`, temos um enum `Gender` que pode assumir os valores `Male` ou `Female`.

- **Função `getGender()`**:
  - Essa função retorna o valor `Gender.Male`, que ajuda a ver como enums são interpretados no Solidity.
- **Função `pushGen(Gender gen)`**:
  - Retorna uma lista de nomes das pessoas que possuem o gênero especificado (`Male` ou `Female`).


- [Buscando enums](../../../playground/aula9/readEnum.js)

- **Explicação**:
  - Usamos `0` e `1` como os valores de `Gender`, pois o Solidity representa enums como inteiros.

## 3. Lendo Arrays

Arrays são uma estrutura fundamental em Solidity para armazenar listas de dados. No contrato `Complex`, temos um array de `People` chamado `peoples`. Podemos ler todos os nomes das pessoas ou os dados completos de um índice específico.

- **Função `getAllNames()`**:
  - Retorna uma lista de todos os nomes das pessoas no array `peoples`.
- **Função `getAllPeople()`**:
  - Esse é um getter automático que retorna todos os elemento do array `peoples`.


- [Buscando array](../../../playground/aula9/readArray.js)

- **Explicação**:
  - `getAllNames` traz todos os nomes no array `peoples`.
  - `getAllPeople` retorna uma lista de structs.

## Conclusão

Hoje aprendemos como ler dados complexos do contrato utilizando structs, enums e arrays no Solidity. Com esse conhecimento, podemos manipular dados mais ricos em nossos contratos, permitindo interações mais complexas e eficientes.

## Recapitulação

1. **Lendo Structs**: usamos `getPerson()` para ler dados da primeira pessoa registrada.
2. **Lendo Enums**: interpretamos o valor retornado por `getGender()` para exibir o gênero.
3. **Lendo Arrays**: usamos `getAllNames()` para listar todos os nomes e `peoples(index)` para acessar um elemento específico.

## Lição de Casa

- **Fácil**: Use a função `getPerson()` para ler os dados do primeiro registro e exibi-los no console.
- **Médio**: Utilize a função `pushGen(Gender gen)` para listar todos os nomes de pessoas de um gênero específico.
- **Difícil**: Crie uma função JavaScript que liste todos os dados (nome, idade, gênero) de cada pessoa armazenada no array `peoples`.

## Próxima Aula

Na próxima aula, vamos aprender sobre como criar transações complexas com arrays, structs e enums em contratos. Nos vemos lá!
