const express = require('express')
const mongoose = require('mongoose')
const mongo = require("./db.js")
const usersSchema = require('./Models/UserFiles.js')
const cors = require('cors')
const app = express()
const PORT = 8000;
const router = require("./Routes/FormData.js")
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

mongo()
app.use(cors())
app.use(express.json())

app.use('/api/formData', router)

app.post('/form', async(req, res)=>{
    const{ roll, Name1 }= req.body
    const rollNo = roll.toUpperCase()
    const UserName = Name1.toUpperCase()
    try{
        const checkRoll = await usersSchema.findOne({Roll_No:rollNo}, {})
        const checkName = await usersSchema.findOne({DOB: UserName}, {})

        if(checkRoll && checkName && checkRoll.id === checkName.id){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(err){
        console.log(err)
    }
})

app.get('/', cors(), (req, res)=>{
    res.send("h")
})

app.listen(PORT,() =>{
    console.log("PORT connected")
})