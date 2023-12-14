
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const jwt=localStorage.getItem("jwt");
export const cart=createAsyncThunk("cart",async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4500/api/createcart",{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${jwt}`,
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
    try{
        const result=await response.json();
        const res=localStorage.setItem("result",result);
        //console.log(result);
        return result;
    }catch(error){
        rejectWithValue(error);
    }
});
export const cartItems=createAsyncThunk("cartItems",async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4500/api/addcartitem",{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${jwt}`,
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
    try{
        const result=await response.json();
        return result;
    }catch(error){
        rejectWithValue(error);
    }
});
export const getCartItems=createAsyncThunk("getCartItems",async(args,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4500/api/displayCart",{
        headers:{
            "Authorization":`Bearer ${jwt}`,
            "Content-Type":"application/json"
        },
    });
    try{
        const result=await response.json();
        console.log(result);
        return result;
    }catch(error){
        rejectWithValue(error);
    }
});
export const getCartData=createAsyncThunk("getCartData",async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4500/api/cartData",{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${jwt}`,
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
    try{
        const result=await response.json();
        console.log(result);
        return result;
    }catch(error){
        rejectWithValue(error);
    }
});
export const deleteCart=createAsyncThunk("deleteCart",async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4500/api/deleteCart",{
        method:"Delete",
        headers:{
            "Authorization":`Bearer ${jwt}`,
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
    try{
        const result=await response.json();
        return result;
    }catch(error){
        rejectWithValue(error);
    }
});
export const deleteCartItem=createAsyncThunk("deleteCartItem",async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4500/api/deleteCartItem",{
        method:"DELETE",
        headers:{
            "Authorization":`Bearer ${jwt}`,
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
    try{
        const result=await response.json();
        console.log(result);
        return result;
    }catch(error){
        rejectWithValue(error);
    }
});
const addtoCart=createSlice({
    name:"addtoCart",
    initialState:{
        cart:[],
        cartItems:[],
        displayCart:[],
        cartData:[],
        error:null,
        isLoading:false
    },
    extraReducers:{
        [cart.pending]:(state)=>{
            state.isLoading=true;
        },
        [cart.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.cart=action.payload;
        },
        [cart.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        },
        [cartItems.pending]:(state)=>{
            state.isLoading=true;
        },
        [cartItems.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.cartItems = action.payload;
        },
        [cartItems.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        },
        [getCartItems.pending]:(state)=>{
            state.isLoading=true;
        },
        [getCartItems.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.displayCart = action.payload;
        },
        [getCartItems.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        },
        [getCartData.pending]:(state)=>{
            state.isLoading=true;
        },
        [getCartData.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.cartData = action.payload;
        },
        [getCartData.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        },
    }
})
export default addtoCart.reducer;