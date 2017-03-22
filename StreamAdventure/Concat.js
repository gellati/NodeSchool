var concat = require('concat-stream');

var end = function(done){
    done();
}

process.stdin.pipe(concat(function(data){
    var data = data.toString().split('').reverse().join('');
    console.log(data);
}));


/*
 * http://stackoverflow.com/questions/32881290/nodeschool-stream-adventure-6-concat
 * https://github.com/nodeschool/discussions/issues/90
 * https://www.npmjs.com/package/concat-stream
 * http://stackoverflow.com/questions/25225158/why-isnt-concat-stream-working-with-process-stdin-pipe
 * http://ejohn.org/blog/node-js-stream-playground/
 * 
 * 
 */
