const mongoose = require("mongoose");

//Schema for Student Table
const StudentFeesSchema=mongoose.Schema({
    accountant:{type:String,require:true},
    name:{type:String,require:true},
    class:{type:String,require:true},
    roll:{type:Number,require:true},
    email:{type:Number,require:true},
    year:{type:String,require:true},
    month:{type:Number,require:true},
    monthly_fees:{type:Number,require:true},
    hostel_fees:{type:Number},
    laboratory_fees:{type:Number},
    computer_fees:{type:Number},
    miscellaneous:{type:Number},
},{timestamps:true});

const StudentFeesModel=mongoose.model('StudentFees',StudentFeesSchema);

module.exports=StudentFeesModel;
