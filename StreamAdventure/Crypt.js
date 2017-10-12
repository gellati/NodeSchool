var crypto = require('crypto')
//var fs = require('fs')

var algorithm = 'aes-256-cbc' // equal to 'aes256'

var password = process.argv[2]
//console.log(password)

var decrypt = crypto.createDecipher(algorithm, password)

// get all supported cipher algorithms
const ciphers = crypto.getCiphers();
//console.log(ciphers)

  process.stdin
      .pipe(decrypt)
      .pipe(process.stdout)

      // tried this solution but wrong, piping in reverse
      //decrypt.pipe(process.stdin)
      //       decrypt.pipe(process.stdout)
      //decrypt.end()



/*
http://lollyrock.com/articles/nodejs-encryption/
https://nodejs.org/api/crypto.html
*/
