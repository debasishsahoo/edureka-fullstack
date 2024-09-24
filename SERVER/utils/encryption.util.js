const bcrypt =require('bcryptjs');
const dotenv = require("dotenv");
dotenv.config();
const saltRounds = process.env.SALT_ROUNDER;

async function hashPassword(password){
    const hash=await bcrypt.hash(password, Number(saltRounds));
    return hash;
}

async function matchPassword(newpassword,oldpassword){
    return await bcrypt.compare(newpassword,oldpassword)
}

module.exports = {hashPassword,matchPassword}