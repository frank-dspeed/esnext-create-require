# esnext-create-require
A nodejs createRequire implementation done in es6+ based on dynamic import.

## Why?
sometimes some scripts are bundled as CJS package i do not want to transpil them again to load them


## Usage

```js
import createRequire from './create-require';
const require = createRequire(import.meta.url);
```

## Known issues

- At present does not handle sub imports correct 
- Does not contain node-resolve algo.
