import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginUser=createAsyncThunk("loginUser", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4500/auth/signin",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    });
    try{
        //console.log(data);
        const result=response;
        console.log(result);
        //console.log(result);
        //localStorage.setItem("jwt",result);
        return result;
    } catch(error){
            rejectWithValue(error);
    }
})
const loginSlice=createSlice({
    name:"loginSlice",
    initialState:{
        jwt:null,
        isLoading:false,
        error:null
    },
    extraReducers:{
        [loginUser.pending]:(state)=>{
            state.isLoading=true;
        },
        [loginUser.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.jwt=action.payload;
        },
        [loginUser.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        },
    },
});
export default loginSlice.reducer;