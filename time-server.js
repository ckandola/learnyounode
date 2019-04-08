var portNum = process.argv[2];

var strftime = require('strftime');
var net = require('net');

var server = net.createServer(function (socket){
    // YYYY-MM-DD hh:mm
    var data = strftime('%F %H:%M');
    socket.write(data + '\n');
    socket.end();
});
server.listen(portNum);

/* Official Solution
    var net = require('net')

    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }

    function now () {
      var d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }

    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })

    server.listen(Number(process.argv[2]))
*/