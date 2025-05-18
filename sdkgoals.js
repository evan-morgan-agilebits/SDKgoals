import { createClient } from "@1password/sdk";

import { execSync } from 'child_process';

//trys installing the CLI
try {
  execSync('brew install 1password-cli' && 'op --version' && 'op');
  
} catch (error) {
  console.error('Error:', error.message);
}
//test
execSync('op --version', 'lol')
execSync('op --version', { encoding: 'utf8' })

//Capture Service Account Token
const token = process.env.OP_SERVICE_ACCOUNT_TOKEN;


// Sign in and get the session token by piping token into op
const session = execSync(
  `echo "${token}" | op service-account signin --raw`,
  { encoding: 'utf-8' }
).trim();

const vault = 'actuuallyamaizn'

// Run the op CLI to list items in JSON format, authenticated with the session token
const itemListJson = execSync(
  `op item list --vault=${vault} --session=${session}`,
  { encoding: 'utf-8' }
);

const items = JSON.parse(itemListJson);

console.log('Items in vault:', items);
