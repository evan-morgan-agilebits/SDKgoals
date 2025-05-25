import { createClient } from "@1password/sdk";
import sdk from "@1password/sdk";
import { exec } from 'child_process';


// Creates an authenticated client.
const client = await createClient({
  auth: process.env.OP_SERVICE_ACCOUNT_TOKEN,
  // Set the following to your own integration name and version.
  integrationName: "My 1Password Integration",
  integrationVersion: "v1.0.0",
});

// Creates an item
let item = await client.items.create({
    title: "TestItem",
    category: sdk.ItemCategory.Login,
    vaultId: "w24doqg47q4bcmqto6wphqn7ye",
    fields: [
      {
        id: "username",
        title: "username",
        fieldType: sdk.ItemFieldType.Text,
        value: "my username",
      },
      {
        id: "password",
        title: "password",
        fieldType: sdk.ItemFieldType.Concealed,
        value: "my secret value",
      },
      {
        id: "onetimepassword",
        title: "one-time password",
        sectionId: "custom section",
        fieldType: sdk.ItemFieldType.Totp,
        value:
          "otpauth://totp/my-example-otp?secret=jncrjgbdjnrncbjsr&issuer=1Password",
      },
    ],
    sections: [
      {
        id: "custom section",
        title: "my section",
      },
    ],
    tags: ["test tag 1", "test tag 2"],
    websites: [
      {
        url: "example.com",
        label: "url",
        autofillBehavior: sdk.AutofillBehavior.AnywhereOnWebsite,
      },
    ],
  });
