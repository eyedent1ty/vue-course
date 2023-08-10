export default {
  addProductToCart(state, { productInCartIndex, productData }) {
    if (productInCartIndex >= 0) {
      state.cart.items[productInCartIndex].qty++;
    } else {
      const newItem = {
        productId: productData.id,
        title: productData.title,
        image: productData.image,
        price: productData.price,
        qty: 1
      };
      state.cart.items.push(newItem);
    }
    state.cart.qty++;
    state.cart.total += productData.price;
  },

  removeProductFromCart(state, { productInCartIndex }) {
    const prodData = state.cart.items[productInCartIndex];
    state.cart.items.splice(productInCartIndex, 1);
    state.cart.qty -= prodData.qty;
    state.cart.total -= prodData.price * prodData.qty;
  }
};
