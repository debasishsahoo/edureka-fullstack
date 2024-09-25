const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

async function generateToken(payload) {
  return await jwt.sign(payload, JWT_SECRET, { expiresIn: 60/2});
}

async function verifyToken(payload) {
  return await jwt.verify(payload, JWT_SECRET,function(err, decoded) {
    if(err){
        //console.log("error auth", err)
        return res.status(500).send({
            message: "failure",
            error: err,
          });
    }
    return decoded?._id
});
}

module.exports = {generateToken,verifyToken};
