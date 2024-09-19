const db = require('../db/index')

exports.getInfo = function (req, res) {
    let str = 'select * from user where user_id = ?'

    console.log(req);


    db.query(str, req.auth.user_id, (err, results) => {
        if (err) {
            return res.errSend(err)
        }
        if (results.length !== 1) {
            return res.errSend('获取用户信息失败')
        }
        res.send(
            {
                status: 0,
                message: '获取用户信息成功',
                data: results[0]
            }
        )
    })


}

exports.updateInfo = function (req, res) {
    let sql = 'update user set ? where user_id = ?'
    db.query(sql, [req.body, req.body.user_id], (err, results) => {
        if (err) {
            return res.errSend(err)

        }
        if (results.affectedRows !== 1) {
            return res.errSend('更新用户信息失败')
        }
        return res.errSend('更新用户信息成功', 0)
    })
}

// 修改用户密码:1 先查询信息，验证老密码是否匹配；2 覆盖密码
exports.updatePwd = function (req, res) {
    let sql = 'update user set user_pass_word = ? where user_id = ?'
    let sql2 = 'select * from user where user_id = ?'
    db.query(sql2, req.body.user_id, (err, results) => {
        if (err) {
            return res.errSend(err)
        }
        if (results.length !== 1) {
            return res.errSend('用户信息不存在')

        }

        if (results[0].user_pass_word !== req.body.old_pwd) {
            return res.errSend('原始密码不正确')
        }
        db.query(sql, [req.body.new_pwd, req.body.user_id], (err, results) => {
            if (err) return res.errSend(err)
            if (results.affectedRows !== 1) return res.errSend('密码修改失败')
            return res.errSend('密码修改成功', 0)
        })
    })
}

exports.updatePic = function (req, res) {
    let sql = 'update user set user_pic = ? where user_id = ?'
    
    db.query(sql, [req.body.avatar, req.auth.user_id], (err, results) => {
        if (err) {
            return res.errSend(err)
        }
        if (results.affectedRows !== 1) return res.errSend('用户头像修改失败')
        return res.errSend('用户头像修改成功', 0)
    })
}