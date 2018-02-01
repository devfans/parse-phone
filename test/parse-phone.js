process.env.NO_DEPRECATION = 'parse-phone';

var after = require('after')
var assert = require('assert')
var parse = require('../')

describe('parse-phone', function(){
  it('get function', function(){
    assert.equal(typeof parse, 'function')
  })

  it('should success', function() {
    var recipient = parse('+861888888888')
    assert.equal(recipient.success, true)
    assert.equal(recipient.dialCode, '+86')
    assert.equal(recipient.full, '+861888888888')
    assert.equal(recipient.phone, '1888888888')
  })

  it('should fail', function() {
    var recipient = parse('+a861888888888')
    assert.equal(recipient.success, false)
  })

})
