
function repeat(operation, num){
    if(num === 1){
	return;
    }
    else{
	return repeat(operation, num-1);
    }
}

module.exports = repeat;


/*
// official solution

function repeat(operation, num) {
      if (num <= 0) return
      operation()
      return repeat(operation, --num)
    }
    
    module.exports = repeat


*/
