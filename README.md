#otpassword-gen

> 'otpassword_gen' Simple One Time Generator.

[![npm version][npm-version-img]][npm-version-url]
[![js-standard-style][js-standard-style-img]][js-standard-style-url] 
[![NPM](https://nodei.co/npm/otpassword-gen.png?downloadRank=true&downloads=true)](https://nodei.co/npm/otpassword_gen/)

## Index
* [Install](#install)
* [Usage](#usage)
* [License](#license)

## Install

```bash
npm install otpassword_gen --save
```

## Usage

```js
var OtpGen = require('otpassword_gen')

OtpGen.generate(6, {specialChars: false });

```
### generate(length, options)

**Arguments**

* `length` - length of password. Optional if `options` is optional. default length is 10.
* `options` - optional
  - `digits` - Default: `true` true value includes digits in OTP 
  - `specialChars` - Default: `true` true value includes special Characters in OTP
  - `alphabets` - Default: `false` true value includes special Characters




## License
[MIT][license-url]

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-version-img]: https://badge.fury.io/js/otpassword_gen.svg
[npm-version-url]: http://badge.fury.io/js/otpassword_gen
[js-standard-style-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[js-standard-style-url]: http://standardjs.com/
