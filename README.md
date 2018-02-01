# parse-phone
[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

phone parser for country dialing code parsing from full string

## Get Started
```
const phoneStr = "+86188888888"
const phoneParser = require('parse-phone')
const recipient = phoneParser(phoneStr)

{ success: true,
  dialCode: '+86',
  full: '+86188888888',
  phone: '188888888' }

```


[npm-image]: https://img.shields.io/npm/v/parse-phone.svg
[npm-url]: https://npmjs.org/package/parse-phone
[travis-image]: https://img.shields.io/travis/devfans/parse-phone/master.svg
[travis-url]: https://travis-ci.org/devfans/parse-phone
[coveralls-image]: https://img.shields.io/coveralls/devfans/parse-phone/master.svg
[coveralls-url]: https://coveralls.io/r/devfans/parse-phone?branch=master

