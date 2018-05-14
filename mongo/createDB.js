var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/myTestDB";

MongoClient.connect(url, function(err,db){
    if(err) throw err;
    console.log("DB connected");
    db.close();
});