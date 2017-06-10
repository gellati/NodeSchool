var trumpet = require('trumpet')
var fs = require('fs')
var through = require('through2')
/* code not working */

var tr = trumpet();
//var input = process.stdin

//fs.createReadStream(input).pipe(tr);

process.stdin.pipe(tr).pipe(process.stdout);

var stream = tr.selectAll('.loud', function(element){
    var elementStream = element.createStream();
    elementStream.on('data', function(buffer){
	elementStream.end(buffer.toString().toUpperCase());
    });
});




/*
https://github.com/nodeschool/discussions/issues/346
 */
