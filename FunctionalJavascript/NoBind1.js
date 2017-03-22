var slice = Array.prototype.slice
    
function logger(namespace) {
    return function(){
	console.log.apply(console, [namespace].concat(slice.call(arguments)))
    }
}

module.exports = logger

/*
more info

http://stackoverflow.com/questions/32728625/the-need-for-bind-or-apply-for-partial-application
http://benalman.com/news/2012/09/partial-application-in-javascript/
http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind
https://passy.svbtle.com/partial-application-in-javascript-using-bind

 */
