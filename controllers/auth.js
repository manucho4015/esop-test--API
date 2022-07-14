const {StatusCodes} = require('http-status-codes')

const User = require('../models/User')

const registerUser = async (req,res) => {
    const new_user = await User.create(req.body)
    res.status(StatusCodes.OK).json({ new_user})
}

const loginUser = async (req,res) => {
    const {email, password} = req.body
    

    if(!email || !password) {
        return res.status(StatusCodes.BAD_REQUEST).json({  status: "failed", msg: "Please provide email and password"})
    }


    const user = await User.findOne({ email: email})
    if(!user) {
        return res.status(StatusCodes.NOT_FOUND).json({ status: "failed", msg: "User Not Found"})
    }
    if (user.password !== password) {
        return res.status(StatusCodes.BAD_REQUEST).json({status: "failed", msg: "Invalid Password"})
    }
    
    res.status(StatusCodes.OK).json({ status: "success", msg: "user logged in!"})
}

module.exports = {
    registerUser,
    loginUser
}