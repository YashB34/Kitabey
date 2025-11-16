import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./Routes/bookRoute.js";
import cors from "cors";
import userRoute from "./Routes/userRoute.js"

const app = express();
app.use(cors({
    origin:"https://kitabey-sooty.vercel.app/",
    credentials:true
}));
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000
const URL = process.env.MongoURL
// Connect to MongoDB
try{
mongoose.connect(URL)
console.log("Connected to MongoDB");
}catch(err){
console.log(err);
}
//routes
app.use("/book" , bookRoute)
app.use("/user", userRoute)


app.listen(PORT , ()=>{
    console.log(`Listening on the ${PORT}`);
})