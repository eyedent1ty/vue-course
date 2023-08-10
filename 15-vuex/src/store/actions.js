export default {
  login(context) {
    context.commit('setIsLoggedIn', { isAuth: true });
  },
  logout(context) {
    context.commit('setIsLoggedIn', { isAuth: false });
  }
};
