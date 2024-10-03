const mongoose = require("mongoose");

//Schema for Teacher Table
const TeacherAttendanceSchema=mongoose.Schema({
  admin:{type:String,require:true},
  date:{type:Date,default:Date.now()},
  teachers:[
    {
        name:{type:String,require:true},
        teacher_id:{type:Number,require:true},
        is_present:{type:Boolean,require:true,default:false},
    }
  ]
},{timestamps:true});

const TeacherAttendanceModel=mongoose.model('TeacherAttendance',TeacherAttendanceSchema);

module.exports=TeacherAttendanceModel;
