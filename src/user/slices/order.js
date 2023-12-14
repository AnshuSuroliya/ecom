import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const jwt=localStorage.getItem("jwt");
export const createOrder=createAsyncThunk("createOrder",async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4500/api/createOrder",{
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
export const getOrder=createAsyncThunk("getOrder",async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4500/api/findUserOrders",{
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
export const showOrder=createAsyncThunk("showOrder",async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4500/api/showOrders",{
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
export const showAllOrder=createAsyncThunk("showAllOrder",async(args,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4500/api/findAllOrders",{
        method:"GET",
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
export const payment=createAsyncThunk("payment",async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4500/api/payment",{
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
const order=createSlice({
    name:"order",
    initialState:{
        orders:[],
        orderData:[],
        showOrderData:[],
        showAllData:[],
        paymentData:[],
        error:null,
        isLoading:false
    },
    extraReducers:{
        [createOrder.pending]:(state)=>{
            state.isLoading=true;
        },
        [createOrder.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.orders.push(action.payload);
        },
        [createOrder.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        },
        [getOrder.pending]:(state)=>{
            state.isLoading=true;
        },
        [getOrder.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.orderData=action.payload;
        },
        [getOrder.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        },
        [payment.pending]:(state)=>{
            state.isLoading=true;
        },
        [payment.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.paymentData=action.payload;
        },
        [payment.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        },
        [showOrder.pending]:(state)=>{
            state.isLoading=true;
        },
        [showOrder.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.showOrderData=action.payload;
        },
        [showOrder.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        },
        [showAllOrder.pending]:(state)=>{
            state.isLoading=true;
        },
        [showAllOrder.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.showAllData=action.payload;
        },
        [showAllOrder.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        },
    }
})
export default order.reducer;