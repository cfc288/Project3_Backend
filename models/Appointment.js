const mongoose = require('mongoose')
const appointmentSchema = new mongoose.Schema({
 date:{
   day:{type: Number},
   month:{type: Number},
   year:{type: Number},
 }
})

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment
