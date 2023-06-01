const express = require('express')
const router = express.Router()

const menu = require('./modules/menu')

router.use('/menu', menu)

module.exports = router