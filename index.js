var express = require("express");
var server = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://vivek:Mind123@ds147872.mlab.com:47872/testdb508');

var port = process.env.PORT || 3000;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Database is online now!")
});

server.listen(port, function() {
    console.log('Example app listening on port 3000!')
})

server.get("/", function(req, res) {
    res.send("welcome")
})

server.get("/testRes", function(req, res) {
    res.send("This is my response")
})

server.get("/testReq", function(req, res) {
    res.send("This is my request")
})