# Belvo Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/belvo)](https://www.npmjs.com/package/@fern-api/belvo)
[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://github.com/fern-api/fern)

The Belvo Node.js library provides access to the Belvo API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://developers.belvo.com/reference/using-the-api-reference).

## Installation

```bash
npm install @fern-api/belvo
# or
yarn add @fern-api/belvo
```

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-mqxmdh?file=package.json&view=editor)

```typescript
import { BelvoClient, Belvo } from '@fern-api/belvo';

const belvo = new BelvoClient({
    secretId: "YOUR_SECRET_ID",
    secretPassword: "YOUR_SECRET_PASSWORD",
});

const link = await belvo.links.registerLink({
    institution: "banamex_mx_retail",
    username: "username",
    password: "password",
    accessMode: Belvo.EnumLinkAccessModeRequest.Single,
    credentialsStorage: "30d",
});
```

## Sample app

To play around with the SDK in a full project, check out the [sample app](https://github.com/fern-belvo/belvo-node-sample-app).

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
