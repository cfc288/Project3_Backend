const db = require('../models')

// index
const index = (req, res)=>{
  console.log('index')
  db.Appointment.find({}, (error, appointments)=>{
    if(error) return res.status(400).json({error: error.message})

    return res.status(200).json(appointments)
  })
}

// create
const create = (req, res)=>{
  console.log('create')
  db.Appointment.create(req.body, (error, createdAppointment)=>{
    if(error) return res.status(400).json({error: error.message})
    return res.status(201).json(createdAppointment)
  })
}

// update
const update = (req, res)=>{
  console.log('update')
  db.Appointment.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true
    },
    (error, updatedAppointment)=>{
      if(error) return res.status(400).json({error: error.message})
      return res.status(200).json(updatedAppointment)
    })
}

// delete
const destroy = (req, res)=>{
  console.log('update')
  db.Appointment.findByIdAndDelete(req.params.id, (error, deletedAppointment)=>{
    if(error) return res.status(400).json({error: error.message})

    return res.status(200).json({
      message: `Appointment ${deletedAppointment.name} deleted succesfully`
    })
  })
}

module.exports = {
  index,
  create,
  update,
  destroy,
}
