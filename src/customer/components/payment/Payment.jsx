import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getOrder, payment } from "../../../user/slices/order";

const Payment=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const userId=localStorage.getItem("userId");
    const [paymentId,setPaymentId]=useState();
    const [referenceId,setReferenceId]=useState();
    const [paymentStatus,setPaymentStatus]=useState();
    const [oData,setOData]=useState();
    const orderData=useSelector((state)=>state.order.orderData);
    const cartData=useSelector((state)=>state.cart.cartData);
    const loading=useSelector((state)=>state.order.isLoading);
    const paymentData=useSelector((state)=>state.order.paymentData);
    
      const location=useLocation();
      const pathNames=location.pathname.split('/').filter((x)=>x);
    
    //console.log(orderData);
    const data={
        userId:userId
    }
    useEffect(()=>{
      // const fetchData=async()=>{
        // try{
        //   const response=await fetch("http://localhost:4500/api/findUserOrders",{
        //     method:"POST",
        //     headers:{
        //       "Authorization":`Bearer ${localStorage.getItem("jwt")}`,
        //       "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify(data)
        //   });
        //   const result=await response.json();
          
           dispatch(getOrder(data));
           
        // }
        // catch(error){
        //   console.error("error fetching data",error);
        // }
        //console.log(orderData);
      // }
      // fetchData();
      
    },[]);
    //console.log(oData);
    const handleClick=()=>{
      dispatch(payment(orderData[0].id));
    }
    console.log(loading);
    if(loading){
      return <h2>loading...</h2>
    }
    return(
    
        <div className="flex min-h-full flex-1 flex-col justify-center px-3 py-4 lg:px-8">
          <div>
            <Link to="/">Home/</Link>
          {pathNames.map((pathname,index)=>{
            const route=`/${pathNames.slice(0,index+1).join('/')}`;
            const isLast=index===pathNames.length-1;
            return(
              <span key={pathname}>
                <Link to={route}>{pathname}</Link>
                {!isLast && ' / '}
              </span>
            );
          })}
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Order Summary
            </h2>
          </div>
          <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
            {orderData.length===0 ? 
            <div>
              <div className="mb-2">
                  <p>Total Amount: {cartData.totalPrice}</p>
              </div>
                <div>
                <button
                  type="submit" 
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleClick}
                >
                  Pay
                </button>
              </div>
            </div>
                :
          <div>
                <div className="mb-2">
                  <p>Expected Delivery Date: {orderData[0].deliveryDate}</p>
                </div>
              
            <div>
                <div className="mb-2">
                  <p>Order Items: {orderData[0].orderItems.map((items)=>{
                    return(
                      <div key={items.id}>
                        <p>{items.product.title}</p>
                        <p>{items.product.price}</p>
                      </div>
                    );
                  })}</p>
                </div>
              </div>
              <div>
                <div className="mb-2">
                  <p>Total Items: {orderData[0].totalItems}</p>
                </div>
              </div>
            <div>
                <div className="mb-2">
                  <p>Total Amount: {cartData.totalPrice}</p>
                </div>
              </div>
            <div >
                <a
                  href={paymentData.paymentUrl}
                  onClick={handleClick}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Pay
                </a>
              </div>
            </div>
}
          </div>
                
        </div>
    );
}
export default Payment;