# Aula 7: **Como escrever dados no contrato (envio de ERC20)**

## Abertura

Olá! Bem-vindo à nossa aula sobre como escrever dados no contrato, focando especificamente no envio de tokens ERC20. Hoje vamos entender como realizar transações usando o padrão ERC20, que é amplamente utilizado para tokens na rede Ethereum. Dois métodos essenciais para essas transações são `approve` e `transferFrom`, que juntos permitem o gerenciamento de permissões e a transferência segura de tokens entre carteiras.

### Programação:

1. O que são tokens ERC20
2. Método `transfer`: Transferindo Tokens
3. Método `approve`: Autorizando Transferências
4. Método `transferFrom`: Transferindo Tokens Aprovados

---

## 1. O que são Tokens ERC20

- **Tokens ERC20** são contratos inteligentes que seguem um padrão comum na rede Ethereum, permitindo que diferentes tokens sejam facilmente trocados e usados em contratos, carteiras e dApps.
- **Transações de Tokens ERC20** envolvem métodos específicos definidos no padrão:
  - `transfer`: usado para enviar tokens diretamente de uma conta para outra.
  - **Transações complexas**: às vezes é necessário permitir que uma terceira parte envie tokens em seu nome, o que requer um sistema de permissões.
- **Objetivo do `approve` e `transferFrom`**:

  - **`approve`**: autoriza uma conta a gastar uma quantidade específica de tokens em nome do proprietário.
  - **`transferFrom`**: realiza a transferência dos tokens aprovados, com segurança e limites de autorização.

## 2. Método `transfer`: Transferência de Tokens

O método `transfer` permite que uma conta envie tokens diretamente para outra, sem a necessidade de autorizar uma terceira parte. Esse método é útil para transferências diretas e simples entre duas contas.

**Por que é importante**: Esse método é o mais comum e direto para enviar tokens, usado principalmente para transferências individuais e entre usuários. Ele não depende de permissões extras e é amplamente suportado em dApps que utilizam o padrão ERC20.

**Como funciona**:

1. O proprietário dos tokens chama o método `transfer`.
2. São especificados o endereço do destinatário e o valor de tokens a ser transferido.
3. Se o remetente tiver saldo suficiente, a transferência é realizada.

> **Nota**:
> Certifique-se de que a conta possui saldo suficiente para cobrir o valor especificado, ou a transação falhará.

- [Transferindo Tokens](../../playground/aula7/transfer.py)

## 3. Método `approve`: Autorizando Transferências

O método `approve` permite que o proprietário de uma conta autorize outra conta (um “spender” ou "gastador") a transferir um valor específico de tokens em seu nome.

**Por que é importante**: Em transações mais complexas, como interações com dApps, o `approve` permite que um contrato ou conta externa tenha controle limitado sobre os tokens do usuário, garantindo mais segurança e controle.

**Como funciona**:

1. A conta de origem (quem possui os tokens) chama o método `approve`.
2. É especificado um endereço (quem pode gastar) e uma quantidade máxima de tokens que o “spender” pode transferir.

> **Atenção**: Definir permissões muito altas pode ser arriscado, pois o “spender” terá mais controle sobre os tokens do proprietário.

- [Provando e Conferindo Permissão](../../playground/aula7/approve.py)

## 4. Método `transferFrom`: Transferindo Tokens Aprovados

Depois que uma conta é aprovada para gastar tokens, ela pode usar o método `transferFrom` para transferi-los diretamente da conta do proprietário para uma conta de destino. Isso permite que dApps ou contratos interajam com tokens sem que o usuário precise manualmente enviar cada transação.

**Como funciona**:

1. O “spender” chama o método `transferFrom`, especificando o endereço de origem, o destinatário e a quantidade de tokens a ser transferida.
2. O contrato verifica se o `approve` foi definido e se o valor da transferência está dentro do limite autorizado.
3. Uma vez validado, a transferência é realizada.

> **Cuidados**: `transferFrom` depende da autorização dada em `approve`, então certifique-se de que a função `approve` foi chamada e o limite permitido ainda não foi ultrapassado.

> **Lembre-se**: O limite pode ser ajustado ou redefinido pelo usuário a qualquer momento para mais segurança.

- [Transferindo Tokens de terceiros](../../playground/aula7/transfer_from.py)

## Conclusão

O uso dos métodos `approve` e `transferFrom` é essencial para transações complexas envolvendo tokens ERC20, especialmente quando se deseja criar interações automatizadas e seguras com dApps. Esses métodos fornecem controle e segurança adicionais, permitindo que os usuários autorizem terceiros a mover tokens de maneira limitada. Essa prática é amplamente adotada para transações descentralizadas, pois oferece um controle refinado sobre os ativos.

## Recapitulação

1. **Tokens ERC20**: padrão para criação e movimentação de tokens em Ethereum.
2. **Método `transfer`**: transferência direta entre contas.
3. **Método `approve`**: define um limite de gasto para uma terceira conta.
4. **Método `transferFrom`**: permite a transferência dos tokens autorizados.

## Lição de Casa

- **Fácil**: Realizar uma autorização básica usando `approve` e verificar o saldo do “spender”.
- **Médio**: Usar `transferFrom` para transferir uma quantidade específica de tokens a partir de um limite autorizado.
- **Difícil**: Criar um pequeno dApp que permita ao usuário realizar `approve` e `transferFrom` com segurança, incluindo a funcionalidade de revogação.

## Próxima Aula

Na próxima aula, vamos aprender como realizar transações complexas para enviar **Structs, Enums e Arrays** em contratos inteligentes. Nos vemos lá!
