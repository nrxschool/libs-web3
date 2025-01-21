# 1. Instale e importe a biblioteca web3.py
from web3 import Web3
from pprint import pprint

# 2. Configure o provider
RPC_URL = "http://127.0.0.1:8545"
web3 = Web3(Web3.HTTPProvider(RPC_URL))

# 3. Obtenha o hash da transação via input
tx_hash = input("Digite o hash da transação: ")

try:
    transaction_receipt = web3.eth.get_transaction_receipt(tx_hash)
    print("Logs da Transação:")
    for log in transaction_receipt.logs:
        print("Log Address:", log.address)
        print("Log Topics:", log.topics)
        print("Log Data:", log.data)
        print("---")
except Exception as error:
    print("Erro ao buscar a transação:", error)
