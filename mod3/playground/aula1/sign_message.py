from eth_account.messages import encode_defunct
from web3 import Account


# Function to sign a message
def sign_message():
    message = input("Enter the message to sign: ")
    msg = encode_defunct(text=message)
    # Create Account
    account = Account().create()
    print("Address:", account.address)

    # Sign the message
    signature = Account().sign_message(msg, account.key)
    print("Signature:", signature.signature.hex())

    # Verify the signature
    message = "outra messagem"
    msg2 = encode_defunct(text=message)
    verify = Account().recover_message(msg, signature=signature.signature)

    if verify == account.address:
        print("✅ Verification: Success")
    else:
        print("🚨 Verification: Failed")


sign_message()
