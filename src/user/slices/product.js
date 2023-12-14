import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//const jwt=localStorage.getItem("jwt");
export const addProduct=createAsyncThunk("addProduct",async(data,{rejectWithValue})=>{
    const response =await fetch("http://localhost:4500/api/addProduct",{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("jwt")}`,
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
export const getAllproduct = createAsyncThunk("getAllproduct",async(args,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4500/api/products");
    //     method:"GET",
    //     headers:{
    //         "Authorization":`Bearer ${localStorage.getItem("jwt")}`
    //     },
    // });
    try{
        //console.log(response);
        const result=await response.json();
        console.log(result);
        return result;
        
    }catch(error){
        rejectWithValue(error);
    }

});
export const searchProduct = createAsyncThunk("searchProduct",async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4500/api/search",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
         
    try{
        console.log(response);
        const result=await response.json();
        console.log(result);
        return result;
        
    }catch(error){
        rejectWithValue(error);
    }

});
export const getProductById=createAsyncThunk("getProductById",async(data,{rejectWithValue})=>{
    const response =await fetch("http://localhost:4500/api/findProduct/",{
        method:"GET",
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("jwt")}`,
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
export const deleteProduct=createAsyncThunk("deleteProduct",async(data,{rejectWithValue})=>{
    const response =await fetch("http://localhost:4500/api/deleteProduct",{
        method:"DELETE",
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("jwt")}`,
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
 const getProduct=createSlice({
    name:"getProduct",
    initialState:{
        product:[],
        products:[],
        productbyId:[],
        searchProductData:[],
        error:null,
        isLoading:false
    },
    extraReducers:{
        [getAllproduct.pending]:(state)=>{
            state.isLoading=true;
        },
        [getAllproduct.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.products = action.payload;
            
        },
        [getAllproduct.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        },
        [addProduct.pending]:(state)=>{
            state.isLoading=true;
        },
        [addProduct.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.product.push(action.payload);
            
        },
        [addProduct.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        },
        [getProductById.pending]:(state)=>{
            state.isLoading=true;
        },
        [getProductById.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.productbyId=action.payload;
            
        },
        [getProductById.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        },
        [searchProduct.pending]:(state)=>{
            state.isLoading=true;
        },
        [searchProduct.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.searchProductData=action.payload;
            
        },
        [searchProduct.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        },


    }
})
export default getProduct.reducer;