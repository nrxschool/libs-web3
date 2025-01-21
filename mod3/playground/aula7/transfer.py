from web3 import Web3
from web3.contract import Contract
from abi import abi

# Configuração do provider
RPC_URL = "http://127.0.0.1:8545"
web3 = Web3(Web3.HTTPProvider(RPC_URL))

# Configuração do signer
PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
account = web3.eth.account.from_key(PRIVATE_KEY)

# Endereço do contrato
CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

# Cria uma instância do contrato
contract: Contract = web3.eth.contract(address=CONTRACT_ADDRESS, abi=abi)


RECIPIENT = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
AMOUNT = web3.to_wei(10, "ether")


def transfer(address, amount):
    calldata = contract.encode_abi("transfer", args=[address, amount])
    print("calldata:", calldata)

    nonce = web3.eth.get_transaction_count(account.address)

    gas_price = web3.eth.gas_price

    gas_limit = web3.eth.estimate_gas(
        {"to": CONTRACT_ADDRESS, "from": account.address, "data": calldata}
    )

    transaction = {
        "to": CONTRACT_ADDRESS,
        "gas": gas_limit,
        "gasPrice": gas_price,
        "nonce": nonce,
        "data": calldata,
    }

    signed_transaction = account.sign_transaction(transaction)

    tx_hash = web3.eth.send_raw_transaction(signed_transaction.raw_transaction)

    print("Transação enviada com hash:", tx_hash.hex())


transfer(RECIPIENT, AMOUNT)
