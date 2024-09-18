const express = require('express')
const session = require('express-session')
const app = express()

app.use(session({
    secret: 'momo',
    resave: false,
    saveUninitialized: true,
}))

const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'node_js'
})


app.use(express.static('./pages'))

const cors = require('cors')
// 必须在路由注册前引入跨域处理结果
app.use(cors())
app.use(express.urlencoded({ extended: false }))


app.get('/api/username', (req, res) => {
    if (!req.session.isLogin) {
        return res.send({ status: 1, msg: 'fail' })
    }
    res.send({
        status: 0,
        msg: 'success',
        username: req.session.user.username,
    })
})

app.post('/api/login', (req, res) => {
    // 判断用户提交的登录信息是否正确
    if (req.body.username !== 'admin' || req.body.password !== '000000') {
        return res.send({ status: 1, msg: '登录失败' })
    }

    // TODO_02：请将登录成功后的用户信息，保存到 Session 中
    // 注意：只有成功配置了 express-session 这个中间件之后，才能够通过 req 点出来 session 这个属性
    req.session.user = req.body // 用户的信息
    req.session.islogin = true // 用户的登录状态

    res.send({ status: 0, msg: '登录成功' })
})

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');

})