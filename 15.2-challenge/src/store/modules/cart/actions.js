export default {
  addProductToCart(context, payload) {
    payload.productInCartIndex = context.getters.findProductInCart(payload.productData.id);
    context.commit('addProductToCart', payload);
  },

  removeProductFromCart(context, payload) {
    payload.productInCartIndex = context.getters.findProductInCart(payload.prodId);
    context.commit('removeProductFromCart', payload);
  }
};