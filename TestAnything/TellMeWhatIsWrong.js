var mod = require(process.argv[2])
var assert = require('assert')
//console.log(mod(68))
assert.deepEqual(mod(42), true, 'input should be 42')


/*
correct solution

 var isCoolNumber = require(process.argv[2])
   var assert = require('assert')
   assert(isCoolNumber(42))


*/
