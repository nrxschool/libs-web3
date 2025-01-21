# 1. Instale e importe a biblioteca web3.py
from web3 import Web3
import readline

# 2. Configure o provider
RPC_URL = "http://127.0.0.1:8545"
web3 = Web3(Web3.HTTPProvider(RPC_URL))

# 3. Defina o ABI do contrato ERC20
dai_abi = [
    {
        "constant": True,
        "inputs": [{"name": "_owner", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "balance", "type": "uint256"}],
        "payable": False,
        "stateMutability": "view",
        "type": "function",
    }
]

# Função para solicitar o endereço do contrato
def ask_for_contract_address():
    contract_address = input("Digite o endereço do contrato: ")
    ask_for_account_address(contract_address)

# Função para solicitar o endereço da conta
def ask_for_account_address(contract_address):
    account_address = input("Digite o endereço da conta: ")
    check_balance(contract_address, account_address)

# Função para verificar o saldo
def check_balance(contract_address, account_address):
    dai_contract = web3.eth.contract(address=contract_address, abi=dai_abi)

    try:
        balance = dai_contract.functions.balanceOf(account_address).call()
        print("Saldo do Token:", web3.from_wei(balance, "ether"))
    except Exception as error:
        print("Erro ao consultar o saldo de DAI:", error)

# Inicia o processo
ask_for_contract_address() 