const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String

})

const User_Detail_Model = mongoose.model("user_details", UserSchema)
module.exports=User_Detail_Model;