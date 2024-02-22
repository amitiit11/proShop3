export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

export const updateCart = (state) => {
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
      localStorage.setItem('cart', JSON.stringify(state));
      return state;
}