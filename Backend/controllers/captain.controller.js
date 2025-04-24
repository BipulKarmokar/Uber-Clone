const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator')
const cookieParser = require('cookie-parser')
const blacklistTokenModel = require('../models/blacklistToken.model')

module.exports.registerCaptain = async(req, res) => {
    const error = validationResult(req)
    if(!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }
    const { fullName, email, password, vehicle, location } = req.body

    const isEmailAlreadyExists = await captainModel.findOne({email});
    if(isEmailAlreadyExists) {
        return res.status(400).json({message: 'Email already exists'})
    }
    const hashPassword = await captainModel.hashPassword(password)

    const newCaptain = await captainService.createCaptain({
        fullName: {
            firstName: fullName.firstName,
            lastName: fullName.lastName
        },
        email,
        password: hashPassword,
        vehicle: {
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        },
        location: {
            lat: location.lat,
            lng: location.lng
        }
    });
    const token = await newCaptain.generateAuthToken()
    res.status(201).json({token, newCaptain})
}

module.exports.loginCaptain = async(req, res) => {
    const error = validationResult(req)
    if(!error.isEmpty()){
        return res.status(400).json({errors: error.array()})
    }

    const { email, password } = req.body
    const captain= await captainModel.findOne({email}).select('+password')
    if(!captain) {
        return res.status(400).json({message: 'Invalid email or password'})
    }
    const isPasswordMatch = await captain.comparePassword(password)

    if(!isPasswordMatch) {
        return res.status(400).json({message: 'Invalid email or password'})
    }
    const token = await captain.generateAuthToken()
    res.status(200).json({token, captain})
}

module.exports.getCaptainProfile = async(req, res) => {
    const captain = req.captain
    if(!captain) {
        return res.status(404).json({message: 'Captain not found'})
    }
    res.status(200).json({captain})
}

module.exports.logoutCaptain = async(req, res) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    const blacklistToken = await blacklistTokenModel.create({token})
    res.clearCookie('token')
    res.status(200).json({message: 'Logout successfully'})
}
