import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux_slices/cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

export default appStore;