# 1. Instale e importe a biblioteca web3.py
from web3 import Web3
from pprint import pprint

# 2. Configure o provider
RPC_URL = "http://127.0.0.1:8545"
web3 = Web3(Web3.HTTPProvider(RPC_URL))


def print_block(block, block_name):
    print("================================================")
    print(f"{block_name} BLOCK")
    print("================================================")
    pprint(dict(block))


earliest_block = web3.eth.get_block("earliest")
print_block(earliest_block, "EARLIEST")

latest_block = web3.eth.get_block("latest")
print_block(latest_block, "LATEST")

pending_block = web3.eth.get_block("pending")
print_block(pending_block, "PENDING")

finalized_block = web3.eth.get_block("finalized")
print_block(finalized_block, "FINALIZED")

safe_block = web3.eth.get_block("safe")
print_block(safe_block, "SAFE")
