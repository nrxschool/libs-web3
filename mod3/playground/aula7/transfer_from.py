from web3 import Web3
from abi import abi

# Configuração do provider
RPC_URL = "http://127.0.0.1:8545"
web3 = Web3(Web3.HTTPProvider(RPC_URL))

# Configuração do signer
ALICE_PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
BOB_PRIVATE_KEY = "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"

ALICE_ADDRESS = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
BOB_ADDRESS = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
EVE_ADDRESS = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

# config contract
contract = web3.eth.contract(address=CONTRACT_ADDRESS, abi=abi)


# Alice approves 10 tokens for Bob
alice_account = web3.eth.account.from_key(ALICE_PRIVATE_KEY)

approve_tx = contract.functions.approve(
    BOB_ADDRESS, web3.to_wei(10, "ether")
).build_transaction(
    {"from": ALICE_ADDRESS, "nonce": web3.eth.get_transaction_count(ALICE_ADDRESS)}
)

signed_tx = alice_account.sign_transaction(approve_tx)
web3.eth.send_raw_transaction(signed_tx.raw_transaction)
print("Alice approved 10 tokens for Bob")

# Check the balance and allowance of Alice, Bob, and Eve
alice_balance = contract.functions.balanceOf(ALICE_ADDRESS).call()
bob_balance = contract.functions.balanceOf(BOB_ADDRESS).call()
eve_balance = contract.functions.balanceOf(EVE_ADDRESS).call()
allowance = contract.functions.allowance(ALICE_ADDRESS, BOB_ADDRESS).call()

print("Balances and Allowances:")
print(f"Alice's balance: {web3.from_wei(alice_balance, 'ether')} TOKENs")
print(f"Bob's balance: {web3.from_wei(bob_balance, 'ether')} TOKENs")
print(f"Eve's balance: {web3.from_wei(eve_balance, 'ether')} TOKENs")
print(f"Allowance for Bob from Alice: {web3.from_wei(allowance, 'ether')} TOKENs")

# Bob signs the tx sending 1 token from Alice to Eve
bob_account = web3.eth.account.from_key(BOB_PRIVATE_KEY)

transfer_from_tx = contract.functions.transferFrom(
    ALICE_ADDRESS, EVE_ADDRESS, web3.to_wei(1, "ether")
).build_transaction(
    {"from": BOB_ADDRESS, "nonce": web3.eth.get_transaction_count(BOB_ADDRESS)}
)

signed_tx = bob_account.sign_transaction(transfer_from_tx)
web3.eth.send_raw_transaction(signed_tx.raw_transaction)
print("Bob transferred 1 token from Alice to Eve")

# Check the balance and allowance of Alice, Bob, and Eve again
new_alice_balance = contract.functions.balanceOf(ALICE_ADDRESS).call()
new_bob_balance = contract.functions.balanceOf(BOB_ADDRESS).call()
new_eve_balance = contract.functions.balanceOf(EVE_ADDRESS).call()
new_allowance = contract.functions.allowance(ALICE_ADDRESS, BOB_ADDRESS).call()

print("\nNew Balances and Allowances:")
print(f"Alice's new balance: {web3.from_wei(new_alice_balance, 'ether')} TOKENs")
print(f"Bob's new balance: {web3.from_wei(new_bob_balance, 'ether')} TOKENs")
print(f"Eve's new balance: {web3.from_wei(new_eve_balance, 'ether')} TOKENs")
print(
    f"New allowance for Bob from Alice: {web3.from_wei(new_allowance, 'ether')} ether"
)
