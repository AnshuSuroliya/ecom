import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteCartItem, getCartData, getCartItems } from "../../../user/slices/cart";

const Cart=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const items=useSelector((state)=>state.cart.displayCart);
    const cartData=useSelector((state)=>state.cart.cartData);
    const userId=localStorage.getItem("userId");
    const jwt=localStorage.getItem("jwt");
    const [quantity,setQuantity]=useState(1);
    const increase=()=>{
        setQuantity(quantity+1);
    };
    const decrease=()=>{
        if(quantity>1){
        setQuantity(quantity-1)
        }
    };
    const data={
        userId:userId
    }
    console.log(cartData);
    useEffect(()=>{
        if(jwt!=null){
        dispatch(getCartItems());
        dispatch(getCartData(data));
        }
    },[]);
    // const handleDelete=(id)=>{
    //     const data={
    //         userId:userId,
    //         cartItemId:id
    //     }
    //     dispatch(deleteCartItem(data));
    // }
    console.log(items);
    return (
        <div>
        <Link to="/" className="flex justify-left">Home</Link>
        <div className="flex min-h-full flex-1 flex-col justify-center px-3 py-4 lg:px-8">
            
            <h2 className=" text-2xl font-bold text:color-blue-700 mx-auto" >Shopping Cart</h2>
            {items.length===0  ?(<p className="mx-auto">Your Cart is empty</p>)
            :  <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
                    {items.map(item=>{
                        return(
                        <div key={item.id} className="flex justify-center">
                           <img src={item.product.imageUrl} height="100" width="100"/>
                           <p className="mt-10 ml-10">{item.product.title} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> {item.product.price}</p>
                            <div className="ml-5 mt-10">
                            <button className="ml-3 h-half rounded bg-indigo-400" onClick={()=>[dispatch(deleteCartItem({userId:userId,cartItemId:item.id})),navigate(0)]}>Remove</button>
                            {/* <div>
                                <input type="text" value={quantity} readOnly />
                                <button onClick={increase}>+</button>
                                <button onClick={decrease}>-</button>
                            </div> */}
                            </div>
                        </div>
                        );
                    })}
            
                </div>
                }
            
            <div className="mt-4 mx-auto">
                <p>Total Price:{cartData.totalPrice}</p>
                <p>Total Items:{cartData.totalItems}</p>
            </div>
            <div className="mx-auto">
         <Link to="/cart/checkout" className="mt-10 w-full flex justify-center items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
            Checkout </Link>
            </div>
        </div> 
        </div>
    );
}
export default Cart;