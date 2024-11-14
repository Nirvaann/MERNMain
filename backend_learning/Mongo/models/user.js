const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    trainer_name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    emp: {
        type: Number
    },  
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;