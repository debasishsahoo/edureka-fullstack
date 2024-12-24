const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB=require('./configs/db.connect.mongo')
const userRoutes=require('./routes/user.route')
const productRoutes=require('./routes/product.route')

require("dotenv").config();


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connectDB();

app.use("/check", (req, res) => {
  return res.status(200).send({
    message: "APP is Working...",
  });
});

app.use("/api/user",userRoutes);
app.use("/api/product",productRoutes);

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST;
app.listen(PORT, () => console.log(`Server  is Running on ${HOST}:${PORT}`));
