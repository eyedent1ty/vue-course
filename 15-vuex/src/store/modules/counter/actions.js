export default {
  addOne(context) {
    context.commit('addOne');
  },
  increaseCounter(context, payload) {
    setTimeout(() => {
      context.commit('increaseCounter', payload);
    }, 2000);
  }
};