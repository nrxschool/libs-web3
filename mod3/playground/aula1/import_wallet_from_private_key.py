from web3 import Account

PRIVATE_KEY = "0xb762c5177d93ae67873060b655b652eecddca5085d918c2de4ca23b1e6be4812"

account = Account().from_key(PRIVATE_KEY)
print("Address:", account.address)
