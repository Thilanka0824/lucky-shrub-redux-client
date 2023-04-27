import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
        cart: cartReducer,
    }
})
