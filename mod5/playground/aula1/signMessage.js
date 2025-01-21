import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts'
import { verifyMessage } from 'viem'
import { createInterface } from 'readline'
import { stdin as input, stdout as output } from 'process'

// Criar uma nova carteira
const privateKey = generatePrivateKey()
const account = privateKeyToAccount(privateKey)

console.log('Endereço:', account.address)
console.log('Chave Privada:', privateKey)

// Configurar interface readline para input do usuário
const rl = createInterface({
  input,
  output
})

async function signMessage() {
  // Usar Promise para trabalhar com readline de forma assíncrona
  const message = await new Promise((resolve) => {
    rl.question("Digite a mensagem para assinar: ", resolve)
  })

  try {
    // Assinar a mensagem
    const signature = await account.signMessage({
      message
    })
    console.log('Assinatura:', signature)

    // Verificar a assinatura
    const isValid = await verifyMessage({
      address: account.address,
      message,
      signature
    })

    console.log('Assinatura é válida?', isValid)
    console.log('\nDetalhes da Assinatura:')
    console.log('Endereço do Signatário:', account.address)
    console.log('Mensagem Original:', message)
    console.log('Assinatura Completa:', signature)

  } catch (error) {
    console.error("Erro durante a assinatura:", error)
  } finally {
    rl.close()
  }
}

signMessage()