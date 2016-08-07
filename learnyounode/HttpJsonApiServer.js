var http = require('http')
var url = require('url')

var port = process.argv[2]

var server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' })
    
    if(req.method != 'GET'){
	return res.end('not a GET request')
    }

    var urlContent = url.parse(req.url, true)

    var query = urlContent['query']
    var path = urlContent['pathname']
    
    if(path === '/api/parsetime'){
	var date = new Date(query['iso'])
	var dateString = JSON.stringify({'hour': date.getHours(),
					 'minute': date.getMinutes(),
					 'second': date.getSeconds()})

//	console.log(dateString)
	res.write(dateString)
//	res.end()
    }
    if(path === '/api/unixtime'){
	var date = new Date(query['iso'])
	var dateString = JSON.stringify({'unixtime': date.getTime()})
//	console.log(epochTime)
	res.write(dateString)

    }
	res.end()	

})

server.listen(port)


// official solution

/*
var http = require('http')  
     var url = require('url')  
       
     function parsetime (time) {  
       return {  
         hour: time.getHours(),  
         minute: time.getMinutes(),  
         second: time.getSeconds()  
       }  
     }  
       
     function unixtime (time) {  
       return { unixtime : time.getTime() }  
     }  
       
     var server = http.createServer(function (req, res) {  
       var parsedUrl = url.parse(req.url, true)  
       var time = new Date(parsedUrl.query.iso)  
       var result  
       
       if (/^\/api\/parsetime/.test(req.url))  
         result = parsetime(time)  
       else if (/^\/api\/unixtime/.test(req.url))  
         result = unixtime(time)  
       
       if (result) {  
         res.writeHead(200, { 'Content-Type': 'application/json' })  
         res.end(JSON.stringify(result))  
       } else {  
         res.writeHead(404)  
         res.end()  
       }  
     })  
     server.listen(Number(process.argv[2]))  


 */
