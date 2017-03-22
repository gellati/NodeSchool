
/* 
solution copied from
https://github.com/timoxley/functional-javascript-workshop/issues/90
*/
function rreduce(arr, fn, initial){
    if(!arr.length) return initial;
    return rreduce(arr.slice(1), fn, fn(initial, arr[0]));
}

module.exports = rreduce;

/*
official solution

    function reduce(arr, fn, initial) {
      return (function reduceOne(index, value) {
        if (index > arr.length - 1) return value // end condition
        return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
      })(0, initial) // IIFE. kick off recursion with initial values
    }
    
    module.exports = reduce

*/
