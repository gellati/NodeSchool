var fancify = require(process.argv[2])
var test = require('tape')

/* use metatest2.js as input */

test('string should be wrapped in ~*~', function(t){
    var m = '!'
    var s = 'hello'
    t.equal(fancify(s), '~*~' + s.toString() + '~*~');
    t.equal(fancify(s, true), '~*~' + s.toString().toUpperCase() + '~*~');
    t.equal(fancify(s, false), '~*~' + s.toString() + '~*~');    
    t.equal(fancify(s, true, m), '~' + m + '~' + s.toString().toUpperCase() + '~'+ m +'~');

    t.equal(fancify(s, false, m), '~' + m + '~' + s.toString() + '~'+ m +'~');    
    t.end()
});


/*
test('fancify', function (t) {
  t.ok(fancify('Hello'), "~*~Hello~*~", "Cannot fancify 1 arg");
  t.ok(fancify('Abc', true), "~*~ABC~*~", "Cannot use 2 arg with uppercase");
  t.ok(fancify('qwerty', false, '+'), "~+~qwerty~+~", "Cannot fancify 3 args without upper case");
  t.ok(fancify('Qwerty', true, '+'), "~+~QWERTY~+~", "Cannot fancify 3 args with upper case");
  t.end();
});
*/

/*     
// alternative solution, does not use metatest.js
var assert = require('assert')
var fancify = require(process.argv[2])

var s = 'Hello'   

assert.equal("~*~Hello~*~", fancify('Hello'), "Cannot fancify 1 arg");
assert.equal("~*~ABC~*~", fancify('Abc', true), "Cannot use 2 arg with uppercase");
assert.equal("~+~qwerty~+~", fancify('qwerty', false, '+'), "Cannot fancify 3 args without upper case");
assert.equal("~+~QWERTY~+~", fancify('Qwerty', true, '+'), "Cannot fancify 3 args with upper case");



*/



