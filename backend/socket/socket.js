import { Server } from "socket.io";
import http from 'http'
import express from 'express'

const app = express()

const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET","POST"]
    }
})



const userSocketMap = {};

export const getReceiverSocketId = (recieverId)=>{
    return userSocketMap[recieverId]
}


io.on("connection",(socket)=>{
    console.log("a user connected",socket.id)
    const userId = socket.handshake.query.userId
    if(userId != "undefined") userSocketMap[userId] = socket.id

    // io.emit emit the online users
    io.emit("getOnlineUsers",Object.keys(userSocketMap))

    // socket.on is used to listen to the events both on client side and the user side 

    socket.on("disconnect",()=>{
        console.log("user not connected",socket.id)
        delete userSocketMap[userId]
        io.emit("getOnlineUsers",Object.keys(userSocketMap))
    })
})

export {app,io,server}