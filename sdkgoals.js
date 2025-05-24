import { createClient } from "@1password/sdk";

import { exec } from 'child_process';

//Capture Service Account Token
const token = process.env.OP_SERVICE_ACCOUNT_TOKEN;
const exportedToken = `export OP_SERVICE_ACCOUNT_TOKEN=${token}`
const installCli = `
curl -sS https://downloads.1password.com/linux/keys/1password.asc | sudo gpg --dearmor --output /usr/share/keyrings/1password-archive-keyring.gpg &&
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/1password-archive-keyring.gpg] https://downloads.1password.com/linux/debian/$(dpkg --print-architecture) stable main" | sudo tee /etc/apt/sources.list.d/1password.list &&
sudo mkdir -p /etc/debsig/policies/AC2D62742012EA22/ &&
curl -sS https://downloads.1password.com/linux/debian/debsig/1password.pol | sudo tee /etc/debsig/policies/AC2D62742012EA22/1password.pol &&
sudo mkdir -p /usr/share/debsig/keyrings/AC2D62742012EA22 &&
curl -sS https://downloads.1password.com/linux/keys/1password.asc | sudo gpg --dearmor --output /usr/share/debsig/keyrings/AC2D62742012EA22/debsig.gpg &&
sudo apt update &&
sudo apt install -y 1password-cli
`;

exec(installCLI, (error, message, sterr)=> {
  const opCommands = `${exportedToken} && op vault ls
  exec(opCommands, (error, output, sterr) => {
    console.log(output);
  });
});





