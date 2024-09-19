const express = require('express')
const handler = require('../routerHandler/userinfo')

const router = express.Router()


router.get('/info', handler.getInfo)
router.post('/update', handler.updateInfo)
router.post('/updatePwd', handler.updatePwd)
router.post('/updatePic', handler.updatePic)

module.exports = router