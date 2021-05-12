const router = require('express').Router()

const adminCtrl = require('../controllers/admin')

router.get("/admin", adminCtrl.GET)
router.post("/admin", adminCtrl.POST)

router.get("/admin/search", adminCtrl.search)
router.get("/admin/:id", adminCtrl.DEL)
router.get("/admin/edit/:id", adminCtrl.getForEdit)
router.post("/admin/edit/:id", adminCtrl.edit)

module.exports = router