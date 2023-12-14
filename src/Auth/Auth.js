import axios from "axios"
import { API_URL } from "../config/Appconfig";
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./AuthType";
const token=localStorage.getItem("jwt");
const registerRequest=()=>({type:REGISTER_REQUEST});
const registerSuccess=(user)=>({type:REGISTER_SUCCESS,payload:user});
const registerFailure=(error)=>({type:REGISTER_FAILURE,payload:error});
export const register=(userData)=>async(dispatch)=>{
        dispatch(registerRequest());
        try{
            const response=await axios.post(`${API_URL}/auth/signup`,userData)
            const user=response.data;
            dispatch(registerSuccess);
        }
        catch(error){
                dispatch(registerFailure(error.message));
        }
}
const loginRequest=()=>({type:LOGIN_REQUEST});
const loginSuccess=(user)=>({type:LOGIN_SUCCESS,payload:user});
const loginFailure=(error)=>({type:LOGIN_FAILURE,payload:error});
export const login=(userData)=>async(dispatch)=>{
    dispatch(loginRequest());
        try{
            const response=await axios.post(`${API_URL}/auth/signin`,userData)
             console.log(JSON.stringify(response));
            const jwt=response.data.jwt;
            const role=response.data.role;
            
            const userId=response.data.userId;
            if(jwt){
                //console.log(jwt);
                localStorage.setItem("jwt",jwt);
                localStorage.setItem("userId",userId);
                localStorage.setItem("role",role);
               
            }
            dispatch(loginSuccess);
        }
        catch(error){
                dispatch(loginFailure(error.message));
                alert("Wrong Email or Password");
        }
}
const getUserRequest=()=>({type:GET_USER_REQUEST});
const getUserSuccess=(user)=>({type:GET_USER_SUCCESS,payload:user});
const getUserFailure=(error)=>({type:GET_USER_FAILURE,payload:error});

export const getUser=(jwt)=>async(dispatch)=>{
    dispatch(getUserRequest());
        try{
            const response=await axios.get(`${API_URL}/auth/findUsers`,{
            
            headers:{
                "Authorization":`Bearer ${jwt}`
            }
        })
            //console.log(response);
            const user=response.data;
            dispatch(getUserSuccess(user));
            
        }
        catch(error){
                dispatch(getUserFailure(error.message));
        }
}
export const logout=()=>(dispatch)=>{
    dispatch({type:LOGOUT,payload:null})
    localStorage.clear();
}