const _ = require('lodash');

// module variables
const config = require('./config.json');


// as a best practice
// all global variables should be referenced via global. syntax
// and their names should always begin with g
const database =  config['database'];


// log global.gConfig

export default database 
