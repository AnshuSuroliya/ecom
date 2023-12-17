import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cartItems } from "../../../user/slices/cart";
import { getAllproduct } from "../../../user/slices/product";
import ProductModal from "./ProductModal";

const Product=()=>{
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [product,setProduct]=useState({});
  const [id,setId]=useState();
  const [showQuickView,setShowQuickView]=useState(false);
  const products=useSelector((state)=>state.product.products);
  const user=useSelector((state)=>state.user)
  const userId=localStorage.getItem("userId");
  useEffect(()=>{
      console.log(localStorage.getItem("jwt"));
     dispatch(getAllproduct());
     
  },[]);
  console.log(products);
  
  // const handleClick=(id)=>{
  //   localStorage.setItem("productId",id);
  //   console.log(id);
  // }
  // const handleCart=(proId)=>{
  //     //console.log(event);
  //     const data={
  //       userId:userId,
  //       productId:proId,
  //       quantity:1 
  //     }
  //     console.log(data);
  //     dispatch(cartItems(data));
  // }
    return (
   
      <div className="bg-white" >
        <div className="mx-auto max-w-xl  py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {showQuickView && <ProductModal id={id} showQuickView={showQuickView} setShowQuickView={setShowQuickView}/>}
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            { products.map(product=>{ 
              return(
                  
                  <div key= {product.id} className="group relative shadow-md p-2">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={product.imageUrl}
                        //alt={product.imageAlt}
                        className="object-fill object-center lg:h-full lg:w-full fit" 
                      />
                     
                    </div>
                    <div className="mt-4 flex justify-between">
                      {/* <div className="absolute z-20">
                       
                      <button className="bg-gray-400 " onClick={toggleQuickView}>Quick View</button>
                      {showQuickView && (
                        <div className="quick-view-modal">
                          <h2>{product.title}</h2>
                          <p>{product.details}</p>
                          <p>Price:{product.price}</p>
                          <button onClick={toggleQuickView}>Close</button>

                        </div>
                      )}
                      </div> */}
                       <div>
                        <h3 className="text-sm text-gray-700">
                            <button onClick={()=>[setId(product.id),setShowQuickView(true)]}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.title}
                          </button>
                        </h3>
                        
                        {/* <div className="absolute">
                        <button className="bg-indigo-500 rounded text-sm" onClick={handleCart(product.id)}>Add to Cart</button>
                        </div> */}
                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                        </div>
                      <p className="text-sm font-medium text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {product.price}</p>
                        
                    </div>
                  </div>
            );}
            )}
          </div>
        </div>
      </div>
    )
  }
  export default Product;