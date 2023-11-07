import axios from 'axios';
import { toast } from 'react-toastify';
import { LOGOUT } from '../redux/actions/types';
import store from '../redux/store';

// Create an instance of axios
const api = axios.create({
  baseURL: 'https://hotdate.onrender.com/api',
  withCredentials:true
});

/*
  NOTE: intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
*/

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      if(localStorage.getItem("token")){
         toast.error("You session is expired. Please login again!", {
        toastId: 'error401',
    })  
      }

      localStorage.clear();
      store.dispatch({ type: LOGOUT });

    }
    return Promise.reject(err);
  }
);

export default api;
