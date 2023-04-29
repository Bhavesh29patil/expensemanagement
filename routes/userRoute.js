const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController");

//router object
const router = express.Router();

//routers
// POST || LOGIN USER
router.post("/login", function(){loginController});

//POST || REGISTER USER
router.post("/register", function(){registerController});

module.exports = router;