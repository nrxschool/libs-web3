# Aula 4: Arquitetura das Bibliotecas Web3

## Abertura

Nesta aula, vamos conhecer a **arquitetura essencial das bibliotecas Web3**. Nosso foco será entender as estruturas básicas e as funções que essas bibliotecas compartilham para conectar e interagir com a blockchain. Vamos ver os elementos principais que toda biblioteca Web3 precisa para realizar operações como leitura, escrita e monitoramento de dados em uma rede descentralizada.

### Programa da aula:

1. Leitura e Escrita na Blockchain
2. Provider, Signer e Network
3. RPC HTTP e Eventos Socket
4. ABI e Contratos

---

## 1. Leitura e Escrita na Blockchain

As operações de **leitura e escrita** na blockchain são essenciais para a construção de dApps (aplicativos descentralizados) e se dividem em dois tipos principais:

- **Leitura de dados**: Permite acesso a informações da blockchain, como o saldo de contas, histórico de transações, dados de blocos e logs de eventos. Essas operações de leitura não alteram o estado da rede e são feitas através de **chamadas gratuitas** (calls).

Exemplos:

- Consultar o saldo de uma conta específica.
- Acessar informações de transações e blocos, como timestamps e o número de transações.
- Ler logs de eventos que indicam mudanças de estado ou outras atividades no contrato.

- **Escrita de dados**: Exige uma transação que altera o estado da blockchain e, portanto, envolve uma taxa de gás (gas fee) paga pelo usuário.

Exemplos:

- Transferir Ether de uma conta para outra.
- Executar funções de contrato inteligente que modificam o estado, como atualizar dados ou registrar informações.

Essas operações de escrita são essenciais para a criação de estados imutáveis e registros duradouros na rede.

---

## 2. Provider, Signer e Network

Para qualquer biblioteca Web3, é importante entender os conceitos de **Provider**, **Signer** e **Network**, que são essenciais para a interação com a blockchain.

- **Provider**: Representa a conexão entre a aplicação e a blockchain. O provider permite fazer chamadas para ler dados e enviar transações para a rede. Em geral, o provider é configurado com uma URL de um **nó RPC** (Remote Procedure Call), que serve como ponto de acesso à rede.

- **Signer**: É a entidade que assina transações, geralmente associada a uma conta de usuário com uma chave privada. O signer é usado para validar transações e garantir a autenticidade das operações executadas na blockchain. A maioria das bibliotecas Web3 separa o provider do signer para que as funções de leitura possam ser feitas sem precisar de uma conta ou chave.

- **Network**: A blockchain com a qual o dApp se conecta, como Ethereum, Binance Smart Chain ou uma rede de teste como Rinkeby. A biblioteca Web3 deve estar configurada para a rede correta, especialmente ao interagir com contratos ou ao assinar transações que dependem de configurações específicas da rede.

---

## 3. RPC HTTP e Eventos Socket

Existem duas formas principais de se comunicar com a blockchain: **RPC HTTP** e **Eventos Socket**. Vamos ver as diferenças e casos de uso de cada uma:

- **RPC HTTP**: O método tradicional para chamadas de rede. Cada solicitação é feita por meio de uma conexão HTTP, sendo ideal para operações de leitura que não exigem atualizações constantes, como consultar o saldo de uma conta ou verificar o estado de uma transação. As chamadas HTTP são **sincrônicas** e funcionam bem para operações onde o tempo real não é crítico.

- **Eventos Socket (WebSocket)**: Diferente do HTTP, o WebSocket mantém uma **conexão persistente** com a blockchain, permitindo que o dApp receba atualizações em tempo real sobre eventos específicos. Essa tecnologia é essencial para aplicações que precisam monitorar eventos de contratos ou acompanhar confirmações de transações assim que elas acontecem, como notificações de novos blocos ou atividades de contrato.

Essas duas abordagens complementam-se: HTTP é ótimo para operações ocasionais de consulta, enquanto WebSockets fornecem atualizações em tempo real necessárias para interfaces dinâmicas.

---

## 4. ABI e Contratos

A **Application Binary Interface (ABI)** é a definição do que um contrato inteligente pode fazer. Ela descreve todas as funções e eventos de um contrato, permitindo que a biblioteca Web3 saiba **como se comunicar com o contrato**.

- **Funções do contrato**: A ABI permite que a biblioteca entenda as funções do contrato, sejam elas de leitura (view) ou de escrita (que exigem transações). Isso facilita a chamada de funções de contrato e a obtenção de dados específicos.

- **Eventos**: Além das funções, a ABI define eventos que o contrato emite. Esses eventos podem ser monitorados pela aplicação para acompanhar mudanças no estado do contrato em tempo real.

As bibliotecas Web3 utilizam a ABI para se comunicar de forma padronizada com contratos, fornecendo uma interface robusta para operações de leitura e escrita.

---

## Conclusão

Nesta aula, exploramos a arquitetura das bibliotecas Web3, entendendo os componentes essenciais para a conexão e interação com a blockchain. Ao conhecer a importância de leitura/escrita, provider/signer, RPC/WebSocket e ABI/Contratos, estamos preparados para configurar e usar qualquer biblioteca Web3 de forma eficiente.

---

## Lição de Casa

- Pesquise os conceitos de provider, signer e network em pelo menos uma biblioteca Web3.
- Compare as vantagens de RPC HTTP e WebSockets para o monitoramento de eventos.

---

## Próxima Aula

No próximo módulo, vamos nos aprofundar na biblioteca **Web3.js**, onde colocaremos em prática os conceitos de leitura, escrita e interação com contratos. Até lá!
