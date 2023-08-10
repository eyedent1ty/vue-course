export default {
  setIsLoggedIn(state, payload) {
    state.isLoggedIn = payload.isAuth;
  }
};
