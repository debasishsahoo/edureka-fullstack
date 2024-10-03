const mongoose = require("mongoose");

//Schema for Student Table
const TeacherSchema=mongoose.Schema({
    registered_by:{type:String,require:true,ref:'Admin'},
    teacher_id:{type:Number,default:null},
    name:{type:String,require:true},
    qualification:{type:String,require:true},
    address:{type:String,require:true},
    contact_no:{type:String,require:true},
    age:{type:Number,require:true},
    gender:{type:String,require:true},
    email:{type:String,require:true},
    image:{type:String,default:null},
    estimated_salary:{type:Number,require:true},
    work:{type:String,require:true}
},{timestamps:true});

const TeacherModel=mongoose.model('Teacher',TeacherSchema);

module.exports=TeacherModel;
