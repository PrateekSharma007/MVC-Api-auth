const express = require("express") 
const app = express() ;
const mongoose = require("mongoose") 
const details = require("../db/schema")
const db = require("../db/mongodb")

//signup 

const signupget = (req,res) =>{
    res.send("Sign up details")
}


const signup = async (req,res,next) => { 
    const {name,email,password} = req.body ; 
    const newuser = await new details({
        name : name , 
        email : email,
        password : password 

    })

    const save = await newuser.save() ;
    res.send(save) ;

    // res.status(200).send("Signup complete")  
}

// login 

const loginget = (req,res) => {
    res.send("welcome to login") ;
}

const login = (req,res) => {
    const {name,email,password} = req.body ;
    const user = details.find({email}).then((result) => { 
        if(result){
            res.send("login successful");
        }
        else{
            res.send("Login unsuccessful") ;
        }
    }).catch((err) => { 
        res.status(404).send("Invalid credentials") ;
    })
}


module.exports = {signup,signupget,login,loginget} ;