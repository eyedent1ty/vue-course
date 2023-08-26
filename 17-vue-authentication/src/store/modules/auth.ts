import type { ActionContext, Module } from 'vuex';

import {
  AuthenticationCredentials,
  AuthenticationState,
  RootState
} from '@/global/types';

const authModule: Module<AuthenticationState, RootState> = {
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null
    };
  },
  mutations: {
    setUser(state, user: AuthenticationState): void {
      state.token = user.token;
      state.userId = user.userId;
      state.tokenExpiration = user.tokenExpiration;
    }
  },
  actions: {
    async login(
      context: ActionContext<AuthenticationState, RootState>,
      credentials: AuthenticationCredentials
    ): Promise<void> {
      context.dispatch('auth', {
        ...credentials,
        mode: 'login'
      });
    },

    async signup(
      context: ActionContext<AuthenticationState, RootState>,
      credentials: AuthenticationCredentials
    ): Promise<void> {
      context.dispatch('auth', {
        ...credentials,
        mode: 'signup'
      });
    },

    async auth(
      context: ActionContext<AuthenticationState, RootState>,
      payload: { email: string; password: string; mode: string }
    ): Promise<void> {
      const mode = payload.mode;
      let url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBNSJUvssaJF2eIFUKZBwOqEiS6k4zdkSg';

      if (mode === 'signup') {
        url =
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBNSJUvssaJF2eIFUKZBwOqEiS6k4zdkSg';
      }

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      });

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(
          responseData.message || 'Failed to authenticate'
        );
        throw error;
      }

      localStorage.setItem('token', responseData.idToken);
      localStorage.setItem('userId', responseData.localId);

      return context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn
      });
    },

    logout(context: ActionContext<AuthenticationState, RootState>): void {
      context.commit('setUser', {
        token: null,
        userId: null,
        tokenExpiration: null
      });

      localStorage.clear();
    },

    tryLogin(context: ActionContext<AuthenticationState, RootState>) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      if (token && userId) {
        context.commit('setUser', {
          token,
          userId,
          tokenExpiration: null
        });
      }
    }
  },
  getters: {
    userId(state): string | null {
      return state.userId;
    },
    token(state): string | null {
      return state.token;
    },
    isAuthenticated(state): boolean {
      return !!state.token;
    }
  }
};

export default authModule;
