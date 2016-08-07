var fs = require('fs')
var path = require('path')

var dirPath = process.argv[2]

function readDir(directoryPath){
    fs.readdir(directoryPath, function(err, data){
	if(err){
	    console.log('error')
	}
	else {
	    for(var i = 0; i < data.length; i++){
		if(path.extname(data[i]) == '.md'){
		    console.log(data[i])
		}
	     }
	}
    })
}

var output = readDir(dirPath)


