module.exports = function(food){
    if(food === 'chocolate'){
	return new Error('You fed chocolate');
    }
    else{
	return 'yum';
    }	
}
