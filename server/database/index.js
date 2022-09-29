const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        let uri = "mongodb://localhost:27017/urlshorter";
        let URI ="mongodb+srv://Aausafalam:Aausaf@123@cluster0.d4vo4ci.mongodb.net/?retryWrites=true&w=majority"
        // console.log(uri);
        await mongoose.connect(uri);

        console.log('MongoDB Connected...');

    } catch (error) {

        console.log(error.message);
        
    }
}

module.exports = {connectDB};
