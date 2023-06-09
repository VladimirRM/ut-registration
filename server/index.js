const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const corsMiddleware = require('./middleware/cors.middleware')


const authRouter = require('./Routes/auth.routes')
const app =express()
const PORT = config.get('serverPort')
app.use(corsMiddleware)
app.use(express.json())
app.use("/api/auth",authRouter)



       const start =  async ()=>{
    try{
         await mongoose.connect(config.get("dbUrl"))


        app.listen(PORT,()=>{
            console.log('server started on port', PORT)
        })
    }catch(e){
        console.log(e)
    }
}

start()