import mongoose  from "mongoose";  

const AdminSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    isAdmin:{type:Boolean,required:true,default:false},
    image:{type:String,required:true}
},{timestamps:true});

const AdminModel=mongoose.model('Admin',AdminSchema);
module.exports=AdminModel;