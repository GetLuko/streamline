# Streamline

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

# Sandbox

Start expo

```
yarn sandbox:start
```

Run test

```
yarn sandbox:test
```

# Streamline library

```
yarn streamline:test
```

Generate icons

```
yarn streamline:generate:icons:regular
yarn streamline:generate:icons:small
```

Generate components

```
yarn streamline:generate:component
```

# Visual regression with Maestro

[Maestro installation requirement](https://maestro.mobile.dev/getting-started/installing-maestro)

- Run iPhone `12` simulator or `Pixel 4a API 33` emulator

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

# Sandbox-E2E

Let's ignore this folder for now. Will probably be replace by maestro.
