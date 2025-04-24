const mongoose = require('mongoose')
const { create } = require('./user.model')

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date, 
        defalult: Date.now,
        expires: 86400 // 24 hours in seconds
    }
})

const blacklistToken = mongoose.model('BlacklistToken', blacklistTokenSchema)
module.exports = blacklistToken