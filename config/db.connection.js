const mongoose = require('mongoose')

// connection string
const connectionStr = process.env.MONGODBURI || 'mongodb://localhost:27017/appointmentsDB'
console.log(connectionStr)
// set up connection
mongoose.connect(connectionStr, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', ()=> console.log('mongodb connected'))
mongoose.connection.on('error', (error)=> console.log('mongodb error', error))
mongoose.connection.on('disconnected', ()=> console.log('mongodb disconnected'))
