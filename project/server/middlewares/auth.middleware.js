const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports=(req,res,next)=>{
    const authHeader=req.headers['authorization'];
    //console.log('authHeader:', authHeader)

    if(!authHeader){
      return res.status(401).json({message:'Authorization Header is Missing'});
    }

    const token=authHeader.startsWith('Bearer ')?authHeader.slice(7):authHeader.trim()
    //console.log('token:', token)
    if(!token){
        return res.status(401).json({message:'Access Denied..Token is Missing'});
    }

    try {
        const decoded_id=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded_id;
        console.log('req.user:', req.user)
        next();
    } catch (error) {
        return res.status(401).json({message:'Invalid Token'})
    }


}