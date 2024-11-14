const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
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

const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;