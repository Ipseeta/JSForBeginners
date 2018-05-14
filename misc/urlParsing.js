var url = require('url');
var address = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(address,true);

console.log("Host: ",q.host);
console.log("Hostname: ",q.hostname);
console.log("Search Query: ",q.search);

var queryData = q.query;
console.log("Month: ", queryData.month);