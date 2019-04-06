module.exports = function(dirname, extension, callback){
    var fs = require('fs');
    var path = require('path');
    fs.readdir(dirname, function (err, list){
        if(err){
            return callback(err);
        }
        else {
            var newList = new Array();
            var j = 0;
            for(i = 0; i < list.length; i++){
                if(path.extname(list[i]) == '.' + extension){
                    newList[j] = list[i];
                    j++;
                }
            }
            return callback(null, newList);
        }
    });
}

/*
var fs = require('fs')
    var path = require('path')

    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    }
*/