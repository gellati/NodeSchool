function duckCount(){
    return Array.prototype.reduce.call(arguments, function(count, duck){
	if(Object.prototype.hasOwnProperty.call(duck, 'quack')){
	    return count + 1;
	}
	else{
	    return count;
	}
    }, 0);
}

module.exports = duckCount


/*
official solution

function duckCount() {
      return Array.prototype.slice.call(arguments).filter(function(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
      }).length
    }
    
    module.exports = duckCount

https://github.com/nodeschool/discussions/issues/1099


*/
