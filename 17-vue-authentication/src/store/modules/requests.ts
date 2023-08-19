import { Module } from 'vuex';

import { RequestsState, RootState } from '@/global/types';

const API_LINK =
  'https://find-a-coach-project-fd7f4-default-rtdb.firebaseio.com/requests';

const requestModule: Module<RequestsState, RootState> = {
  namespaced: true,
  state() {
    return {
      requests: []
    };
  },
  mutations: {
    addRequest(state, payload) {
      state.requests.push(payload);
    },
    setRequests(state, newRequests) {
      state.requests = newRequests;
    }
  },
  actions: {
    async addRequest(context, payload) {
      const coachId = payload.coachId;

      const newRequest = {
        userEmail: payload.email,
        message: payload.message,
        id: null,
        coachId: null
      };

      const response = await fetch(`${API_LINK}/${coachId}.json`, {
        method: 'POST',
        body: JSON.stringify(newRequest)
      });

      // In POST requests in firebase, it returns an object which consists a unique id of the entry
      const responseData = await response.json();

      newRequest.id = responseData.name;
      newRequest.coachId = coachId;

      if (!response.ok) {
        // error
      }

      context.commit('addRequest', newRequest);
    },
    async loadRequests(context) {
      const userId = context.rootGetters.userId;
      const token = context.rootGetters.token;

      const response = await fetch(`${API_LINK}/${userId}.json?auth=${token}`);
      const responseData = (await response.json()) || {};

      if (!response.ok) {
        const error = new Error(
          responseData.message || 'Failed to fetch requests.'
        );
        throw error;
      }

      const requests: Array<Request> = [];

      Object.keys(responseData).forEach((requestId) => {
        const request = {
          id: requestId,
          ...responseData[requestId]
        };
        requests.push(request);
      });
      context.commit('setRequests', requests);
    }
  },
  getters: {
    requests(state) {
      return state.requests;
    },
    hasRequests(_, getters) {
      return getters.requests && getters.requests.length > 0;
    }
  }
};

export default requestModule;
