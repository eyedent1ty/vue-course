import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const app = createApp(App);

const counterModule = {
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
};

const store = createStore({
  modules: {
    numbers: counterModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: {
    setIsLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    }
  },
  actions: {
    login(context) {
      context.commit('setIsLoggedIn', true);
    },
    logout(context) {
      context.commit('setIsLoggedIn', false)
    }
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    }
  }
});

app.use(store);

app.mount('#app');
