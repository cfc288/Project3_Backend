const mongoose = require('mongoose')
const appointmentSchema = new mongoose.Schema({
 firstName: {type: String, required: true},
 lastName: {type: String, required: true},
 day:{type: Number},
 month:{type: Number},
 year:{type: Number},
 time: {type: Number},
})

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment
