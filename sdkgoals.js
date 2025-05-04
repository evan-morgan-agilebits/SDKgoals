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

exec('sh ./myscript.sh', (error, stdout, stderr) => {
  if (error) {
    return console.error(error.message)
  }
  if (stderr) {
    return console.error(stderr);
  }
  console.log("terminal output:", stdout)
});
