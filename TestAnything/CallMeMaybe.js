var test = require('tape')
var cb = require(process.argv[2])

test('nextTick', function(t){
    var n = 5
    t.plan(n)
    cb(n, function(){
	t.pass('callback called')
    })
})
