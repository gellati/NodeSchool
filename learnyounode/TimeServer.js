var net = require('net')

var port = process.argv[2]

var server = net.createServer(function(socket){
    var date = new Date()
    var dateString = formatDateToString(date)
    dateString += "\n"    
    socket.write(dateString)
    socket.end()

})

server.listen(port)


function formatDateToString(date){
    // 01, 02, 03, ... 29, 30, 31
    var dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
    // 01, 02, 03, ... 10, 11, 12
    var MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    // 1970, 1971, ... 2015, 2016, ...
    var yyyy = date.getFullYear();

    var hh = ((date.getHours() < 13 ? 0 : 12) + date.getHours()).toString();

    var mm= (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    
    // create the format you want
    return (yyyy + "-" + MM + "-" + dd + " " + hh + ":" + mm);
}


// the official solution
/*
var net = require('net')

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
}

function now () {
    var d = new Date()
    return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))

*/
