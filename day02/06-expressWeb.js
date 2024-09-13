const express = require('express')
// 创建web服务器
const app = express()

// 调用express.static()方法，快速的对外提供静态资源
app.use(express.static('./clock'))

// 查询路径获取
app.get('/', (req, res) => {
    console.log(req.query);
    
    res.send({"name": "zs", "age": 11})
})

// 动态参数获取
app.get('/user/:id', (req, res) => {    
    res.send(req.params)
})

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
    
})