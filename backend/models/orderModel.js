import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    name : {type:String, required: true},
    email : {type:String, required: true},
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: false },
    orderItems:[],
    shippingAddress :{type : Object},
    orderAmount :{type:Number, required: true},
    isDelivered: {type:Boolean, required:true, default:false},
    transactionId: {type:String, required: true},

},{
    timestamps: true
})

const orderModel =  mongoose.model('order' , orderSchema)

export default orderModel;