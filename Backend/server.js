import express from 'express'
import cors from 'cors'
import userDetails from './api/userDetails.js'
const app=express()
app.use(cors())
app.use(express.json())
app.use('/imgUpload',express.static('imgUpload'))
app.use("/api/v1/almatters",userDetails)
// app.use("*",(req,res)=>{res.status(404).json("Not found")})

export default app