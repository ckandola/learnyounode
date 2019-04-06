var http = require('http');
var url = process.argv[2];
var count = 0;
var buffer = "";

http.get(url, function(message){
    message.setEncoding("utf8");
    message.on('data', function(data){
        buffer+= data;
        for(c in data){
            count++;
        }
    });
    message.on('end', function(){
        console.log(count + '\n' + buffer);
    });
    message.on('error', function(err){
        console.log(err);
    });
});

/*
    var http = require('http')
    var bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
*/