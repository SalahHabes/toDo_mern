//importing the env variables from .env
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const taskRoutes = require('./routes/taskRoutes')

//express app
const app = express()

//fixes cors error
const cors = require('cors')
app.use(cors())

//middleware
app.use(express.json())

//routes
app.use('/api/tasks', taskRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then((r) => {
        //listen for requests only once db connection is extablished
        app.listen(process.env.PORT, () => {
            console.log('listening on port ', process.env.PORT)
        })
    })
    .catch((e) => {
        console.log(e)
    })

process.env