var trumpet = require('trumpet')
var fs = require('fs')
var through = require('through2')
/* code not working */

var tr = trumpet();
//var input = process.stdin

//fs.createReadStream(input).pipe(tr);

var stream = tr.selectAll('.loud', function(element){
    return element.toString().toUpperCase();
});


process.stdin.pipe(stream).pipe(process.stdout);

/*
https://github.com/nodeschool/discussions/issues/346
 */
