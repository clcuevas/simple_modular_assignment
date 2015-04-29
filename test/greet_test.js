'use strict';

var expect = require('chai').expect;
var greet = require('../greet.js');

describe('Test greet.js', function() {
  it('should greet someone', function() {
    expect(greet('world')).to.equal('hello world');
  });//end test
});//end test description
