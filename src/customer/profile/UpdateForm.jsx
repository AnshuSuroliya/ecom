import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../user/slices/register";
import "./Profile.css"

const UpdateForm=({showQuickView,setShowQuickView})=>{
    const [data,setData]=useState();
    const email=localStorage.getItem("email");
   const dispatch=useDispatch();
   const navigate=useNavigate();
    const getData=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const updatedata={
            oldEmail:email,
            email:data.email,
            contactNumber:data.contactNumber
        }
        console.log(updatedata);
        dispatch(updateUser(updatedata));
        localStorage.clear();
        navigate("/signin")
    }
return(  
        <div className="modalProfile">
        <div className="modalProfileContainer">
        <button className="flex justify-center" onClick={()=> setShowQuickView(false)}>close</button>
        <form method="POST" onSubmit={handleSubmit}>
            <div>
        <input type="text" id="email" name="email" placeholder="New Email" onChange={getData}/>
        </div>
        <div>
        <input type="number" id="contactNumber" name="contactNumber" placeholder="New Contact Number" maxLength="10" onChange={getData}/>
        </div>
        <div className="flex justify-center mt-5">
        <button type="Submit" className="rounded bg-indigo-400">Submit</button>
        </div>
        </form>
    </div>
    </div>
);
}
export default UpdateForm;