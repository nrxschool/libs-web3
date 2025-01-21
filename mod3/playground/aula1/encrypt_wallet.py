from web3 import Account
import json
import getpass


# Cria uma conta nova na wallet e obtém a chave privada
account = Account().create()
private_key = account.key.to_0x_hex()
print("Chave Privada:", private_key)


# Função para solicitar a senha e encriptar a chave privada
def encrypt_private_key():
    password = getpass.getpass("Digite sua senha para encriptar: ")

    keystore = Account().encrypt(private_key, password)
    print("Keystore Encriptado:", json.dumps(keystore, indent=2))

    # Chamar a função para decriptar
    decrypt_keystore(keystore)


# Função para solicitar a senha e decriptar a chave privada
def decrypt_keystore(keystore):
    password = getpass.getpass("Digite sua senha para decriptar: ")

    try:
        decrypted_account = Account().decrypt(keystore, password)
        print("Conta Decriptada:", f'0x{decrypted_account.hex()}')
    except ValueError as error:
        print("Erro ao decriptar a chave:", error)


# Inicia o processo
encrypt_private_key()
