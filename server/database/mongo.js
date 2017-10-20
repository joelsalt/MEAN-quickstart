var mongoose = require("mongoose");
var schema = mongoose.Schema;
var User = require("./schemas/schema.js")(mongoose);

class Mongo {
    constructor(){
        mongoose.connect("mongodb://127.0.0.1/data");
    }

    createTestUser(callback) {
        var user = new User();
        user.name = "Joely Joel";
        user.username = "The Lost City of Joeldorado";
        user.emailAddress = "joeldorado@gmail.com";

        var query = User.where({
            "username": "The Lost City of Joeldorado"
        });

        query.findOne(function(error, result) {
            if (error){
                console.log(error);
                callback(error);
            }

            if (!result) {
                user.save();
                callback(null, "Added test user to database");
            }
        });
    }
}

module.exports = Mongo;