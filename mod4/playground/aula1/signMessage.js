import { ethers, Signature, verifyMessage } from "ethers";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to sign a message
const signMessage = async () => {
  rl.question("Enter the message to sign: ", async (message) => {
    // Create Account
    const signer = ethers.Wallet.createRandom();
    console.log("Account:", signer.address);

    // Sign the message
    const rawSig = await signer.signMessage(message);
    console.log("Signature (raw):", rawSig);

    // Split the signature
    const sig = Signature.from(rawSig);
    console.table({ v: sig.v, r: sig.r, s: sig.s });

    const result = verifyMessage(message, rawSig);

    console.log(
      "Verification:",
      result === signer.address ? "Success" : "Failed"
    );

    rl.close();
  });
};

// Call the function to sign a message
signMessage();
