var http = require('http')
var bl = require('bl')

var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]

var urlList = []
urlList.push(url1)
urlList.push(url2)
urlList.push(url3)

var results = []
//var count = urlList.length
var count = 0


// this is the official solution
function printResults () {
    for (var i = 0; i < 3; i++)
	console.log(results[i])
}

function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
	response.pipe(bl(function (err, data) {
	    if (err)
		return console.error(err)

	    results[index] = data.toString()
	    count++

	    if (count == 3)
		printResults()
	}))
    })
}

for (var i = 0; i < 3; i++)
    httpGet(i)










/*
function printResults(){
    for(var j = 0; j < results.length; j++){
	console.log(results[j]);
    }
}

function readUrl(url){
    http.get(url, function(response){
	response.pipe(bl(function(err, data){
	    if(err){
		throw err;
	    }
	    else{		    
		results.push(data.toString());
		count++;
		if(count === 3){
		    printResults()
		}		    
	    }
	}))
    })
}

function readUrls(urls){
    for(var j = 0; j < urls.length; j++){
	readUrl(urls[j]);
    }
}

readUrls(urlList)
*/
