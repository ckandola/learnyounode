var portNum = Number(process.argv[2]);

var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});

    var url = require('url').parse(req.url, true);
    var time = url.query.iso;
    var given = new Date(time);

    if(url.pathname === '/api/parsetime'){
        date = {
            "hour" : given.getHours(),
            "minute" : given.getMinutes(), 
            "second" : given.getSeconds()
        }
    } else if(url.pathname === '/api/unixtime'){
        date = {
            "unixtime" : given.getTime()
        }
    }
    if(date){
        res.write(JSON.stringify(date));
        res.end();
    }
});
server.listen(portNum);

/* Official Solution
    var http = require('http')
    var url = require('url')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime: time.getTime() }
    }

    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result

      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
*/