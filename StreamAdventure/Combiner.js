var combine = require('stream-combiner')
var split = require('split')
var zlib = require('zlib') // included in node core
var through = require('through')

module.exports = function(){
  var result;
  var line;

  var tr = through(function(entry){
    if (entry.length === 0) return;

    line = JSON.parse(entry)

    if(line.type === 'genre'){
      if(result)
        this.queue(JSON.stringify(result) + '\n');
//        this.push(JSON.stringify(result + '\n'))
      result = {'name': line.name, 'books': []};
    } else if(line.type === 'book'){
//      console.log(line)
//      console.log(line.name)
      result.books.push(line.name)
//      console.log(result)
    } else {
      console.warn('Unknown type')
    }
  }, function (){
    if(result)
      this.queue(JSON.stringify(result) + '\n');
      console.log(result)
      this.queue(null)
  });
  return combine(
    split(),
    tr,
    zlib.createGzip()
  )
}


/*
https://github.com/nodeschool/discussions/issues/1102
https://github.com/nodeschool/discussions/issues/326
https://github.com/nodeschool/discussions/issues/300
*/
