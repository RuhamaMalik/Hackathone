import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import Logo from '../images/head.png'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../actions/userActions';

const SellerPannel = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginReducer);//15.8
  const dispatch = useDispatch()

  const { currentUser } = userState; //15.8

  return (
    <>
      <nav className="navbar navbar-expand-lg  w-100  shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div className="container-fluid">

          <NavLink className=" navbar-brand position-relative pb-3" to="/">
            <span className='fs-2'><AiOutlineUser />Admin</span>
            <span className='fs-3 '>pannel  </span>

            <img src={Logo} alt="Logo" width="90%" height="60" className="z-index d-block align-text-top position-absolute" />

          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mr-5">
             
              {currentUser ? (
                <div className="dropdown mt-2">
                  <a style={{ color: "rgba(28, 75, 184, 0.903)" }} className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <AiOutlineUser />{currentUser.name}
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a style={{ color: "rgba(28, 75, 184, 0.903)" }} className="dropdown-item" href="#">Orders</a>
                    <a
                      style={{ color: "rgba(28, 75, 184, 0.903)" }}
                      className="dropdown-item" href="/addproduct" ><li>AddProduct</li> </a>
                    <a
                      style={{ color: "rgba(28, 75, 184, 0.903)" }}
                      className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}><li>Log out</li> </a>
                  </div>
                </div>

              ) : (<li className="nav-item">
                <NavLink className="nav nav-link " aria-current="page" to='/sellerpannel'></NavLink>
              </li>)}

             
            </ul>
          </div>
        </div>

      </nav>

      <Outlet />
    </>
  )
}

export default SellerPannel
