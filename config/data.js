const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://ishvarkanzariya2:Ishvar@cluster0.gn1or.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0");
const check=mongoose.connection;

check.on("connected",()=>{
    console.log("Database is Connected...");
});

module.exports=check;