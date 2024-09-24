import bcrypt from 'bcryptjs';
const dotenv = require("dotenv");
dotenv.config();
const SALT_ROUNDER = process.env.SALT_ROUNDER;

const salt=bcrypt.genSaltSync(SALT_ROUNDER);

async function hashPassword(password,salt){
    return await bcrypt.hashSync(password, salt);
}

async function matchPassword(enteredHashPassword){
    return await bcrypt.compare(enteredHashPassword,this.password)
}

module.exports = {hashPassword,matchPassword}