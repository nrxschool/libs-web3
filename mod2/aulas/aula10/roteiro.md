# Aula 10: **Monitorando blockchain e smartcontracts**

## Abertura

Olá! Bem-vindo à nossa aula sobre subscrição de eventos EVM e sua aplicação em estratégias avançadas, como ataques MEV (Maximal Extractable Value). Nesta aula, vamos aprender como monitorar eventos de blockchain, tanto em nível global (como novos blocos e transações) quanto eventos específicos de contratos (como transferências de tokens ERC20). Além disso, exploraremos uma introdução ao conceito de MEV, demonstrando como automatizar uma resposta a eventos específicos para maximizar o valor extraído.

### Programação:

1. Subscrição de eventos EVM: Monitorando novos blocos e transações
2. Subscrição de eventos de contratos: Monitorando transferências de tokens ERC20
3. Introdução a ataques MEV: Implementação básica para resposta automatizada a transferências específicas

---

## 1. Subscrição de eventos EVM (novos blocos e novas transações)

Eventos globais na EVM (Ethereum Virtual Machine) incluem a mineração de novos blocos e a confirmação de novas transações. Esses eventos podem ser monitorados para criar aplicações que reagem em tempo real à atividade da rede, algo fundamental para análise de dados, segurança e oportunidades de arbitragem.

### Monitorando novos blocos

A subscrição ao evento `newBlockHeaders` permite que você seja notificado assim que um novo bloco é minerado. O código a seguir demonstra como monitorar novos blocos:

- [Ouvindo novos blocos](../../playground/aula10/newBlocks.js)

### Monitorando novas transações

Para monitorar todas as transações na rede, você pode assinar o evento `pendingTransactions`. Isso permitirá capturar transações antes que sejam incluídas em blocos.

- [Ouvindo novas transações](../../playground/aula10/newTx.js)

Esses métodos de monitoramento são muito úteis para aplicações que precisam agir imediatamente após a mineração de novos blocos ou a criação de transações pendentes, como bots de arbitragem.

## 2. Subscrição de eventos de contratos (Transferência ERC20)

Podemos monitorar eventos específicos de um contrato, como o evento `Transfer` de tokens ERC20. Esse evento é acionado sempre que uma transferência ocorre e é útil para monitorar fluxos de tokens entre contas, registrar atividades ou acionar funções baseadas na movimentação de tokens.

### Exemplo: Monitorando Transferências ERC20

Para monitorar eventos de transferência de um token ERC20, primeiro criamos uma instância do contrato e, em seguida, subscrevemos ao evento `Transfer`.

- [Ouvindo ERC20](../../playground/aula10/newEventERC20.js)

Neste exemplo:

- Especificamos o `fromBlock: "latest"` para monitorar apenas transferências a partir do bloco mais recente.
- Quando uma transferência ocorre, os detalhes são exibidos no console.

## 3. Pessoas Publicamente Expostas (PPE) e Maximal Extractable Value (MEV)

MEV (Maximal Extractable Value) refere-se à extração de valor máximo de transações que estão na mempool. Um exemplo de ataque MEV pode envolver a resposta a transferências ERC20 para um endereço específico (como um “VIP”), onde uma ação automatizada é executada sempre que o evento é detectado.

Podemos implementar uma lógica para monitorar transferências que envolvem pessoas publicamente expostas (PPEs) e automaticamente enviar um estorno quando detectarmos uma transferência. Isso é especialmente útil para garantir transparência e fornecer um mecanismo de devolução em transações com pessoas públicas.

### Implementação Básica: Estorno Automático para Transferências para PPEs

Suponha que temos uma lista de endereços de PPEs. Quando uma transferência para um desses endereços é detectada, o sistema automaticamente envia uma transação de estorno para o remetente, devolvendo o valor transferido.

- [Ouvindo e filtrando eventos](../../playground/aula10/listener.js)

Neste código:

- **Lista de PPEs**: Definimos uma lista de endereços de pessoas publicamente expostas para monitorar.
- **Monitoramento de Eventos**: Subscrevemos ao evento `Transfer` e verificamos cada transação para ver se o destinatário está na lista de PPEs.
- **Estorno Condicional**: Se o destinatário estiver na lista de PPEs, uma transação de estorno é enviada automaticamente, devolvendo o valor ao remetente original.

> **Nota**: Certifique-se de que as operações de estorno estejam bem estruturadas para evitar transferências indesejadas e garantir que os contratos permitam essa funcionalidade.

## Conclusão

Hoje aprendemos como monitorar eventos importantes na blockchain Ethereum e implementamos uma resposta automática para transferências direcionadas a pessoas publicamente expostas. Esse recurso é importante para garantir a segurança e transparência em transações, especialmente quando envolvem figuras públicas.

## Recapitulação

1. **Eventos EVM**: Monitoramos novos blocos e transações pendentes.
2. **Eventos de Contrato**: Subscrevemos a transferências de tokens ERC20.
3. **Estorno Automático para PPEs**: Implementamos uma resposta automatizada para estornar valores enviados a pessoas publicamente expostas.

## Lição de Casa

1. **Fácil**: Subscreva ao evento `newBlockHeaders` e exiba o número e o hash de cada novo bloco.
2. **Médio**: Subscreva ao evento `Transfer` de um contrato ERC20 e exiba as transferências acima de um valor específico.
3. **Difícil**: Implemente uma lógica de estorno automático que detecte transferências para uma lista de PPEs e estorne o valor para o remetente.

## Próxima Aula

Na próxima aula, vamos aprender **Web3.py**. Nos vemos lá!
