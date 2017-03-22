var ws = require('websocket-stream');

var string = 'hello\n';
//stream.pipe(string);

//var stream = ws({host: 'ws://localhost',
//		 port: '8099'});

var stream = ws('ws://localhost:8099');
stream.write(string);


