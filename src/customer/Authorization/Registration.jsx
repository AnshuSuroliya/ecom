import { Password } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { getUser, register } from "../../Auth/Auth";
//import { store } from "../../Auth/store";
import { registerUser } from "../../user/slices/register";

export default function Registration(){
  const dispatch=useDispatch();
 const navigate=useNavigate();
 const [user,setUser]=useState({});
  const {auth}=useSelector(store=>store);
  // useEffect(()=>{
  //   if(jwt){
  //     dispatch(getUser())
  //   }
  // },[jwt,auth.jwt])
  const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(registerUser(user));
        // const data=new FormData(event.currentTarget)
        // const userData={
        //   firstName:data.get("firstName"),
        //   lastName:data.get("lastName"),
        //   email:data.get("email"),
        //   password:data.get("password"),
        //   gender:data.get("gender"),
        //   contactNumber:data.get("contactNumber"),
        //   role:data.get("role")

        // }
        // dispatch(register(userData))
         navigate("/signin");
         console.log("userData",user)
  }
  const getUserData=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})
  };
return(
    <div className="flex min-h-full flex-1 flex-col justify-center px-3 py-4 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Register
            </h2>
          </div>
          <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-1"  method="POST" onSubmit={handleSubmit}>
            <div >
                {/* <label className=" top-0 left-0 block text-sm font-medium text-gray-900  ">
                  First Name
                </label> */}
                <div className="mb-2 border-b border-teal-500">
                  <input
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    onChange={getUserData}
        
                    required
                    className="appearance-none bg-tranparent border-0 w-full rounded-md py-1.5 text-gray-900 shadow-sm leading-tight placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                {/* <label className="block text-sm font-medium leading-6 text-gray-900">
                  Last Name
                </label> */}
                <div className="mb-2 border-b border-teal-500">
                  <input
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    onChange={getUserData}
                    className="appearance-none bg-tranparent border-0 w-full rounded-md py-1.5 text-gray-900 shadow-sm leading-tight placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                
                <div className="mb-2">
                <label for="gender" className="block text-sm font-medium leading-6 text-gray-900">
                  Gender
                </label>
                <select id="gender" onChange={getUserData} name="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
  <option selected name="gender">Select Gender</option>
  <option name="gender" value="Male">Male</option>
  <option value="Female" name="gender">Female</option>
</select>
                  {/* <input
                    id="gender"
                    name="gender"
                    placeholder="Gender"
                    required
                    onChange={getUserData}
                    className="appearance-none bg-tranparent border-0 w-full rounded-md py-1.5 text-gray-900 shadow-sm leading-tight placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                  /> */}
                </div>
              </div>
              <div>
                {/* <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label> */}
                <div className="mb-2 border-b border-teal-500">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    required
                    onChange={getUserData}
                    className="appearance-none bg-tranparent border-0 w-full rounded-md py-1.5 text-gray-900 shadow-sm leading-tight placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                {/* <label className="block text-sm font-medium leading-6 text-gray-900">
                  Contact Number
                </label> */}
                <div className="mb-2 border-b border-teal-500">
                  <input
                    id="contactNumber"
                    name="contactNumber"
                    type="number"
                    maxLength="10"
                    placeholder="Contact Number"
                    required
                    onChange={getUserData}
                    className="appearance-none bg-tranparent border-0 w-full rounded-md py-1.5 text-gray-900 shadow-sm leading-tight placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
  
              <div>
                <div className="flex items-center justify-between">
                  {/* <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label> */}
                </div>
                <div className="mb-2 border-b border-teal-500">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                    onChange={getUserData}
                    className="appearance-none bg-tranparent border-0 w-full rounded-md py-1.5 text-gray-900 shadow-sm leading-tight placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                
                <div className="mb-2">
                <label  for="role" className="block text-sm font-medium leading-6 text-gray-900">
                  Role
                </label>
<select id="role" name="role" onChange={getUserData} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
  <option selected>Choose a Role</option>
  <option name="role" value="User">User</option>
  <option name="role" value="Seller">Seller</option>
</select>
                  {/* <input
                    id="role"
                    type="radio"
                    name="role"
                    value="User"
                    required
                    onChange={getUserData}
                    className=""
                  />
                  <label for="role">User</label>
                  <input
                    id="role"
                    type="radio"
                    name="role"
                    value="Seller"
                    required
                    onChange={getUserData}
                    className="ml-5"
                  />
                  <label for="role">Seller</label> */}

                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </button>
              </div>
            </form>
</div>
</div>
);
}
