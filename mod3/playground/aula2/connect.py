# 1. Instale e importe a biblioteca web3.py
from web3 import Web3

# 2. Configure o provider
RPC_URL = "http://127.0.0.1:8545"
web3 = Web3(Web3.HTTPProvider(RPC_URL))

# 3. Verifique a conexão
try:
    block_number = web3.eth.get_block_number()
    print(f"Número do bloco: {block_number}")
except Exception as error:
    print("Erro ao verificar a conexão:", error)
