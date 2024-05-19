const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String
    },
    {
        collection: 'ShitTrackerUsers'
    }
)

const Users = mongoose.model('Users', usersSchema)

module.exports = Users
