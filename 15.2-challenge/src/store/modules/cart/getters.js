export default {
  cart(state) {
    return state.cart;
  },

  findProductInCart(state) {
    return (prodId) => {
      return state.cart.items.findIndex((ci) => ci.productId === prodId);
    };
  }
};
