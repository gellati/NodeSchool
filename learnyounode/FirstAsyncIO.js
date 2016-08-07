var fs = require('fs')

var file = process.argv[2]

function readFileFunction(path){
    fs.readFile(file, 'utf8', function(err, data){
	//    console.log(data);
	if(err){
	    console.log('error')
	}
	else{
	    var lines = data.toString().split('\n').length - 1
	    console.log(lines)
//	    return lines
	}
    })
}

var output = readFileFunction(file)
//console.log(output - 1)

