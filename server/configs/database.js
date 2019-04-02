const mongoose = require('mongoose');
require('dotenv').config()

const uri = process.env.MONGODB_URI || `mongodb://localhost/please-set-process-env-mongodb-uri`;

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });