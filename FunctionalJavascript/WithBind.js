
function logger(namespace){
    return console.log.bind(console.log, namespace)
}

// with bind extend console.log function, override function with own function

module.exports = logger


// return (msg) => console.log(prefix, msg)


// official solution
/*
module.exports = function(namespace) {
      return console.log.bind(console, namespace)
    }
*/


// blackboard architecture

// javascript bind state

// sockets work with events

