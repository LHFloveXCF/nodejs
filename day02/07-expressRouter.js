const express = require('express')
// 导入路由模块
const router = require('./08-router')

const app = express()
// 绑定路由模块
app.use(router)

// 调用express.static()方法，快速的对外提供静态资源
app.use(express.static('./clock'))


app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
    
})