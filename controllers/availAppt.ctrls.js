const db = require('../models')

// index
const index = (req, res)=>{
  db.AvailAppt.find({}, (error, AvailAppt)=>{
    if(error) return res.status(400).json({error: error.message})
    return res.status(200).json(AvailAppt)
  })
}

// create
const create = (req, res)=>{
  db.AvailAppt.create(req.body, (error, createdAvailAppt)=>{
    if(error) return res.status(400).json({error: error.message})
    return res.status(201).json(createdAvailAppt)
  })
}

// update
const update = (req, res)=>{
  db.AvailAppt.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true
    },
    (error, updatedAvailAppt)=>{
      if(error) return res.status(400).json({error: error.message})
      return res.status(200).json(updatedAvailAppt)
    })
}

// delete
const destroy = (req, res)=>{
  db.AvailAppt.findByIdAndDelete(req.params.id, (error, deletedAvailAppt)=>{
    if(error) return res.status(400).json({error: error.message})

    return res.status(200).json({
      message: `Appointment deleted succesfully`
    })
  })
}

module.exports = {
  index,
  create,
  update,
  destroy,
}
