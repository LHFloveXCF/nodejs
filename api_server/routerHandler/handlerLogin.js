const db = require('../db/index')

exports.register = (req, res) => {
    const userInfo = req.body

    console.log(userInfo);
    
    if (userInfo.user_name === '' || !userInfo.user_name
        || !userInfo.pass_word || userInfo.pass_word === '') {
        return res.send({
            status: 1,
            msg: 'register failed all of the info need'
        })
    }

    let str = 'select * from users where user_name = ?'

    db.query(str, userInfo.user_name, (err, results) => {
        if (err) {
            console.log('error' + err.message);
            
            return res.send({
                status: 1,
                msg: 'register failed 账号查询异常'
            })
        }

        if (results.length !== 0) {
            return res.send({
                status: 1,
                msg: 'register failed 账号已经存在'
            })
        }

        let insertStr = 'insert into users set user_name = ?, user_pass_word = ?'

        db.query(insertStr, [userInfo.user_name, userInfo.pass_word],
            (err, result) => {
                if (err) {
                    return res.send({
                        status: 1,
                        msg: 'register failed 插入数据失败'
                    })
                }
                console.log(result);
                
                if (result.affectedRows !== 1) {
                    return res.send({
                        status: 1,
                        msg: 'register failed 插入失败'
                    })
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
    res.send({
        status: 0,
        msg: 'login suc'
    })
}

exports.logout = (req, res) => {
    res.send({
        status: 0,
        msg: 'logout suc'
    })
}