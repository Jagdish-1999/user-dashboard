import axios from "axios";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/app/_store/store";
import { Product } from "../_types/products.types";

const fetchCartProducts = createAsyncThunk("fetchCartProducts", async () => {
  const response = await axios.get("/api/v1/products/cart");
  return response.data.data;
});

const fetchCartProductsWithIds = createAsyncThunk(
  "fetchProductsWithIds",
  async (ids: string[]): Promise<Product[]> => {
    const { data } = await axios.post(
      "/api/v1/products/selected-products",
      ids
    );
    return data.data;
  }
);

const addToCart = createAsyncThunk(
  "addToWishlist",
  async (id: string, { dispatch, getState }) => {
    const { data } = await axios.patch(`/api/v1/products/cart/${id}`);
    let { data: cartItems, products } = (getState() as RootState).cart;

    let filteredProducts: Product[] = [] as Product[];
    if (cartItems.includes(data.data._id)) {
      cartItems = cartItems.filter((id) => id !== data.data._id);
      filteredProducts = products.data.filter(
        (item) => item._id !== data.data._id
      );
    } else {
      cartItems = [...cartItems, data.data._id];
    }
    dispatch(updateCart(cartItems));
    if (products.data.length > 0)
      dispatch(updateCartProducts(filteredProducts));
  }
);

const initialState = {
  data: [] as string[],
  products: {
    data: [] as Product[],
    isLoading: true,
  },
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart(state, action: PayloadAction<string[]>) {
      state.data = action.payload;
    },
    updateCartProducts(state, action: PayloadAction<Product[]>) {
      state.products.data = action.payload;
    },
    updateCartProductsLoading(state, action: PayloadAction<boolean>) {
      state.products.isLoading = action.payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(fetchCartProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchCartProducts.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.data = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(fetchCartProducts.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(fetchCartProductsWithIds.pending, (state) => {
      state.products.isLoading = true;
    });
    builder.addCase(
      fetchCartProductsWithIds.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.products.data = action.payload;
        state.products.isLoading = false;
      }
    );
    builder.addCase(fetchCartProductsWithIds.rejected, (state) => {
      state.products.isLoading = false;
    });
  },
});

export { fetchCartProducts, fetchCartProductsWithIds, addToCart };

export const { updateCart, updateCartProducts, updateCartProductsLoading } =
  cartSlice.actions;

export default cartSlice.reducer;
