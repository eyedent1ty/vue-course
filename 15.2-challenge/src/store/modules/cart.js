export default {
  namespaced: true,

  state() {
    return {
      items: [],
      total: 0,
      qty: 0
    };
  },
  
  mutations: {
    addProductToCart(state, payload) {
      console.log(state);

      const { productInCartIndex, productData } = payload

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1
        };
        state.items.push(newItem);
      }
      state.qty++;
      state.total += productData.price;
    },
  
    removeProductFromCart(state, payload) {
      const { productInCartIndex } = payload;

      const prodData = state.items[productInCartIndex];
      state.items.splice(productInCartIndex, 1);
      state.qty -= prodData.qty;
      state.total -= prodData.price * prodData.qty;
    }
  },
  
  actions: {
    addProductToCart(context, payload) {
      const productId =  payload.prodId;
      const findProduct = context.rootGetters['prods/findProduct'];
      const product = findProduct(productId);

      const productInCartIndex = context.getters.findProductInCart(productId);

      context.commit('addProductToCart', {
        productInCartIndex,
        productData: product
      });
    },
  
    removeProductFromCart(context, payload) {
      const productInCartIndex = context.getters.findProductInCart(payload.prodId);
      context.commit('removeProductFromCart', {
        productInCartIndex
      });
    }
  },

  getters: {
    items(state) {
      return state.items;
    },

    quantity(state) {
      return state.qty;
    },

    total(state) {
      return state.total;
    },
  
    findProductInCart(state) {
      return (prodId) => {
        return state.items.findIndex((ci) => ci.productId === prodId);
      };
    }
  }
};