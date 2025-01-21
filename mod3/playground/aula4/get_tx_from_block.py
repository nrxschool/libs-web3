from web3 import Web3
from pprint import pprint

# Configure o provider
RPC_URL = "http://127.0.0.1:8545"
web3 = Web3(Web3.HTTPProvider(RPC_URL))

print("Do you want to consult some transactions?")
block_hash = input("Enter block hash (or none for the latest block): ")

if block_hash == "":
    current_block_number = web3.eth.get_block_number()
    tx_count = web3.eth.get_transaction_count(current_block_number)

    print(f"This block hash {tx_count} Transaction")
    transaction = web3.eth.get_transaction_from_block(current_block_number)
    pprint(dict(transaction))
else:
    transaction = web3.eth.get_transaction_by_block(block_hash, 0)
    tx_count = web3.eth.get_block_transaction_count(transaction.blockNumber)
    print(f"This block hash {tx_count} Transaction")
    pprint(dict(transaction))
