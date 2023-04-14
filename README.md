# WhatsApp Cloud API SDK

<p align="center">
<img src="./assets/whatsapp-sdk.svg" width="300" alt="@refactoring-do/whatsapp-sdk" />
</p>

Dependencies-free WhatsApp Cloud API SDK for Node.js.

[![Build and deploy](https://github.com/refactoring-do/whatsapp-sdk/actions/workflows/publish-package.yml/badge.svg)](https://github.com/refactoring-do/whatsapp-sdk/blob/main/.github/workflows/publish-package.yml)

## Getting Started

### Installation

Install with NPM:

```sh
npm install @refactoring-do/whatsapp-sdk
```

### Usage example

```ts
import { WhatsApp } from "@refactoring-do/whatsapp-sdk";

(async () => {
  const whatsapp = new WhatsApp({
    accessToken: 'Introduce here your bearer token',
    cloudApiVersion: 'v15.0',
    phoneNumberId: 000000000000000,
  });

    const data = await whatsapp.service.sendText({ body: 'Hello world from Mars!' }, '10000000000');

    console.log(data);
})();
```

### Author

- [Refactoring, SRL](https://refactoring.do)

### Credits

Based on [Official Node.js WhatsApp Cloud API](https://github.com/WhatsApp/WhatsApp-Nodejs-SDK)