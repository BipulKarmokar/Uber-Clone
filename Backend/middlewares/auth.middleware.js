const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const blacklistTokenModel = require('../models/blacklistToken.model')
const captainModel = require('../models/captain.model')

module.exports.authUsers = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token) {
        return res.status(401).json({message: 'Unauthorized1'})
    }
    const isBlacklisted = await blacklistTokenModel.findOne({token: token})
    if(isBlacklisted) {
        return res.status(401).json({message: 'Unauthorized2'})
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decoded._id)
        req.user = user
        next()
    } catch (error) {
        return res.status(401).json({message: 'Unauthorized2'})
    }
}
module.exports.authCaptains = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token)
    {
        return res.status(401).json({message: 'Unauthorized1'})
    }
    const isBlacklisted = await blacklistTokenModel.findOne({token: token})
    if(isBlacklisted) {
        return res.status(401).json({message: 'Unauthorized2'})
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const captain = await captainModel.findById(decoded._id)
        req.captain = captain
        next()
    } catch(error) {
        return res.status(401).json({message: 'Unauthorized3'})  
    }
}