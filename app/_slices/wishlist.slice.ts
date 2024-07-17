import axios from "axios";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/app/_store/store";
import { Product } from "../_types/products.types";

export const fetchWishlistProducts = createAsyncThunk(
  "fetchWishlistProducts",
  async () => {
    const response = await axios.get("/api/v1/products/wishlist");
    return response.data.data;
  }
);

export const fetchWishlistProductsWithIds = createAsyncThunk(
  "fetchProductsWithIds",
  async (ids: string[]): Promise<Product[]> => {
    const { data } = await axios.post(
      "/api/v1/products/selected-products",
      ids
    );
    return data.data;
  }
);

export const addToWishlist = createAsyncThunk(
  "addToWishlist",
  async (id: string, { dispatch, getState }) => {
    const { data } = await axios.patch(`/api/v1/products/wishlist/${id}`);

    let { data: wishListItems, products } = (getState() as RootState).wishlist;

    let filteredProducts: Product[] = [] as Product[];
    if (wishListItems.includes(data.data._id)) {
      wishListItems = wishListItems.filter((id) => id !== data.data._id);
      filteredProducts = products.data.filter(
        (item) => item._id !== data.data._id
      );
    } else {
      wishListItems = [...wishListItems, data.data._id];
    }
    dispatch(updateWishlist(wishListItems));
    if (products.data.length > 0)
      dispatch(updateWishlistProducts(filteredProducts));
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

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    updateWishlist(state, action: PayloadAction<string[]>) {
      state.data = action.payload;
    },
    updateWishlistProducts(state, action: PayloadAction<Product[]>) {
      state.products.data = action.payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(fetchWishlistProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchWishlistProducts.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.data = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(fetchWishlistProducts.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(fetchWishlistProductsWithIds.pending, (state) => {
      state.products.isLoading = true;
    });
    builder.addCase(
      fetchWishlistProductsWithIds.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.products.data = action.payload;
        state.products.isLoading = false;
      }
    );
    builder.addCase(fetchWishlistProductsWithIds.rejected, (state) => {
      state.products.isLoading = false;
    });
  },
});

export const { updateWishlist, updateWishlistProducts } = wishlistSlice.actions;

export default wishlistSlice.reducer;
