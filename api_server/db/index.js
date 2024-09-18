const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    user:'root',
    password: 'feng0308',
    database: 'nodejs'
})

module.exports = db