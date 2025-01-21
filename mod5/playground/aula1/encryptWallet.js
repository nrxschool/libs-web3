import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts'
import { createInterface } from 'readline'
import { stdin as input, stdout as output } from 'process'
import { randomBytes, pbkdf2Sync, createCipheriv, createDecipheriv } from 'crypto'
import { toHex } from 'viem'

// Criar uma nova carteira
const privateKey = generatePrivateKey()
const account = privateKeyToAccount(privateKey)

console.log('Endereço:', account.address)
console.log('Chave Privada:', privateKey)

// Configurar interface readline
const rl = createInterface({
  input,
  output
})

async function encryptPrivateKey() {
  const password = await new Promise((resolve) => {
    rl.question("Digite sua senha para encriptar: ", resolve)
  })

  // Parâmetros de criptografia
  const salt = randomBytes(32)
  const iv = randomBytes(16)
  const kdfparams = {
    salt: salt,
    iterations: 1000,
    hashFunction: 'sha256'
  }

  // Deriva a chave de encriptação do password
  const derivedKey = pbkdf2Sync(
    Buffer.from(password),
    kdfparams.salt,
    kdfparams.iterations,
    32,
    kdfparams.hashFunction
  )

  // Encripta a chave privada
  const cipher = createCipheriv('aes-256-cbc', derivedKey, iv)
  let ciphertext = cipher.update(privateKey.slice(2), 'hex', 'hex')
  ciphertext += cipher.final('hex')

  // Cria o keystore no formato JSON
  const encryptedJson = {
    version: 1,
    address: account.address,
    id: toHex(randomBytes(32)),
    crypto: {
      cipher: 'aes-256-cbc',
      ciphertext: ciphertext,
      cipherparams: {
        iv: iv.toString('hex')
      },
      kdf: 'pbkdf2',
      kdfparams: {
        salt: salt.toString('hex'),
        iterations: kdfparams.iterations,
        hashFunction: kdfparams.hashFunction
      }
    }
  }

  console.log("Keystore Encriptado:", JSON.stringify(encryptedJson, null, 2))

  // Chama a função para decriptar
  decryptKeystore(encryptedJson)
}

async function decryptKeystore(encryptedJson) {
  const password = await new Promise((resolve) => {
    rl.question("Digite sua senha para decriptar: ", resolve)
  })

  try {
    // Recria a chave derivada usando os mesmos parâmetros
    const derivedKey = pbkdf2Sync(
      Buffer.from(password),
      Buffer.from(encryptedJson.crypto.kdfparams.salt, 'hex'),
      encryptedJson.crypto.kdfparams.iterations,
      32,
      encryptedJson.crypto.kdfparams.hashFunction
    )

    // Decripta a chave privada
    const decipher = createDecipheriv(
      'aes-256-cbc',
      derivedKey,
      Buffer.from(encryptedJson.crypto.cipherparams.iv, 'hex')
    )

    let privateKey = decipher.update(encryptedJson.crypto.ciphertext, 'hex', 'hex')
    privateKey += decipher.final('hex')
    privateKey = '0x' + privateKey

    // Recria a conta com a chave privada decriptada
    const decryptedAccount = privateKeyToAccount(privateKey)

    console.log("Conta Decriptada:", {
      address: decryptedAccount.address,
      privateKey: privateKey
    })

    // Verifica se o endereço corresponde
    if (decryptedAccount.address.toLowerCase() !== encryptedJson.address.toLowerCase()) {
      throw new Error('Endereço não corresponde - senha incorreta')
    }

  } catch (error) {
    console.log("Erro ao decriptar a chave:", error.message)
  } finally {
    rl.close()
  }
}

// Inicia o processo
encryptPrivateKey()