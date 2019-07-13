const config = require('../config/config.js')
const mongoClient = require('mongodb').MongoClient
const defaultDB = config
const uri = defaultDB.default.uri

let mongodb;

function connect(callback){
    mongoClient.connect(uri, (err, db) => {
        mongodb = db.db('scroll')
        callback();
    });
}
function get(){
    return mongodb;
}

function close(){
    mongodb.close();
}

module.exports = {
    connect,
    get,
    close
};
