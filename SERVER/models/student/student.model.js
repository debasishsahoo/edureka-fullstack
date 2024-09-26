const mongoose = require("mongoose");

//Schema for Student Table
const StudentSchema=mongoose.Schema({
    registered_by:{type:String,require:true,ref:'Admin'},
    name:{type:String,require:true},
    class_name:{type:String,require:true},
    roll:{type:Number,default:null},
    address:{type:String,require:true},
    parent_name:{type:String,require:true},
    contact_no:{type:String,require:true},
    age:{type:Number,require:true},
    gender:{type:String,require:true},
    image:{type:String,default:null},
    registration_fees:{type:Number,require:true},
    previous_dues:{type:Number,default:0}
},{timestamps:true});

const StudentModel=mongoose.model('Student',StudentSchema);

module.exports=StudentModel;
