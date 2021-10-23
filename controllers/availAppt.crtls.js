const db = require('../models')

// index
const index = (req, res)=>{
  db.availAppt.find({}, (error, availAppt)=>{
    if(error) return res.status(400).json({error: error.message})

    return res.status(200).json(availAppt)
  })
}

// create
const create = (req, res)=>{
  db.availAppt.create(req.body, (error, createdAvailAppt)=>{
    if(error) return res.status(400).json({error: error.message})
    return res.status(201).json(createdAvailAppt)
  })
}

// update
const update = (req, res)=>{
  db.availAppt.findByIdAndUpdate(
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
  db.availAppt.findByIdAndDelete(res.params.id, (error, deletedAvailAppt)=>{
    if(error) return res.status(400).json({error: error.message})

    return res.status(200).json({
      message: `Appointment ${deletedAvailAppt.name} deleted succesfully`
    })
  })
}

module.exports = {
  index,
  create,
  update,
  destroy,
}
