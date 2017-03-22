var through2 = require('through2');
var fs = require('fs');
var split = require('split');

var enc = 'UTF-8';
var counter = 0;

var write = function(buffer, encoding, next){
    var data = buffer.toString(); //.split('\n');

    if(counter % 2 === 0){// && data != null){
        this.push(data.toLowerCase() + '\n');
        counter++;
    }
    else if(counter % 2 === 1){ // && data != null){
        this.push(data.toUpperCase() + '\n');
        counter++;
    }
    next();
}

var end = function(done){
    done();
}

var stream = through2(write, end);

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);


/*
 * 
 * http://blog.yld.io/2016/01/13/using-streams/#.WBHaFbVRWaI
 * http://codewinds.com/blog/2013-08-20-nodejs-transform-streams.html
 * 
 * 
example solution:

var through = require('through2');
var split = require('split');

var lineCount = 0;
var tr = through(function (buf, _, next) {
    var line = buf.toString();
    this.push(lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    );
    lineCount ++;
    next();
});
process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout)
;

 * 
 * 
 */
