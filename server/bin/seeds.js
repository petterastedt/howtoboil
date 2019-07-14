// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const Content = require("../models/Content");
const dbContent = require('./dbContent')

require('../configs/database')

Content.deleteMany()
  .then(() => {
    return Content.create(dbContent.foods)
  })
  .then(foodsCreated => {
    console.log(`${foodsCreated.length} food content created with the following id:`);
    console.log(foodsCreated.map(u => u._id));
  })
  .then(() => {
    // Close the connection to mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })