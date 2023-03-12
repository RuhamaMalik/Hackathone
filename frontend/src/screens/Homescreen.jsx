import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../actions/productActions.js';
import Error from '../components/Error.jsx';
import Loading from '../components/Loading.jsx';
import Navbar from '../components/Navbar.jsx';
import Products from '../components/Products.jsx';
// import data from '../storedata.js'


const Homescreen = () => {

  // 9.1
  const dispatch = useDispatch()

  const productsState = useSelector((state) => state.getAllProductsReducer);
  const { products, error, loading } = productsState
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <>
    <Navbar />
      <div className="container justify-content-center">

        <div className="row " >

          {/* 9.3 */}

          {
            loading ? (
            // <h1>Loading...</h1>
            <Loading />
            ) :
              error ? (
                <div>
                  {/* <h1>Something went wrong</h1> */}
                  <Error error = "Something went wrong" />
                  <p>{error.message}</p>
                </div>) :
                (
                  products.map((products) => {
                    return <div className="col-md-4 col-sm-6" key={products._id}>
                      <div className='d-flex flex-column align-items-center'>

                        <Products products={products} />
                      </div>
                    </div>
                  })

                )}


        </div>

      </div>
    </>
  )
}

export default Homescreen