export default {
  addOne(state) {
    state.counter++;
  },
  increaseCounter(state, payload) {
    state.counter += payload.value;
  }
};
