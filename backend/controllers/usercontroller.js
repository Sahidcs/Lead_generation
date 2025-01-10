const User = require("../models/userModel");
const addTo = require("../models/addtolist");
const catchAsyncErrors = require("../middleware/catchasyncerrors");
const Contact =require('../models/contact')
exports.registeruser = catchAsyncErrors(async (req, res) => {
  const { name, email, password } = req.body;
  const data = await User.create({
    email: email,
    name: name,
    password: password,
  });
  if (data == null) {
    res.end("please provide the details");
  } else res.end("Successfully register");
});
exports.register = catchAsyncErrors(async (req, res) => {
  const {  email, password } = req.body;
  const data = await User.create({
    email: email,
    password: password,
  });
  if (data == null) {
    res.end("please provide the details");
  } else res.end("Successfully register");
});
exports.loginuser = catchAsyncErrors(async (req, res) => {
  const { email, password } = req.body;
  const data = await User.findOne({
    email: email,
    password: password,
  });

if (data == null) {
    res.end("please provide correct email");
  } else res.end("Successfully login");
});
exports.lead = async (req, res) => {
  const data = await addTo.find();
  res.send(data);
};
exports.add = catchAsyncErrors(async (req, res) => {
  const { name, email, position, company, facebook, instagram, website } =
    req.body.formData;
  const data = await addTo.create({
    email: email,
    name: name,
    position: position,
    company: company,
    facebook: facebook,
    instagram: instagram,
    website: website,
  });

  if (data == null) {
    res.end("please provide correct email");
  } else res.send("Successfully add");
});
exports.contact = catchAsyncErrors(async (req, res) => {
  const { email, name,message } = req.body;
  const data = await Contact.create({
    name:name,
    email: email,
    message: message,
  });
if (data == null) {
    res.end("error in sending message");
  } else res.send("Successfully send our team will contact you");
});
exports.lead = async (req, res) => {
  const data = await addTo.find();
  res.send(data);
};