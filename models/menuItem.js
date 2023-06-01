const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuItemSchema = new Schema({
  // 餐點名稱
  name:{
    type: String,
    required: true
  },
  // 餐點說明
  description:{
    type: String,
    required: true
  },
  // 價格
  price:{
    type: Number,
    required: true
  },
  // 餐點類別
  itemType:{
    type: String,
    required: false
  },
  // 客製選項
  customOption:{
    type: String,
    required: false
  },
  // 圖片
  imgPath:{
    type: String,
    required: false
  }
})

module.exports = mongoose.model('MenuItem', menuItemSchema);