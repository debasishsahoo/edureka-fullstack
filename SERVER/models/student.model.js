const mongoose = require("mongoose");

//Schema for Student Table
const StudentSchema=new mongoose.Schema({
    regId:Number,
    name:String,
    course:String,
    section:{
        type:String,default:"A"
    },
},{timestamps:true});


//Model For Student Table
//Model Function is Taking two Parameter (Table Name, table Design)
const StudentModel=mongoose.model('Student',StudentSchema);

module.exports=StudentModel;
