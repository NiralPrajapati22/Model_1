const express = require('express')
const app = express()
const path = require("path")

const staticpath = path.join(__dirname,"./public")
app.use(express.static(staticpath))
app.get("/",(req,res)=>{
    res.send("Welcome to my wesite")
})

app.listen(5500)