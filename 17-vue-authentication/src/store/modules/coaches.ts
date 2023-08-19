import { Module } from 'vuex';

import { Coach, CoachesState, RootState } from '../../global/types';

const API_LINK =
  'https://find-a-coach-project-fd7f4-default-rtdb.firebaseio.com/coaches';

const coachesModule: Module<CoachesState, RootState> = {
  namespaced: true,
  state() {
    return {
      coaches: [],
      lastFetchTimestamp: null
    };
  },
  mutations: {
    registerCoach(state, newCoach: Coach) {
      state.coaches.push(newCoach);
    },
    setCoaches(state, newCoaches) {
      state.coaches = newCoaches;
    },
    setLastFetchTimestamp(state, newLastFetchTimestamp) {
      state.lastFetchTimestamp = newLastFetchTimestamp;
    }
  },
  actions: {
    async registerCoach(context, coachData) {
      const userId = context.rootGetters.userId;
      const token = context.rootGetters.token;

      const response = await fetch(`${API_LINK}/${userId}.json?auth=${token}`, {
        method: 'PUT',
        body: JSON.stringify(coachData)
      });

      if (!response.ok) {
        // error...
      }

      context.commit('registerCoach', {
        ...coachData,
        id: userId
      });
    },
    async loadCoaches(context, payload) {
      if (!payload.forceRefresh && !context.getters.shouldUpdate) {
        return;
      }

      const response = await fetch(`${API_LINK}.json`);

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(
          responseData.message || 'Failed to fetch coaches.'
        );
        throw error;
      }

      const coaches: Array<Coach> = [];

      Object.keys(responseData).forEach((id) => {
        coaches.push({
          id,
          ...responseData[id]
        });
      });

      context.commit('setCoaches', coaches);
      const currentTimestamp = new Date().getTime();
      context.commit('setLastFetchTimestamp', currentTimestamp);
    }
  },
  getters: {
    coaches(state) {
      return state.coaches;
    },
    hasCoaches(state) {
      // Checks if the value of the state coaches is truthy then checks whether it has coaches
      return state.coaches && state.coaches.length > 0;
    },
    findCoach(state) {
      return function (id: string) {
        return state.coaches.find((coach: Coach) => coach.id === id);
      };
    },
    isCoach(_, getters, _2, rootGetters) {
      const userId = rootGetters.userId;
      return getters.coaches.some((coach: Coach) => coach.id === userId);
    },
    shouldUpdate(state) {
      if (state.lastFetchTimestamp === null) {
        return true;
      }

      const currentTimestamp = new Date().getTime();
      return (currentTimestamp - state.lastFetchTimestamp) / 1000 > 60;
    }
  }
};

export default coachesModule;
