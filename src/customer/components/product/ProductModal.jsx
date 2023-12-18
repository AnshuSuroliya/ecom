import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartItems } from "../../../user/slices/cart";
import "./ProductModal.css"
const ProductModal=({id,showQuickView,setShowQuickView})=>{
    const products=useSelector((state)=>state.product.products)
    const singleProduct=products.filter((product)=>product.id===id);
    console.log("singleProduct",singleProduct);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const jwt=localStorage.getItem("jwt");
    const userId=localStorage.getItem("userId");
    const handleCart=()=>{
        const data={
            userId:userId,
            productId:id,
            quantity:1
        }
        if(jwt!=null){
            dispatch(cartItems(data));
            
        }
        else {
            navigate("/signin");
        }
        setShowQuickView(false);
    }
    return(
 <div className="modalBackground">
    <div className="modalContainer">
        <div className="flex justify-end mb-4">
        <button  onClick={()=> setShowQuickView(false)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</button>
        </div>
        <div className="flex justify-center">
        <img align="middle" height="160" width="200" src={singleProduct[0].imageUrl} className="mb-4 flex justify-center"/>
        </div>
        <div className="flex justify-center">
        <p>{singleProduct[0].title}</p>
        </div>
        <p className="flex justify-center">Details:{singleProduct[0].details}</p>
        <h2 className="flex justify-center">Color:{singleProduct[0].color}</h2>
        <h2 className="flex justify-center">Brand:{singleProduct[0].brand}</h2>
        <h2 className="flex justify-center">Price: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>{singleProduct[0].price}</h2>
        <div className="flex justify-center mt-2">
        <button className="rounded-md bg-indigo-600 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleCart}>
            Add to Cart</button>
            </div>
            
    
</div>
 </div>
    );
}
export default ProductModal;