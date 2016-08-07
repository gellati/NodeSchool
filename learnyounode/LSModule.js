var fs = require('fs')
var path = require('path')

/*
var dirFilter = function(err, path, extension){
    fs.readdir(directoryPath, function(err, path){
	if(err)
	    console.log('error')
	else{
	    for(var i = 0; i < data.length; i++){
		if(path.extname(data[i]) == '.' + extension){
		    console.log(data[i])
		}
	    }
	}
    }
	      )}
*/	      	      

/*
var cb = function(name){
    if(name == null)
	return
    else
	return name
}
*/

module.exports = function (directoryPath, extension, callback){
    fs.readdir(directoryPath, function(err, data){
	if(err){
	    return callback(err, null)
	}

	var files = []

/* // retrieving file names with a for loop
	for(var i = 0; i < data.length; i++){
	    if(path.extname(data[i]) === '.' + extension){
		files.push(data[i])
	    }
	}
*/

	// retrieving file names with functional coding
	files = data.filter(function (file) {
	    return path.extname(file) === '.' + extension
	}) 

	
	return callback(null,files)
    }
	      )
}
	     


//var output = readDir(dirPath)


