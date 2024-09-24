import jwt from 'jsonwebtoken'
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const generateToken=(id)=>{
return jwt.sign({id},JWT_SECRET,{expiresIn:'30d'});
}

export default generateToken;