const mongoose = require('mongoose')

const login = mongoose.Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    rpassword: {
        type: String,
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    phone: {
        type: String,
    },
    company: {
        type: String,
    },
})

const loginSchema = mongoose.model('userlogin', login);

module.exports = loginSchema;