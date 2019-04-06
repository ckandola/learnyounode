
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var buff1 = '', buff2 = '', buff3 = '';

var count = 0;

var http = require('http');
http.get(url1, function(response){
    response.setEncoding("utf8");
    response.on('data', function(data){
        buff1 += data;
    })
    response.on('end', function(){
        count++;
        if(count == 3){
            printall();
        }
    });
});
http.get(url2, function(response){
    response.setEncoding("utf8");
    response.on('data', function(data){
        buff2 += data;
    })
    response.on('end', function(){
        count++;
        if(count == 3){
            printall();
        }
    });
});
http.get(url3, function(response){
    response.setEncoding("utf8");
    response.on('data', function(data){
        buff3 += data;
    })
    response.on('end', function(){
        count++;
        if(count == 3){
            printall();
        }
    });
});

function printall(){
    console.log(buff1 + '\n' + buff2 + '\n' + buff3);
}


/* Official solution
    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }

          results[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
        }))
      })
    }

    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }
*/