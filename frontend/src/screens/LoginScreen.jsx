// import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import {loginUser} from '../actions/userActions.js'
// const LoginScreen = () => {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [errorMessage, setErrorMessage] = useState('');
//     const dispatch = useDispatch();
//     const login = (event) => {
//       event.preventDefault();
//     dispatch(loginUser({ email, password })).then((response) => {
//       if (response.success) {
//         // Redirect to home page
//         window.location.href = '/';
//       } else {
//         setErrorMessage(response.message);
//       }
//     });
//     //     if (password != cpassword) {
//     //         alert("password not matched")
//     //     } else {
//     //         const user = {
//     //             name,
//     //             email,
//     //             password
//     //         }
//     //         console.log(user)
//     //         dispatch(registerUser(user))
//     //     }

//      }


//     return (
//         <div>
//             <div className="row justify-content-center mt-5">
//                 <div className="col-md-5 mt-5 text-start">
//                     <h2 className='text-center m-2' style={{ fontSize: '35px' }}>Register</h2>
//                     <div>

//                         <input required
//                             type="text"
//                             value={email}
//                             onChange={(e) => { setEmail(e.target.value) }}
//                             placeholder='Your Email'
//                             className='form-control' />
//                         <input required
//                             type="text"
//                             value={password}
//                             onChange={(e) => { setPassword(e.target.value) }}
//                             placeholder='Your Password'
//                             className='form-control' />
//                         <button onClick={login} className='btn btn-success btn-sm mt-3 '>Login</button>
//                     </div>
//                 </div>
//             </div>


//         </div>
//     )
// }

// export default LoginScreen ;




import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../actions/userActions.js';
import Loading from '../components/Loading.jsx';
import Error from '../components/Error.jsx';
import Navbar from '../components/Navbar.jsx';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginState = useSelector(state => state.loginReducer)
  const { error, loading } = loginState

  const dispatch = useDispatch();
  //15.7

  const login = () => {
    dispatch(loginUser(email, password));
  };

  return (

    <> 
    <Navbar />
    
       <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-start shadow p-3 mb-5 bg-white rounded">
          <h2 className="text-center m-2" style={{ fontSize: '35px' }}>
            Login
          </h2>

          {loading && (<Loading />)}
          {error && (<Error error="Invalid Cradentials" />)}

          <div>
            <input
              required
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="form-control"
            />
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your Password"
              className="form-control"
            />
            <button onClick={login} className="btn btn-success btn-sm mt-3 mb-3 ">
              LOGIN
            </button> <br /> <a style={{ color: 'rgba(28, 75, 184, 0.903)', textDecoration: 'none' }} href="/register">Click Here to Register</a>
          </div>
        </div>
      </div>
    </div>


    </>

  );
};

export default LoginScreen;

