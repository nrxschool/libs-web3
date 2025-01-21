from eth_account import Account

account = Account().create()
print("Random Private Key:", account.key.to_0x_hex())
print("Random Address:", account.address)
