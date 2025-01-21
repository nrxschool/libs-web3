import json
from pprint import pprint
from web3 import Web3

# 2. Configure o provider
RPC_URL = "http://127.0.0.1:8545"
web3 = Web3(Web3.HTTPProvider(RPC_URL))

# 3. Obtenha o hash da transação via input
tx_hash = input("Digite o hash da transação: ")

try:
    transaction = web3.eth.get_transaction(tx_hash)
    print("Transação encontrada:")
    pprint(dict(transaction))
except Exception as error:
    print("Erro ao buscar a transação:", error)
