const authRouter = require('express').Router()
const User = require('../models/User.js')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')


// Register
authRouter.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString(),
    })

    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Login
authRouter.post('/login', async (req, res) => {
    const loggedUser = await User.findOne({ username: req.body.username })

    if(!loggedUser) {
        res.json({error: 'User with this username does not exist.'})
        return
    }    

    const hashedPassword = CryptoJS.AES.decrypt(loggedUser.password, process.env.PASS_SECRET);

    const originPassword = hashedPassword.toString(CryptoJS.enc.Utf8)

    if(originPassword !== req.body.password) {
        res.json({error: "Wrong password."})
        return;
    }

    const accessToken = await jwt.sign(
        { _id: loggedUser._id, isAdmin: loggedUser.isAdmin }, 
        process.env.JWT_SECRET, 
        { expiresIn: '3d' }
    )

    const { password, ...others } = loggedUser._doc

    res.json({...others, accessToken})
})

module.exports = authRouter