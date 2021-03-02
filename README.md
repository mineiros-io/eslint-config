[<img src="https://raw.githubusercontent.com/mineiros-io/brand/3bffd30e8bdbbde32c143e2650b2faa55f1df3ea/mineiros-primary-logo.svg" width="400"/>][homepage]

# eslint-config

Eslint config presents for Javascript, Typescript and Vue.

## Installation

```
# install with yarn
yarn add -D @mineiros/eslint-config

# install with npm
npm install @mineiros/eslint-config --save-dev
```

## Usage

**`.eslintrc`**

```
{
  "extends": "@mineiros",
  "rules": {
    ...
  }
}
```

Only extend specific rulesets

```
{
  "extends": "@mineiros/eslint-config-typescript",
  "rules": {
    ...
  }
}
```

<!-- References -->

[homepage]: https://mineiros.io/?ref=eslint-config
