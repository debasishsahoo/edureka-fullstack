const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
  name: { type: String, require: true },
  desc: { type: String, require: true},
  price: { type: Number, require: true,default:0,max:100,min:0 },
},{timestamps:true})

const productModel=mongoose.model('product',productSchema);

module.exports=productModel