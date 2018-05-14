var fs = require('fs');

fs.appendFile('writeMe.txt','Hello Moto!', function(err) { // can be used to update file
    if(err) { 
        throw err;
    }
    console.log("Successfully created writeMe.txt");
});

fs.open('createNewFile.txt','w', function(err){
    if(err) {
        throw err;
    }
    console.log("Successfully created createNewFile.txt");
});

fs.writeFile('writeByReplacing.txt','Hello to Moto!', function(err) { // can be used to update file
    if (err) {
        throw err;
    }
    console.log("Successfully created writeByReplacing.txt");
});

fs.unlink('createNewFile.txt',function(err) {
    if (err){
        throw err;
    }
});
