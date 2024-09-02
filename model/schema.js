const mongoose=require("mongoose");
const tableschema=mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
});

const table=mongoose.model("table",tableschema);
module.exports=table;
