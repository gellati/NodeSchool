var through2 = require('through2');
var fs = require('fs');

var enc = 'UTF-8';

var write = write = function(buffer, encoding, next){
    var data = buffer.toString();
    this.push(data.toUpperCase());
    next();
}

var end = function(done){
    done();
}

var stream = through2(write, end);

process.stdin.pipe(stream).pipe(process.stdout);



/*
 * http://stackoverflow.com/questions/32867508/extra-newline-while-sending-data-to-a-stream-using-through2-in-node-js
reference solution
* 

// Here is the reference solution:

  var through = require('through2');
  var tr = through(function (buf, _, next) {
      this.push(buf.toString().toUpperCase());
      next();
  });
  process.stdin.pipe(tr).pipe(process.stdout);


 */
