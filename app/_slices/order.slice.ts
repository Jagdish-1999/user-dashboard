import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Orders } from "../orders/_types/order.types";

const fetchOrders = createAsyncThunk(
  "fetchOrders",
  async (): Promise<Orders[]> => {
    const { data } = await axios.get("/api/v1/orders");
    return data.data;
  }
);

const initialState = {
  data: [] as Orders[],
  isLoading: true,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchOrders.fulfilled,
      (state, action: PayloadAction<Orders[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(fetchOrders.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export { fetchOrders };
export const {} = orderSlice.actions;
export default orderSlice.reducer;
