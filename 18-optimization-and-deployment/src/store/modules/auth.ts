import type { ActionContext, Module } from 'vuex';

import {
  AuthenticationCredentials,
  AuthenticationState,
  RootState
} from '@/global/types';

let timer: number;

const authModule: Module<AuthenticationState, RootState> = {
  state() {
    return {
      userId: null,
      token: null,
      didAutoLogout: false
    };
  },
  mutations: {
    setUser(state, user: AuthenticationState): void {
      state.token = user.token;
      state.userId = user.userId;
    },
    setAutoLogout(state): void {
      state.didAutoLogout = true;
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

      // Converting seconds to milliseconds
      const expiresIn = Number(responseData.expiresIn) * 1000;
      const tokenExpiration = new Date().getTime() + expiresIn;

      timer = setTimeout(() => {
        context.dispatch('autoLogout');
      }, expiresIn);

      localStorage.setItem('token', responseData.idToken);
      localStorage.setItem('userId', responseData.localId);
      localStorage.setItem('tokenExpiration', String(tokenExpiration));

      return context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId
      });
    },

    tryLogin(context: ActionContext<AuthenticationState, RootState>) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const tokenExpiration = Number(localStorage.getItem('tokenExpiration'));

      const currentTime = new Date().getTime();
      const expirationTime = tokenExpiration - currentTime;

      if (expirationTime > 0) {
        timer = setTimeout(() => {
          context.dispatch('autoLogout');
        }, expirationTime);
      }

      if (token && userId) {
        context.commit('setUser', {
          token,
          userId
        });
      }
    },

    logout(context: ActionContext<AuthenticationState, RootState>): void {
      context.commit('setUser', {
        token: null,
        userId: null
      });

      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('tokenExpiration');
    },

    autoLogout(context: ActionContext<AuthenticationState, RootState>): void {
      context.dispatch('logout');
      clearTimeout(timer);
      context.commit('setAutoLogout');
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
    },
    didAutoLogout(state): boolean {
      return state.didAutoLogout;
    }
  }
};

export default authModule;
