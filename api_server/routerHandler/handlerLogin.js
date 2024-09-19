const db = require('../db/index')

exports.register = (req, res) => {
    const userInfo = req.body
    if (userInfo.user_name === '' || !userInfo.user_name
        || !userInfo.pass_word || userInfo.pass_word === '') {
        return res.errSend('register failed all of the info need')
    }

    let str = 'select * from user where user_name = ?'

    db.query(str, userInfo.user_name, (err, results) => {
        if (err) {
            console.log('error' + err.message);
            
            return res.errSend('register failed 账号查询异常')
        }

        if (results.length !== 0) {
            return res.errSend('register failed 账号已经存在')
        }

        let insertStr = 'insert into user set user_name = ?, user_pass_word = ?'

        db.query(insertStr, [userInfo.user_name, userInfo.pass_word],
            (err, result) => {
                if (err) {
                    return res.errSend('register failed 插入数据失败' + err.message)
                }
                
                if (result.affectedRows !== 1) {
                    return res.errSend('register failed 插入失败')
                }
                res.send({
                    status: 0,
                    msg: 'register suc'
                })
            }
        )
    })
    
    
}

exports.login = (req, res) => {
    const userInfo = req.body
    let str = 'select * from user where user_name = ?'
    db.query(str, userInfo.user_name, (err, results) => {
        if (err) {
            return res.errSend('register failed 账号查询异常' + err.message)
        }

        if (results.length !== 1) {
            return res.errSend('register failed 账号不存在')
        }
        res.send({
            status: 0,
            msg: 'login suc'
        })
    })
}

exports.logout = (req, res) => {
    res.send({
        status: 0,
        msg: 'logout suc'
    })
}