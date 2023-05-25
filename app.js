const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.port || 3001

const MenuItem = require('./models/menuItem.js') // 載入menuItem

// 加入這段 code, 僅在非正式環境時, 使用 dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// 建構express應用程式Server
const app = express();
app.use(cors());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

// 資料庫連線
mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.once('open', () => {console.log('mongodb connected!')})
db.on('error', () => {console.log('mongodb error!')})

// 路由設定
app.get('/menulist', (req,res) => {
  MenuItem.find()
  .lean()
  .then(menuList => {
    res.json(menuList) //回傳Menu List資料
  })
  .catch(error => console.log(error))
})

app.listen(port, () =>{
  console.log(`Express is running on http://localhost:${port}`)
})