import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        if(connect){
            console.log("Connected to Database");
        }
    }
    catch(err){
        console.log(err);
    }
}