const jwt = require('jsonwebtoken')

const verifyToken = async (req,res,next) => {
    const authHeader = req.headers.authorization

    if(authHeader) {
        const token = authHeader.split(" ")[1]
        
        await jwt.verify(token, process.env.JWT_SECRET, (err,user) => {
            if(err) res.status(403).json("Token is not valid!")
            req.user = user
            next()
        })
    } else {
        return res.status(401).json("You are not authenticated!")
    }
}


const verifyTokenAndAuthorization = async(req,res,next) => {
    verifyToken(req,res,() => {
        if(req.user._id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.status(403).json('You are not allowed to do that!')
        }
    })
}


module.exports = { verifyToken, verifyTokenAndAuthorization }