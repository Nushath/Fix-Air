const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const User_Detail_Model = require('./models/User_Details.jsx')

const app = express()
app.use(express.json())

app.use(cors());

mongoose.connect('mongodb://localhost:27017/fix_air');

app.post('/register', (req,res) =>{
    User_Detail_Model.create(req.body)
    .then(user_details => res.json(user_details))
    .catch(err => res.json(err))
})

app.listen(3002, () => {
    console.log("Server is Running Successfully!")
})
