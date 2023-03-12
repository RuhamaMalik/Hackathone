import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux'
import {  addToCartAction } from '../actions/cartAction';


const Products = ({ products }) => {

  let [varient, setVarient] = useState("small")
  let [quantity, setQuantity] = useState(1)
  const [modalShow, setModalShow] = React.useState(false);

// 10.1.1
const dispatch = useDispatch()

// 10.1

const addtocart = () => {
dispatch(addToCartAction(products, quantity, varient))

}

  return (
    <div   className='m-2 shadow p-3 mb-5 bg-body rounded '  style={{width:"250px"}}>


      <h1 >{products.name}</h1>

      <img src={products.image} onClick={() => setModalShow(true)} alt="" className='img-fluid' style={{ height: "150px", width: "150px" }} />

      {/* /////// 1 */}

      <div className="d-flex">

        {/* ///// 1.1 */}

        <div className='w-100 m-1'>
          <p>  Varients</p>
          <select className='form-control' value={varient} onChange={(e) => setVarient(e.target.value)}>
            {products.varients.map((varients, i) => {
              return <option value={varients} key={i}>{varients}</option>
            })}
          </select>
        </div>

        {/* ///////// 1.2 */}

        <div className='w-100 m-1'>

          <p>Quantity</p>

          <select className='form-control' value={quantity} onChange={(e) => setQuantity(e.target.value)}>
            {[...Array(10)].map((x, i) => {
              return <option key={i} value={i + 1}>{i + 1}</option>
            })}
          </select>
        </div>

      </div>

      {/* ////////// 2*/}
      <div className="flex-container">

        {/* //// 2.1 */}

        <div className='m-2 w-100 '>
          <h1>Price : {products.prices[0][varient] * quantity}</h1>
        </div>

        {/* ///// 2.2 */}
        <div className=' w-100 '>
          <button className='btn  btn-success btn-sm' onClick={addtocart}>Add to Cart</button>
        </div>
      </div>

{/* product detail */}

<MyVerticallyCenteredModal
products = {products}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </ div>)
}


// Modal Component show product detail popup

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.products.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Category</h4>
      
       <img src={props.products.image} className="img-fluid rounded mx-auto d-block" style={{ height: "300px"}} alt="" />
      <p className='mt-4' style={{color:"black"}}>{props.products.description}</p>
      </Modal.Body>
      <Modal.Footer>

         <Button variant="primary" className='btn-success' onClick={props.onHide}>
            Close
          </Button>
        
      </Modal.Footer>
    </Modal>
  );
}

export default Products