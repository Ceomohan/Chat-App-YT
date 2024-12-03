import mongoose from "mongoose";

const connectMongoDb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("THE DATABASE IS CONNECTED")
    }catch(error){
        console.log("error with connecting to Database",error.message)
    }
}

export default connectMongoDb