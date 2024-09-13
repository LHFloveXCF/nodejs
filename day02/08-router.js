// 这是一个路由模块
const express = require('express')

const router = express.Router()

router.get('/user/:id', (req, res) => {    
    res.send(req.params)
})

module.exports = router