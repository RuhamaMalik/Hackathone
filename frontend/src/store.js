// import { applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import  { composeWithDevTools } from 'redux-devtools-extension';
// import { getAllProductsReducer } from './reducers/productReducers';
// import { configureStore , getDefaultMiddleware} from '@reduxjs/toolkit';





// const rootReducer = combineReducers({
//   products: getAllProductsReducer,
//   // Other reducers...
// });

// const initialState = {};
// const composeEnhansers = composeWithDevTools({})
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: [...getDefaultMiddleware(), thunk],
//   preloadedState: initialState,
//   enhancers: composeEnhansers(applyMiddleware(thunk)),
// });

// export default store;


import { combineReducers } from "redux";
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { addProductReducer, getAllProductsReducer } from "./reducers/productReducers";
import  {cartReducer}  from "./reducers/cartReducer";
import { loginReducer, registerUserReducer } from "./reducers/userReducer";
import { placeOrderReducer } from "./reducers/orderReducer";

const rootReducer = combineReducers({
  getAllProductsReducer : getAllProductsReducer,
  cartReducer : cartReducer ,//10.3
  registerUserReducer :registerUserReducer, //15.3
  loginReducer :loginReducer,
  placeOrderReducer : placeOrderReducer,
  // addProductReducer : addProductReducer
})

// 11.1
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser =localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
 cartReducer:{
  cartItems : cartItems
 },
 loginReducer : {
  currentUser : currentUser
 }
}


const composeEnhansers = composeWithDevTools({})
const store = createStore(rootReducer, initialState, composeEnhansers(applyMiddleware(thunk)))

export default store;