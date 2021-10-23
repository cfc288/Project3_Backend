const mongoose = require('mongoose')
// const {Schcema, model} = mongoose
// OR
const userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  phoneNumber: {type: Number, required: true},
})
const User = mongoose.model('User', userSchema)

module.exports = User;
