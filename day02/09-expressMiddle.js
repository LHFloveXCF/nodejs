const express = require('express')

const app = express()

// 定义一个中间件函数
const mw = function (req, res ,next) {
    console.log("我是一个中间件");
    
    // 把流转关系交给下一个中间件或者路由
    next()
}

// 将mw注册为全局生效的中间件
app.use(mw)

// 调用express.static()方法，快速的对外提供静态资源
// app.use(express.static('./clock'))

app.get('/', (req, res) => {
    res.send('hello index.js')
})


app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
    
})