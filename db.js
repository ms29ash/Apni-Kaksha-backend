import mongoose from 'mongoose';
// const config = require('config');
import dotenv from "dotenv";
dotenv.config();



// const mongoUri = 'mongodb+srv://ms29ash:aj7jE5I7NC1BuD0z@cluster0.bekxw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const mongoURI = process.env.MONGO_URI;

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log('connectToMongoose successfully')
    }).catch(err => console.log(err));
}

export default connectToMongo;



