

const express=require("express")
const userRoute=express.Router()
const User=require('../models/userModel')


userRoute.post("/add",async(req,res)=>{
const newUser=new User(req.body)
const resultat= await newUser.save()
res.send(resultat)

})
userRoute.get('/',async(req,res)=>{
    try{
    const resultat=await user.find()
    res.send({user:resulta,msg:'get users'})
}catch(error){
    console.log(error)
}
}
)
userRoute.put('/update/:id',async(req,res)=>{
    try{
    const resultat=await user.findByIdAndUpdate({_id:req.params.id},{$set:req,body})
    res.send({users:resulta,msg:'user updated'})
}catch(error){
    console.log(error)
}
}
)

userRoute.delete('/:id',async(req,res)=>{
    try{
    const resultat=await user.find({_id:req.params.id})
    res.send({user:resulta,msg:'get users by id'})
}catch(error){
    console.log(error)
}
}
)
userRoute.get('/delete/id',async(req,res)=>{
    try{
    const resultat=await user.findByIdAndRemove({_id:req.params.id})
    res.send({user:resulta,msg:'get users by id'})
}catch(error){
    console.log(error)
}
}
)


module.exports=userRoute