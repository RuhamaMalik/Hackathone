// import mongoose from 'mongoose';
// // 4.1

// const productSchema = new mongoose.Schema({
//     name : {type:String, required: true},
//     varients : [String], 
//     prices : [Number],
//     category : {type:String, required: true},
//     image : {type:String, required: true},
//     description : {type:String, required: true},
//   user_id: { type: mongoose.Schema.Types.ObjectId, required: true }
// } , {
//     timestamps : true,
// }
// )

// const productsModel =  mongoose.model('product' , productSchema)

// export default productsModel;

import mongoose from 'mongoose';
// 4.1

const productSchema = new mongoose.Schema({
    name : {type:String, required: true},
    varients : [], 
    prices : [],
    category : {type:String, required: true},
    image : {type:String, required: true},
    description : {type:String, required: true},

} , {
    timestamps : true,
}
)

const productsModel =  mongoose.model('product' , productSchema)

export default productsModel;