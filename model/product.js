// const mongoose=require("mongoose");
// const tableschema=mongoose.Schema({
//     product:{
//         type:String
//     },
//     price:{
//         type:String
//     },
//     disc:{
//         type:String
//     },
//     image:{
//         type:String
//     },
//     mainid:{
//         type:String
//     },
//     subid:{
//         type:String
//     },
//     item:{
//         type:String
//     },
//     mainid:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'main'
//     },
//     subid:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'sub'
//     },
//     item_c:{
//         type:String
//     }
// });

// const product=mongoose.model("product",tableschema);
// module.exports=product;




const mongoose = require("mongoose");

const tableSchema = mongoose.Schema({
    product: {
        type: String
    },
    price: {
        type: String
    },
    disc: {
        type: String
    },
    image: {
        type: String
    },
    mainid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'main'
    },
    subid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sub'
    },
    item_c: {
        type: String
    }
});

const Product = mongoose.model("Product", tableSchema);
module.exports = Product;
