import express from 'express';
import userModel from '../models/userModel.js';
const router = express.Router();


router.post("/register", (req, res) => {
    const {name, email, contact, password,block,type} = req.body;
    const newUser = new userModel({name, email,contact,password,block,type})

    try {
       newUser.save() 
       res.send('User Register Successfuly')
    } catch (error) {
        return res.status(400).json({message : error})
    }
})


router.post("/login", async(req, res) => {
    const { email, password} = req.body;

    try {
        const user = await userModel.find({email, password})
      if(user.length > 0){
        const currentUser = {
            name : user[0].name,
            email : user[0].email,
            type : user[0].type,
            _id : user[0]._id
          }
    
        res.send(currentUser)
      }else{
        return res.status(400).json({message : 'User Login Failed'})
      }
       //15.5
    } catch (error) {
        return res.status(400).json({message : 'Something went wrong'})
    }
})
// router.post("/login", (req, res)=> {
//     const { email, password} = req.body
//   userModel.findOne({ email: email}, (err, user) => {
//         if(user){
//             if(password === user.password ) {
//                 res.send({message: "Login Successfull", user: user})
//             } else {
//                 res.send({ message: "Password didn't match"})
//             }
//         } else {
//             res.send({message: "User not registered"})
//         }
//     })
// }) ;    

export default router;