const mongoose = require("mongoose");

const AdminSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    isAdmin:{type:Boolean,required:true,default:false},
    image:{type:String,required:true,default:'NoImage'}
},{timestamps:true});

const AdminModel=mongoose.model('Admin',AdminSchema);
module.exports=AdminModel;