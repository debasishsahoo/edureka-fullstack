const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const studentRouter=require('./routes/student.route');
const adminRouter=require('./routes/admin.route')

//Create Server
const app = express();
//configure .dotenv file
dotenv.config();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//For API health Checkup (http://localhost:5000/api/check)
app.get("/api/check", (req, res) => res.send("App is Running"));
app.use('/api/student',studentRouter)
app.use('/api/admin',adminRouter)

const PORT = process.env.PORT;
const HOST = process.env.HOST;
const dbUrl = process.env.DB_URL;
const db = process.env.DB_NAME;

mongoose
  .connect(dbUrl, { dbName: db })
  .then(() => {
    console.log('\x1b[32m',"✅ Connected to MongoDB😁😁😁😁");
    //if DB is Connected then only Server is Started;
    app.listen(`${PORT}`, () => {
      console.log('\x1b[35m',`✅  Server is Running on ${HOST}${PORT} 😁😁😁😁`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
    process.exit(1);
  });
