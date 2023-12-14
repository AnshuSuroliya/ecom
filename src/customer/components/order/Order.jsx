import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createOrder } from "../../../user/slices/order";
const Order=()=>{
    const [address,setAddressData]=useState({});
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const userId=localStorage.getItem("userId");
    const location=useLocation();
      const pathNames=location.pathname.split('/').filter((x)=>x);
    const addressData=(e)=>{
        setAddressData({...address,[e.target.name]:e.target.value});
    }
    const data={
        userId:userId,
        streetAddress:address.streetAddress,
        city:address.city,
        state:address.state,
        zipCode:address.zipCode
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(createOrder(data));
        navigate("/cart/checkout/payment");
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
              Fill Address
            </h2>
          </div>
          <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-1"  method="POST" onSubmit={handleSubmit}>
            <div >
                <div className="mb-2">
                  <input
                    id="streetAddress"
                    name="streetAddress"
                    placeholder="Street Address"
                    onChange={addressData}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div >
                <div className="mb-2">
                  <input
                    id="city"
                    name="city"
                    placeholder="City"
                    onChange={addressData}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div >
                <div className="mb-2">
                  <input
                    id="state"
                    name="state"
                    placeholder="State"
                    onChange={addressData}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div >
                <div className="mb-2">
                  <input
                    id="zipCode"
                    name="zipCode"
                    placeholder="Zipcode"
                    onChange={addressData}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
              </form>
        </div>
     </div>
)
}
export default Order;