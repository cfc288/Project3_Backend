const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

router.get('/', ctrls.availAppt.index)
router.post('/', ctrls.availAppt.create)
router.put('/:id', ctrls.availAppt.update)
router.delete('/:id', ctrls.availAppt.destroy)

module.exports = router
