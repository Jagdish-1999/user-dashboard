import cartSlice from "@/app/_slices/cart.slice";
import productSlice from "@/app/_slices/product.slice";
import wishlistSlice from "@/app/_slices/wishlist.slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import orderSlice from "../_slices/order.slice";
import productDetailsSlice from "../_slices/product-details.slice";

const rootReducers = combineReducers({
  products: productSlice,
  productDetails: productDetailsSlice,
  wishlist: wishlistSlice,
  cart: cartSlice,
  order: orderSlice,
});

const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();
export { store, useAppDispatch, useAppSelector };
