import express from 'express';
import orderModel from '../models/orderModel.js';
import Stripe from 'stripe';
import { v4 as uuidv4 } from 'uuid';
const stripe = new Stripe('sk_test_51MkVX2LQ6hPamFSp625jNf0eUzAJsWUWIxtqaMwmlXX0CmCPIYNzSijagrikNBpOhhJCuVWOs1b0eS1WEkMwozWc00yXTkAoN1');
const order = express.Router();




order.post("/placeorder", async (req, res) => {

    const { token, subTotal, currentUser, cartItems } = req.body;
    try {

        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })

        const payment = await stripe.charges.create({
            amount: subTotal * 100,
            currency: 'PKR',
            customer: customer.id,
            receipt_email: token.email
        }, {
            idempotencyKey: uuidv4()
        })

        if (payment) {
            const newOrder = new orderModel({
                name: currentUser.name,
                email: currentUser.email,
                userId: currentUser.id,
                orderItems: cartItems,
                orderAmount: subTotal,
                shippingAddress: {
                    streat: token.card.address_line1,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    pincode: token.card.address_zip
                },
                transactionId: payment.source.id
            })

            newOrder.save()

            res.send("Order Placed Successfully")
        } else {
            res.send("Payment Failed")
        }


    } catch (error) {
        return res.status(400).json({ message: "Something went wrong" + error })
    }

})

export default order;
