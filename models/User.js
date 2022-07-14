const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please provide last name']
    },
    email: {
        type: String,
        required: [true, 'Please provide email']
    },
    username: {
        type: String,
        required: [true, 'Please provide username']
    },
    password: {
        type: String,
        required: [true, 'Please provide password']
    },
    staffId: {
        type: Number,
        required: [true, 'Please provide staff id']
    },
    officeId: {
        type: Number,
        required: [true, 'Please provide office id']
    },
}, {timestamps: true})

module.exports = mongoose.model('User', UserSchema)