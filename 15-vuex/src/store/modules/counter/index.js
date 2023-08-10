import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

const counterModule = {
  namespaced: true,
  // States that is defined in a module is a local state
  state() {
    return {
      counter: 0
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters
};

export default counterModule;