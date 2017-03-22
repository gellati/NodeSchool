// don't understand how this works

// http://stackoverflow.com/questions/21506025/javascript-how-to-compare-two-arrays-of-objects-using-functional-programming
// http://stackoverflow.com/questions/24226900/where-does-the-value-in-my-function-come-from


var checkUsersValid = function(goodUsers){
    return function (submittedUsers){
	return submittedUsers.every(function(submittedUser){
	    return goodUsers.some(function(goodUser){
		return goodUser.id === submittedUser.id;
	    });
	});
    };
};

module.exports = checkUsersValid

