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
      state.total += action.payload.totalPrice;
    },
    adjustQuantity: (state, action) => {
      const newTotal = action.payload.quantity * action.payload.productPrice;
      state.total = state.total - action.payload.previousPrice + newTotal;

      const newCartItems = state.products.filter(
        (product) => product._id !== action.payload.productId
      );

      const productItem = state.products.find(
        (product) => product._id === action.payload.productId
      );

      const updatedItem = {
        ...productItem,
        quantity: action.payload.quantity,
        totalPrice: newTotal,
      };

      state.products = [...newCartItems, updatedItem];
    },
  },
});

export const { addProduct, adjustQuantity } = cartSlice.actions;
export default cartSlice.reducer;
