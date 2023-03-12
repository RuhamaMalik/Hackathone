
import axios from 'axios'
// 5.1
export const getAllProducts = () =>async dispatch => {
    //actions describe that what happened in your application e.g buyBook/customer
    const action = { type: 'GET_PRODUCTS_REQUEST' };
    dispatch(action)

    try {

        const response = await axios.get('/api/products/getallproducts')
        console.log(response);
      dispatch({ type: 'GET_PRODUCTS_SUCCESS' , payload : response.data})

    }catch(err) {
        dispatch({ type: 'GET_PRODUCTS_FAILED' , payload : err})
        console.log(err)
    }


}

// import axios from 'axios'

// export const getAllProducts = () => async dispatch => {
//   const action = { type: 'GET_PRODUCTS_REQUEST' };
//   dispatch(action);

//   try {
//     const response = await axios.get('/api/products/getallproducts');
//     dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: response.data });
//   } catch (err) {
//     dispatch({ type: 'GET_PRODUCTS_FAILED', payload: err });
//     console.log(err);
//   }
// };


export const  addProductAction = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: 'PRODUCT_ADD_REQUEST' });

    
    

    const { data } = await axios.post('/api/products/addproducts', product);

    dispatch({
      type: 'PRODUCT_ADD_SUCCESS',
      payload: data,
    });
    console.log("success");
  } catch (error) {
    dispatch({
      type: 'PRODUCT_ADD_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });

    console.log("error");
  }
};
