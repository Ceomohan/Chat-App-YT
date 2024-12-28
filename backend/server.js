import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import path from 'path'


import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoute.js"

import connectMongoDb from "./DB/connectMongoDb.js"
import { app, server } from "./socket/socket.js"
dotenv.config()

const PORT = process.env.PORT || 5000 

const __dirname = path.resolve()



app.use(express.json())
app.use(cookieParser())
// auth routes
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.use(express.static(path.join(__dirname,"/frontend/chat-app-yt/dist")))

app.use("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","chat-app-yt","dist","index.html"))
})


server.listen(PORT ,()=>{
    connectMongoDb()
    console.log(`SERVER IS RUNNING ON THE SERVER ${PORT}`)
})

