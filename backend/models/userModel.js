const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

}, {timestamps: true})

// static signup method
userSchema.statics.signup = async function (email, password) {
    
    // validation
    if (!email || !password) {
        throw Error('All fields are required')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }
    
    // check for any matching emails
    const exists = await this.findOne({ email })
    if (exists) {
        throw Error('Email already in use')
    }

    // salt: extra characters added at the end of password before hashing to avoid password matching
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    // create user
    const user = await this.create({ email, password: hash })

    return user
}

// static login method
userSchema.statics.login = async function (email, password) {
    
    // validation
    if (!email || !password) {
        throw Error('All fields are required')
    }
    
    // check if user exists
    const user = await this.findOne({ email })
    if (!user) {
        throw Error('Incorrect Email or Password')
    }

    // check that the hashed version of password provided matches the one in database
    const match = await bcrypt.compare(password, user.password)
    if(!match){
        throw Error('Invalid Email or Password')
    }

    return user
}

module.exports = mongoose.model('user', userSchema)