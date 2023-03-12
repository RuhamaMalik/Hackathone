import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name : {type:String, required: true},
    email : {type:String, required: true, unique:true},
    contact : {type:Number, required: true},
    password : {type:String, required: true},
    block :  {type:Boolean, required: true, default:false},
    type : {type:String, required: true, default:"buyer"},

} , {
    timestamps : true,
}
)

const userModel =  mongoose.model('user' , userSchema)

export default userModel;