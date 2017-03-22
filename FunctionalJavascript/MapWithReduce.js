module.exports = function arrayMap(arr, fn){
    result = []
    var i
    for(i = 0; i < arr.length; i++){
	result.push(fn(arr[i]))
    }
    return result
}



// serializable transactions

lock everything for this booking
nothing until this transaction is closed

objection.js
bookshelf.js
sequelize.js
wetland

database schemas, important when doing migrations and scaling up
