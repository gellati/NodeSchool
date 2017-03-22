var http = require('http');
var map = require('through2-map');
var server = http.createServer(function (req, res) {
    if (req.method != 'POST'){
	return res.end('not a POST request')
    }
//    if (req.method === 'POST') {
    req.pipe(map(function(instring){
	    return instring.toString().toUpperCase();
    })).pipe(res);
//    }
})
server.listen(process.argv[2]);


/* official solution
  var http = require('http');
  var through = require('through2');
  
  var server = http.createServer(function (req, res) {
      if (req.method === 'POST') {
          req.pipe(through(function (buf, _, next) {
              this.push(buf.toString().toUpperCase());
              next();
          })).pipe(res);
      }
      else res.end('send me a POST\n');
  });
  server.listen(parseInt(process.argv[2]));

 */
