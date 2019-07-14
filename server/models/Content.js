const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  name: String,
  subHeader: String,
  imgUrls: [String],
  instructions: Object,
  subMenu: Boolean,
  subMenuTitle: String,
  subMenuItems: [{
      id: Number,
      title: String
  }],
  timer: Number  
})
const Content = mongoose.model('Content', ContentSchema);

module.exports = Content;