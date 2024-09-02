const mongoose=require("mongoose");
const tableschema=mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
});

const userregi=mongoose.model("userregi",tableschema);
module.exports=userregi;
