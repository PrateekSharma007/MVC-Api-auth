
const mongoose = require("mongoose") 
const details = require("../db/schema")
const db = require("../db/mongodb")

//signup 

const signup = async (req,res,next) => { 

    try{
        const {name,email,password} = req.body ; 
        const newuser = await new details({
            name : name , 
            email : email,
            password : password 

        })
        const save = await newuser.save() ;
        res.send(save) ;
    }catch(err){
        res.send(err);
    }
}

// login 



const login = (req,res) => {
    const {name,email,password} = req.body ;
    //find kaise work karega ,mongodb ke methods
    const user = details.find({email,name}).then((result) => { 
        
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
  

module.exports = {signup,login} ;