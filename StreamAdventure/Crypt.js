var crypto = require('crypto')
//var fs = require('fs')

//var algorithm = 'aes-256-ctr'
var algorithm = 'aes256'  // does not work even though in solution
var password = process.argv[2]
var decrypt = crypto.createDecipher(algorithm, password)

// get all supported cipher algorithms
const ciphers = crypto.getCiphers();
//console.log(ciphers)

decrypt.pipe(process.stdin).pipe(process.stdout)
decrypt.end()


/*
http://lollyrock.com/articles/nodejs-encryption/
https://nodejs.org/api/crypto.html
*/
