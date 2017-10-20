var express = require("express");
var https = require("https");
var fs = require("fs");
const bodyParser = require('body-parser');
https.globalAgent.maxSockets = 5000;

var Mongo = require("./database/mongo.js");
var db = module.exports = new Mongo();

var app = express();
var route = require("./routes/routes.js");
var options = {
    key: fs.readFileSync("../certs/key.pem"),
    cert: fs.readFileSync("../certs/cert.pem"),
    ca: fs.readFileSync("../certs/ca.pfx"),
}
var server = https.createServer(options, app);

app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use(bodyParser.json());
app.use("/server/api", route);

server.listen(3000, function() {
    console.log("Server is running on port: 3000"); 
});

process.on("uncaughtException", function(error){
    console.error(error);
});