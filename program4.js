// used https://stackoverflow.com/a/10058879

var fs = require('fs');

var buffer;
fs.readFile(process.argv[2], 'utf8', function(err, data){
    if(err) throw error;
    buffer = data;
    console.log(data.toString().split('\n').length - 1);
});