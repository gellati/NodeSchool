var crypto = require('crypto')
var zlib = require('zlib')
var tar = require('tar')

/* this not working */

var algorithm = process.argv[2]
var password = process.argv[3]
var decrypt = crypto.createDecipher(algorithm, password)

var gunzip = zlib.createGunzip();
var parser = new tar.Parse(); // error here??

parser.on('entry', function(e){
  console.log(e.type)
  if(e.type !== 'File'){ return;}
  var hasher = crypto.createHash('md5', { encoding: 'hex' });
//  console.log(e.path)
  e.pipe(hasher).pipe(concat(function(hash){
     //this.queue('' + e.path + '\n')
      console.log(hash + ' ' + e.path);
  })); // .pipe(process.stdout);
});

process.stdin
  .pipe(crypto.createDecipher(algorithm, password))
  .pipe(zlib.createGunzip())
  .pipe(parser);

  /*
*/


/*
https://github.com/nodeschool/discussions/issues/80
https://github.com/nodeschool/discussions/issues/212
https://github.com/nodeschool/discussions/issues/324
*/
