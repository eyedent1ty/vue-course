export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        // {
        //   id: 'c1',
        //   firstName: 'Maximilian',
        //   lastName: 'Schwarzmüller',
        //   areas: ['frontend', 'backend', 'career'],
        //   description:
        //     "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
        //   hourlyRate: 30
        // },
        // {
        //   id: 'c2',
        //   firstName: 'Julie',
        //   lastName: 'Jones',
        //   areas: ['frontend', 'career'],
        //   description:
        //     'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
        //   hourlyRate: 30
        // }
      ]
    };
  },
  mutations: {
    registerCoach(state, newCoach) {
      state.coaches.push(newCoach);
    },
    setCoaches(state, newCoaches) {
      state.coaches = newCoaches;
    }
  },
  actions: {
    async registerCoach(context, coachData) {
      const userId = context.rootGetters.userId;

      const response = await fetch(
        `https://find-a-coach-project-fd7f4-default-rtdb.firebaseio.com/coaches/${userId}.json`,
        {
          method: 'PUT',
          body: JSON.stringify(coachData)
        }
      );

      if (!response.ok) {
        // error...
      }

      context.commit('registerCoach', {
        ...coachData,
        id: userId
      });
    },
    async loadCoaches(context) {
      const response = await fetch(
        'https://find-a-coach-project-fd7f4-default-rtdb.firebaseio.com/coaches.json'
      );

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to fetch coaches.');
        throw error;
      }

      const coaches = [];

      Object.keys(responseData).forEach((id) => {
        coaches.push({
          id,
          ...responseData[id]
        });
      });

      context.commit('setCoaches', coaches);
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
      return function (id) {
        return state.coaches.find((coach) => coach.id === id);
      };
    },
    isCoach(_, getters, _2, rootGetters) {
      const userId = rootGetters.userId;
      return getters.coaches.some((coach) => coach.id === userId);
    }
  }
};
