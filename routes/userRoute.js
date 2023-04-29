const express = require("express");
const userModel = require('../models/userModel')

const {
  loginController,
  reguser
} = require("../controllers/userController");

//router object
const router = express.Router();



//routers
// POST || LOGIN USER
router.post("/login", loginController);
router.post("/register",reguser)






//POST || REGISTER USER
// router.get("/register", function(){registerController});

module.exports = router;