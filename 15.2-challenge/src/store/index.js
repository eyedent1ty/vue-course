import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

import productsModule from './modules/products/index.js';
import cartModule from './modules/cart/index.js';

const store = createStore({
  modules: {
    products: productsModule,
    cart: cartModule
  },
  state() {
    return {
      isLoggedIn: false
    }
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
});

export default store;