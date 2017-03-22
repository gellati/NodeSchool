
function getShortMessages(messages){

    return messages.filter( // filter gives true if condition met
	function(mes){
	    return mes.message.length < 50;}
    ).map(function (mes){
	return mes.message;
    });
}

module.exports = getShortMessages
