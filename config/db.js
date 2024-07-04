const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB connected'.green.bold);
    } catch (error) {
        console.log('Mongoose connection error: '.red.bold, error);
    }
}

module.exports = connectDB;