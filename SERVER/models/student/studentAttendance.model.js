const mongoose = require("mongoose");

//Schema for Student Table
const StudentAttendanceSchema=mongoose.Schema({
  class_teacher:{type:String,require:true},
  date:{type:Date,default:Date.now()},
  class:{type:String,require:true},
  students:[
    {
        name:{type:String,require:true},
        roll:{type:Number,require:true},
        is_present:{type:Boolean,require:true,default:false},
    }
  ]
},{timestamps:true});

const StudentAttendanceModel=mongoose.model('StudentAttendance',StudentAttendanceSchema);

module.exports=StudentAttendanceModel;
