# parse-phone

[![Join the chat at https://gitter.im/devfans/parse-phone](https://badges.gitter.im/devfans/parse-phone.svg)](https://gitter.im/devfans/parse-phone?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

phone parser for international dialing code parsing from full string

## Installation
```
npm install parse-phone
```

## Get Started
```
const phoneStr = "+86188888888"
const parsePhone = require('parse-phone')
const recipient = parsePhone(phoneStr)

{ success: true,
  dialCode: '+86',
  full: '+86188888888',
  phone: '188888888' }

parsePhone('+18096958000')

{ success: true,
  dialCode: '+1809',
  full: '+18096958000',
  phone: '6958000' }

```


[npm-image]: https://img.shields.io/npm/v/parse-phone.svg
[npm-url]: https://npmjs.org/package/parse-phone
[travis-image]: https://img.shields.io/travis/devfans/parse-phone/master.svg
[travis-url]: https://travis-ci.org/devfans/parse-phone
[coveralls-image]: https://img.shields.io/coveralls/devfans/parse-phone/master.svg
[coveralls-url]: https://coveralls.io/r/devfans/parse-phone?branch=master
[downloads-image]: https://img.shields.io/npm/dm/parse-phone.svg
[downloads-url]: https://npmjs.org/package/parse-phone

