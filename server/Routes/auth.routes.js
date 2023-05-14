const Router = require('express')
const User = require('../models/User')
const router =  new Router()
const bcrypt = require('bcryptjs')
const {check,validationResult} =require("express-validator")


router.post('/login', async (req,res) => {

  
   try{

   
    }catch(e){
        console.log(e)
        res.send({message: "Sever error"})
    }
})

module.exports = router