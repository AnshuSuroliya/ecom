
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { jwtDecode } from 'jwt-decode';
import { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link,Navigate,useNavigate} from "react-router-dom";
import { getUser, logout } from '../../../Auth/Auth';
import {cart} from '../../../user/slices/cart';
import { getAllproduct, searchProduct } from '../../../user/slices/product';
import Login from '../../Authorization/login';


export default function Navigation(){
  const jwt=localStorage.getItem("jwt");
  const email=localStorage.getItem("email");
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const result=localStorage.getItem("result");
  const role=localStorage.getItem("role");
  // JSON.stringify(jwt);
  // const decoded=jwtDecode(jwt);
  // console.log(decoded);
  const handleClick=()=>{
if(jwt!=null){
  
  localStorage.clear();
  navigate("/");
}
  }
  // const handleGet=async()=>{
   
  //   if(jwt!=null){
  //     await dispatch(getUser(jwt));
  //   }
  // }
  const handleGet=()=>{
    
  }
  const data={
    email:email
  }

  const searchData=useSelector((state)=>state.product.searchProductData);
  const [searchTerm,setSearchTerm]=useState({});
  const getData=(e)=>{
    setSearchTerm({...searchTerm,[e.target.name]:e.target.value})
  }
  const handleSearch=(event)=>{
    event.preventDefault();
    console.log(searchTerm);
    dispatch(searchProduct(searchTerm));
  }
  //console.log(searchData);
 return (


<div className='relative'>
  <section className="relative mx-auto">
      
    <nav className="flex justify-between bg-gray-900 text-white w-screen">
    
    

      <div className="flex w-full items-center">
      {/* <button className="text-white bg-black-700 hover:bg-black-800 font-medium rounded-lg text-sm px-2 py-5 text-center inline-flex items-center" type="button" data-dropdown-toggle="dropdown"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</button> */}
        <a className="text-2xl font-bold font-heading ml-6" href="#">
          QuitQueue
        </a>
        <div className='flex justify-center ml-40 mr-20 border bg-white text-gray-500 w-8/12 md:w-5/12 rounded-sm'>
          
          <input name="searchTerm" onChange={getData} type="text" placeholder='search Quitqueue.in' className='w-11/12 px-1 focus:outline-0 border-0' ></input>
          <div  onClick={handleSearch}>
          <Link  className="w-2/12 bg-grey-900" to="/searchProduct">
          <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mt-2 mb-2 mx-auto h-6 text-bold">
           <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </Link>
            </div>
        </div>

        {jwt ? 
        
        <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
           Account
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              
                <Link
                  to="/profile"
                 // onClick={handleGet}
                  className= 'block px-4 py-2 text-sm text-gray-700'
                >
                  Your Profile
                </Link>
            </Menu.Item>
            {role=="Seller" || role=="Admin" ?<Menu.Item>
              
                <Link
                  to="/addProduct"
                  //onClick={handleGet}
                  className= 'block px-4 py-2 text-sm text-gray-700'
                >
                  Add Product
                </Link>
            </Menu.Item>:<div></div>}
            {role=="Seller" || role=="Admin" ?<Menu.Item>
              
                <Link
                  to="/deleteProduct"
                  //onClick={handleGet}
                  className= 'block px-4 py-2 text-sm text-gray-700'
                >
                  Delete Product
                </Link>
            </Menu.Item>:<div></div>}
            {role=="Admin" ?<Menu.Item>
              
                <Link
                  to="/showAll"
                  //onClick={handleGet}
                  className= 'block px-4 py-2 text-sm text-gray-700'
                >
                  Show All Users
                </Link>
            </Menu.Item>:<div></div>}
            {role=="User" || role=="Seller"?<Menu.Item>
              
                <Link
                  to="/showOrders"
                  //onClick={handleGet}
                  className= 'block px-4 py-2 text-sm text-gray-700'
                >
                  Your Orders
                </Link>
            </Menu.Item>:<div></div>}
            {role=="Admin" ?<Menu.Item>
              
                <Link
                  to="/showAllOrders"
                  //onClick={handleGet}
                  className= 'block px-4 py-2 text-sm text-gray-700'
                >
                  Show All Orders
                </Link>
            </Menu.Item>:<div></div>}
            <Menu.Item>
              
                <Link
                  to="/"
                  onClick={handleClick}
                  className='block px-4 py-2 text-sm text-gray-700'
                >
                  Sign out
                </Link>
  
            </Menu.Item>
          </Menu.Items>
       </Transition>
      </Menu> 

      //  <div> account </div>
        : <Link className="ml-10 font-bold" to="/signin" >Signin</Link>}
        </div>
        {/* <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li><a class="hover:text-gray-200" href="#">Home</a></li>
          <li><a class="hover:text-gray-200" href="#">Category</a></li>

          <li><a class="hover:text-gray-200" href="#">Collections</a></li>
          <li><a class="hover:text-gray-200" href={"/signin"}>Signin/Register</a></li>
        </ul>
         */}
        
        <div className="xl:flex items-center space-x-5 items-center mt-4 mr-10 mb-2">
         
          <Link className="flex items-center hover:text-gray-200 " to="/cart">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            
          </Link>
         
        
          
        
    
     
      
     </div>
     </nav>
 </section>
</div>

 )
};


