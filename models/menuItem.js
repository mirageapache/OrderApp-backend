const mongoose = require('mongoose')
const Schema = mongoose.Schema
const menuItemSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  imgPath:{
    type: String,
    required: false
  }

})

module.exports = mongoose.model('MenuItem', menuItemSchema);