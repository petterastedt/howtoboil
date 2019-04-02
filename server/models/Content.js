const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  name: String,
  subHeader: String,
  imgUrls: [String],
  instructions: {
    page1: String,
    page2: String,
    page3: String,
    page4: String,
  },
  subMenu: Boolean
})

const Content = mongoose.model('Content', ContentSchema);

module.exports = Content;