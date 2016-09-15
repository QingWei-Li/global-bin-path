# global-bin-path

[![Build Status](https://travis-ci.org/QingWei-Li/global-bin-path.svg?branch=master)](https://travis-ci.org/QingWei-Li/global-bin-path)
[![npm](https://img.shields.io/npm/v/global-bin-path.svg?maxAge=2592000)](https://www.npmjs.com/package/global-bin-path)

> Return absolute path for global module executables, likes `npm bin -g`

## Installation
```shell
npm i global-bin-path -S
```

## Usage
```javascript
var globalBinPath = require('global-bin-path')

console.log(globalBinPath())
// => /Users/qingwei/.nvm/versions/node/v5.8.0/bin/
```

## License
MIT
