const mongoose =require('mongoose');
const userSchema=new  mongoose.Schema({
    name: String,
    url: String,
    email: String
})
const db =mongoose.model("db", userSchema);
module.exports=db;