var test = require('tape')
var food = require(process.argv[2])

test('food', function(t){
    t.plan(2)
    t.equal(food('food'), 'yum', 'cat likes food');
    t.throws(function(){food('chocolate')}, 'You fed chocolate');
});

/* official solution

var test = require('tape')
   var feedCat = require(process.argv[2])
   
   test('cat feeding', function (t) {
     t.plan(2)
     t.equal(feedCat('food'), 'yum')
     t.throws(feedCat.bind(null, 'chocolate'))
   })


*/ 
	
