var portNum = process.argv[2];
var fileLocation = process.argv[3];

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res){
    var src = fs.createReadStream(fileLocation, { encoding: 'utf8'});
    src.pipe(res);
});
server.listen(Number(portNum));

/* Official Solution
    var http = require('http')
    var fs = require('fs')

    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })

      fs.createReadStream(process.argv[3]).pipe(res)
    })

    server.listen(Number(process.argv[2]))
*/