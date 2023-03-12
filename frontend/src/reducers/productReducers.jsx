
// export const getAllProductsReducer = (state={products : []}, action) => {
//         switch (action.type) {
//           case 'GET_PRODUCTS_REQUEST':
//             return {
//               ...state,
//               loading: true
//             };
//           case 'GET_PRODUCTS_SUCCESS':
//             return {
//               products: action.payload,
//               loading: false
//             };
//           case 'GET_PRODUCTS_FAILED':
//             return {
//               error: action.payload,
//               loading: false
//             };
//           default:
//             return state;
//         }
//       }
      

      // export const addProductReducer = (state={products : []}, action) => {
      //   switch (action.type) {
      //     case 'ADD_PRODUCTS_REQUEST':
      //       return {
      //         ...state,
      //         loading: true
      //       };
      //     case 'ADD_PRODUCTS_SUCCESS':
      //       return {
      //         products: action.payload,
      //         loading: false
      //       };
      //     case 'ADD_PRODUCTS_FAILED':
      //       return {
      //         error: action.payload,
      //         loading: false
      //       };
      //     default:
      //       return state;
      //   }
      // }
      



export const getAllProductsReducer = (state={products : []}, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'GET_PRODUCTS_SUCCESS':
      return {
        products: action.payload,
        loading: false
      };
    case 'GET_PRODUCTS_FAILED':
      return {
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}