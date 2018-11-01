# @rushplay/eslint-plugin-redux-effects

Report typical `redux-effects` errors.

## Installation

```bash
yarn add eslint @rushplay/eslint-plugin-redux-effects --dev
```

## Usage

Add plugin in your `.eslintrc` and enable desired rules:

```json
{
  "plugins": ["@rushplay/redux-effects"],
  "rules": {
    "@rushplay/redux-effects/no-redundant-dispatch": 2
  }
}
```

## Rules

### `no-redundant-dispatch`

_Targeted for internal library built on top of `redux-effects`_

Checks for redundant `dispatch` calls in `success`/`failure` callbacks, which lead to double-dispatch.
