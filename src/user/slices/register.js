import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registerUser=createAsyncThunk("registerUser", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4500/auth/signup",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    });
    try{
        const result=await response.json();
        return result;
    } catch(error){
            rejectWithValue(error);
    }
})
export const getUser=createAsyncThunk("getUser",async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4500/auth/findProfile",{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)

    });
    try{
        const result=response.json();
        return result;
    }catch(error){
        rejectWithValue(error);
    }
})
export const getAllUser=createAsyncThunk("getAllUser",async(args,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4500/auth/findUsers",{
        method:"GET",
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type":"application/json"
        },

    });
    try{
        const result=response.json();
        return result;
    }catch(error){
        rejectWithValue(error);
    }
})
export const deleteUser=createAsyncThunk("deleteUser",async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4500/auth/deleteUser",{
        method:"DELETE",
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
    try{
        const result=response.json();
        return result;
    }catch(error){
        rejectWithValue(error);
    }
})
export const updateUser=createAsyncThunk("updateUser",async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4500/auth/update",{
        method:"PUT",
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
    try{
        const result=response.json();
        return result;
    }catch(error){
        rejectWithValue(error);
    }
})
const registerSlice=createSlice({
    name:"registerSlice",
    initialState:{
        user:[],
        users:[],
        AllUser:[],
        isLoading:false,
        error:null
    },
    extraReducers:{
        [registerUser.pending]:(state)=>{
            state.isLoading=true;
        },
        [registerUser.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.user.push(action.payload)
        },
        [registerUser.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        },
        [getUser.pending]:(state)=>{
            state.isLoading=true;
        },
        [getUser.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.users = action.payload;
        },
        [getUser.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        },
        [getAllUser.pending]:(state)=>{
            state.isLoading=true;
        },
        [getAllUser.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.AllUser = action.payload;
        },
        [getAllUser.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        },
    },
});
export default registerSlice.reducer;