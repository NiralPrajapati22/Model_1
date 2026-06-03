const express = require('express')
const app = express()
const path = require("path")
const cors = require('cors')
const { user_model } = require("./model.js")
const connectDB = require('./config.js')


require( './config.js');
require('./model.js')
app.use(express.json());
app.use(cors());

app.use(
    cors({
        origin: "https://automatic-space-spork-97vrjg4v9g44374gq-3000.app.github.dev/Register",
        methods: ['GET',"POST","PUT", "DELETE"],
        credantials: true
    })
)
connectDB()
app.get("/",(req,res)=>{
    res.send("Welcome in home page")
});

app.get("/about",(req,res)=>{
    res.send("Welcome in about page")
})

app.get("/services",(req,res)=>{
    res.send("Welcome in services page")
})

app.get("404",(req,res)=>{
    res.send("page not found")
})

app.post("/register", async(req,res) => {
    const user = user_model(req.body);
    const result =  await user.save();
    res.send(result);
    console.log("User",user)
    // const user = req.body
    // console.log(user)
});



app.listen(5500);