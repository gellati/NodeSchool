var fs = require('fs')

var file = process.argv[2]
//console.log(file)
//console.log(process.argv)

//console.log('test1')
//console.log('test2')

var output = fs.readFileSync(file, 'utf8')
//console.log(output)
var lines = output.toString().split('\n')

console.log(lines.length - 1)





/*
readFileFunction(file)
function readFileFunction (path){

    fs.readFileSync(file, 'utf8', function(err, data){
	console.log('data',data)
	return data
    });
}
*/




//var contents = readFileSync(file).toString()
//console.log(contents)



/*
var str = contents.toString()
//console.log(str.length)

var n = str.split('\n')
console.log(n.length)

*/

//console.log(contents.length)
//console.log(buffer.length)
