const Router = require('express')
const User = require('../models/User')
const router =  new Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {check,validationResult} =require("express-validator")


router.post('/login', async (req,res) => {
       try{
       const {email,password} =req.body
       const user  = await User.findOne({email})
       if(!user){
       return res.status(400).json({message: "User not found"})
}
    const isPassValid = bcrypt.compareSync(password,user.password)
    if(!isPassValid){
        return res.status(400).json({message: "Invalid password"})

    }
   
    }catch(e){
        console.log(e)
        res.send({message: "Sever error"})
    }
})

module.exports = router