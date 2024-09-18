const express = require('express')

const router = express.Router()

router.get('/get', (req, res) => {
    const body = req.body

    res.send(
        {
            status: 0,
            msg: 'get 请求成功',
            data: body
        }
    )
})

router.post('/post', (req, res) => {
    const body = req.body

    res.send(
        {
            status: 0,
            msg: 'post 请求成功',
            data: body
        }
    )
})

module.exports = router