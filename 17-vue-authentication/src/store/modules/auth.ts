import { Module } from 'vuex';

import { AuthenticationCredentials, AuthenticationState, RootState } from '@/global/types';

const authModule: Module<AuthenticationState, RootState> = {
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null
    };
  },
  mutations: {
    setUser(state, user: AuthenticationState) {
      state.token = user.token;
      state.userId = user.userId;
      state.tokenExpiration = user.tokenExpiration;
    }
  },
  actions: {
    async login(context, credentials: AuthenticationCredentials) {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBNSJUvssaJF2eIFUKZBwOqEiS6k4zdkSg',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
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

      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn
      });
    },

    async signup(context, credentials: AuthenticationCredentials) {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBNSJUvssaJF2eIFUKZBwOqEiS6k4zdkSg',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
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
    },
    token(state) {
      return state.token;
    }
  }
};

export default authModule;
