const mongoose = require("mongoose");

//Schema for Student Table
const TeacherSalarySchema=mongoose.Schema({
    accountant:{type:String,require:true},
    name:{type:String,require:true},
    teacher_id:{type:Number,require:true},
    email:{type:Number,require:true},
    year:{type:String,require:true},
    month:{type:Number,require:true},
    salary:{type:Number,require:true}
},{timestamps:true});

const TeacherSalaryModel=mongoose.model('TeacherSalary',TeacherSalarySchema);

module.exports=TeacherSalaryModel;
