const express = require('express')
const router = express.Router()

const MenuItem = require('../../models/menuItem')

// 取得餐點清單
router.get('/', (req,res) => {
  MenuItem.find()
  .lean()
  .then(menuList => {
    res.json(menuList) //回傳Menu List資料
  })
  .catch(error => console.log(error))
})

//取得特定餐點資料
router.get('/:id', (req,res) => {
  const id = req.params.id;
  MenuItem.findById(id)
  .lean()
  .then(menuItem => {
    res.json(menuItem) //回傳Menu Item資料
  })
  .catch(error => console.log(error))
})

// 新增餐點項目
router.post ('/create', (req, res) => {
  const {name,description,price,itemType,customOption,imgName} = req.body
  // 資料驗證
  if(name.length === 0){
    return res.status(400).send('name is require');
  }
  else if(name.length > 50){
    return res.status(400).send('name maximum number of characters is over 50');
  }
  else if(description.length === 0){
    return res.status(400).send('description is require');
  }
  else if(description.length > 50){
    return res.status(400).send('description maximum number of characters is over 150');
  }
  else{ // 資料驗證通過

    MenuItem.create({
      name,
      description,
      price: Number(price),
      itemType,
      customOption,
      imgName
    })
    .then(result =>{
      return res.status(200).send('create data success')
    })
    .catch(error => {
      console.log(error)
    })
  }
})

module.exports = router