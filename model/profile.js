const mongoose=require("mongoose");
const tableschema=mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    country:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    code:{
        type:String
    },
    image:{
        type:String
    }
});

const profile=mongoose.model("profile",tableschema);
module.exports=profile;
