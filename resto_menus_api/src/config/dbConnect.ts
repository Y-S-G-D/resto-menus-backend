import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: '.env.local' });

const MONGO_URL = process.env.MONGO_URI || "";
if(!MONGO_URL){
    console.log("Mongo URI is missing");
    process.exit(1);
}
const dbConnect = async () =>{
    try{
        const conn = await mongoose.connect(MONGO_URL)
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(err){
        console.log(err);
    }
}


export default dbConnect;
