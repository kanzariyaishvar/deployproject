const mongoose=require('mongoose');
const tableschema=mongoose.Schema({
    mainid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'main'
    },
    item_b:{
        type:String
    }
});
const sub=mongoose.model('sub',tableschema);
module.exports=sub;