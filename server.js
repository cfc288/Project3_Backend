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
const PORT = process.env.PORT || 3003

/* == Express Instance == */
const app = express()

/* == middlewares == */
// set up cors middleware
const whitelist = ['http://localhost:3000', 'https://calenderunit3app.herokuapp.com/']
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

app.set('trust')  //trust first proxy

//this line is creating the object "req.session" (for heroku deployement)
// app.use(session({
//   secret: process.env.SECRET,
//   resave: false,
//   saveUninitialized: false,
//   store: new MongoDBStore({
//     uri: process.env.MONGODBURI,
//     collection: 'mySessions'
//   }),
//   cookie: {
//     sameSite: 'none',
//     secure: true
//   }
// }))


//what we had before employement
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
