import { privateKeyToAccount } from 'viem/accounts'

const privateKey = '0x737d2cf1db940b966eb0d7e87521b88dabf9b2a444ee9815fcaf8d0746167a42'
const account = privateKeyToAccount(privateKey)
console.log('Endereço:', account.address)