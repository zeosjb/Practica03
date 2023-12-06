const asyncHandler = require('express-async-handler')

const Hobbie = require('../models/hobbieModel')

const getHobies = asyncHandler(async (req, res) => {
    const hobbies = await Hobbie.find()
    res.status(200).json(hobbies)
  })
  
  const setHobbie = asyncHandler(async (req, res) => {
    const hobbie = await Hobbie.create({
      name: req.body.name,
      description: req.body.description
    })
    res.status(200).json(hobbie)
  })
  
  const updateHobbie = asyncHandler(async (req, res) => {
    const hobbie = await Hobbie.findById(req.params.id)
  
    if(!hobbie){
      res.status(400)
      throw new Error('Hobbie no encontrado')
    }
  
    const updatedHobbie = await Hobbie.findByIdAndUpdate(req.params.id, req.body, {new: true,})
    
    res.status(200).json(updateHobbie)
  })
  
  const deleteHobbie = asyncHandler(async (req, res) => {
    const hobbie = await Hobbie.findById(req.params.id)
  
    if(!hobbie){
      res.status(400)
      throw new Error('Hobbie no encontrado')
    }
  
    await hobbie.deleteOne()
  
    res.status(200).json({ id: req.params.id })
  })
  
  module.exports = {
    getHobies,
    setHobbie,
    updateHobbie,
    deleteHobbie,
  }