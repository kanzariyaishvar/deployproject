const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1/Nodefinal");
const check=mongoose.connection;

check.on("connected",()=>{
    console.log("Database is Connected...");
});

module.exports=check;