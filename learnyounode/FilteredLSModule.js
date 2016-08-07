var lsmodule = require('./LSModule')

var dirPath = process.argv[2]
var extension = process.argv[3]

var output = lsmodule(dirPath, extension, function(err, data){
    if(err){
	throw(err)
    }
    else data.forEach(function (file){
	console.log(file)
    })
})


