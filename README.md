# WhatsApp Cloud API SDK

<p align="center">
<img src="./assets/whatsapp-sdk.svg" width="300" alt="@refactoring-do/whatsapp-sdk" />
</p> 

Dependency-free WhatsApp Cloud API SDK for Node.js.

[![NPM Package](https://github.com/refactoring-do/whatsapp-sdk/actions/workflows/publish-package-npm.yml/badge.svg)](https://github.com/refactoring-do/whatsapp-sdk/blob/main/.github/workflows/publish-package-npm.yml)
[![Tests](https://github.com/refactoring-do/whatsapp-sdk/actions/workflows/tests.yml/badge.svg)](https://github.com/refactoring-do/whatsapp-sdk/blob/main/.github/workflows/tests.yml)
[![Linting and Formatting](https://github.com/refactoring-do/whatsapp-sdk/actions/workflows/lint-format.yml/badge.svg)](https://github.com/refactoring-do/whatsapp-sdk/blob/main/.github/workflows/lint-format.yml)

## Getting Started

Are you ready to send WhatsApp messages? Learn how to do it efficiently and easily.

### Installation

#### Install from NPM

```sh
npm install @refactoring/whatsapp-sdk
```

### Usage Example

```ts
import { Client } from "@refactoring/whatsapp-sdk";

(async () => {
  const client = new Client({
    accessToken: 'Enter your bearer token here',
    cloudApiVersion: 'v15.0',
    phoneNumberId: 000000000000000,
  });

  await client.sendText({ body: 'Hello world from Mars!' }, '10000000000');
})();
```

### Credits

This package has been inspired by the [official WhatsApp Cloud API for Node.js](https://github.com/WhatsApp/WhatsApp-Nodejs-SDK). It includes several improvements and enhancements.

Made with ❤️ by [Refactoring, SRL](https://refactoring.do)
