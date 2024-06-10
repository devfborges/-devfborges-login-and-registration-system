const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/appseletivo");
mongoose.Promise = global.Promise;

module.exports = mongoose;
