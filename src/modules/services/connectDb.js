//docker run -d -p 27017:27017 mongo

const mongoose = require("mongoose")
const DATABASE = 'scroll'

const URI = process.env.MONGO_URI

const options = {
  connectTimeoutMS: 1000,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
};

try {
  mongoose.connect(URI, options);
  console.log('connected to mongo')
} catch (error) {
  console.log(error);
}
