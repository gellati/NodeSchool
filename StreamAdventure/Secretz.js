var crypto = require('crypto')
var zlib = require('zlib')
var tar = require('tar')
//var fs = require('fs')
var through = require('through')

/* this not working */



var algorithm = process.argv[2]
var password = process.argv[3]
var decrypt = crypto.createDecipher(algorithm, password)

var gunzip = zlib.createGunzip();
var parser = new tar.Parse(); // error here??
/*
*/


parser.on('entry', function(e){
  if(e.type !== 'File'){ return;}
  var hasher = crypto.createHash('md5', { encoding: 'hex' });
  console.log(e.path)
  e.pipe(hasher).pipe(through(null, function(){
    this.queue('' + e.path + '\n')
//    console.log(md5 + ' ' + e.path);
  })).pipe(process.stdout);
});

process.stdin
  .pipe(decrypt)
  .pipe(gunzip)
  .pipe(parser);
  /*
*/

//fs.createReadStream('file.tar').pipe(parser)



/*
https://github.com/nodeschool/discussions/issues/80
https://github.com/nodeschool/discussions/issues/212
https://github.com/nodeschool/discussions/issues/324
*/
