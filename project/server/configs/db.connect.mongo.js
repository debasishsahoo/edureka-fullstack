const mongoose=require('mongoose');
require("dotenv").config();

const URI=process.env.MONGO_URI;

const ConnectDB=async()=>{
    try {
        await mongoose.connect(URI);
        console.log('Mongodb Connected...')
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports=ConnectDB;