const express=require ('express')
const app=express()

require('dotenv').config({path:"./config/.env"})  
const port =process.env.port 
const connectDB=require("./config/Db_Connect")
connectDB()
app.use(express.json())
app.use("/user",require('./routes/userRoutes'))


app.listen(5000,(err)=>
err?console.log(err):console.log("server is runing"))
