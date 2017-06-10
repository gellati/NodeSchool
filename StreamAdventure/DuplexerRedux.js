var d2 = require('duplexer2');
var through = require('through2').obj; // .obj is convenience wrapper for through2({objectMode: true}, fn)

module.exports = function(counter){
    var counts = {}
    var input = through(write, end);
    return d2({objectMode: true}, input, counter);

    function write(row, _, next){
	counts[row.country] = (counts[row.country] || 0) + 1;
	next();
    }

    function end(done){
	counter.setCounts(counts);
	done();
    }


    /*
    var duplex = d2(through.obj(function(obj, encoding, done){
	if(obj.country in countries)
	    countries[obj.country]++;
	else
	    countries[obj.country] = 1;
	done();
    }), counter);

    duplex.on('finish', function(){
	console.log(countries);
	counter.setCounts(countries);
    });
//    counter.pipe(duplex);
*/
//    return duplex;

};


/*
https://github.com/nodeschool/discussions/issues/283
https://github.com/workshopper/stream-adventure/issues/158
https://github.com/nodeschool/discussions/issues/729
*/
