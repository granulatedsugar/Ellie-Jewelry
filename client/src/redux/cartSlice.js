import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0, // how many items in cart from start
  total: 0, //price
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0, // how many items in cart from start
    total: 0, //price
  },
  reducers: {
    reset: () => initialState,
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
    removeProduct: (state, action) => {
      const newCartItems = state.products.filter(
        (product) => product._id !== action.payload.productId
      );

      state.products = [...newCartItems];
      state.quantity -= 1;
      state.total -= action.payload.previousPrice;
    },
  },
});

export const { addProduct, adjustQuantity, reset, removeProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
