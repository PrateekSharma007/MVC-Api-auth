const express = require("express") 
const app = express() ; 
const router = require("./routes/router") 
const mongoose = require("mongoose") 
const names = require("./db/schema")

app.use(express.json({limit : '5mb'}));
app.use(express.urlencoded({extended : true}))// check about this.


app.use(router) ;

app.get("/" , (req,res) => {
    res.send("Welcome to authentication");
})



app.listen(3000,() => { 
    console.log("The port 3000 is working");
})