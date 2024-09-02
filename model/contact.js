const mongoose=require("mongoose");
const tableschema=mongoose.Schema({
    user:{
        type:String
    },
    email:{
        type:String
    },
    mobile:{
        type:String
    },
    message:{
        type:String
    }
});

const contact=mongoose.model("contact",tableschema);
module.exports=contact;
