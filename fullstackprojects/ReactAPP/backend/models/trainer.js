const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    trainer_name:{
        type:String,
        required:true
    },
    trainer_location:{
        type:String,
        required:true
    },
    trainer_skills:{
        type:String,
        required:true
    },
    trainer_phone:{
        type:Number,
        required:true
    },
})


const Trainer = mongoose.model('Trainer', productSchema);
module.exports = Trainer;
