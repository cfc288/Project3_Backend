const mongoose = require('mongoose')
const appointmentSchema = new mongoose.Schema({
appptTime: {type: String, required: true},
firstName: {type: String, required: true},
lastName: {type: String, required: true},
over18: {type: Boolean, default: false}


})

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment
