import axios from "axios"
//15.1
export const registerUser = (user)=>async dispatch => {
    dispatch({type: 'USER_REGISTER_REQUEST'})
    try {
     const response =await   axios.post('/api/users/register', user)
     console.log(response)
        dispatch({type: 'USER_REGISTER_SUCCESS'})
        

    } catch (error) {
        dispatch({type: 'USER_REGISTER_FAILED', payload:error})
    }
}



export const loginUser = (email, password) => async (dispatch) => {
    dispatch({ type: "USER_LOGIN_REQUEST" });
    try {
      const response = await axios.post("/api/users/login", { email, password });
      dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    
      localStorage.setItem("currentUser", JSON.stringify(response.data));
    if(response.data.type === "seller"){
      window.location.href= '/sellerpanel'
    }else{
       window.location.href= '/'

    }
    } catch (error) {
      dispatch({ type: "USER_LOGIN_FAILED", payload: error });
    }
  };


  //16.2
 export const logoutUser = () => dispatch => {
  localStorage.removeItem('currentUser')  
  window.location.href= '/login'

 }