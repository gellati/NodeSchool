var d2 = require('duplexer2');

var spawn = require('child_process').spawn;

module.exports = function(cmd, args){
    var child = spawn(cmd, args);
    return d2(child.stdin, child.stdout);
};

/*
https://github.com/workshopper/stream-adventure/issues/155
*/
