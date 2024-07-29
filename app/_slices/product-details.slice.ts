import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../_types/products.types";
import axios from "axios";

const fetchProductWithId = createAsyncThunk(
  "fetchProductWithId",
  async (pid: string): Promise<Product> => {
    const { data } = await axios.get(`/api/v1/products/${pid}`);

    return data.data;
  }
);

const initialState = {
  data: {} as Product,
  isLoading: true,
};

const productDetailsSLice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    updateProductDetailsData(state, action: PayloadAction<Product>) {
      state.data = action.payload;
    },
    updateProductDetailsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProductWithId.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchProductWithId.fulfilled,
      (state, action: PayloadAction<Product>) => {
        state.data = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(fetchProductWithId.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export { fetchProductWithId };
export const { updateProductDetailsData, updateProductDetailsLoading } =
  productDetailsSLice.actions;
export default productDetailsSLice.reducer;
