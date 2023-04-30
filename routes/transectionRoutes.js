const express = require('express');
const { addTransection, getALLTransection,editTransection,deleteTransection } = require("../controllers/transectionctrl");

//router object
const router = express.Router();



//routes
router.post("/add-transection", addTransection);
router.post("/edit-transection", editTransection);
router.post("/delete-transection", deleteTransection);

router.post("/get-transection",getALLTransection)


module.exports = router;