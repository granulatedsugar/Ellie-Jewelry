import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0, // how many items in cart from start
    total: 0, //price
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1; // cart
      state.products.push(action.payload);
      state.total += action.payload.totalPrice * action.payload.quantity; // product
    },
    adjustQuantity: (state, action) => {
      state.quantity += action.payload.adjQuantity;
      state.total += action.payload.basePrice * action.payload.adjQuantity;
    },
  },
});

export const { addProduct, adjustQuantity } = cartSlice.actions;
export default cartSlice.reducer;
