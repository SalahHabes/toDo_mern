const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    },
    deadline: {
        type: Date,
        required: false
    },
    favorited: {
        type: Boolean,
        required: true
    },
    note: {
        type: String,
        required: false
    }

}, {timestamps: true})

module.exports = mongoose.model('task', taskSchema)