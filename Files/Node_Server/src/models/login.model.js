const mongoose = require('mongoose');


// User-login
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        uniqe: true
    },
    email: {
        type: String,
        required: true,
        uniqe: true
    },
    password: {
        type: String,
        required: true
    },
    confirm_password: {
        type: String,
        required: false
    },
    tokens: [
        {
            type: String
        }
    ]
})


const User = mongoose.model('User', UserSchema);


module.exports = User;