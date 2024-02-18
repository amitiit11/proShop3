import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((x) => x._id === item._id);

      if (existingItem) {
        state.cartItems = state.cartItems((x) =>
          x._id === existingItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      state.itempPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );

      state.shippingPrice = addDecimals(
        (state.itempPrice > 100 ? 0 : 10).toFixed(2)
      );
      // 15 % tax
      state.taxPrice = addDecimals(
        Number((state.itempPrice * 0.15).toFixed(2))
      );
      state.totalprice = addDecimals(
        (
          Number(state.itempPrice) +
          Number(state.shippingPrice) +
          Number(state.taxPrice)
        ).toFixed(2)
      );
    },
  },
});

export const {addToCart}  = cartSlice.actions;
export default cartSlice.reducer;
