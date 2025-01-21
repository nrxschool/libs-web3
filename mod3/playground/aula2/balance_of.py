# 1. Instale e importe a biblioteca web3.py
from web3 import Web3

# 2. Configure o provider
RPC_URL = "http://127.0.0.1:8545"
web3 = Web3(Web3.HTTPProvider(RPC_URL))

# 3. Obtenha o endereço da conta via readline input
address = input("Digite o endereço da conta: ")
try:
    balance = web3.eth.get_balance(address)
    print("Saldo em wei:", balance)
except Exception as error:
    print("Erro ao consultar o saldo:", error)
