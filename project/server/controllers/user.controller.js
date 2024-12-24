const user=require('../models/user.model');
const bcrypt=require('bcrypt.js');
const jwt=require('jsonwebtoken');
require("dotenv").config();


const userController={
    signUp:async()=>{},
    signIn:async()=>{},
    changePassword:async()=>{},
    getUser:async()=>{},
    updateUser:async()=>{},
};

module.exports=userController;