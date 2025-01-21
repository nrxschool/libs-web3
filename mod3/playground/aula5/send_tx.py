from web3 import Web3

# Configuração do provider
RPC_URL = "http://127.0.0.1:8545"
web3 = Web3(Web3.HTTPProvider(RPC_URL))

# Configuração do signer
PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
account = web3.eth.account.from_key(PRIVATE_KEY)


# Função para enviar uma transação
try:
    # Obtém o nonce do endereço
    nonce = web3.eth.get_transaction_count(account.address)

    # Define o destinatário e o valor da transação
    # EOA Externlly Owned Account
    to_address = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
    value_in_ether = "1"

    # Obtém o preço atual do gás da rede
    gas_price = web3.eth.gas_price

    # Calcula o gás necessário para a transação
    gas_limit = web3.eth.estimate_gas(
        {
            "to": to_address,
            "from": account.address,
            "value": web3.to_wei(value_in_ether, "ether"),
        }
    )

    # Monta a transação
    transaction = {
        "to": to_address,
        "value": web3.to_wei(value_in_ether, "ether"),
        "gas": gas_limit,
        "gasPrice": gas_price,
        "nonce": nonce,
    }

    # Assina a transação
    signed_transaction = web3.eth.account.sign_transaction(transaction, PRIVATE_KEY)
    print(signed_transaction.raw_transaction)

    # Envia a transação
    receipt = web3.eth.send_raw_transaction(signed_transaction.raw_transaction)

    print("Transação enviada com sucesso! Hash:", receipt.hex())
except Exception as error:
    print("Erro ao enviar a transação:", error)
