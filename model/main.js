const mongoose=require('mongoose');
const tableschema=mongoose.Schema({
    item_a:{
        type:String
    }
});
const main=mongoose.model('main',tableschema);
module.exports=main;