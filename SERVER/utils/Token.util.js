const jwt =require('jsonwebtoken')
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

async function generateToken(payload){
return await jwt.sign(payload,JWT_SECRET,{expiresIn:60 * 60 * 7});
}

module.exports= generateToken