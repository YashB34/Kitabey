import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./Routes/bookRoute.js";
import cors from "cors";
import userRoute from "./Routes/userRoute.js"
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 4001
const URL = process.env.MONGO_URL
// Connect to MongoDB
try{
mongoose.connect(URL)
console.log("Connected to MongoDB");
}catch(err){
console.log(err);
}
//routes
app.use("api/book" , bookRoute);
app.use("api/user", userRoute);


app.listen(PORT , ()=>{
    console.log(`Listening on the ${PORT}`);
})