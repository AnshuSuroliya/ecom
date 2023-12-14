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
        navigate("/");
    }
    return(
 <div className="modalBackground">
    <div className="modalContainer">
        <div>
        <button className="flex justify-center" onClick={()=> setShowQuickView(false)}>close</button>
        <img align="middle" height="160" width="160" src={singleProduct[0].imageUrl}/>
        <p>{singleProduct[0].title}</p>
        <p>{singleProduct[0].details}</p>
        <h2>{singleProduct[0].color}</h2>
        <h2>{singleProduct[0].brand}</h2>
        <h2>{singleProduct[0].price}</h2>
        <button className="flex justify-center rounded-md bg-indigo-600 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleProduct}>
            Delete</button>
    </div>
</div>
 </div>
    );
}
export default DeleteModal;