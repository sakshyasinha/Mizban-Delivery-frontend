import api from './api';
import {handleApiError} from './handleApiError';

export const signup = async(userData) => {
    try{
        console.log('userData',{...userData});
        const response = await api.post('auth/register', {json: userData}).json();
        console.log('response:',response);
        return response;
    }catch(error){
       await handleApiError(error);
    }
};


export const login = async (credentials) => {
   
    try{
        const response = await api.post("auth/login",{json: credentials}).json();
        if(response.token){
            localStorage.setItem('token', response.token); // save token
        }
        return response;
    }catch(error){
       await handleApiError(error);
    }
};


export const logout = () =>{
 localStorage.removeItem('token');
}