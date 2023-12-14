import { Link } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import { store } from "../../Auth/store";
import { getUser } from "../../user/slices/register";
import UpdateForm from "./UpdateForm";

const User= ()=>{
    
    const dispatch=useDispatch();
    const [showQuickView,setShowQuickView]=useState(false);
    const users=useSelector((state)=>state.register.users)
    const data=localStorage.getItem("email");
    useEffect( ()=>{
       dispatch(getUser(data));
    },[])
    
    
    console.log(users);
    //const user=response.data[0].firstName;


    return (
      <div>
        {showQuickView && <UpdateForm showQuickView={showQuickView} setShowQuickView={setShowQuickView}/>}

        <div className="flex min-h-full flex-1 flex-col justify-center px-3 py-4 lg:px-8">
        
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Personal Information
            </h2>
          </div>
          <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
     
                <div className="mb-2">
                  <p>First Name:  {users && users.firstName}</p>
                </div>
                <div className="mb-2">
                  <p>Last Name:  {users && users.lastName}</p>
                </div>
                <div className="mb-2">
                  <p>Mobile Number:  {users && users.contactNumber}</p>
                </div>
                <div className="mb-2">
                  <p>Gender:  {users && users.gender}</p>
                </div>
                <div className="mb-2">
                  <p>Email:  {users && users.email}</p>
                </div>
                <div className="mb-2 flex justify-center">
                  <button className="rounded bg-indigo-400" onClick={()=>setShowQuickView(true)}>Edit</button>
                </div>

            </div>
        </div>
        </div>
    )
}
export default User;