var fs = require('fs');
var csv = require('fast-csv');

var result;
var stream = fs.createReadStream("plus4.csv");

var csvStream = csv()
    .on("data", function(data){
        console.log(data[0]);
    })
    .on("end", function(){
         console.log("done");
    });
    
    stream.pipe(csvStream);