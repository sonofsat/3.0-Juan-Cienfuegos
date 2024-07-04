var fs = require("fs");
var { run } = require("node:test");
var path = require("path");

fs.readdir(process.argv[2], function (error, list) {
    if (error){
        return error;
    }

    list.forEach(function(file){
        if (path.extname(file) == "." + process.argv[3]){
            console.log(file)
        }
    })
})