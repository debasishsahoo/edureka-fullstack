const express = require("express");
const connectDB=require('./configs/db.connect.mongo')
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST;


const app = express();
connectDB();

app.use("/check", (req, res) => {
  return res.status(200).send({
    message: "APP is Working...",
  });
});



app.listen(PORT, () => console.log(`Server  is Running on ${HOST}:${PORT}`));
