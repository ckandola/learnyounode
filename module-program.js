var mymodule = require('./module-file.js');

var dirname = process.argv[2];
var extension = process.argv[3];

mymodule(dirname, extension, function (err, data){
    if(err){
        console.log(err.message);
    } else {
        for(i = 0; i < data.length; i++){
            console.log(data[i]);
        }
    }
});

/*
    var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]

    filterFn(dir, filterStr, function (err, list) {
      if (err) {
        return console.error('There was an error:', err)
      }

      list.forEach(function (file) {
        console.log(file)
      })
    })
*/