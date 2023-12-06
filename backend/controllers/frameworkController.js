const asyncHandler = require('express-async-handler')

const Framework = require('../models/frameworkModel')

const getFrameworks = asyncHandler(async (req, res) => {
    const Frameworks = await Framework.find()
    res.status(200).json(Frameworks)
  })
  
  const setFramework = asyncHandler(async (req, res) => {
    const framework = await Framework.create({
      name: req.body.name,
      level: req.body.level,
      year: req.body.year,
      percentage: req.body.percentage
    })
    res.status(200).json(framework)
  })
  
  const updateFramework = asyncHandler(async (req, res) => {
    const framework = await Framework.findById(req.params.id)
  
    if(!framework){
      res.status(400)
      throw new Error('Framework no encontrada')
    }
  
    await Framework.updateOne({ _id: req.params.id }, { $set: req.body });

    const updateFramework = await Framework.findById(req.params.id);
    
    res.status(200).json(updateFramework)
  })
  
  const deleteFramework = asyncHandler(async (req, res) => {
    const framework = await Framework.findById(req.params.id)
  
    if(!framework){
      res.status(400)
      throw new Error('Framework no encontrado')
    }
  
    await framework.deleteOne()
  
    res.status(200).json({ id: req.params.id })
  })
  
  module.exports = {
    getFrameworks,
    setFramework,
    updateFramework,
    deleteFramework,
  }