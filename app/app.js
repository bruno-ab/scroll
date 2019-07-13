const express = require('express')
const db = require('./db/db');
import bodyParser from 'body-parser';

// Set up the express appconst app = express();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 5000;

db.connect(() => {
  app.listen(PORT || 5555, function (){
    console.log(`server running on port ${PORT}`)
  });
});







const users = require('./modules/user/users')
app.use('/users', users)

module.exports = app;