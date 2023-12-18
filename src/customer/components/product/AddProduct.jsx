import react, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../../user/slices/product";
const AddProduct=()=>{
  const[productdata,setProductData]=useState({});
  const dispatch=useDispatch();
  const navigate=useNavigate();
  
    const getProductData=(e)=>{
      setProductData({...productdata,[e.target.name]:e.target.value})
    }
    const handleSubmit=(event)=>{
      event.preventDefault();
      console.log(productdata);
      dispatch(addProduct(productdata));
      setTimeout(()=>{
        navigate("/");
      },1000)
      
    }
return(
    <div className="flex min-h-full flex-1 flex-col justify-center px-3 py-4 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Add Product
            </h2>
          </div>
          <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-1"  method="POST" onSubmit={handleSubmit}>
            <div >
                <div className="mb-2">
                  <input
                    id="title"
                    name="title"
                    placeholder="title"
                    onChange={getProductData}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div >
                <div className="mb-2">
                  <input
                    id="brand"
                    name="brand"
                    placeholder="Brand"
                    onChange={getProductData}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div >
                <div className="mb-2">
                  <input
                    id="color"
                    name="color"
                    placeholder="Color"
                    onChange={getProductData}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div >
                <div className="mb-2">
                  <input
                    id="imageUrl"
                    name="imageUrl"
                    placeholder="ImageUrl"
                    onChange={getProductData}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div >
                <div className="mb-2">
                  <input
                    id="price"
                    name="price"
                    placeholder="Price"
                    onChange={getProductData}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div >
                <div className="mb-2">
                  <input
                    id="details"
                    name="details"
                    placeholder="details"
                    onChange={getProductData}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div >
                <div className="mb-2">
                  <input
                    id="quantity"
                    name="quantity"
                    placeholder="quantity"
                    onChange={getProductData}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div >
                <div className="mb-2">
                  <input
                    id="category"
                    name="category"
                    placeholder="Category"
                    onChange={getProductData}
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
                  ADD
                </button>
              </div>
              </form>
              </div>
              </div>
);
}
export default AddProduct;