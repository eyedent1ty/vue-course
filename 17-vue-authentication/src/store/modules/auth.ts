import { Module } from 'vuex';

import { AuthenticationState, RootState } from '@/global/types';

const authModule: Module<AuthenticationState, RootState> = {
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null
    };
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.tokenExpiration = payload.tokenExpiration;
    }
  },
  actions: {
    login() {},

    async signup(context, payload) {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBNSJUvssaJF2eIFUKZBwOqEiS6k4zdkSg',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true
          })
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        console.log(response);
        const error = new Error(
          responseData.message || 'Failed to authenticate'
        );
        throw error;
      }

      console.log(response);
      console.log(responseData);

      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn
      });
    }
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
};

export default authModule;
