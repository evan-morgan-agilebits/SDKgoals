import { createClient } from "@1password/sdk";

import { execSync } from 'child_process';

//trys installing the CLI
try {
  execSync('brew install 1password-cli');
  console.log('1Password CLI is now installed.');
  //If fails will print the specific error.
} catch (error) {
  console.error('Failed to install 1Password CLI:', error.message);
}
// Creates an authenticated client.
const client = await createClient({
  auth: process.env.OP_SERVICE_ACCOUNT_TOKEN,
  // Set the following to your own integration name and version.
  integrationName: "SDK Goals",
  integrationVersion: "v1.0.0",
});

// Fetches a secret.
const secret = await client.secrets.resolve("op://actuuallyamaizn/mhm/password");

console.log(secret)