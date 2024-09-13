const express = require('express')
// 创建web服务器
const app = express()

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
    
})