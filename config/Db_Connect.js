const mongoose=require('mongoose')
require("dotenv").config({path:'./.env'})
const uri =process.env.MONGO_URI


 const connectDB=()=>{mongoose.connect(process.env.MONGO_URI)
 .then(()=>console.log("database connected"))
 .catch(error=>console.log(error)) 
}
module.exports=connectDB