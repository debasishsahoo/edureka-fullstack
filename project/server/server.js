const express = require("express");
const connectDB=require('./configs/db.connect.mongo')
const userRoutes=require('./routes/user.route')
const productRoutes=require('./routes/product.route')

require("dotenv").config();


const app = express();
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
