const db = require('../models')

// index
const index = (req, res)=>{
  db.Appointment.find({}, (error, appointments)=>{
    if(error) return res.status(400).json({error: error.message})

    return res.status(200).json(appointments)
  })
}

// create
const create = (req, res)=>{
  db.Appointment.create(req.body, (error, createdAppointment)=>{
    if(error) return res.status(400).json({error: error.message})
    return res.status(201).json(createdAppointment)
  })
}

// update
const update = (req, res)=>{
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
  db.Appointment.findByIdAndDelete(res.params.id, (error, deletedAppointment)=>{
    if(error) return res.status(400).json({error: error.message})

    return res.status(200).json({
      message: `Holiday ${deletedAppointment.name} deleted succesfully`
    })
  })
}

module.exports = {
  index,
  create,
  update,
  destroy,
}
