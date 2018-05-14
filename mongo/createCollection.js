var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbObj = db.db("myTestDB");
    dbObj.createCollection("customers", function(err, coll){
        if (err) throw err;
        console.log("Created Collection");
        db.close();
    });
});