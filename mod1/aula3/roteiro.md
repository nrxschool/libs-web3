# Aula 3: O que é Criptografia

## Abertura

Bem-vindo à segunda aula do módulo! Hoje vamos introduzir conceitos básicos de **criptografia** que são essenciais para a segurança nas interações Web3. Desde o armazenamento seguro até a verificação de identidades e transações, a criptografia garante que as informações sejam privadas e íntegras. Vamos explorar o que são **hashes**, o papel da **criptografia de chave pública** e como trabalhar com **chaves e assinaturas** usando Web3.js.

### Programa da aula:

1. O que são hashes: SHA-1 e Keccak256
2. Criptografia de chaves públicas
3. Chaves privadas e públicas, assinaturas e verificações (exemplo prático com Web3.js)
4. Segurança e cuidados com chaves

---

## 1. O que São Hashes: SHA-1 e Keccak256

**Hashing** é o processo de transformar dados de qualquer tamanho em um valor de comprimento fixo, geralmente usando uma função de hash. Esse valor (hash) é único para cada entrada de dados, o que permite verificar a integridade dos dados.

- **SHA-1**: Uma função de hash que gera um valor de 160 bits (20 bytes). Embora muito usado no passado, atualmente não é considerado seguro para fins críticos, pois ataques podem gerar colisões (mesmo hash para dados diferentes).

Exemplo de uso:

```javascript
const crypto = require("crypto");

const sha1 = crypto.createHash("sha1");

sha1.update("hello world").digest("hex");
```

- **Keccak256**: Um algoritmo mais seguro, base do hash **SHA-3** e amplamente usado em blockchains, especialmente no Ethereum. Gera um hash de 256 bits e é usado para identificar dados e proteger transações.

Exemplo de uso com Web3.js:

```javascript
const web3 = require("web3");

web3.utils.keccak256("hello world");
```

Essas funções de hash são unidirecionais, ou seja, é impossível (ou extremamente difícil) reverter o hash para o dado original.

---

## 2. Criptografia de Chaves Públicas

A **criptografia de chave pública** permite que dois usuários troquem informações de maneira segura, mesmo sem ter um canal privado de comunicação. Ela usa dois componentes:

- **Chave Pública**: Pode ser compartilhada livremente e é usada para **criptografar** mensagens.
- **Chave Privada**: Deve ser mantida em segredo e é usada para **descriptografar** as mensagens recebidas. No contexto de blockchain, essa chave também é usada para **assinar transações**, garantindo que o remetente seja o titular da chave privada.

Esse modelo permite que qualquer pessoa valide a origem de uma mensagem ou transação sem ter acesso à chave privada.

---

## 3. Chaves Privadas e Públicas, Assinaturas e Verificações

No blockchain, cada carteira é identificada por uma **chave pública**, enquanto a **chave privada** permite que o usuário assine transações e prove a posse da conta.

### Exemplo Prático com Web3.js

Vamos criar uma chave, assinar uma mensagem e verificar a assinatura:

1. **Gerando uma Chave Privada e Pública**:

```javascript
const account = web3.eth.accounts.create();
account
```

2. **Assinando uma Mensagem**:

```javascript
const message = "Autenticação na Web3";
web3.eth.accounts.sign(message, account.privateKey);
```

3. **Verificando a Assinatura**:

```javascript
web3.eth.accounts.recover(message, signature.signature);
```

Nesse exemplo, assinamos uma mensagem com a chave privada e depois a verificamos com a chave pública. Isso demonstra como podemos autenticar transações e mensagens em um sistema descentralizado.

---

## 4. Segurança e Cuidados com Chaves

Para manter a segurança das chaves privadas, é importante seguir algumas práticas:

- **Nunca Compartilhe a Chave Privada**: Qualquer pessoa com acesso à sua chave privada tem controle total sobre a conta.
- **Use Hardware Wallets**: Armazenam as chaves privadas em dispositivos físicos, oferecendo uma camada extra de proteção.
- **Evite Armazenar Chaves Privadas em Código ou Aplicativos**: Prefira armazená-las em variáveis de ambiente ou keystores protegidos por senha.
- **Revogue Acesso se Exposta**: Se uma chave privada for exposta (como em um repositório público), transfira imediatamente os fundos para uma nova conta.

Com essas práticas, você pode manter suas interações seguras e minimizar riscos de ataques ou perdas de acesso.

---

## Conclusão

Hoje exploramos os fundamentos de **criptografia** aplicados à Web3, entendendo o que são **hashes**, como funciona a **criptografia de chave pública** e praticando com chaves privadas e assinaturas no Web3.js. A segurança das chaves privadas é essencial para proteger o acesso e a integridade das contas.

---

## Lição de Casa

1. Crie uma conta com Web3.js e assine uma mensagem. Verifique a assinatura e observe como a chave pública é usada para validar a autenticidade.
2. Escreva um resumo dos conceitos de **hash** e **criptografia de chave pública** com seus próprios exemplos.

---

## Próxima Aula

Na próxima aula, vamos explorar a arquitetura de bibliotecas Web3 e como elas facilitam a integração entre sistemas Web2 e Web3. Até lá!
