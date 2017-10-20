var express = require("express");
var http    = require("http");
var db      = require("../server.js");
var app     = express();
var bp      = require("body-parser");
var route   = express.Router();

app.use(bp.json());

route.get("/testify", function(req, res) {
    process.nextTick(() => {
        console.log("Successful call");
        res.send("Hello, World!");
    });
});

route.get("/newuser", function(req, res) {
    db.createTestUser(function(error, response){
        if (error) res.status(400).send(error);
        else {
            res.json(response);
        }
    });
});

module.exports = route;