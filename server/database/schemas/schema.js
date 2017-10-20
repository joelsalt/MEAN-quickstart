var user = function(mongoose) {
    var schema = mongoose.Schema({
        name: String,
        username: String,
        password: String,
        emailAddress: String,
        phoneNumber: String,
        cardNumber: Number,
        cvv: Number,
        expiration: String,
        accountOptions: Object
    });
    return mongoose.model("User", schema);
}

module.exports = user;