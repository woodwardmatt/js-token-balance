# js-token-balance

A lookup example that queries Hedera token balances for an EVM-first account  
(handy for Hollow ↦ Complete account flows).

## Getting Started

Provide the EVM address (line #17 on index.mjs) of the account you want to query by setting:

    const accountIdStr = "0x....";

Install the required dependency:

    npm install @hashgraph/sdk

Then run the sample script:

    node index.mjs

## Output

You should see something like:

    Token balances for account 0xYourEVMAddress:
    --------------------------------------------------
    Token: 0.0.12345678  | Balance: 1.00
    Token: 0.0.23456789  | Balance: 13.00

## Disclaimer

This sample is for **educational purposes only**.  
It is **not** designed, reviewed, or recommended for commercial or production systems.
