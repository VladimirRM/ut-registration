const Router = require('express')
const User = require('../models/User')
const router =  new Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {check,validationResult} =require("express-validator")

router.post("/registration",(req,res)=>{
    try{
     const {email,password} = req.body
      const candidate =  User.findOne({email})
      if(candidate){
        return res.status(400).json({message:" User with email ${email} already exist "})

      }

      
      const user = new User({email})

    }catch(e){
        console.log(e)
        res.send({message:"Server error"})
    }
})




module.exports = router