var givenDir = process.argv[2];
var extension = '.' + process.argv[3];
var buffer;

var fs = require('fs');
const path = require('path');

fs.readdir(givenDir, function(err, files){
    if(err){
        throw error;
    }
    for(i = 0; i < files.length; i++){
        if(path.extname(files[i]) == extension){
            console.log(files[i]);
        }
    }
});