import express from 'express';
import myRoute from './routes/productsRoute.js';
import router from './routes/userRoute.js';
import order from './routes/orderRoute.js';
import db from './db.js'
const app = express()
app.use(express.json())



// Create GridFS connection to MongoDB

// 8.2   
app.use("/api/products/", myRoute)
app.use('/api/users/' , router) //15.4
app.use('/api/orders/', order )

// 4.2
// app.get('/getproducts', async (req, res) => {
//     try {
//         let result = await productsModel.find({});
//         res.send(result);
//     } catch (err) {
//         console.log(err);
//         res.status(500).send('Internal Server Error');
//     }
// });

// 2.1 create server
app.get("/", (req, res) => {
    res.send({ message: "server is working" })
})

const port = 8000;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
