# Mono Repo NextJS

This is a monorepo setup using yarn workspaces. It contains a [NextJS app](packages/nextjs), [Playwright e2e](packages/playwright-tests) and a [TypeScript runner](packages/typescript-runner).

## Getting Started

### Install dependencies

```bash
yarn install
```

### Run the development server

```bash
yarn dev
```

### Run the e2e tests

```bash
yarn test:e2e
```

### Run the TypeScript runner cli utility

```bash
yarn start:runner greet John

```