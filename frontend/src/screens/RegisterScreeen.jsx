import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions.js'
import Loading from '../components/Loading.jsx';
import Error from '../components/Error.jsx';
import Success from '../components/Success.jsx';
import { useNavigate } from 'react-router';
import Navbar from '../components/Navbar.jsx';
const RegisterScreeen = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [contact, setContact] = useState("");
    const [type, setType] = useState("");
    const registerState = useSelector(state => state.registerUserReducer)
    const { error, loading, success } = registerState
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        if (success) {
            navigate('/login');
        }
    }, [success, navigate]);





    
    const register = () => {
        if (password != cpassword) {
            alert("password not matched")
        } else {
            const user = {
                name,
                email,
                contact,
                password,
                type
            }
            console.log(user)
            dispatch(registerUser(user))
        }

    }


    return (

        <>    
        <Navbar />
        
            <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-start shadow p-3 mb-5 bg-white rounded">

                    {loading && (<Loading />)}
                    {success && <Success success="User Register Successfully" />}
                    {error && <Error error="Email Already Register" />}
                    <h2 className='text-center m-2' style={{ fontSize: '35px' }}>Register</h2>
                    <div>
                        <input
                            required
                            type="text"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            placeholder='Your Name'
                            className='form-control' />
                        <input required
                            type="text"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            placeholder='Your Email'
                            className='form-control' />
                        <input
                            required
                            type="text"
                            value={contact}
                            onChange={(e) => { setContact(e.target.value) }}
                            placeholder='Your Contact'
                            className='form-control' />
                        <input required
                            type="text"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            placeholder='Your Password'
                            className='form-control' />
                        <input required
                            type="text"
                            value={cpassword}
                            onChange={(e) => { setCpassword(e.target.value) }}
                            placeholder='Confirm Password'
                            className='form-control' />
                        <div className="dropdown">

                            <select onChange={(e) => { setType(e.target.value) }} class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected >Choose Type</option>
                                <option value="seller" >Seller</option>
                                <option value="buyer">Buyer</option>
                            </select>
                        </div>
                        <br></br>
                        <button onClick={register} className='btn btn-success btn-sm mt-3 mb-3'>REGISTER AS Seller</button>

                        <br />  <a style={{ color: 'rgba(28, 75, 184, 0.903)', textDecoration: 'none' }} href="/login">Click Here to Login</a>
                    </div>
                </div>
            </div>


        </div>

        </>

    )
}

export default RegisterScreeen