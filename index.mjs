import {
  Client,
  AccountId,
  AccountBalanceQuery
} from "@hashgraph/sdk";

// Main async function that performs the token balance lookup
async function main() {

  // Hedera tokens in this example are assumed to have 6 decimal places.
  // MULTIPLIER is used to convert from the integer balance (e.g. 1000000)
  // into a human-readable decimal value (e.g. 1.000000).
  const MULTIPLIER = 1_000_000;

  // The EVM address for the account whose token balances we want to inspect.
  // TODO: Replace this with the EVM address you want to query.
  const accountIdStr = "0x..................................................";

  // Convert the EVM address into a Hedera AccountId object.
  // The first two parameters (0, 0) represent shard and realm.
  const accountId = AccountId.fromEvmAddress(0,0, accountIdStr);

  // Create a Hedera client configured for mainnet.
  // This uses your environment’s configured operator credentials (if any).
  const client = Client.forMainnet();

  // Build and execute an AccountBalanceQuery for the target account.
  const balance = await new AccountBalanceQuery()
    .setAccountId(accountId)
    .execute(client);

  // Nicely formatted header for the output.
  console.log(`Token balances for account ${accountIdStr}:`);
  console.log("--------------------------------------------------");

  // The SDK stores token balances in balance.tokens,
  // which is a Map<TokenId, Long> for all fungible tokens held.
  const tokenMap = balance.tokens;      // Map<TokenId, Long>

  // If there are no entries in the map, the account holds no tokens.
  if (!tokenMap || tokenMap.size === 0) {
    console.log("No tokens held.");
    return;
  }

  // Loop through each token and print out its ID and scaled balance.
  // tokenBalance is the raw integer amount; we divide by MULTIPLIER
  // to convert to a decimal representation.
  for (const [tokenId, tokenBalance] of tokenMap) {
    console.log(
      `Token: ${tokenId.toString()}  | Balance: ${(tokenBalance / MULTIPLIER).toFixed(2)}`
    );
  }

  // Close the client to clean up resources and then terminate the process.
  client.close(); 
  process.exit(0); 
}

// Entry point: call main() and handle any uncaught errors.
main().catch((err) => {

  // Log any error encountered while running main().
  console.error("Error running balance query:", err);

  // Attempt to close the client and exit with a non-zero status code
  // to indicate that an error occurred.
  client.close();
  process.exit(1);
});
