const express = require('express')
const handler = require('../routerHandler/handlerLogin')

const router = express.Router()

router.post('/login', handler.login)

router.get('/logout', handler.logout)

router.post('/register', handler.register)

module.exports = router