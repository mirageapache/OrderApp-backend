const mongoose = require('mongoose')
const MenuItem = require('../menuItem')
if(process.env.NODE_ENV !== 'production'){require('dotenv').config()}

// 資料庫連線
mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

const menuList = [
  // {"name":"鮪魚蛋餅", "price":30, "imgPath":"images/tuna-egg-cake.jpg"},
  // {"name":"起司蛋餅", "price":30, "imgPath":"images/cheese-egg-cake.jpg"},
  // {"name":"嫩煎雞腿堡", "price":50, "imgPath":"images/chicken-burger.jpg"},
]

db.once('open', () => {
  console.log('mongodb connected!')
  for(let i=0 ; i<menuList.length; i++){
    MenuItem.create({
      name: menuList[i].name,
      description: '',
      price: menuList[i].price,
      imgPath: menuList[i].img
    })
  }
  console.log('seeds create completed')
})


db.on('error', () => {
  console.log('mongodb error!')
})