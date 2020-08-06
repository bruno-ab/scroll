"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
var mongoose = require("mongoose");
// const DATABASE = 'scroll'
var connect = function () {
    var URI = process.env.MONGO_URI;
    var options = {
        connectTimeoutMS: 1000,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    };
    try {
        mongoose.connect(URI, options);
        console.log('connected to mongo');
    }
    catch (error) {
        console.log('Failed connect');
        console.log(error);
    }
};
exports.connect = connect;
