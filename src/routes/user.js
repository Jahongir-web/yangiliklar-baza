const router = require('express').Router()

const userCtrl = require('../controllers/user')

router.get('/login', userCtrl.GET)

router.post('/login', userCtrl.POST)

module.exports = router