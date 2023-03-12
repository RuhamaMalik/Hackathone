// 8.1
import express from 'express';
import productsModel from '../models/productsModel.js';
// import multer from 'multer';
const myRoute = express.Router();

// // Set up multer for handling file uploads
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//       cb(null, './uploads');
//     },
//     filename: function(req, file, cb) {
//       cb(null, Date.now() + '-' + file.originalname);
//     }
//   });


  // const upload = multer({ storage: storage });
  // myRoute.post("/addproducts", upload.single('image'), async (req, res) => {
    
  //   const { name, description, category, varients, prices ,image} = req.body;
  //   // const image = req.file ? req.file.filename : undefined;
  //   console.log(req.body);
  //   const user_id = req.body.user_id; 
  //   const product = new productsModel({
  //     name,
  //     description,
  //     category,
  //     varients,
  //     prices,
  //     image,
  //     user_id
  //   });   
  //   try {
  //     await product.save()
  //     res.send('Product added successfully')
  //   } catch (error) {
  //     return res.status(400).json({message : error })
  //   }
  // });
  myRoute.get("/getallproducts", async (req, res) => {
    try {
        const products = await productsModel.find({})
        res.send(products)
    } catch (error) {
        res.status(400).json({ message: error });
    }

});
// myRoute.post("/addproducts", async (req, res) => {
//   const { name, description, category, varients, prices } = req.body;
//   const image = req.file.filename;
//   const user_id = req.user._id; 
//   const product = new productsModel({
//     name,
//     description,
//     category,
//     varients,
//     prices,
//     image,
//     user_id
//   });    try {
//        product.save()
//        res.send('Product add Succeefully')
//     } catch (error) {
//         return res.status(400).json({message : error })
        
//     }

// });


 myRoute.get("/getallproducts", async (req, res) => {
    try {
        const products = await productsModel.find({})
        res.send(products)
    } catch (error) {
        res.status(400).json({ message: error });
    }

});

export default myRoute;