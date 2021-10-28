const mongoose = require('mongoose')
const availApptSchema = new mongoose.Schema({
  dayForAppts: {type: String, required: true},
  availSlot1: {type: Boolean, required: true, default: true},
  availSlot2: {type: Boolean, required: true, default: true},
  availSlot3: {type: Boolean, required: true, default: true},
  availSlot4: {type: Boolean, required: true, default: true},
  availSlot5: {type: Boolean, required: true, default: true},
  availSlot6: {type: Boolean, required: true, default: true},
  availSlot7: {type: Boolean, required: true, default: true},
  availSlot8: {type: Boolean, required: true, default: true},
  
})

const AvailAppt = mongoose.model('AvailAppt', availApptSchema)

module.exports = AvailAppt
