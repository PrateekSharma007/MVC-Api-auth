const express = require("express") ; 
const app = express() ; 
const router = require('./routes/router.js')
const mongoose = require("mongoose") ;
const db = require("./db/mongodb.js") ; 
const names = require("./db/schema.js")



app.use(express.json({limit : '5mb'}));
app.use(express.urlencoded({extended : true}))


app.use(router)

app.get('/',(req,res) => { 
    res.send("Welcome to authentication") ;
    
})
// app.get("/",(req,res) => {
//     res.send("Welcome to authenticaction") ;
// })



app.listen(3000,() => { 
    console.log("The port 3000 is working") ;

})