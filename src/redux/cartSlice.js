import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [], // {id: 2, title:'iphone, price:'price',qty: 1}
  count: 0,
  totalPrice: 0
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProd(state, action) {
      const filterProd = state.products.filter(
        (prod) => prod.id === action.payload.id
      );
      const found = state.products.includes(filterProd[0]);
      const foundIndex = state.products.findIndex(
        (prod) => prod.id === action.payload.id
      );
      if (!found) {
        state.products.push(action.payload);
        state.count = state.count + 1;
        state.totalPrice += action.payload.price;
      } else {
        state.count += 1;
        state.products[foundIndex].qty += 1;
        state.products[foundIndex].subtotal += action.payload.price;
        state.totalPrice += action.payload.price;
        console.log(found);
      }
    },
    incQty (state, action) {
      const filterProd = state.products.filter(
        (prod) => prod.id === action.payload.id
      );
      const found = state.products.includes(filterProd[0]);
      if (found) {
        state.count += 1;
        const foundIndex = state.products.findIndex(
          (prod) => prod.id === action.payload.id
        );
        state.products[foundIndex].qty += 1;
        state.products[foundIndex].subtotal += action.payload.price;
        state.totalPrice += action.payload.price;
        console.log(found);
      } else {
        state.products.push(action.payload);
        state.count = state.count + 1;
        state.totalPrice += action.payload.price;
      }
    },
    decQty (state, action) {
      const filterProd = state.products.filter(
        (prod) => prod.id === action.payload.id
      );
      const found = state.products.includes(filterProd[0]);
      const foundIndex = state.products.findIndex(
        (prod) => prod.id === action.payload.id
      );
      if (found && state.products[foundIndex].qty >= 1) {
        state.count -= 1;
        state.products[foundIndex].qty -= 1;
        state.products[foundIndex].subtotal -= action.payload.price;
        state.totalPrice -= action.payload.price;
        console.log(found);
      }
      // } else if (!found && state.count > 0) {
      //   state.products.push(action.payload);
      //   state.count = state.count - 1;
      //   state.totalPrice -= action.payload.price;
      // }
    }

  },
});

export default cartSlice.reducer;

export const { addProd, incQty, decQty } = cartSlice.actions;
