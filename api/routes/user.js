const User = require('../models/User')
const {verifyToken, verifyTokenAndAuthorization} = require('./verifyToken')

const userRouter = require('express').Router()

userRouter.get('/find/:id', async (req,res) => {
    try {
        const user = await User.findById(req.params.id);

        const {password, ...others} = user._doc;
        
        res.json({...others})

    } catch (error) {
        res.status(500).json(error)
    }
})

userRouter.get('/', verifyTokenAndAuthorization, async (req,res) => {
    const query = req.query.new

    try {
        const users = query ? await User.find().sort({_id:-1}).limit(5) :  await User.find({});
        
        res.json(users)
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET uSER STATS

userRouter.get('/stats', verifyTokenAndAuthorization, async (req,res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));


    try {
        const data = await User.aggregate([
            {$match: {createdAt: { $gte: lastYear  }}},
            {
                $project: {
                    month: { $month: "$createdAt" }
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: {$sum: 1}
                }
            }
        ])
        
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

userRouter.put("/:id", verifyTokenAndAuthorization, async(req,res) => {
    if(req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString()
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})

        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})


userRouter.delete('/:id', verifyTokenAndAuthorization, async(req,res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json('Deleted successfully');
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = userRouter