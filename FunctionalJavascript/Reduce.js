function countWords(inputWords){
    var words = {};
    
    return inputWords.reduce(function(previousWord, currentWord, currentIndex, inputWords){
	if(typeof words[inputWords[currentIndex]] === 'undefined'){
	    words[inputWords[currentIndex]] = 0;
	}
	words[inputWords[currentIndex]]++;
	return words;
    }, 0); // index at which callback is started
}

module.exports = countWords

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// official solution

/*
function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
    }
    
    module.exports = countWords

 */

