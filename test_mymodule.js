const mymodule = require('./mymodule');
const folder = process.argv[2]
var extension = process.argv[3]

mymodule(folder, extension, function (error, list) {
    if (error) {return  error; 
    }

    list.forEach(function(file){
        console.log(file)
    })
})