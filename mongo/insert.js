var MC = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MC.connect(url, function(err, db){
    var dbo = db.db("myTestDB");
    dbo.collection('customers').insertOne({name: "Company Inc", address: "Highway 37"}, function (err, res){
        if (err) throw err;
        console.log(res.result);
        db.close();
    });
});