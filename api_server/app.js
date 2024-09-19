// 引入express包
const express = require('express')

const cors = require('cors')
const session = require('express-session')
const router = require('./router/routerLogin')


// 创建http服务
const app = express()
// json格式的请求数据，需要引入json包
app.use(express.json())

// 引入session管理
app.use(session({
    secret: 'momo',
    resave: false,
    saveUninitialized: true
}))
app.use(express.urlencoded({ extended: false }))
// 引入全局中间件 cors 来处理跨域问题
app.use(cors())

// 定义全局中间件，处理统一处理异常;必须在路由之前引入，否则没有效果
app.use((req, res, next) => {
    res.errSend = function (err, status = 1) {
        res.send({
            status: status,
            msg: err instanceof Error ? err.message : err
        })
    }
    next()
})

const jwt = require('express-jwt')
const config = require('./config')
// 定义jwt中间件
const jwtMiddleware = jwt.expressjwt({  
    secret: config.jwtSecreKey, // 确保这里的键名与你的配置文件中的一致  
    algorithms: config.algorithms  
  }).unless({ path: [/^\/api\//] });

app.use(jwtMiddleware)

const infoRouter = require('./router/userinfo')
app.use('/my', infoRouter)


// 引入router
app.use('/api', router)

// 定义错误级别的中间件
app.use((err, req, res, next) => {
    // console.log(req);
    
    // 身份认证失败后的错误
    if (err.name === 'UnauthorizedError') return res.errSend('身份认证失败！')
    // 未知的错误
    res.errSend(err)
})

// 监听端口
app.listen(3007, () => {
    console.log('server is listenning on http://127.0.0.1:3007');

})