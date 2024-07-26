import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import { Order } from "../_types/order.types";

const checkout = createAsyncThunk(
  "checkout",
  async (payload: any): Promise<Order[]> => {
    try {
      const { data }: { data: AxiosResponse<Order[]> } = await axios.post(
        "/api/v1/orders/create",
        payload
      );

      console.log("Order", data.data);
      return data.data;
    } catch (error: any) {
      console.log("Error", error.response);
      return [];
    }
  }
);

const initialState = {
  data: [] as Order[],
  isLoading: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder.addCase(checkout.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(
        checkout.fulfilled,
        (state, action: PayloadAction<Order[]>) => {
          state.data = action.payload;
          state.isLoading = false;
        }
      ),
      builder.addCase(checkout.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export { checkout };

export const {} = orderSlice.actions;

export default orderSlice.reducer;
