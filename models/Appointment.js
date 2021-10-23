const mongoose = require('mongoose')
const appointmentSchema = new mongoose.Schema({
 firstName: {type: String},
 lastName: {type: String},
 date:{
   day:{type: Number},
   month:{type: Number},
   year:{type: Number},
 },
 time: {type: Number},
})

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment
