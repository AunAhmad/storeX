import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  count: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProd(state, action) {
      state.products.push(action.payload);
      state.count = state.count + 1;
    },
  },
});

export default cartSlice.reducer;

export const { addProd } = cartSlice.actions;
