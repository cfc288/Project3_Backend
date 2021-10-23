const mongoose = require('mongoose')
const availApptSchema = new mongoose.Schema({
  timeSlotOpen: {type: Boolean, required: true, default: true},
  date:{
    day:{type: Number},
    month:{type: Number},
    year:{type: Number},
  },
})

const AvailAppt = mongoose.model('AvailAppt', availApptSchema)

module.exports = AvailAppt
