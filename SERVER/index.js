const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const bodyParser=require('body-parser')

//Create Server
const app=express();

//configure .dotenv file
dotenv.config();

//For API health Checkup (http://localhost:5000/api/check)

app.get('/api/check',(req,res)=>res.send('App is Running'));

app.listen(5000, () => {
    console.log('App listening on port 5000!');
});
