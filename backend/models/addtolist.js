const mongoose = require("mongoose");
 const validator = require("validator");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const crypto = require("crypto");
const addToList = new mongoose.Schema({
name:  String,
email:String,
position:String,
companyname:String,
website:String,
facebook:String,
twitter:String,
instagram:String
})
module.exports =mongoose.model("addTo",addToList);