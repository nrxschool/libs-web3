import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts'

const privateKey = generatePrivateKey()
const account = privateKeyToAccount(privateKey)
console.log('Endereço:', account.address)
console.log('Chave Privada:', privateKey)