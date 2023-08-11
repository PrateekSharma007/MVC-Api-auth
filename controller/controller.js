const router = require("./routes/router.js")
const bcrypt = require('bcryptjs');
const express = require("express") 
const app = express() ; 
const mongoose = require('mongoose')
const db = require('../db/mongodb')
const names = require('../db/schema')






//signin ; 

const signup = (req,res) => {
    const {id,name,email,password} = req.body ; //destructure
    const newuser = names({
        id : id ,
        name : name , 
        email : email , 
        password : password , 
    })
 
    newuser.save() ; //save in database
    res.status(200).json({message : "signin succesfull"}) ;
    res.send("Auth complete")
}


// login

const login = (req,res) => {
    const {name,email,password} = req.body;
    const user = names.find({email}).then((result) =>{
        if(result){
            // res.json(result);
            if (user && bcrypt.compareSync(password, user.password)) {
                // res.json({ message: 'Login successful' });
                res.send("login successful"); 
        }
        else{
            res.send("No user found")
        }
    }}).catch((err) => { 
        res.status(404).send("Invalid credentials")
    })
}


module.exports = {login,signup} ;