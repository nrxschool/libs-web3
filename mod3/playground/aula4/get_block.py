# 1. Instale e importe a biblioteca web3.py
from web3 import Web3
from pprint import pprint

# 2. Configure o provider
RPC_URL = "http://127.0.0.1:8545"
web3 = Web3(Web3.HTTPProvider(RPC_URL))


current_block_number = web3.eth.block_number
print(f"Current block is {current_block_number}")
print("Do you want to consult some block?")

block_number = input("Enter block number (or none for the latest block): ")
if block_number == "":
    block = web3.eth.get_block("latest")
    pprint(dict(block))
else:
    block_number = int(block_number)
    if block_number < current_block_number:
        block = web3.eth.get_block(block_number)
        pprint(dict(block))
    elif block_number > current_block_number:
        print("Error: Block number is in the future.")
    else:
        print("Error: Invalid block number.")
