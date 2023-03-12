import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useSelector, useDispatch } from 'react-redux';
import { placeOrder } from '../actions/orderActions';

const Checkout = ({ subTotal }) => {

  const dispatch = useDispatch()
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal))
    console.log(token)
  }

  return (
    <div>

      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        currency='PKR'
        stripeKey='pk_test_51MkVX2LQ6hPamFSpuL7HlpNBSX2tv9YziajKkzufi0ZEH4up3AjaCZYefb800yTjQGI4QBX1vmXvKzaiv83I2Erq0072cNZqJd'
      >
        <button className='btn btn-outline-primary btn-sm'>PAY NOW</button>

      </StripeCheckout>

    </div>
  )
}

export default Checkout