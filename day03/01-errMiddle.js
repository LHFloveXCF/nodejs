const express = require('express')

const app = express()

// 定义一个中间件函数
const mw = function (err, req, res ,next) {
    console.log("我是一个中间件, 捕获异常");
    
    res.send('发生了一个错误' + err.message)
}

// 将mw注册为全局生效的中间件
app.use(mw)

// 调用express.static()方法，快速的对外提供静态资源
// app.use(express.static('./clock'))

app.get('/', (req, res) => {
    throw new Error('服务器内部发生了错误')
    res.send('hello index.js')
})


app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
    
})