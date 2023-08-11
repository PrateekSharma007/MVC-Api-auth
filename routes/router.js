const express = require("express") 
const app = express() ; 
const mongoose = require('mongoose')
const db = require('../db/mongodb')
const names = require('../db/schema')



const router = express.Router() ;

router.get('/',(req,res) =>{
    res.send("Welcome to authentication")
})

router.get("/login",(req,res) =>{
    res.send("login router");
})

//signup 

router.post("/signup",(req,res) =>{
    
    
})


//login


router.get("/login",(req,res) =>{
    res.send("Enter your credentials")
})

router.post("/login" ,(req, res) => {
    
  });




// export default router ;
module.exports = router