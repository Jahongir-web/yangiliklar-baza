const router = require('express').Router()

const newsCtrl = require('../controllers/news')

router.get("/", newsCtrl.all)

router.get("/news/:id", newsCtrl.byId)

router.get("/search", newsCtrl.search)

module.exports = router