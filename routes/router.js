const express = require("express") ; 
const router = express.Router() ;
const controller = require("../controller/controller")



router.get('/',controller.signup);

router.get('/login',controller.login) ;

router.post('/signup',controller.signup)

router.post('/login',controller.login);


module.exports = router;