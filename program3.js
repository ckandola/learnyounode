var filepath = process.argv[2];

var fs = require('fs');
var buffer = fs.readFileSync(filepath);
var str = buffer.toString();

var strArray = str.split('\n');
var count = strArray.length - 1;
console.log(count);


/* var fs = require('fs')

    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)

    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
*/