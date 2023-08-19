import { createStore } from 'vuex';
import { Store } from 'vuex';

import { RootState } from '../global/types';

import coachesModule from './modules/coaches';
import requestsModule from './modules/requests';
import authModule from './modules/auth';

const store: Store<RootState> = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    auth: authModule
  }
});

export default store;
