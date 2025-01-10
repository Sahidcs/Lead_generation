const express = require("express");


const router = express.Router();
const {registeruser,loginuser,add,register,lead,contact}=require('../controllers/usercontroller');

router.route("/savedetail").post(registeruser)
router.route("/register").post(register)
router.route("/login").post(loginuser)
router.route("/add").post(add)
router.route("/contact").post(contact)
router.route("/findlead").get(lead)

module.exports = router;