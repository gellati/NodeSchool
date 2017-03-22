var request = require('request')

var url = 'http://localhost'
var port = '8099'
var input = process.stdin

var r = request.post(url + ':' + port)
input.pipe(r).pipe(process.stdout)
