from web3 import Web3
from abi import abi

# Configuração do provider
RPC_URL = "http://127.0.0.1:8545"
web3 = Web3(Web3.HTTPProvider(RPC_URL))

PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
account = web3.eth.account.from_key(PRIVATE_KEY)

# Endereço do contrato
contract_address = "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0"

# Cria uma instância do contrato
contract = web3.eth.contract(address=contract_address, abi=abi)


# Nova função para chamar pushGen
def read_gender_enum():
    gender_value = contract.functions.getGender().call()
    gender = "Male" if gender_value == "0" else "Female"
    print("Gênero:", gender)


def get_people_by_gender(gender):
    gen = 0 if gender == "Male" else 1
    people_names = contract.functions.pushGen(gen).call()
    print(f"Nomes de pessoas com gênero {gender}:", people_names)


# Executa as funções
read_gender_enum()
get_people_by_gender("Male")
