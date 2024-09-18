const express = require('express')

const app = express()

const router = require('./03-router')

const cors = require('cors')
// 必须在路由注册前引入跨域处理结果
app.use(cors())

app.use(router)



app.use(express.urlencoded({ extended: false }))


app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');

})