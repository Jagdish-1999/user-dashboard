import { Product, Products } from "@/app/_types/products.types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async (): Promise<Products | null> => {
    const response: AxiosResponse<Products | null> =
      await axios.get("/api/v1/products");
    return response.data;
  }
);

const initialState = {
  data: [] as Product[],
  isLoading: true,
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = action.payload.data;
      }
    );
    builder.addCase(fetchProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export { fetchProducts };

export const {} = productSlice.actions;

export default productSlice.reducer;
