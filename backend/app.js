const express=require('express');
const dotenv=require('dotenv')
dotenv.config({path:"backend/config/config.env"})
const errorMiddleware=require('./middleware/error')
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path=require('path');
const app= express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
  
//Route Import

const user = require("./routes/userRoute");

app.use("/api/v1", user);
app.use(express.static(path.join(__dirname,"../frontend/build")));
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(path.join(__dirname,"../frontend/build/index.html")))
})
app.use(errorMiddleware)
//Middleware for error
app.use(errorMiddleware)
module.exports=app