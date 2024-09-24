const jwt =require('jsonwebtoken')
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const generateToken=(payload)=>{
return jwt.sign(payload,JWT_SECRET,{expiresIn:60 * 60 * 7});
}
module.exports= generateToken