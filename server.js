/* == DB connection == */
require('./config/db.connection')

/* == External modules == */
const express = require('express')

/* ==Internal modules == */
const routes = require('./routes')

/* == cors == */
const cors = require('cors')

const session = require('express-session')

/* PORT */
const PORT = process.env.PORT || 3000

/* == Express Instance == */
const app = express()

/* == middlewares == */
// set up cors middleware
const whitelist = ['http://localhost:3000', 'heroku url here']
const corsOptions ={
  origin: (origin, callback)=>{
    if(whitelist.indexOf(origin) !== -1 || !origin){
      callback(null, true)
    }else{
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))
app.use(session({
  secret: 'asdfas',
  resave: false,
  saveUninitialised: false,
}))
app.use(express.json())

/* == Routes == */
app.get('/', function(req, res){
  res.send('hello')
})
app.use('/appointments', routes.appointments)
app.use('/availAppt', routes.availAppt)
app.use('/users', routes.users)

/* == Server Bind == */
app.listen(PORT, ()=>{
  console.log(`🎉🎊 listening on ${PORT} 🎉🎊`)
})
