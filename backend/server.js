import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"


import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoute.js"

import connectMongoDb from "./DB/connectMongoDb.js"
dotenv.config()

const PORT = process.env.PORT || 5000 
const app = express()

app.use(express.json())
app.use(cookieParser())
// auth routes
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.listen(PORT ,()=>{
    connectMongoDb()
    console.log(`SERVER IS RUNNING ON THE SERVER ${PORT}`)
})

