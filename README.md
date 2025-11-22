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

## Running in GitHub Codespaces

You can run this project directly in the cloud using **GitHub Codespaces**.  
This gives you a fully-configured development environment with Node and all dependencies already installed.

### Starting a Codespace

1. Open this repository on GitHub.
2. Click the green **Code** button.
3. Select the **Codespaces** tab.
4. Click **Create codespace on main**.

GitHub will launch a VS Code environment in your browser and automatically install project dependencies.

### Running the Example

Once the Codespace opens:

1. Open the terminal (View → Terminal).
2. Follow the Getting Started instructions above
3. Run the balance query script:

    ```bash
    node index.mjs
    ```

This will query Hedera for the token balances of the EVM address defined in `index.mjs`.

### Why Codespaces?

- No local setup required  
- No Node installation needed  
- Works on any device  
- Fully isolated environment  
- Perfect for quick testing and learning

If you prefer, you can also run this example locally — Codespaces just makes it easier for first-time users.

## Disclaimer

This sample is for **educational purposes only**.  
It is **not** designed, reviewed, or recommended for commercial or production systems.
