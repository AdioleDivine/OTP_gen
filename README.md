#otp-gen

> 'otp-gen' Simple One Time Generator.

[![Build Status][travis-ci-img]][travis-ci-url] 
[![npm version][npm-version-img]][npm-version-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![js-standard-style][js-standard-style-img]][js-standard-style-url] 

[![NPM](https://nodei.co/npm/otp-generator.png?downloadRank=true&downloads=true)](https://nodei.co/npm/otp-generator/)

## Index
* [Install](#install)
* [Usage](#usage)
* [Test](#test)
* [License](#license)

## Install

```bash
npm install otp-gen --save
```

## Usage

```js
var OtpGen = require('otp-gen')

OtpGen.generate(6, {specialChars: false });

```
### generate(length, options)

**Arguments**

* `length` - length of password. Optional if `options` is optional. default length is 10.
* `options` - optional
  - `digits` - Default: `true` true value includes digits in OTP 
  - `specialChars` - Default: `true` true value includes special Characters in OTP

## Tests

```js
npm test
```

## License
[MIT][license-url]

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[travis-ci-img]: https://travis-ci.org/Maheshkumar-Kakade/otp-generator.svg?branch=master
[travis-ci-url]: https://travis-ci.org/Maheshkumar-Kakade/otp-generator 
[npm-version-img]: https://badge.fury.io/js/otp-generator.svg
[npm-version-url]: http://badge.fury.io/js/otp-generator
[js-standard-style-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[js-standard-style-url]: http://standardjs.com/