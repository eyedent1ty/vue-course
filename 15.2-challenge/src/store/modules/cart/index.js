import cartMutations from './mutations.js';
import cartActions from './actions.js';
import cartGetters from './getters.js';

const cartModule = {
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  mutations: cartMutations,
  actions: cartActions,
  getters: cartGetters
};

export default cartModule;