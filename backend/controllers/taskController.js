const Task = require('../models/taskModel')
const mongoose = require('mongoose')

const task_index = async (req, res) => {
    const tasks = await Task.find({}).sort({createdAt: -1})

    res.status(200).json(tasks)
}

const task_details = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No Such Task' })
    }
   
    const task = await Task.findById(id)

    if (!task) {
        res.status(404).json({ error: 'No Such Task' })
    }

    res.status(200).json(task)
}

const task_create = async (req, res) => {
    // get data from request and deconstruct
    const {name, done, deadline, favorited, note} = req.body

    // add to db
    try {
        const task = await Task.create( {name, done, deadline, favorited, note} )
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({error: error})
    }
}

const task_delete = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No Such Task' })
    }
   
    const task = await Task.findByIdAndDelete(id)

    if (!task) {
        res.status(404).json({ error: 'No Such Task' })
    }
    
    res.status(200).json(task)
}

const task_update = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No Such Task' })
    }
   
    const task = await Task.findByIdAndUpdate(id, {
        ...req.body
    }, { new: true })

    if (!task) {
        res.status(404).json({ error: 'No Such Task' })
    }
    
    res.status(200).json(task)
}

module.exports = {
    task_index,
    task_details,
    task_create,
    task_delete,
    task_update, 
}