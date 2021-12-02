const mongoose = require('mongoose')
const appointmentSchema = new mongoose.Schema({
apptTime: {type: String, required: true},
fullName: {type: String, required: true},
email: {type: String, required: true},
phone: {type: String, required: true},
apptDate: {type: String, required: true},


})

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment
