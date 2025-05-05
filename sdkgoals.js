import { createClient } from "@1password/sdk";

import { execSync } from 'child_process';

//trys installing the CLI
try {
  execSync('brew install 1password-cli' && 'op --version' && 'op');
  
} catch (error) {
  console.error('Error:', error.message);
}

execSync('op --version', 'lol')
execSync('op --version', { encoding: 'utf8' })

// Creates an authenticated client.
const client = await createClient({
  auth: process.env.OP_SERVICE_ACCOUNT_TOKEN,
  // Set the following to your own integration name and version.
  integrationName: "SDK Goals",
  integrationVersion: "v1.0.0",
});

const secret = await client.secrets.resolve("op://vault/item/field")
console.log(secret)

