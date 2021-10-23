const mongoose = require('mongoose')
const availApptSchema = new mongoose.Schema({
  timeSlotOpen: {type: Boolean, required: true, default: true},
  day:{type: Number, required: true},
  month:{type: Number, required: true},
  year:{type: Number, required: true},
})

const AvailAppt = mongoose.model('AvailAppt', availApptSchema)

module.exports = AvailAppt
