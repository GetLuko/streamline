# Streamline

Luko Design System using react-native for iOS and Android

## Sandbox

The objective of the sandbox project is to showcase all the components available from the Streamline library.

To start the sandbox expo project, run the following command

```
yarn sandbox start
```

## Running Tests

To run tests, run the following command

```bash
  yarn test
```

### Visual regression with Maestro

[Maestro installation requirement](https://maestro.mobile.dev/getting-started/installing-maestro)

- Run iPhone `12` simulator or `Pixel 5 API 33` emulator

- Start expo

```
yarn sandbox:start:e2e
```

- re-generate screenshots with maestro

```
yarn sandbox:test:visual:[ios|android]
```

- Compare screenshots with reg-cli

```
yarn sandbox:test:visual:[ios|android]:compare
```

📺 All good with your new screenshots?
Then move them from `e2e/android/tempScreenshots` to `e2e/android/screenshots`

## Generate icons

```
yarn generate:icons:regular
yarn generate:icons:small
```

## Build & release the library

We are using [react-native-builder-bob](https://github.com/callstack/react-native-builder-bob) to build the library and [release-it](https://github.com/release-it/release-it) to publish it on NPM.

### With github action

To build & publish the library, you can execute the [Release & Publish to NPM](https://github.com/GetLuko/streamline/actions/workflows/publish.yml) workflow. It will automatically:

- Bump version (in package.json)
- Git commit, tag, push
- Create release on Github
- Publish to npm

### Manually

```
yarn && yarn prepare && yarn release
```

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
