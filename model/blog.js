const mongose=require("mongoose");
const tableSchema=mongose.Schema({
    B_title:{
        type:String
    },
    B_About:{
        type:String
    },
    B_image:{
        type:String
    }
})

const blog=mongose.model("blog",tableSchema);
module.exports=blog;