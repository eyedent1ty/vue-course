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
    incrementCounter(state) {
      state.counter++;
    },
    increaseCounter(state, payload) {
      state.counter += payload.value;
    }
  }
});

app.use(store);

app.mount('#app');
