import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const app = createApp(App);

const store = createStore({
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    addOne(state) {
      state.counter++;
    },
    increaseCounter(state, payload) {
      state.counter += payload.value;
    }
  },
  actions: {
    addOne(context) {
      context.commit('addOne');
    },
    increaseCounter(context, payload) {
      console.log(context);
 
      setTimeout(() => {
        context.commit('increaseCounter', payload);
      }, 2000);
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;

      if (finalCounter < 0) {
        return 0;
      }

      if (finalCounter > 100) {
        return 100;
      }

      return finalCounter
    }
  }
});

app.use(store);

app.mount('#app');
