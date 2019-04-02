// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const Content = require("../models/Content");

require('../configs/database')

let users = [
  {
    name: 'Rice',
    subHeader: 'How to boil perfect rice blabla',
    imgUrls: ["url1", "url200"],
    instructions: {
      page1: 'Test1',
      page2: 'Test2',
      page3: 'Test3',
      page4: 'Test4',
  }
  }
]

Content.deleteMany()
  .then(() => {
    return Content.create(users)
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));
  })
  .then(() => {
    // Close the connection to mongoose properly
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })