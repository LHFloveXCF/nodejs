const e = require('express');
const mysql = require('mysql');
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'node_js'
})

// db.query('select 1', (err, result) => {
//     if(err) {
//         return console.log(err.message);
        
//     }
//     console.log(result);
    
// })

let userStr = 'select * from users'

db.query(userStr, (err, result) => {
    console.log(result);
})

// const user = {user_name: 'ls2', user_pass_word:'123'}

// let userInsertStr = 'insert into  user (user_name, user_pass_word) values (?, ?)'

// db.query(userInsertStr, [user.userName, user.password], (err, result) => {
//     if (err) {
//         return console.log(err.message);
//     }
// })

// const user = {user_name: 'ls2', user_pass_word:'123'}
// let userInsertStr2 = 'insert into user set ?'
// db.query(userInsertStr2, user, (err, result) => {
//     if(err) {
//         return console.log(err.message);
        
//     }

//     if (result.affectedRows === 1) {
//         console.log('insert suc');
        
//     }
// })

// const userUpdate = {user_id: 3, user_name: 'ls3', user_pass_word:'1234'}
// let userUpdateStr = 'update user set user_name = ?, user_pass_word = ? where user_id = ?'

// db.query(userUpdateStr, [userUpdate.user_name, userUpdate.user_pass_word, userUpdate.user_id], (err, result) => {
//     if(err) {
//         return console.log(err.message);
        
//     }

//     if (result.affectedRows === 1) {
//         console.log('update suc');
        
//     }
// })

// 删除一条数据
// let deleteStr = 'delete from user where user_id = ?'
// db.query(deleteStr, 4, (err, result) => {
//     if(err) {
//         return console.log(err.message);
        
//     }

//     if (result.affectedRows === 1) {
//         console.log('delete suc');
        
//     }
// })

// 标记删除数据
// let updateDeleteStr = 'update user set user_status = 1 where user_id = ?'
// db.query(updateDeleteStr, 3, (err, result) => {
//     if(err) {
//         return console.log(err.message);
        
//     }

//     if (result.affectedRows === 1) {
//         console.log('updateDeleteStr suc');
        
//     }
// })