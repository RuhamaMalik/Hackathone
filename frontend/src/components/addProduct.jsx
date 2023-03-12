import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions.js'
import Loading from '../components/Loading.jsx';
import Error from '../components/Error.jsx';
import Success from '../components/Success.jsx';
import { useNavigate } from 'react-router';
import Navbar from '../components/Navbar.jsx';
import SellerPannel from '../screens/SellerPannel.jsx';
import { addProductReducer } from '../reducers/productReducers.jsx';
import { addProductAction } from '../actions/productActions.js';

const AddProduct = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    // const registerState = useSelector(state => state.registerUserReducer)
    const [prices, setPrices] = useState([]);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    let varients = [];




    // useEffect(() => {
    //     if (success) {
    //         navigate('/sellerpanel');
    //     }
    // }, [success, navigate]);






    // const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    // const user_id = currentUser ? currentUser._id : null;

    // const addProductState = useSelector(state => state.addProductReducer);
    // const { error, loading, success } = addProductState

    // useEffect(() => {
    //     if (success) {
    //         navigate('/sellerpanel');
    //     }
    // }, [success, navigate]);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const user_id = currentUser ? currentUser._id : null;

    const addProduct = () => {

        // const selectedVariants = document.querySelectorAll('input[type=checkbox]:checked');
        // let varients = [];
        // selectedVariants.forEach(variant => {
        //     varients.push(variant.value);
        // });
        const product = {
            name,
            varients,
            prices,
            category,
            image,
            description,
            user_id


        }

        // dispatch(addProductAction(product));

        console.log(product)
    }


    return (

        <>
            <SellerPannel />

            <div>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-5 mt-5 text-start shadow p-3 mb-5 bg-white rounded">
{/* 
                        {loading && (<Loading />)}
                        {success && <Success success="Product Add Successfully" />}
                        {error && <Error error="product not add" />} */}
                        <h2 className='text-center m-2' style={{ fontSize: '35px' }}>Add Products</h2>
                        <div>

                            <input required
                                type="text"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                                placeholder='Product Name '
                                className='form-control' />

                            <div class="form-check">
                                <input onChange={(e) => { varients.push(e.target.value) }} className="form-check-input" type="checkbox" value={varients[0]} checked />
                                <label className="form-check-label" for="flexCheckDefault">
                                    small
                                </label>
                            </div>
                            <div class="form-check">
                                <input onClick={(e) => { varients.push(e.target.value) }} className="form-check-input" type="checkbox" value={varients[1]} />
                                <label className="form-check-label" for="flexCheckChecked">
                                    medium
                                </label>
                            </div>
                            <div class="form-check">
                                <input onClick={(e) => { varients.push(e.target.value) }} className="form-check-input" type="checkbox" value={varients[2]} />
                                <label className="form-check-label" for="flexCheckDefault">
                                    large
                                </label>
                            </div>

                            <input
                                required
                                type="number"
                                value={prices[0] || ''}
                                onChange={(e) => {
                                    setPrices([e.target.value, prices[1] || '', prices[2] || '']);
                                }}
                                placeholder="Enter price for small variant"
                                className='form-control' />

                            <input
                                required
                                type="number"
                                value={prices[1] || ''}
                                onChange={(e) => {
                                    setPrices([prices[0] || '', e.target.value, prices[2] || '']);
                                }}
                                placeholder="Enter price for medium variant"
                                className='form-control' />

                            <input
                                required
                                type="number"
                                value={prices[2] || ''}
                                onChange={(e) => {
                                    setPrices([prices[0] || '', prices[1] || '', e.target.value]);
                                }}
                                placeholder="Enter price for large variant"
                                className='form-control' />


                            <div className="dropdown">

                                <select onChange={(e) => { setCategory(e.target.value) }} className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected >Choose Category</option>
                                    <option value="veg" >Veg</option>
                                    <option value="nonveg">NonVeg</option>
                                </select>
                            </div>
                            <input
                                name='file'
                                required
                                type="file"
                                value={image}
                                onChange={(e) => { setImage(e.target.value) }}
                                formEncType="multipart/formdata"
                                className='form-control' />
                            <input
                                required
                                type="text"
                                value={description}
                                onChange={(e) => { setDescription(e.target.value) }}
                                placeholder="Enter Description"
                                className='form-control' />
                            <br></br>
                            <button onClick={addProduct} className='btn btn-success btn-sm mt-3 mb-3'>REGISTER AS Seller</button>

                        </div>
                    </div>
                </div>


            </div>

        </>

    )
}

export default AddProduct