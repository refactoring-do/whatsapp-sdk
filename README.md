# WhatsApp Cloud API SDK

<p align="center">
<img src="./assets/whatsapp-sdk.svg" width="300" alt="@refactoring-do/whatsapp-sdk" />
</p>

Dependencies-free WhatsApp Cloud API SDK for Node.js.

[![Build and deploy](https://github.com/refactoring-do/whatsapp-sdk/actions/workflows/publish-package.yml/badge.svg)](https://github.com/refactoring-do/whatsapp-sdk/blob/main/.github/workflows/publish-package.yml)

## Getting Started

Ready to send WhatsApp messages? Prepare to do it as efficiently and simply as possible.

### Installation

#### Install from NPM

```sh
npm install @refactoring-do/whatsapp-sdk
```

#### Install from GitHub

```sh
npm install https://github.com/refactoring-do/whatsapp-sdk
```

### Usage example

```ts
import { Client } from "@refactoring-do/whatsapp-sdk";

(async () => {
  const client = new Client({
    accessToken: 'Introduce here your bearer token',
    cloudApiVersion: 'v15.0',
    phoneNumberId: 000000000000000,
  });

  await client.sendText({ body: 'Hello world from Mars!' }, '10000000000');
})();
```

### Credits

This package has been inspired by the [official WhatsApp Cloud API for Node.js](https://github.com/WhatsApp/WhatsApp-Nodejs-SDK). A few improvements and facilities have been added.

Made with ❤️ by [Refactoring, SRL](https://refactoring.do)
