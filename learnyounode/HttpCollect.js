var http = require('http')
var bl = require('bl')
var concatStream = require('concat-stream')

var url = process.argv[2]

http.get(url, function(response){
    response.pipe(bl(function(err, data){
	if(err){
	    return console.error(err)
	}
	else{
	    console.log(data.length)//all characters in string
	    console.log(data.toString()) // whole string
	}
    }))    
})
