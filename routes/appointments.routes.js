const express = require('express')
const router = express.Router()

/* == CTRLS == */
const ctrls = require('../controllers')

router.get('/', ctrls.appointments.index)
router.post('/', ctrls.appointments.create)
router.put('/:id', ctrls.appointments.update)
router.delete('/:id', ctrls.appointments.destroy)
router.post('/getAppt', ctrls.appointments.getAppt)

module.exports = router
