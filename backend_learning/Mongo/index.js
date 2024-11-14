const express = require('express');
const app = express();
const User = require('./models/user');
const Teacher = require('./models/teacher');
const path = require('path');

const { connectToMongoDB } = require('./connect');
const { default: mongoose } = require('mongoose');


async function main() {
    try
    {await mongoose.connect('mongodb://localhost:27017/skillDev');
    console.log('Connected to MongoDB');

    const updatedUser = await Teacher.updateOne({trainer_name: 'Hilen'}, {$set:{emp:104}});
    console.log(updatedUser);

    // const teacher = new Teacher({
    //     trainer_name: 'Hilen',
    //     age: 29,
    //     emp:109,
    //     phone_no: 7432517890,
    //     email: 'Allen@gmail.com'
    // });
    // await teacher.save();
    // console.log(teacher);
    const teachers = await Teacher.find({});
    console.log(teachers);}
    catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
    finally {
        await mongoose.disconnect();
    }
    

}



const PORT = 8001;
app.listen(PORT , ()=> console.log(`Server started at port : ${PORT}`))
main().catch(console.error);

// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017/skillDev';

// async function main() {
//     const client = new MongoClient(url);
//     try {
//         await client.connect();
//         console.log('Connected to MongoDB');
//         const database = client.db('skillDev');

//         const collection = database.collection('teachers');
//         const result = await collection.insertOne({
//             trainer_name: 'John Wick',
//             age: 40,
//             emp:103,
//             phone_no: 4154567890,
//             email: 'conwick@gmail.com'

//         });
//         console.log(result);
//         const trainers = await collection.find({}).toArray();
//         console.log(trainers);
//     } catch (error) {
//         console.error('Error connecting to MongoDB', error);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);

// const mongoose = require('mongoose');


