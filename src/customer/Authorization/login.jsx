import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getUser, login } from "../../Auth/Auth";
import {cart} from "../../user/slices/cart";
import { loginUser } from "../../user/slices/login";
import Registration from "./Registration"

export default function Login() {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  // const [userLogin,setUserLogin]=useState({});
  // const getLogin=(e)=>{
  //   setUserLogin({...userLogin,[e.target.name]:e.target.value})
  //   console.log(userLogin);
  // };
  const  handleSubmit= async (event)=>{
    event.preventDefault();

        const data=new FormData(event.currentTarget)
        const userData={
          email:data.get("email"),
          password:data.get("password"),
          
        }
      localStorage.setItem("email",userData.email);
      try{
         await dispatch(login(userData))
      //  dispatch(loginUser(userData));
        const jwt=localStorage.getItem("jwt");
        console.log("userData",userData)
        if(jwt!=null){
          //const decoded=jwtDecode(jwt);
          //decoded.json();
          //console.log(JSON.stringify(decoded)+"ssdsjx");
          console.log("already have jwt");
          
          const data={
            email:userData.email
          }
          const result=localStorage.getItem("result");
          if(result==null){
          dispatch(cart(data));
          }
          navigate("/");                                                                                                               
        }
      }
      catch(error){
          alert("Wrong Email or Password");
      }
  }


    return (
      <>
    
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            /> */}
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    //onChange={getLogin}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />

                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  {/* <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div> */}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                   // onChange={getLogin}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit" 
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Register
              </Link>
            </p>
          </div>
        </div>
      </>
    );
  }
  