import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../../user/slices/product";

import "./ProductModal.css"
const DeleteModal=({id,showQuickView,setShowQuickView})=>{
    const products=useSelector((state)=>state.product.products)
    const singleProduct=products.filter((product)=>product.id===id);
    console.log("singleProduct",singleProduct);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const jwt=localStorage.getItem("jwt");
    
    const handleProduct=()=>{
        const data={
            productId:id
        }
        if(jwt!=null){
            dispatch(deleteProduct(data));
        }
        setTimeout(()=>{
            navigate("/");
        },1000)
        
    }
    return(
 <div className="modalBackground">
    <div className="modalContainer">
        <div className="flex justify-end">
        <button  onClick={()=> setShowQuickView(false)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</button>
        </div>
        <div className="flex justify-center mt-3">
        <img align="middle" height="160" width="200" src={singleProduct[0].imageUrl}/>
        </div>
        <p className="flex justify-center mt-3">Title: {singleProduct[0].title}</p>
        <p className="flex justify-center">Details: {singleProduct[0].details}</p>
        <h2 className="flex justify-center">Color: {singleProduct[0].color}</h2>
        <h2 className="flex justify-center">Brand: {singleProduct[0].brand}</h2>
        <h2 className="flex justify-center">Price: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>{singleProduct[0].price}</h2>
        <div className="flex justify-center mt-3">
        <button className="flex justify-center rounded-md bg-indigo-600 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleProduct}>
            Delete</button>
            </div>
    
</div>
 </div>
    );
}
export default DeleteModal;