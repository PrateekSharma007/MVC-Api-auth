const express = require("express") 
const router = express.Router() 
const controll = require("../controller/controll") 

router.get("/signup",controll.signupget) 


router.post("/signup",controll.signup);


router.get("/login",controll.loginget) ;

router.post("/login",controll.login)




module.exports = router ;