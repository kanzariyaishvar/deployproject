const mongoose=require('mongoose');
const tableschema=mongoose.Schema({
    mainid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'main'
    },
    subid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'sub'
    },
    item_c:{
        type:String
    }
});
const extra=mongoose.model('extra',tableschema);
module.exports=extra;