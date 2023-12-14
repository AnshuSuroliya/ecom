import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slices/login";
import registerReducer from "../slices/register";
import getProductReducer from "../slices/product";
import cartReducer from "../slices/cart";
import orderReducer from "../slices/order";

export const store=configureStore({
    reducer:{
        register:registerReducer,
        login:loginReducer,
        product:getProductReducer,
        cart:cartReducer,
        order:orderReducer
    }
});