const express = require("express") 
const router = express.Router() 
const controll = require("../controller/controll") 


router.post("/signup",controll.signup);

router.post("/login",controll.login)

module.exports = router ;